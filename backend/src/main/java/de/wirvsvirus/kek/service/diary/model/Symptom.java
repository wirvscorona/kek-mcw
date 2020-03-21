package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "All details about a symptom.")
public class Symptom {

    public enum Type {
        NUMERICAL, STRING
    };

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Type symptomType;

    public static Symptom toDomainObject(SymptomDTO dto) {
        Symptom.Type type = Symptom.Type.NUMERICAL;
        switch (dto.getSymptomType()) {
            case NUMERICAL:
                type = Symptom.Type.NUMERICAL;
                break;

            case STRING:
                type = Symptom.Type.STRING;
                break;
        }

        return new Symptom(null, dto.getName(), type);
    }

    public SymptomDTO toDTO() {
        SymptomDTO.Type type = SymptomDTO.Type.NUMERICAL;

        switch (this.getSymptomType()) {
            case NUMERICAL:
                type = SymptomDTO.Type.NUMERICAL;
                break;

            case STRING:
                type = SymptomDTO.Type.STRING;
                break;
        }

        return new SymptomDTO(this.name, type);
    }
}