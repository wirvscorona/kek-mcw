import React from 'react';
import { Table } from 'react-bootstrap';

const onCheckChange = (e, props) => {
    const isChecked = e.target.checked;
    const index = props.symptom.id;
    if (isChecked) {
        props.checkedSymptoms.add(index);

    } else {
        props.checkedSymptoms.delete(index);
    }
    props.checkedSymptomsChanged(props.checkedSymptoms);
}

const SymptomTableRowElement = props => {

    const symptom = props.symptom; 
    
    const id = symptom.id;
    const name = symptom.name;

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