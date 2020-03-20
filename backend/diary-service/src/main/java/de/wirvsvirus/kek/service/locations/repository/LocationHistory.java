package de.wirvsvirus.kek.service.locations.repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LocationHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long latitude;
    private long longitude;
    private long timestamp;
    private long duration;
    private long updateTimestamp;

    private LocationHistory() {
    }

    public LocationHistory(long latitude, long longitude, long timestamp, long duration, long updateTimestamp) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.timestamp = timestamp;
        this.duration = duration;
        this.updateTimestamp = updateTimestamp;
    }

    @Override
    public String toString() {
        return "LocationHistory{" +
                "id=" + id +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", timestamp=" + timestamp +
                ", duration=" + duration +
                ", updateTimestamp=" + updateTimestamp +
                '}';
    }
}
