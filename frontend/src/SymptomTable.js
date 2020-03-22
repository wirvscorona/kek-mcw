import React from 'react';
import { Table } from 'react-bootstrap';

const symptomMockUp = [
    {"id":1,"name":"Fieber","symptomType":"NUMERICAL"},{"id":2,"name":"trockener Husten","symptomType":"STRING"},{"id":3,"name":"Durchfall","symptomType":"STRING"},{"id":4,"name":"Laufende Nase","symptomType":"STRING"},{"id":5,"name":"Atembeschwerden","symptomType":"STRING"},{"id":6,"name":"Halsschmerzen","symptomType":"STRING"}
]

const onCheckChange = (e, props) => {
    const isChecked = e.target.checked;
    if (isChecked) {
        console.log("Checked");
    } else {
        console.log("Not checked");
    }
}

const SymptomTableRowElement = props => {

    const symptom = props.symptom;
    
    const id = symptom.id;
    const name = symptom.name;
    const symptomType = symptom.symptomType;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td className='table-checkbox'>
                <input type='checkbox' onChange={ e => onCheckChange(e, props) }/>
            </td>
        </tr>
    )
}

const SymptomTable = props => {
    console.log(props)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Symptom ID</th>
                    <th>Symptom Name</th>
                    <th>Show Marker</th>
                </tr>
            </thead>
            <tbody>
                {props.symptoms.map(symptom => {
                    const symptomBundle = {...props, symptom};
                    return (<SymptomTableRowElement {...symptomBundle}/>);
                })}
            </tbody>
        </Table>
    )
}

export default SymptomTable;