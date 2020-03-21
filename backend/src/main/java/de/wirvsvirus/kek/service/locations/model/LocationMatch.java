package de.wirvsvirus.kek.service.locations.model;

import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@ApiModel(description = "Describes match between two locations.")

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LocationMatch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long latitudeE7;
    private long longitudeE7;
    private long startTimeMillis;
    private long endTimeMillis;

    public LocationMatch(long latitudeE7, long longitudeE7, long startTimeMillis, long endTimeMillis) {
        this.latitudeE7 = latitudeE7;
        this.longitudeE7 = longitudeE7;
        this.startTimeMillis = startTimeMillis;
        this.endTimeMillis = endTimeMillis;
    }

    public static LocationMatch fromLocationHistory(LocationHistory locationHistory) {
        return new LocationMatch(locationHistory.getLatitude(),
                locationHistory.getLongitude(),
                locationHistory.getStartTimestamp(),
                locationHistory.getEndTimestamp()
        );
    }

}
