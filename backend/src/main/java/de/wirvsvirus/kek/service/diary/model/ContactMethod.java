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
public class ContactMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public enum Type {
        HOME,
        MOBILE,
        EMAIL
    };

    private Type contactMethodType;
    private String detail;


    public static ContactMethod toDomainObject(ContactMethodDTO dto) {
        ContactMethod.Type type = ContactMethod.Type.HOME;

        switch (dto.getContactMethodType()) {
            case HOME:
                type = ContactMethod.Type.HOME;
            break;

            case MOBILE:
                type = ContactMethod.Type.MOBILE;
            break;

            case EMAIL:
                type = ContactMethod.Type.EMAIL;
            break;
        }


        return new ContactMethod(dto.getId(), type, dto.getDetail());
    }

    public ContactMethodDTO toDTO() {
        ContactMethodDTO.Type type = ContactMethodDTO.Type.HOME;

        switch (this.contactMethodType) {
            case HOME:
                type = ContactMethodDTO.Type.HOME;
            break;

            case MOBILE:
                type = ContactMethodDTO.Type.MOBILE;
            break;

            case EMAIL:
                type = ContactMethodDTO.Type.EMAIL;
            break;
        }

        return new ContactMethodDTO(this.getId(), type, this.detail);
    }

}