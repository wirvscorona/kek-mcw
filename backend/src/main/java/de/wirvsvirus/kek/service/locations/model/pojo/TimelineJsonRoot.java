package de.wirvsvirus.kek.service.locations.model.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimelineJsonRoot {
    private List<TimeLineObject> timelineObjects;
}
