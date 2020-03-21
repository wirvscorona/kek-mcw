package de.wirvsvirus.kek.service.locations.model.pojo;

public class PlaceVisit {

    public Duration getDuration() {
        return duration;
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
    }

    public int getCenterLatE7() {
        return centerLatE7;
    }

    public void setCenterLatE7(int centerLatE7) {
        this.centerLatE7 = centerLatE7;
    }

    public int getCenterLngE7() {
        return centerLngE7;
    }

    public void setCenterLngE7(int centerLngE7) {
        this.centerLngE7 = centerLngE7;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    int centerLatE7;
    int centerLngE7;
    Duration duration;
    Location location;

}
