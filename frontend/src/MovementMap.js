import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './MovementMap.css'


const MovementMap = props => (
    <div className='collision' id='map'>
        <Map
          className='collision-map'
          google={props.google}
          zoom={13}
          initialCenter={{ lat: 49.006, lng: 8.403 }}
        >
            
            <Marker position={{ lat: 49.006, lng: 8.403 }} />
            <Marker text={'servus'} position={{ lat: 49.006, lng: 8.413 }} />
        </Map>
    </div>
)

export default GoogleApiWrapper({ apiKey: 'AIzaSyD2BFWRom0XvQjkjvS6l6X5lbUS6JO3HpY' })(MovementMap);

