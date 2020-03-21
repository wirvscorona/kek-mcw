package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Entity
@Data
@ApiModel(description = "All details about a symptom.")
public class Symptom {

    @Id
    private String name;

    private double value;
}