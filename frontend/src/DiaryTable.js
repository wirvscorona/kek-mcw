import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select'

import {Bootstrap, Table, Row, Col} from 'react-bootstrap';

const contactOptions = [
    { value: 'none', label: 'Kein Kontakt' },
    { value: 'talk', label: 'Gespräch' }
  ]

class DiaryTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            contact: null,
            protection: 'Schutzart eintragen',
            fever: false
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleProtectionChange = this.handleProtectionChange.bind(this);
        this.handleFeverChange = this.handleFeverChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDateChange(date) {
        this.setState({ date: date });
    }

    handleContactChange(contact) {
        console.log('contact', contact.value)
        this.setState({ contact: contact.value });
    }

    handleProtectionChange(event) {
        this.setState({ protection: event.target.value });
    }

    handleFeverChange(event) {
        this.setState({ fever: event.target.checked });
    }

    handleSubmit(event) {
        alert('A date was submitted: ' + this.state.date);
        event.preventDefault();
    }

    render() {
        return (
            <div class="ml-10">
                <Table>
                    <Row>
                        <Col>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleDateChange}
                            className="red-border"
                        />
                        </Col>
                        <Col>
                            <Select 
                                options={contactOptions} 
                                onChange={this.handleContactChange}

                            />
                        </Col>
                   </Row>
                </Table>
            </div >

        );
    }
}


export default DiaryTable;

