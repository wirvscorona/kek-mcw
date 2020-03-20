package de.wirvsvirus.kek.service.locations.repository;

import javax.persistence.*;

@Entity
public class PlaceVisit {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Place place;
    private long timestamp;
    private long duration;

    private PlaceVisit() {
    }

    public PlaceVisit(Place place, long timestamp, long duration) {
        this.place = place;
        this.timestamp = timestamp;
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "PlaceVisit{" +
                "id=" + id +
                ", place=" + place +
                ", timestamp=" + timestamp +
                ", duration=" + duration +
                '}';
    }
}
