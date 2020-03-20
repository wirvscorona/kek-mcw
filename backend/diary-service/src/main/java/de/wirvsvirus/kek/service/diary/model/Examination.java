package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import io.swagger.annotations.ApiModel;

import java.util.*;

@Entity
@ApiModel(description = "All details about an examination.")
public class Examination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean isValid = false;
    private Date date;
    private String result;
    private String location;
    private boolean allowsContact;
    private String phoneNumber;

    public Examination() {
        isValid = false;
    }

    public Examination(Date date, String result, String location, boolean allowsContact, String phoneNumber) {
        this.date = date;
        this.result = result;
        this.location = location;
        this.allowsContact = allowsContact;
        this.phoneNumber = phoneNumber;

        this.isValid = true;
    }

    public boolean isValid() {
        return isValid;
    }

    public Date getDate() {
        return date;
    }

    public String getResult() {
        return result;
    }

    public String getLocation() {
        return location;
    }

    public boolean allowsContact() {
        return allowsContact;
    }

    public String phoneNumber() {
        return phoneNumber;
    }
}