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

@Entity
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

    public ContactEntry(Long id, Date date, List<Kind> kinds, boolean hasUnlistedKind, String unlistedKindDescription,
            List<Protection> protection, List<Symptom> symptoms, boolean hasCustomSymptom, String customSymptom,
            String contactWith) {
        this.id = id;
        this.date = date;
        this.kinds = kinds;
        this.hasUnlistedKind = hasUnlistedKind;
        this.unlistedKindDescription = unlistedKindDescription;
        this.protection = protection;
        this.symptoms = symptoms;
        this.hasCustomSymptom = hasCustomSymptom;
        this.customSymptom = customSymptom;
        this.contactWith = contactWith;
    }

    public Long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public List<Kind> getKinds() {
        return kinds;
    }

    public boolean hasUnlistedKind() {
        return hasUnlistedKind;
    }

    public String getUnlistedKindDescription() {
        return unlistedKindDescription;
    }

    public List<Protection> getProtection() {
        return protection;
    }

    public List<Symptom> getSymptoms() {
        return symptoms;
    }

    public boolean hasCustomSymptom() {
        return hasCustomSymptom;
    }

    public String getCustomSymptom() {
        return customSymptom;
    }

    public String getContactWith() {
        return contactWith;
    }
}