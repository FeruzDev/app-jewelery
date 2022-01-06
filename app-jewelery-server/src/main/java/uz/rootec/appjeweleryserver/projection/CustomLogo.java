package uz.rootec.appjeweleryserver.projection;

import org.springframework.beans.factory.annotation.Value;

import java.util.UUID;

/**
 * Created by Sherlock on 06.01.2022.
 */
public interface CustomLogo {
    UUID getId();

    String getLink();

    @Value("#{target.photo!=null?target.photo.id:null}")
    UUID getPhoto();
}
