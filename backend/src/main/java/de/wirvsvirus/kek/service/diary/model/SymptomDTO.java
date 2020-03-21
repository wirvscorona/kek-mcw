package de.wirvsvirus.kek.service.diary.model;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "All details about a symptom.")
public class SymptomDTO {

    enum Type {
        NUMERICAL, STRING
    };

    private String name;
    private Type symptomType;
}