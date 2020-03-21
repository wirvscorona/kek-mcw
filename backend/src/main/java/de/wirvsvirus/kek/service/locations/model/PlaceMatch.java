package de.wirvsvirus.kek.service.locations.model;

import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.Place;
import de.wirvsvirus.kek.service.locations.repository.PlaceVisit;
import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@ApiModel(description = "Describes match between two locations.")
@Data
public class PlaceMatch extends LocationMatch {
    private String placeIdentifier;
    private String placeName;

    public PlaceMatch(Place place, long startTimeMillis, long endTimeMillis) {
        super(place.getLatitude(), place.getLongitude(), startTimeMillis, endTimeMillis);
        this.placeIdentifier = place.getGooglePlaceIdentifier();
        this.placeName = place.getReadableName();
    }

    public static PlaceMatch fromPlaceVisit(PlaceVisit placeVisit) {
        return new PlaceMatch(placeVisit.getPlace(),
                placeVisit.getStartTimestamp(),
                placeVisit.getEndTimestamp()
        );
    }
}
