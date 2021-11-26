package uz.rootec.appjeweleryserver.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uz.rootec.appjeweleryserver.entity.Jewelery;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.util.UUID;

/**
 * Created by Sherlock on 26.11.2021.
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqComment {
    private String comment;
    private String fullName;
    private UUID jewelery;
}
