package uz.rootec.appjeweleryserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.rootec.appjeweleryserver.entity.PageData;

import java.util.UUID;

/**
 * Created by Sherlock on 06.01.2022.
 */
public interface PageDataRepository extends JpaRepository<PageData,UUID> {

}
