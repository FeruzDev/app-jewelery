package uz.rootec.appjeweleryserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.rootec.appjeweleryserver.entity.Comment;
import uz.rootec.appjeweleryserver.payload.ApiResponse;
import uz.rootec.appjeweleryserver.payload.ReqComment;
import uz.rootec.appjeweleryserver.projection.CustomJewelery;
import uz.rootec.appjeweleryserver.repository.CommentRepository;
import uz.rootec.appjeweleryserver.repository.JeweleryRepository;

import java.util.List;
import java.util.UUID;

/**
 * Created by Sherlock on 26.11.2021.
 */

@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    CommentRepository commentRepository;

    @Autowired
    JeweleryRepository jeweleryRepository;

    @PostMapping("/add")
    public HttpEntity<?> add(@RequestBody ReqComment reqComment) {
        try {
            commentRepository.save(new Comment(
                    reqComment.getComment(),
                    reqComment.getFullName(),
                    jeweleryRepository.getOne(reqComment.getJewelery())
            ));

            return ResponseEntity.ok(new ApiResponse(true, "success"));

        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @GetMapping("/{serial}")
    public HttpEntity<?> get(@PathVariable String serial){
        try {
            List<Comment> comments = commentRepository.findAllByJewelery_SerialOrderByCreatedAtDesc(serial);
            return ResponseEntity.ok(new ApiResponse(true, "success", comments));
        } catch (Exception e){
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }
}
