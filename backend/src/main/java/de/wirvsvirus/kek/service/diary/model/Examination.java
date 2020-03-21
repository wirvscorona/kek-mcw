package de.wirvsvirus.kek.service.diary.model;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.ElementCollection;
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
@ApiModel(description = "All details about an examination.")
public class Examination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String streetname;
    private String city;
    private String zipCode;

    private long latitudeE7;
    private long longitudeE7;

    private Date dateOfExamination;

    // TODO this should be converted to actual symptom entities in toDomainObject
    // See Diary/ContractEntry for reference
    @ElementCollection
    private List<Long> symptomsID;

    @ElementCollection
    private List<String> symptomDescription;

    public static Examination toDomainObject(ExaminationDTO dto) {
        return new Examination(null, dto.getStreetname(), dto.getCity(), dto.getZipCode(), dto.getLatitudeE7(),
                dto.getLongitudeE7(), dto.getDateOfExamination(), dto.getSymptomsID(), dto.getSymptomDescription());
    }

    public ExaminationDTO toDTO() {
        return new ExaminationDTO(this.getStreetname(), this.getCity(), this.getZipCode(), this.getLatitudeE7(),
                this.getLongitudeE7(), this.getDateOfExamination(), this.getSymptomsID(), this.getSymptomDescription());

    }
}