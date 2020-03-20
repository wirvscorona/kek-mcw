package de.wirvsvirus.kek.service.locations.model;

public class PlaceVisitModel {
    int centerLatE7;
    int centerLngE7;
    long startTimestampMs;
    long endTimestampMs;
    String user;

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

    public long getStartTimestampMs() {
        return startTimestampMs;
    }

    public void setStartTimestampMs(long startTimestampMs) {
        this.startTimestampMs = startTimestampMs;
    }

    public long getEndTimestampMs() {
        return endTimestampMs;
    }

    public void setEndTimestampMs(long endTimestampMs) {
        this.endTimestampMs = endTimestampMs;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
