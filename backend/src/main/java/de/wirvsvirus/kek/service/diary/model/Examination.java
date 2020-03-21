package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.util.*;

@Entity
@Data
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
}