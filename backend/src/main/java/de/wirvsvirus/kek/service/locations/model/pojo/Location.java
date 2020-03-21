package de.wirvsvirus.kek.service.locations.model.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Location {

    private int latitudeE7;
    private int longitudeE7;
    private String placeId;
    private String address;
    private String name;
    private String readableName;

}
