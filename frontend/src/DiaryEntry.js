import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import Creatable from 'react-select/creatable';

import { Container, Row, Col } from 'react-bootstrap';

const contactOptions = [
    { value: '0', label: 'Kein Kontakt' },
    { value: 'S', label: 'Mind. 15-minütiger Sprechkontakt' },
    { value: 'P', label: 'Pflegerische/ärztliche Handlung am Patienten' },
    { value: 'Ä', label: 'Ärztliche Handlung am Patienten' },
    { value: 'Aer', label: 'Aerosol-produzierende Maßnahme, z.B. Absaugen, BAL, Intubation, Bronchoskopie' },
    { value: 'Mat', label: 'Handhabung/Kontakt mit möglicherweise infektiösem Material' }
]

const protectionOptions = [
    { value: '0', label: 'Kein Schutz' },
    { value: 'M1', label: 'OP-Maske oder FFP1-Maske' },
    { value: 'M2', label: 'FFP2-Maske' },
    { value: 'M3', label: 'FFP3-Maske' },
    { value: 'K', label: '(Schutz)Kittel' },
    { value: 'H', label: 'Handschuhe' },
    { value: 'S', label: 'Schutzbrille' }
]

const symptomsOptions = [
    { value: 0, label: 'nein' },
    { value: 1, label: 'ja' },
    { value: 2, label: 'weiß nicht' },
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

        this.getState = this.getState.bind(this)

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
        let con = []
        this.state.contacts.forEach(el => {
            if (el.__isNew__) {
                con.push({ value: 'And', label: el.label })
            } else {
                con.push(el)
            }
        })

        this.setState({ contacts: con })

        return this.state
    }

    handleDateChange(newDate) {
        this.setState({ date: newDate }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }

    handleContactChange(newContacts) {
        this.setState({ contacts: newContacts }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }

    handleProtectionChange(newProtections) {
        this.setState({ protections: newProtections }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }

    handleFeverChange(feverValue) {
        this.setState({ fever: feverValue.value }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }

    handleFeverTemperatureChange(e) {
        this.setState({ feverTemp: e.target.value }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }

    handleCoughChange(coughValue) {
        this.setState({ cough: coughValue.value }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }

    handleSoreThroathChange(soreThroatValue) {
        this.setState({ soreThroat: soreThroatValue.value }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }

    handleShortnessOfBreathChange(shortnessOfBreathValue) {
        this.setState({ shortnessOfBreath: shortnessOfBreathValue.value }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }

    handleOtherSymptoms(e) {
        this.setState({ otherSymptoms: e.target.value }, () => {
            this.props.callback(this.getState(), this.props.index)
        })
    }


    render() {
        return (
            <div className="ml-2 ">
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={2}>
                                    <DatePicker
                                        dateFormat="dd.MM.yyyy"
                                        selected={this.state.date}
                                        onChange={this.handleDateChange}
                                    />
                                </Col>
                                <Col lg={6}>
                                    <Creatable
                                        options={contactOptions}
                                        onChange={this.handleContactChange}
                                        isMulti="true"
                                        placeholder="Art des Kontakts"
                                    />
                                    <label className="text-sm text-muted">
                                        Andere Optionen können durch Eingabe hinzgefügt werden.
                                    </label>
                                </Col>
                                <Col lg={4}>
                                    <Select
                                        options={protectionOptions}
                                        onChange={this.handleProtectionChange}
                                        isMulti="true"
                                        placeholder="Art des verwendeten Schutzes"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col lg={2}>
                                    <Select
                                        options={symptomsOptions}
                                        onChange={this.handleFeverChange}
                                        placeholder="Fieber"
                                    />
                                </Col>
                                {(this.state.fever === 1) &&
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
                        </Col>
                    </Row>
                </Container>
            </div >

        );
    }
}


export default DiaryTableEntry;

