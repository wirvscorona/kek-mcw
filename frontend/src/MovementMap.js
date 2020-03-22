import React, { useState, useEffect } from 'react';
import MovementTable from './MovementTable';
import './MovementMap.css'
import UploadMovementButton from './UploadMovementButton';
import UploadInfectedButton from './UploadInfectedButton';
import { ArrowBarRight } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';


const google = window.google;
const MarkerClusterer = window.MarkerClusterer;

const generateSelectedMarker = (selectedMarkerList, markerList, map) => {
      
    var markerComponentList = []; 
    selectedMarkerList.forEach(selectedMarker => {
        markerList.forEach(markerElement => {
            if (selectedMarker.index === markerElement.index) {
                markerComponentList.push(markerElement)
            }
        })
    });

    var markers = markerComponentList.map(function(marker, i) {

        const index = String(marker.index)
        const lat = marker.latitude;
        const long = marker.longitude;
        const position = { lat: lat, lng: long }
          return new google.maps.Marker({
            position,
            label: index
          });
    });
    return markers;
}

const correctAndFilterValues = markerList => {
    return markerList.filter(marker => {
        return marker.latitudeE7 !== 0 && marker.longitudeE7 !== 0;
    }).map((marker, index) => {
        marker.index = index;
        marker.latitude = Number(marker.latitudeE7 + "E-7");
        marker.longitude = Number(marker.longitudeE7 + "E-7");
        return marker;
    });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: 49.006, lng: 8.403 }
    });

    return map;
    
}
 
const MovementMap = props => {
    // const [ map, setMap ] = useState()
    const [ map, setMap ] = useState();
    const [ markerList, setMarkerList ] = useState([]);
    const [ selectedMarkerList, setSelectedMarkerList ] = useState([]);

    const setNewMarkerList = newMarkerList => {
        newMarkerList = correctAndFilterValues(newMarkerList);
        setMarkerList(newMarkerList);
        setSelectedMarkerList(newMarkerList);
    }

    const addMarker = markerId => {
        const newMarkerList = [...selectedMarkerList, markerId];
        setSelectedMarkerList(newMarkerList);
    };

    const removeMarker = markerId => {
        const newMarkerList = selectedMarkerList.filter(marker => marker !== markerId);
        setSelectedMarkerList(newMarkerList);
    };

    const markerBundle = { markerList, addMarker, removeMarker };
    const googleMarkerList = generateSelectedMarker(selectedMarkerList, markerList, map)

    var markerCluster = new MarkerClusterer(map, googleMarkerList,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    useEffect(() => {
        setMap(initMap());
    },[]);

    return (
        <div className='movement-container'>
            <div className='movement-buttons'>
                <UploadMovementButton setNewMarkerList={setNewMarkerList}/>
                <UploadInfectedButton/>
            </div>
            <div className='movement-information'>
                <div className='movement-sidebar'>
                    <Button variant='secondary' className='movement-arrow-right-button'>
                        <ArrowBarRight size={50} className='movement-arrow-right'/>
                    </Button>

                </div>
                {/* <div className='movement-table'>
                    <MovementTable {...markerBundle}/>
                </div> */}
                <div className='movement-map' id='map'/>
            </div>
        </div>
    )
}


export default MovementMap;

