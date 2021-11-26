package uz.rootec.appjeweleryserver.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import uz.rootec.appjeweleryserver.entity.Comment;
import uz.rootec.appjeweleryserver.entity.Jewelery;

import java.util.List;
import java.util.UUID;

/**
 * Created by Sherlock on 26.11.2021.
 */
public interface CommentRepository extends JpaRepository<Comment, UUID> {
    List<Comment> findAllByJewelery_SerialOrderByCreatedAtDesc(String serial);
}
