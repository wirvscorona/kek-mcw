package de.wirvsvirus.kek.service.locations.model.pojo;

public class Location {
    public int getLatitudeE7() {
        return latitudeE7;
    }

    public void setLatitudeE7(int centerLatE7) {
        this.latitudeE7 = latitudeE7;
    }

    public int getLongitudeE7() {
        return longitudeE7;
    }

    public void setLongitudeE7(int longitudeE7) {
        this.longitudeE7 = longitudeE7;
    }

    public String getPlaceId() {
        return placeId;
    }

    public String getAddress() {
        return address;
    }

    public String getName() {
        return name;
    }

    int latitudeE7;
    int longitudeE7;

    public void setPlaceId(String placeId) {
        this.placeId = placeId;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setName(String name) {
        this.name = name;
    }

    String placeId;
    String address;
    String name;
}
