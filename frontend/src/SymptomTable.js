import React from 'react';
import { Table } from 'react-bootstrap';

const symptomMockUp = [

]

const SymptomTable = props => {
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Symptom</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Show Marker</th>
                </tr>
            </thead>
            <tbody>
                Hallo
            </tbody>
        </Table>
    )
}

export default SymptomTable;