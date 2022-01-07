package uz.rootec.appjeweleryserver.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uz.rootec.appjeweleryserver.entity.template.AbstractEntity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

/**
 * Created by Sherlock on 06.01.2022.
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Logo extends AbstractEntity {
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Attachment photo;

    private String link;
}
