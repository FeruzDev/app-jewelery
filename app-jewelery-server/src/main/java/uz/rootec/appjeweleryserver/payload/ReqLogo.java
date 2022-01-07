package uz.rootec.appjeweleryserver.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

/**
 * Created by Sherlock on 06.01.2022.
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqLogo {
    private UUID id;
    private UUID photo;
    private String link;
}
