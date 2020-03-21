package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CorrespondenceDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public enum Type {
        HOME, MOBILE, EMAIL
    };

    private Type contactMethodType;
    private String detail;

    public static CorrespondenceDetails toDomainObject(CorrespondenceDetailsDTO dto) {
        CorrespondenceDetails.Type type = CorrespondenceDetails.Type.HOME;

        switch (dto.getContactMethodType()) {
            case HOME:
                type = CorrespondenceDetails.Type.HOME;
                break;

            case MOBILE:
                type = CorrespondenceDetails.Type.MOBILE;
                break;

            case EMAIL:
                type = CorrespondenceDetails.Type.EMAIL;
                break;
        }

        return new CorrespondenceDetails(dto.getId(), type, dto.getDetail());
    }

    public CorrespondenceDetailsDTO toDTO() {
        CorrespondenceDetailsDTO.Type type = CorrespondenceDetailsDTO.Type.HOME;

        switch (this.contactMethodType) {
            case HOME:
                type = CorrespondenceDetailsDTO.Type.HOME;
                break;

            case MOBILE:
                type = CorrespondenceDetailsDTO.Type.MOBILE;
                break;

            case EMAIL:
                type = CorrespondenceDetailsDTO.Type.EMAIL;
                break;
        }

        return new CorrespondenceDetailsDTO(this.getId(), type, this.detail);
    }

}