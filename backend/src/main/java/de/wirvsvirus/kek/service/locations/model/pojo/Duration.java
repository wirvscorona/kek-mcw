package de.wirvsvirus.kek.service.locations.model.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Duration {
    private long startTimestampMs;
    private long endTimestampMs;
}
