import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MovementTable from './MovementTable';
import './MovementMap.css'
import UploadMovementButton from './UploadMovementButton';
import UploadInfectedButton from './UploadInfectedButton';
import markerMockUp from './MarkerMockUp'

fetch('http://localhost:8081/api/symptoms?search=e')
  .then((response) => {
      return (response.json())
}).then((data) => {
    console.log(data);
  });


const generateSelectedMarker = (selectedMarkerList, markerList) => {
    var markerComponentList = []; 
    selectedMarkerList.forEach(markerId => {
        markerList.forEach(markerElement => {
            if (markerId === markerElement.index) {
                markerComponentList.push(markerElement)
            }
        })
    });
    return markerComponentList;
}

const correctE7Values = markerList => {
    return markerList.filter(marker => {
        return marker.latitudeE7 !== 0 && marker.longitudeE7 !== 0;
    }).map((marker, index) => {
        marker.index = index;
        marker.latitude = Number(marker.latitudeE7 + "E-7");
        marker.longitude = Number(marker.longitudeE7 + "E-7");
        return marker;
    });
}

const MovementMap = props => {

    const [ markerList, setMarkerList ] = useState([]);
    const [ selectedMarkerList, setSelectedMarkerList ] = useState([]);

    const setNewMarkerList = newMarkerList => {
        newMarkerList = correctE7Values(newMarkerList)
        setMarkerList(newMarkerList);
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
    const markerComponentList = generateSelectedMarker(selectedMarkerList, markerList)

    return (
        <div className='movement-container'>
            <div className='movement-buttons'>
                <UploadMovementButton setNewMarkerList={setNewMarkerList}/>
                <UploadInfectedButton/>
            </div>
            <div className='movement-information'>
                <div className='movement-table'>
                    <MovementTable {...markerBundle}/>
                </div>
                <div>
                    <Map
                    className='collision-map'
                    google={props.google}
                    zoom={12}
                    initialCenter={{ lat: 49.006, lng: 8.403 }}
                    >   
                    {markerComponentList.map(marker => {
                        const index = marker.index
                        const lat = marker.latitude;
                        const long = marker.longitude;
                        const position = { lat: lat, lng: long }
                        return (<Marker index={index} position={position} />)
                    })}
                    </Map> 
                </div>
            </div>
        </div>
    )
}


export default GoogleApiWrapper({ apiKey: 'AIzaSyD2BFWRom0XvQjkjvS6l6X5lbUS6JO3HpY' })(MovementMap);

