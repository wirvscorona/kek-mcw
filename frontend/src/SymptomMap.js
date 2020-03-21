import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

import './SymptomMap.css'
import SymptomTable from './SymptomTable';

// var heatmapData = [
//     new google.maps.LatLng(37.782, -122.447),
//     new google.maps.LatLng(37.782, -122.445),
//     new google.maps.LatLng(37.782, -122.443),
//     new google.maps.LatLng(37.782, -122.441),
//     new google.maps.LatLng(37.782, -122.439),
//     new google.maps.LatLng(37.782, -122.437),
//     new google.maps.LatLng(37.782, -122.435),
//     new google.maps.LatLng(37.785, -122.447),
//     new google.maps.LatLng(37.785, -122.445),
//     new google.maps.LatLng(37.785, -122.443),
//     new google.maps.LatLng(37.785, -122.441),
//     new google.maps.LatLng(37.785, -122.439),
//     new google.maps.LatLng(37.785, -122.437),
//     new google.maps.LatLng(37.785, -122.435)
//   ];

const google = window.google;

class HeatMap extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    }
  
    constructor(props) {
        super(props)
        this.state = {
        heatmapVisible: true,
            heatmapPoints: [
                    {lat: 59.95, lng: 30.33},
                      {lat: 59.96, lng: 30.32}
                  ]
        }
    }
  
    onMapClick({x, y, lat, lng, event}) {
      if (!this.state.heatmapVisible) {
        return
      }
      
        this.setState({
            heatmapPoints: [ ...this.state.heatmapPoints, {lat, lng}]
        })
      if (this._googleMap !== undefined) {      
        const point = new google.maps.LatLng(lat, lng)
        this._googleMap.heatmap.data.push(point)
      }
    }
  
    toggleHeatMap() {    
      this.setState({
        heatmapVisible: !this.state.heatmapVisible
      }, () => {
        if (this._googleMap !== undefined) {
          this._googleMap.heatmap.setMap(this.state.heatmapVisible ? this._googleMap.map_ : null)
        }      
      })
  
    }
  
    render() {
  
        const apiKey = {key: 'AIzaSyD2BFWRom0XvQjkjvS6l6X5lbUS6JO3HpY'}
        const heatMapData = {
            positions: this.state.heatmapPoints,
          options: {
              radius: 20,
              opacity: 0.6
          }
        }
  
        console.log(this.state)
  
      return (
        <div style={{ height: '100vh', width: '70%' }}>
            <SymptomTable/>
            <GoogleMapReact
                ref={(el) => this._googleMap = el}
                bootstrapURLKeys={apiKey}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                heatmapLibrary={true}
                heatmap={heatMapData}
                onClick={this.onMapClick.bind(this)}
            >
            </GoogleMapReact>
            <button className="toggleButton" onClick={this.toggleHeatMap.bind(this)}>Toggle heatmap</button>
        </div>
      )
    }
  }
  
  export default HeatMap