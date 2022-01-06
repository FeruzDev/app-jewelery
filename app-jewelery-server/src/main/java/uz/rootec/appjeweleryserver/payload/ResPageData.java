package uz.rootec.appjeweleryserver.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by Sherlock on 06.01.2022.
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResPageData {
    private Integer shops;
    private Integer specialists;
    private Long jeweleries;
}
