package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CorrespondenceDetails {
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

        return new CorrespondenceDetails(type, dto.getDetail());
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

        return new CorrespondenceDetailsDTO(type, this.detail);
    }

}