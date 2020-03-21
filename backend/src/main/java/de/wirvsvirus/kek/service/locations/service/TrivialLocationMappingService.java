package de.wirvsvirus.kek.service.locations.service;

import de.wirvsvirus.kek.service.locations.model.LocationMatch;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import net.sf.geographiclib.Geodesic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrivialLocationMappingService {

    @Autowired
    LocationHistoryRepository locationHistoryRepository;

    public List<LocationMatch> computeMatches(List<LocationHistory> locationHistories) {
        List<LocationMatch> matches = new ArrayList<>();

        for (LocationHistory locationHistory : locationHistories) {
            Collection<LocationHistory> infectedLocationHistories = locationHistoryRepository
                    .findAllByLatitudeAndLongitude(locationHistory.getLatitude(), locationHistory.getLongitude());
            for (LocationHistory infectedLocationHistory : infectedLocationHistories) {
                LocationMatch match = new LocationMatch(infectedLocationHistory.getLatitude(),
                        infectedLocationHistory.getLongitude(), infectedLocationHistory.getStartTimestamp(),
                        infectedLocationHistory.getEndTimestamp());
                matches.add(match);
            }
        }
        return matches;
    }

    public List<LocationMatch> computeNearbyMatches(List<LocationHistory> locationHistories, long maxDistanceInMeters) {
        List<LocationMatch> matches = new ArrayList<>();

        for (LocationHistory locationHistory : locationHistories) {
            Collection<LocationHistory> infectedLocationHistories = computeNearbyLocationHistories(locationHistory, maxDistanceInMeters);
            for (LocationHistory infectedLocationHistory : infectedLocationHistories) {
                LocationMatch match = new LocationMatch(infectedLocationHistory.getLatitude(),
                        infectedLocationHistory.getLongitude(), infectedLocationHistory.getStartTimestamp(),
                        infectedLocationHistory.getEndTimestamp());
                matches.add(match);
            }
        }
        return matches;
    }

    private Collection<LocationHistory> computeNearbyLocationHistories(LocationHistory locationHistory, long distanceInMeters) {
        long latitudeE7 = locationHistory.getLatitude();
        long longitudeE7 = locationHistory.getLongitude();

        // Apparently an overflow error in googles location data
        // see https://support.google.com/maps/thread/4595364?hl=en&msgid=4967524
        if (latitudeE7 > 900000000L) latitudeE7 = latitudeE7 - 4294967296L;
        if (longitudeE7 > 1800000000L) longitudeE7 = longitudeE7 - 4294967296L;
        double latitudeDegrees = latitudeE7 / Math.pow(10, 7);
        double longitudeDegrees = longitudeE7 / Math.pow(10, 7);

        double firstLongitudeDegreeBorder = Geodesic.WGS84.Direct(latitudeDegrees, longitudeDegrees, -90, distanceInMeters).lon2; // west - minlon
        double secondLongitudeDegreeBorder = Geodesic.WGS84.Direct(latitudeDegrees, longitudeDegrees, 90, distanceInMeters).lon2; // east - maxlon
        double firstLatitudeDegreeBorder = Geodesic.WGS84.Direct(latitudeDegrees, longitudeDegrees, 180, distanceInMeters).lat2; // south - min lat
        double secondLatitudeDegreeBorder = Geodesic.WGS84.Direct(latitudeDegrees, longitudeDegrees, 0, distanceInMeters).lat2; // north - max lat

        double minLongitudeDegree = Math.min(firstLongitudeDegreeBorder, secondLongitudeDegreeBorder);
        double maxLongitudeDegree = Math.max(firstLongitudeDegreeBorder, secondLongitudeDegreeBorder);
        double minLatitudeDegree = Math.min(firstLatitudeDegreeBorder, secondLatitudeDegreeBorder);
        double maxLatitudeDegree = Math.max(firstLatitudeDegreeBorder, secondLatitudeDegreeBorder);

        long minLongitudeE7 = (long) (minLongitudeDegree * Math.pow(10, 7));
        long maxLongitudeE7 = (long) (maxLongitudeDegree * Math.pow(10, 7));
        long minLatitudeE7 = (long) (minLatitudeDegree * Math.pow(10, 7));
        long maxLatitudeE7 = (long) (maxLatitudeDegree * Math.pow(10, 7));

        Collection<LocationHistory> possibleLocationMatches = locationHistoryRepository.findAllByLatitudeBetweenAndLongitudeBetween(minLatitudeE7, maxLatitudeE7, minLongitudeE7, maxLongitudeE7);
        return possibleLocationMatches.stream().filter(matchingLocationHistory -> isWithinRange(locationHistory, matchingLocationHistory, distanceInMeters)).collect(Collectors.toSet());
    }

    private boolean isWithinRange(LocationHistory first, LocationHistory second, long maxDistanceInMeters) {
        return Geodesic.WGS84.Inverse(first.getLatitude(), first.getLongitude(), second.getLatitude(), second.getLongitude()).s12 <= maxDistanceInMeters;
    }
}
