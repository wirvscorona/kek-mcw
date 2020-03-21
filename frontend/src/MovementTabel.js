import React from 'react';
import { Table } from 'react-bootstrap';
import './MovementTable.css';

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
    },
    {
        markerId: 8,
        lat: 49.006,
        lng: 8.393
    },
    {
        markerId: 9,
        lat: 49.006,
        lng: 8.383
    },
    {
        markerId: 10,
        lat: 49.006,
        lng: 8.373
    }
]

const onCheckChange = (e, props) => {
    const isChecked = e.target.checked;
    const marker = props.marker;
    if (isChecked) {
        props.addMarker(marker.markerId)
    } else {
        props.removeMarker(marker.markerId)
    }
}

const TableRowElement = props => {

    const marker = props.marker;
    const id = marker.markerId;
    const lat = marker.lat;
    const lng = marker.lng;

    return (
        <tr>
            <td>{id}</td>
            <td>{lat}</td>
            <td>{lng}</td>
            <td className='table-checkbox'>
                <input type='checkbox' onChange={ e => onCheckChange(e, props) }/>
            </td>
        </tr>
    )
}

const MovementTable = props => {
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Marker ID</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Show Marker</th>
                </tr>
            </thead>
            <tbody>
                {markerMockUp.map(marker => {
                    const markerBundle = {...props, marker}
                    return (<TableRowElement {...markerBundle}/>)
                })}
            </tbody>
        </Table>
    )

}


export default MovementTable;