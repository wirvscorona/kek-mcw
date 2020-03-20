package de.wirvsvirus.kek.service.diary.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import io.swagger.annotations.ApiModel;

@Entity
@ApiModel(description = "All details about a symptom.")
public class Symptom {

    @Id
    private String name;

    private double value;

    public Symptom(String name, double value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public double getValue() {
        return value;
    }
}