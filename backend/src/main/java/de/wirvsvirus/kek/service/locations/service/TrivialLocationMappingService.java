package de.wirvsvirus.kek.service.locations.service;

import de.wirvsvirus.kek.service.locations.model.LocationMatch;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import net.sf.geographiclib.Geodesic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrivialLocationMappingService {
    private LocationHistoryRepository locationHistoryRepository;

    @Autowired
    public TrivialLocationMappingService(LocationHistoryRepository locationHistoryRepository) {
        this.locationHistoryRepository = locationHistoryRepository;
    }

    public List<LocationMatch> computeMatches(List<LocationHistory> locationHistories, long virusPersistenceTime) {
        return locationHistories.stream()
                .filter(locationHistory -> locationHistoryRepository
                        .findFirstByLatitudeAndLongitudeAndStartTimestampLessThanEqualAndEndTimestampGreaterThanEqual(
                                locationHistory.getLatitude(),
                                locationHistory.getLongitude(),
                                locationHistory.getEndTimestamp(),
                                locationHistory.getStartTimestamp() - virusPersistenceTime) != null)
                .map(LocationMatch::fromLocationHistory)
                .collect(Collectors.toList());
    }

    public List<LocationMatch> computeNearbyMatches(List<LocationHistory> locationHistories, long maxDistanceInMeters, long virusPersistenceTime) {
        return locationHistories.stream()
                .filter(locationHistory -> !computeNearbyLocationHistories(
                        locationHistory, maxDistanceInMeters, virusPersistenceTime)
                        .isEmpty())
                .map(LocationMatch::fromLocationHistory)
                .collect(Collectors.toList());
    }

    private Collection<LocationHistory> computeNearbyLocationHistories(LocationHistory locationHistory, long distanceInMeters, long virusPersistenceTime) {
        double latitudeDegrees = convertLatitudeE7ToDegree(locationHistory.getLatitude());
        double longitudeDegrees = convertLongitudeE7ToDegree(locationHistory.getLongitude());

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

        Collection<LocationHistory> possibleLocationMatches = locationHistoryRepository.findAllByLatitudeBetweenAndLongitudeBetweenAndStartTimestampLessThanEqualAndEndTimestampGreaterThanEqual(
                minLatitudeE7, maxLatitudeE7,
                minLongitudeE7, maxLongitudeE7,
                locationHistory.getEndTimestamp(),
                locationHistory.getStartTimestamp() - virusPersistenceTime
        );
        return possibleLocationMatches.stream()
                .filter(matchingLocationHistory -> isWithinRange(locationHistory, matchingLocationHistory, distanceInMeters))
                .collect(Collectors.toList());
    }

    private double convertLatitudeE7ToDegree(long latitudeE7) {
        // Apparently an overflow error in googles location data
        // see https://support.google.com/maps/thread/4595364?hl=en&msgid=4967524
        if (latitudeE7 > 900000000L) latitudeE7 = latitudeE7 - 4294967296L;
        return latitudeE7 / Math.pow(10, 7);
    }


    private double convertLongitudeE7ToDegree(long longitudeE7) {
        // Apparently an overflow error in googles location data
        // see https://support.google.com/maps/thread/4595364?hl=en&msgid=4967524
        if (longitudeE7 > 1800000000L) longitudeE7 = longitudeE7 - 4294967296L;
        return longitudeE7 / Math.pow(10, 7);
    }


    private boolean isWithinRange(LocationHistory first, LocationHistory second, long maxDistanceInMeters) {
        return Geodesic.WGS84.Inverse(
                convertLatitudeE7ToDegree(first.getLatitude()),
                convertLongitudeE7ToDegree(first.getLongitude()),
                convertLatitudeE7ToDegree(second.getLatitude()),
                convertLongitudeE7ToDegree(second.getLongitude())
        ).s12 <= maxDistanceInMeters;
    }
}
