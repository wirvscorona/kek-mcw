package de.wirvsvirus.kek.service.diary.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CorrespondenceDetailsDTO {

    public enum Type {
        HOME, MOBILE, EMAIL
    };

    private Type contactMethodType;
    private String detail;

}