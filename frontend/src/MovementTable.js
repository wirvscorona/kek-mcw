import React from 'react';
import { Table } from 'react-bootstrap';
import './MovementTable.css';
import markerMockUp from './MarkerMockUp'

// endTimeMillis: 1577911089000
// latitudeE7: 0
// longitudeE7: 0
// startTimeMillis: 1577903429000

const onCheckChange = (e, props) => {
    const isChecked = e.target.checked;
    const index = props.marker.index;

    if (isChecked) {
        props.addMarker(index)
    } else {
        props.removeMarker(index)
    }
}

const TableRowElement = props => {

    const marker = props.marker;

    // console.log(marker)
    const index = marker.index;
    const lat = marker.latitude;
    const lng = marker.longitude;

    return (
        <tr>
            <td>{index}</td>
            <td>{lat}</td>
            <td>{lng}</td>
            <td className='table-checkbox'>
                <input type='checkbox' onChange={ e => onCheckChange(e, props) }/>
            </td>
        </tr>
    )
}

const MovementTable = props => {
    const markerList = props.markerList;
    console.log(markerList)
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
                {markerList.map((marker) => {
                    const markerBundle = {...props, marker}
                    return (<TableRowElement {...markerBundle}/>)
                })}
            </tbody>
        </Table>
    )
}


export default MovementTable;