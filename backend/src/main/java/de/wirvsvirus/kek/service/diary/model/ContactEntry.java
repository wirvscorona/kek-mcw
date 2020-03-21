package de.wirvsvirus.kek.service.diary.model;

import java.util.Date;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Entity
@Data
@ApiModel(description = "All details about a contact entry.")
public class ContactEntry {
    public enum Kind {
        O, S, P, AE, AER, MAT, AND
    }

    public enum Protection {
        O, M1, M2, M3, K, H, S
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date date;

    @ElementCollection
    private List<Kind> kinds;
    private boolean hasUnlistedKind;
    private String unlistedKindDescription;
    @ElementCollection
    private List<Protection> protection;

    @OneToMany()
    private List<Symptom> symptoms;

    private boolean hasCustomSymptom;
    private String customSymptom;
    private String contactWith;
}