package uz.rootec.appjeweleryserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import uz.rootec.appjeweleryserver.entity.*;
import uz.rootec.appjeweleryserver.payload.*;
import uz.rootec.appjeweleryserver.projection.CustomCharacteristic;
import uz.rootec.appjeweleryserver.projection.CustomDiamond;
import uz.rootec.appjeweleryserver.projection.CustomJewelery;
import uz.rootec.appjeweleryserver.repository.*;
import uz.rootec.appjeweleryserver.security.CurrentUser;

import java.util.*;

/**
 * Created by Sherlock on 14.07.2021.
 */
@RestController
@RequestMapping("api/jewelery")
public class JeweleryController {
    @Autowired
    private DiamondRepository diamondRepository;

    @Autowired
    private CharacteristicRepository characteristicRepository;

//    @Autowired
//    private ExpertRepository expertRepository;

    @Autowired
    private JeweleryRepository jeweleryRepository;

    @Autowired
    private UserController userController;

    @Autowired
    private AttachmentRepository attachmentRepository;

    @Autowired
    private PageDataRepository pageDataRepository;

    @Autowired
    private LogoRepository logoRepository;

    @PreAuthorize(value = "hasAnyRole('ROLE_ADMIN')")
    @GetMapping
    public HttpEntity<?> getAll(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer size) {
        return ResponseEntity.ok(new ApiResponse(true, "", jeweleryRepository.findAllByOrderByCreatedAtDesc(PageRequest.of(page, size))));
    }

    @GetMapping("/byExpert/{id}")
    public HttpEntity<?> getAllByExpert(@PathVariable UUID id, @RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer size) {
        return ResponseEntity.ok(new ApiResponse(true, "", jeweleryRepository.findAllByExpertIdOrderByCreatedAtDesc(id, PageRequest.of(page, size))));
    }

    @PostMapping("/saveOrUpdate")
    public HttpEntity<?> saveOrUpdate(@RequestBody ReqJewelery reqJewelery, @CurrentUser User currentUser) {
        try {
            Jewelery jewelery;

            if (reqJewelery.getId() == null) {
                jewelery = new Jewelery();

                String yourValue = "";

                while (yourValue.length() == 0) {
                    Random rand = new Random();
                    yourValue = String.format((Locale) null, //don't want any thousand separators
                            "1%03d%04d%04d%04d",
                            rand.nextInt(1000),
                            rand.nextInt(10000),
                            rand.nextInt(10000),
                            rand.nextInt(10000));
                    if (!jeweleryRepository.findAllBySerial(yourValue).isEmpty()) {
                        yourValue = "";
                    }
                }

                jewelery.setSerial(yourValue);
            } else
                jewelery = jeweleryRepository.getOne(reqJewelery.getId());

            jewelery.setDate(reqJewelery.getDate());
            jewelery.setExpert(currentUser);
            jewelery.setHallMark(reqJewelery.getHallMark());
            jewelery.setMetal(reqJewelery.getMetal());
            jewelery.setName(reqJewelery.getName());
            jewelery.setTotalWeight(reqJewelery.getTotalWeight());
            jewelery.setComment(reqJewelery.getComment());

            if (reqJewelery.getPhoto() != null)
                jewelery.setPhoto(attachmentRepository.getOne(reqJewelery.getPhoto()));

            jeweleryRepository.save(jewelery);

            List<ReqDiamond> diamonds = reqJewelery.getDiamonds();

            List<UUID> diamondsId = new ArrayList<>();

            for (ReqDiamond diamond : diamonds) {
                List<ReqCharacteristic> characteristics = diamond.getCharacteristics();
                Diamond newDiamond;
                if (diamond.getId() == null) {
                    newDiamond = new Diamond(
                            diamond.getDiamond(),
                            jewelery
                    );
                } else {
                    newDiamond = diamondRepository.findById(diamond.getId()).orElseThrow(() -> new Exception("Diamond Not Found"));
                    newDiamond.setDiamond(diamond.getDiamond());
                    newDiamond.setJewelery(jewelery);
                }

                Diamond savedDiamond = diamondRepository.save(newDiamond);
                diamondsId.add(savedDiamond.getId());

                List<UUID> characteristicsId = new ArrayList<>();
                if (characteristics != null) {

                    for (ReqCharacteristic characteristic : characteristics) {
                        if (characteristic.getId() == null) {
                            Characteristic newCharacteristic = new Characteristic(
                                    characteristic.getName(),
                                    characteristic.getValueOne(),
                                    characteristic.getValueTwo(),
                                    newDiamond
                            );
                            Characteristic savedCharacteristics = characteristicRepository.save(newCharacteristic);
                            characteristicsId.add(savedCharacteristics.getId());
                        } else {
                            Characteristic characteristic_not_found = characteristicRepository.findById(characteristic.getId()).orElseThrow(() -> new Exception("Characteristic not found"));
                            characteristic_not_found.setDiamond(newDiamond);
                            characteristic_not_found.setName(characteristic.getName());
                            characteristic_not_found.setValueOne(characteristic.getValueOne());
                            characteristic_not_found.setValueTwo(characteristic.getValueTwo());

                            Characteristic save = characteristicRepository.save(characteristic_not_found);
                            characteristicsId.add(save.getId());
                        }
                    }
                }
                if (reqJewelery.getId() != null && diamond.getId() != null) {
                    List<CustomCharacteristic> all = characteristicRepository.findAllByDiamondId(diamond.getId());
                    for (CustomCharacteristic customCharacteristic : all) {
                        if (!characteristicsId.contains(customCharacteristic.getId())) {
                            characteristicRepository.deleteById(customCharacteristic.getId());
                        }
                    }
                }
            }

            if (reqJewelery.getId() != null) {
                List<CustomDiamond> all = diamondRepository.findAllByJeweleryId(reqJewelery.getId());
                for (CustomDiamond customDiamond : all) {
                    if (!diamondsId.contains(customDiamond.getId())) {
                        diamondRepository.deleteById(customDiamond.getId());
                    }
                }
            }

            if (reqJewelery.getId() != null) {
                return ResponseEntity.ok(new ApiResponse(true, "O'zgartirildi"));
            } else {
                return ResponseEntity.ok(new ApiResponse(true, "Qo'shildi"));
            }

        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteJewelery(@PathVariable UUID id) {
        try {
            List<CustomDiamond> diamonds = diamondRepository.findAllByJeweleryId(id);

            for (CustomDiamond diamond : diamonds) {
                List<CustomCharacteristic> characteristics = characteristicRepository.findAllByDiamondId(diamond.getId());

                for (CustomCharacteristic characteristic : characteristics) {
                    characteristicRepository.deleteById(characteristic.getId());
                }

                diamondRepository.deleteById(diamond.getId());
            }

            jeweleryRepository.deleteById(id);
            return ResponseEntity.ok(new ApiResponse(true, "Удалено"));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @GetMapping("/check/{serial}")
    public HttpEntity<?> checkJewelery(@PathVariable String serial) {
        try {
            CustomJewelery bySerial = jeweleryRepository.findBySerial(serial);
            return ResponseEntity.ok(new ApiResponse(true, "success", bySerial));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @GetMapping("/data")
    public HttpEntity<?> getData() {
        try {
            PageData pageData = pageDataRepository.findAll().get(0);
            long count = jeweleryRepository.count();

            return ResponseEntity.ok(new ApiResponse(true, "success", new ResPageData(pageData.getShops(), pageData.getSpecialists(), count)));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @PostMapping("/data")
    public HttpEntity<?> changePageData(@RequestBody ReqPageData reqPageData) {
        try {
            PageData pageData = pageDataRepository.findAll().get(0);
            pageData.setShops(reqPageData.getShops());
            pageData.setSpecialists(reqPageData.getSpecialists());
            pageDataRepository.save(pageData);
            return ResponseEntity.ok(new ApiResponse(true, "O'zgartirildi"));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @GetMapping("/logo")
    public HttpEntity<?> getLogos() {
        try {
            return ResponseEntity.ok(new ApiResponse(true, "success", logoRepository.findAllByOrderByCreatedAtDesc()));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @PostMapping("/logo")
    public HttpEntity<?> createLogo(@RequestBody ReqLogo reqLogo) {
        try {
            Logo logo;

            if (reqLogo.getId() != null)
                logo = logoRepository.getOne(reqLogo.getId());
            else
                logo = new Logo();

            logo.setPhoto(attachmentRepository.getOne(reqLogo.getPhoto()));
            logo.setLink(reqLogo.getLink());

            logoRepository.save(logo);

            if (reqLogo.getId() != null) {
                return ResponseEntity.ok(new ApiResponse(true, "O'zgartirildi"));
            } else {
                return ResponseEntity.ok(new ApiResponse(true, "Qo'shildi"));
            }
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @DeleteMapping("/logo/{id}")
    public HttpEntity<?> deleteLogo(@PathVariable UUID id) {
        try {
            logoRepository.deleteById(id);
            return ResponseEntity.ok(new ApiResponse(true, "Удалено"));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }
}
