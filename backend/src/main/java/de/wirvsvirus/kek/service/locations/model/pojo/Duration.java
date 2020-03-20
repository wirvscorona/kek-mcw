package de.wirvsvirus.kek.service.locations.model.pojo;

public class Duration {
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

    long startTimestampMs;
    long endTimestampMs;
}
