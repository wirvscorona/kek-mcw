package de.wirvsvirus.kek.service.locations.model.pojo;

import java.util.List;

public class TimelineJsonRoot {
    public List<TimeLineObject> getTimelineObjects() {
        return timelineObjects;
    }

    public void setTimelineObjects(List<TimeLineObject> timelineObjects) {
        this.timelineObjects = timelineObjects;
    }

    List<TimeLineObject> timelineObjects;
}
