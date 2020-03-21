import React from 'react';
import { Table, InputGroup } from 'react-bootstrap';
import './MovementTable.css';

const TableRowElement = props => {
    return (
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td className='table-checkbox'><input type='checkbox'/></td>
        </tr>
    )
}

const MovementTable = _ => (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Show Marker</th>
            </tr>
        </thead>
        <tbody>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
            <TableRowElement/>
        </tbody>
    </Table>
)

export default MovementTable;