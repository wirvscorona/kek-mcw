import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'

import { Container, Row, Col } from 'react-bootstrap';

const contactOptions = [
    { value: '0', label: 'Kein Kontakt' },
    { value: 'S', label: 'Mind. 15-minütiger Sprechkontakt' },
    { value: 'P', label: 'Pflegerische/ärztliche Handlung am Patienten' }
]

const protectionOptions = [
    { value: '0', label: 'Kein Schutz' },
    { value: 'M1', label: 'OP-Maske oder FFP1-Maske' },
    { value: 'M2', label: 'FFP2-Maske' }
]

const symptomsOptions = [
    { value: '0', label: 'nein' },
    { value: '1', label: 'ja' },
    { value: '2', label: 'weiß nicht' },
]



class DiaryTableEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            contacts: [],
            protection: [],
            fever: 0,
            feverTemp: -1,
            cough: 0,
            soreThroat: 0,
            shortnessOfBreath: 0,
            otherSymptoms: ''
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleProtectionChange = this.handleProtectionChange.bind(this);
        this.handleFeverChange = this.handleFeverChange.bind(this)
        this.handleFeverTemperatureChange = this.handleFeverTemperatureChange.bind(this)
        this.handleCoughChange = this.handleCoughChange.bind(this)
        this.handleSoreThroathChange = this.handleSoreThroathChange.bind(this)
        this.handleShortnessOfBreathChange = this.handleShortnessOfBreathChange.bind(this)
        this.handleOtherSymptoms = this.handleOtherSymptoms.bind(this)

    }

    getState() {
        return this.state
    }

    handleDateChange(date) {
        this.setState({ date: date });
    }

    handleContactChange(newContacts) {
        this.setState({ contacts: newContacts });
    }

    handleProtectionChange(newProtections) {
        this.setState({ protections: newProtections });
    }

    handleFeverChange(feverValue) {
        this.setState({ fever: feverValue.value });
    }

    handleFeverTemperatureChange(e) {
        this.setState({ feverTemp: e.target.value })
    }

    handleCoughChange(coughValue) {
        this.setState({ cough: coughValue.value })
    }

    handleSoreThroathChange(soreThroatValue) {
        this.setState({ soreThroat: soreThroatValue.value })
    }

    handleShortnessOfBreathChange(shortnessOfBreathValue) {
        this.setState({ shortnessOfBreath: shortnessOfBreathValue.value })
    }

    handleOtherSymptoms(e) {
        this.setState({ otherSymptoms: e.target.value })
    }


    render() {
        return (
            <div className="ml-2 ">
                <Container fluid>
                    <Row>
                        <Col lg={1}>
                            <DatePicker
                                dateFormat="dd.MM.yyyy"
                                selected={this.state.date}
                                onChange={this.handleDateChange}
                            />
                        </Col>
                        <Col lg={2}>
                            <Select
                                options={contactOptions}
                                onChange={this.handleContactChange}
                                isMulti="true"
                                placeholder="Art des Kontakts"
                            />
                        </Col>
                        <Col lg={2}>
                            <Select
                                options={protectionOptions}
                                onChange={this.handleProtectionChange}
                                isMulti="true"
                                placeholder="Art des verwendeten Schutzes"
                            />
                        </Col>
                        <Col>
                            <Container fluid>
                                <Row>
                                    <Col lg={2}>
                                        <Select
                                            options={symptomsOptions}
                                            onChange={this.handleFeverChange}
                                            placeholder="Fieber"
                                        />
                                    </Col>
                                    {(this.state.fever == 1) &&
                                        <Col lg={1}>
                                            <input
                                                className="form-control"
                                                type="number"
                                                step="0.1"
                                                placeholder="37"
                                                min="37"
                                                max="42"
                                                onChange={this.handleFeverTemperatureChange}

                                            />
                                        </Col>
                                    }
                                    <Col lg={2}>
                                        <Select
                                            options={symptomsOptions}
                                            onChange={this.handleCoughChange}
                                            placeholder="Husten"
                                        />
                                    </Col>
                                    <Col lg={2}>
                                        <Select
                                            options={symptomsOptions}
                                            onChange={this.handleSoreThroathChange}
                                            placeholder="Halsschmerzen"
                                        />
                                    </Col>
                                    <Col lg={2}>
                                        <Select
                                            options={symptomsOptions}
                                            onChange={this.handleShortnessOfBreathChange}
                                            placeholder="Kurzatmigkeit"
                                        />
                                    </Col>
                                    <Col lg={3}>
                                        <label className="text-sm text-muted">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Erbrechen, Durchfall, ..."
                                                onChange={this.handleOtherSymptoms}
                                            />
                                        Symptome mit Komma trennen
                                        </label>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    {(this.state.fever > 0
                        || this.state.cough > 0
                        || this.state.soreThroat > 0
                        || this.state.shortnessOfBreath > 0
                        || this.state.otherSymptoms != '')
                        &&
                        <Row>
                            <p>
                                Sie hatten an diesem Tag Krankheitssymptome. Bitte geben Sie die Personen an mit denen Sie an diesem Tag Kontakt hatten.
                            </p>
                        </Row>
                    }
                </Container>
            </div >

        );
    }
}


export default DiaryTableEntry;

