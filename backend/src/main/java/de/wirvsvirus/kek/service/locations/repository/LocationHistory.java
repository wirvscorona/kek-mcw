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
    private long startTimestamp;
    private long endTimestamp;
    private long updateTimestamp;

    private LocationHistory() {
    }
    public LocationHistory(long latitude, long longitude, long startTimestamp, long endTimestamp, long updateTimestamp) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.startTimestamp = startTimestamp;
        this.endTimestamp = endTimestamp;
        this.updateTimestamp = updateTimestamp;
    }

    public long getId() {
        return id;
    }

    public long getLatitude() {
        return latitude;
    }

    public long getLongitude() {
        return longitude;
    }

    public long getStartTimestamp() {
        return startTimestamp;
    }

    public long getEndTimestamp() {
        return endTimestamp;
    }

    public long getUpdateTimestamp() {
        return updateTimestamp;
    }

    @Override
    public String toString() {
        return "LocationHistory{" +
                "id=" + id +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", startTimestamp=" + startTimestamp +
                ", endTimestamp=" + endTimestamp +
                ", updateTimestamp=" + updateTimestamp +
                '}';
    }
}
