package de.wirvsvirus.kek.service.locations.repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Place {
    @Id
    private String googlePlaceIdentifier;
    private long latitude;
    private long longitude;
    private String readableName;

    private Place() {
    }

    public Place(long latitude, long longitude, String readableName, String googlePlaceIdentifier) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.readableName = readableName;
        this.googlePlaceIdentifier = googlePlaceIdentifier;
    }

    @Override
    public String toString() {
        return "Place{" +
                "googlePlaceIdentifier='" + googlePlaceIdentifier + '\'' +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", readableName='" + readableName + '\'' +
                '}';
    }
}
