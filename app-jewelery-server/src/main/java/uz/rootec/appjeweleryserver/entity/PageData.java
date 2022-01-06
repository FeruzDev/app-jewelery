package uz.rootec.appjeweleryserver.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uz.rootec.appjeweleryserver.entity.template.AbstractEntity;

import javax.persistence.Entity;

/**
 * Created by Sherlock on 06.01.2022.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PageData extends AbstractEntity {
    private Integer shops;
    private Integer specialists;
}
