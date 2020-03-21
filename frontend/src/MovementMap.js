import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MovementTabel from './MovementTabel';
import './MovementMap.css'

const markerMockUp = [
    {
        markerId: 0,
        lat: 49.006,
        lng: 8.403
    },
    {
        markerId: 1,
        lat: 49.006,
        lng: 8.413
    },
    {
        markerId: 2,
        lat: 49.006,
        lng: 8.423
    },
    {
        markerId: 3,
        lat: 49.006,
        lng: 8.433
    },
    {
        markerId: 4,
        lat: 49.006,
        lng: 8.443
    },
    {
        markerId: 5,
        lat: 49.006,
        lng: 8.453
    },
    {
        markerId: 6,
        lat: 49.006,
        lng: 8.463
    },
    {
        markerId: 7,
        lat: 49.006,
        lng: 8.473
    }
]


const SelectedMarker = markerList => {
    var markerComponentList = []; 
    markerList.forEach(markerId => {
        markerMockUp.forEach(markerElement => {
            if (markerId == markerElement.markerId) {
                markerComponentList.push(markerElement)
            }
        })
    });
    console.log(markerComponentList)
    return markerComponentList;
}

const MovementMap = props => {

    const [ markerList, setMarkerList ] = useState([0, 1]);

    const addMarker = markerId => {
        const newMarkerList = [...markerList, markerId];
        setMarkerList(newMarkerList);
    };

    const removeMarker = markerId => {
        const newMarkerList = [...markerList];
        setMarkerList(newMarkerList);
    };

    const markerBundle = { addMarker, removeMarker };
    const markerComponentList = SelectedMarker(markerList)

    return (
        <div className='collision'>
            <div className='movement-table'>
                <MovementTabel {...markerBundle}/>
            </div>
            <div>
                <Map
                className='collision-map'
                google={props.google}
                zoom={13}
                initialCenter={{ lat: 49.006, lng: 8.403 }}
                >   
                {markerComponentList.map(marker => {
                    const markerId = marker.markerId
                    const lat = marker.lat;
                    const long = marker.lng;
                    const position = { lat: lat, lng: long }
                    console.log(typeof long)
                    return (<Marker markerId={markerId} position={position} />)
                })}
                </Map> 
            </div>
        </div>
    )
}
    

export default GoogleApiWrapper({ apiKey: 'AIzaSyD2BFWRom0XvQjkjvS6l6X5lbUS6JO3HpY' })(MovementMap);

