package de.wirvsvirus.kek.service.locations.repository;

import javax.persistence.*;

@Entity
public class PlaceVisit {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private Place place;
    private long startTimestamp;
    private long endTimestamp;
    private long updateTimestamp;

    private PlaceVisit() {
    }

    public PlaceVisit(Place place, long startTimestamp, long endTimestamp, long updateTimestamp) {
        this.place = place;
        this.startTimestamp = startTimestamp;
        this.endTimestamp = endTimestamp;
        this.updateTimestamp = updateTimestamp;
    }

    @Override
    public String toString() {
        return "PlaceVisit{" +
                "id=" + id +
                ", place=" + place +
                ", startTimestamp=" + startTimestamp +
                ", endTimestamp=" + endTimestamp +
                ", updateTimestamp=" + updateTimestamp +
                '}';
    }
}
