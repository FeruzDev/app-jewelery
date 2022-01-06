package uz.rootec.appjeweleryserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.rootec.appjeweleryserver.entity.Logo;
import uz.rootec.appjeweleryserver.projection.CustomLogo;

import java.util.List;
import java.util.UUID;

/**
 * Created by Sherlock on 06.01.2022.
 */
public interface LogoRepository extends JpaRepository<Logo, UUID> {
    List<CustomLogo> findAllByOrderByCreatedAtDesc();
}
