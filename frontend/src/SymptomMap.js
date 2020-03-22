import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import { SymptomControllerApi, ExaminationControllerApi } from '@invi7x/api_documentation';

import './SymptomMap.css'
import SymptomTable from './SymptomTable';

const google = window.google;

class HeatMap extends Component {

    static defaultProps = {
      center: {
        lat: 49.006,
        lng: 8.403
      },
      zoom: 12
    }
  
    constructor(props) {
        super(props)
        this.state = {
            heatmapVisible: true,
            heatmapPoints: [],
            symptoms: [],
            checkedSymptoms: new Set([])
        }
        this.checkedSymptomsChanged = this.checkedSymptomsChanged.bind(this);
    }

    componentDidMount() {
        let apiInstance = new SymptomControllerApi();
        let opts = {
            'search': '' // String | The name of the symptom (or part of it) that should be searched
        };
        apiInstance.findSymptomsUsingGET(opts, (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
                this.setState({symptoms: data})
            }
        });
        
    }
  
    onMapClick({x, y, lat, lng, event}) {
      if (!this.state.heatmapVisible) {
        return
      }
      
        this.setState({
            heatmapPoints: [...this.state.heatmapPoints, {lat, lng}]
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

    checkedSymptomsChanged(checkedSymptoms) {
        if (checkedSymptoms.size === 0) {
            console.log("No symptom checked");
            this.setState({ heatmapPoints: [] })
            return;
        }
        let apiInstance = new ExaminationControllerApi();
        let opts = {
            'containssymptoms': Array.from(checkedSymptoms) // [Number] | A comma seperated list of symptom ids that should be searched for
        };
        apiInstance.findExaminationsUsingGET(opts, (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                const updatedData = data.filter(examination => {
                    return examination.latitudeE7 !== 0 && examination.longitudeE7 !== 0;
                }).map(examination => {
                    examination.latitude = Number(examination.latitudeE7 + "E-7");
                    examination.longitude = Number(examination.longitudeE7 + "E-7");
                    return examination;
                })

                console.log(updatedData)
                const newCoords = updatedData.map(examination => {
                    return ({
                        lat: examination.latitude, 
                        lng: examination.longitude})
                });
                console.log(newCoords);
                // this.setState({ heatmapPoints: newCoords })
                var heatmapdata = [];
                var heatmap = new google.maps.visualization.HeatmapLayer({
                    data: heatmapdata,
                });
                heatmap.setMap(this._googleMap.heatmap); 
                if (this._googleMap !== undefined) {   
                    newCoords.map(coords => {
                        const point = new google.maps.LatLng(coords.lat, coords.lng)
                        this._googleMap.heatmap.data.push(point)
                    })   
                }
            }
        });
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
  
      return (
        <div style={{ height: '100vh', width: '100%' }} className='symptom-container'>
            <SymptomTable symptoms={this.state.symptoms} checkedSymptomsChanged={this.checkedSymptomsChanged} checkedSymptoms={this.state.checkedSymptoms}/>
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
        </div>
      )
    }
  }
  
  export default HeatMap