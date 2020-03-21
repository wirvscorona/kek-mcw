package de.wirvsvirus.kek.service.locations.model.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlaceVisit {

    private int centerLatE7;
    private int centerLngE7;
    private Duration duration;
    private Location location;

}
