import React from 'react'
import Select from 'react-select'
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const boolOptions = [
    { value: 0, label: 'nein' },
    { value: 1, label: 'ja' }
]

class ContactPerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infect: false,
            xRay: false,
            xRayDate: new Date(),
            xRayResult: '',
            xRayDoctor: '',
            xRayContact: false,
            xRayPhoneNumber: -1,
            nasalPharynxSwab: false,
            nasalPharynxDate: new Date(),
            nasalPharynxResult: '',
            sputumSwab: false,
            sputumDate: new Date(),
            sputumResult: '',
            nasalPharynxSputumDoctor: '',
            nasalPharynxSputumContact: false,
            nasalPharynxSputumNumber: -1,
            infectHealed: false,
            nasalPharynxSwapAllowed: false,
            sputumSwapAllowed: false,
            bloodDrawAllowed: false
        };
        this.handleInfectChange = this.handleInfectChange.bind(this)
        this.handleXRayChange = this.handleXRayChange.bind(this)
        this.handleXRayDateChange = this.handleXRayDateChange.bind(this)
        this.handleXRayResultChange = this.handleXRayResultChange.bind(this)
        this.handleXRayDoctorChange = this.handleXRayDoctorChange.bind(this)
        this.handleXRayContactChange = this.handleXRayContactChange.bind(this)
        this.handlexRayPhoneNumber = this.handlexRayPhoneNumber.bind(this)
        this.handleNasalPharynxSwabChange = this.handleNasalPharynxSwabChange.bind(this)
        this.handleSputumSwabChange = this.handleSputumSwabChange.bind(this)
        this.handleNasalPharynxDateChange = this.handleNasalPharynxDateChange.bind(this)
        this.handleNasalPharynxResultChange = this.handleNasalPharynxResultChange.bind(this)
        this.handleSputumResultChange = this.handleSputumResultChange.bind(this)
        this.handleSputumDateChange = this.handleSputumDateChange.bind(this)
        this.handleNasalPharynxDoctorChange = this.handleNasalPharynxDoctorChange.bind(this)
        this.handleNasalPharynxContactChange = this.handleNasalPharynxContactChange.bind(this)
        this.handleNasalPharynxNumberChange = this.handleNasalPharynxNumberChange.bind(this)

        this.handleInfectHealedChange = this.handleInfectHealedChange.bind(this)
        this.handleNasalPharynxSwapAllowedChange = this.handleNasalPharynxSwapAllowedChange.bind(this)
        this.handleSputumSwapAllowedChange = this.handleSputumSwapAllowedChange.bind(this)
        this.handleBloodDrawAllowedChange = this.handleBloodDrawAllowedChange.bind(this)

    }

    handleInfectChange(infectValue) {
        this.setState({ infect: infectValue.value });
    }

    handleXRayChange(xRayValue) {
        this.setState({ xRay: xRayValue.value })
    }

    handleXRayDateChange(newDate) {
        this.setState({ xRayDate: newDate })
    }

    handleXRayResultChange(e) {
        this.setState({ xRayResult: e.target.value })
    }

    handleXRayDoctorChange(e) {
        this.setState({ xRayDoctor: e.target.value })
    }

    handleXRayContactChange(contactValue) {
        this.setState({ xRayContact: contactValue.value })
    }

    handlexRayPhoneNumber(e) {
        this.setState({ xRayPhoneNumber: e.target.value })
    }

    handleNasalPharynxSwabChange(nasalValue) {
        this.setState({ nasalPharynxSwab: nasalValue.value })
    }

    handleSputumSwabChange(pharynxValue) {
        this.setState({ sputumSwab: pharynxValue.value })
    }

    handleNasalPharynxDateChange(newDate) {
        this.setState({ nasalPharynxDate: newDate })
    }

    handleNasalPharynxResultChange(e) {
        this.setState({ nasalPharynxResult: e.target.value })
    }

    handleSputumDateChange(newDate) {
        this.setState({ sputumDate: newDate })
    }

    handleSputumResultChange(e) {
        this.setState({ sputumResult: e.target.value })
    }

    handleNasalPharynxDoctorChange(e) {
        this.setState({ nasalPharynxSputumDoctor: e.target.value })

    }

    handleNasalPharynxContactChange(contactValue) {
        this.setState({ nasalPharynxSputumContact: contactValue.value })
    }

    handleNasalPharynxNumberChange(e) {
        this.setState({ nasalPharynxSputumNumber: e.target.value })
    }

    handleInfectHealedChange(newValue) {
        this.setState({ infectHealed: newValue.value })
    }

    handleNasalPharynxSwapAllowedChange(newValue) {
        this.setState({ nasalPharynxSwapAllowed: newValue.value })
    }

    handleSputumSwapAllowedChange(newValue) {
        this.setState({ sputumSwapAllowed: newValue.value })
    }

    handleBloodDrawAllowedChange(newValue) {
        this.setState({ bloodDrawAllowed: newValue.value })
    }

    render() {
        return (
            <Container fluid className="mx-2 my-4">
                <Row className="mb-2">
                    <Col lg={4}>
                        Hatten Sie nach dem Kontakt mit dem COVID-19 Fall einen Atemwegsinfekt?
                    </Col>
                    <Col lg={2}>
                        <Select
                            options={boolOptions}
                            onChange={this.handleInfectChange}
                            placeholder="Atemwegsinfekt"
                        />
                    </Col>
                </Row>
                {/* xRay Stuff */}
                {(this.state.infect === 1) &&
                    <Row className="mb-2">
                        <Col lg={4}>
                            Wurde deshalb ein Röntgenbild gemacht?
                    </Col>
                        <Col lg={2}>
                            <Select
                                options={boolOptions}
                                onChange={this.handleXRayChange}
                                placeholder="Röntgenbild"
                            />
                        </Col>
                    </Row>}
                {(this.state.infect === 1)
                    && (this.state.xRay === 1)
                    &&
                    <div>
                        <Row className="mb-2">
                            <Col lg={1}>
                                &nbsp;
                        </Col>
                            <Col lg={3}>
                                Wann wurden die Aufnamen gemacht?
                        </Col>
                            <Col lg={2}>
                                <DatePicker
                                    dateFormat="dd.MM.yyyy"
                                    selected={this.state.xRayDate}
                                    onChange={this.handleXRayDateChange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col lg={1}>
                                &nbsp;
                            </Col>
                            <Col lg={3}>
                                Was war das Ergebnis?
                            </Col>
                            <Col lg={6}>
                                <label className="text-sm text-muted">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Befund"
                                        onChange={this.handleXRayResultChange}
                                    />
                                Befund
                            </label>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col lg={1}>
                                &nbsp;
                            </Col>
                            <Col lg={3}>
                                Wo wurden die Aufnamen gemacht?
                            </Col>
                            <Col lg={6}>
                                <label className="text-sm text-muted">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Dr. Mustermann, 76133 Karlsruhe"
                                        onChange={this.handleXRayDoctorChange}
                                    />
                                Name der Praxis und Ort
                            </label>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col lg={1}>
                                &nbsp;
                        </Col>
                            <Col lg={3}>
                                Dürfen wir mit der Praxis Kontakt aufnehmen?
                        </Col>
                            <Col lg={2}>
                                <Select
                                    options={boolOptions}
                                    onChange={this.handleXRayContactChange}
                                    placeholder="Kontakterlaubnis"
                                />
                            </Col>
                        </Row>
                    </div>
                }
                {(this.state.infect === 1)
                    && (this.state.xRay === 1)
                    && (this.state.xRayContact === 1)
                    &&
                    <div>
                        <Row className="mb-2">
                            <Col lg={1}>
                                &nbsp;
                        </Col>
                            <Col lg={3}>
                                &nbsp;
                        </Col>
                            <Col lg={6}>
                                <label className="text-sm text-muted">
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="07211234567"
                                        onChange={this.handlexRayPhoneNumber}
                                    />
                                Telefonnummer der Praxis
                            </label>
                            </Col>
                        </Row>
                    </div>
                }
                {/* Nasal/Pharynx/Sputum Swab Stuff */}
                {(this.state.infect === 1) &&
                    <div>
                        <Row className="mb-2">
                            <Col lg={4}>
                                Wurde deshalb ein Nasenabstrich gemacht?
                        </Col>
                            <Col lg={2}>
                                <Select
                                    options={boolOptions}
                                    onChange={this.handleNasalPharynxSwabChange}
                                    placeholder="Nasenabstrich"
                                />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col lg={4}>
                                Wurde deshalb eine Sputumprobe genommen?
                        </Col>
                            <Col lg={2}>
                                <Select
                                    options={boolOptions}
                                    onChange={this.handleSputumSwabChange}
                                    placeholder="Sputumprobe"
                                />
                            </Col>
                        </Row>
                    </div>
                }
                {(this.state.infect === 1)
                    && (this.state.nasalPharynxSwab === 1 || this.state.sputumSwab === 1)
                    &&
                    <div>
                        {(this.state.nasalPharynxSwab === 1)
                            &&
                            <div>
                                <Row className="mb-2">
                                    <Col lg={1}>
                                        &nbsp;
                            </Col>
                                    <Col lg={3}>
                                        Wann wurde der Nasen- oder Rachenabstrich gemacht?
                            </Col>
                                    <Col lg={2}>
                                        <DatePicker
                                            dateFormat="dd.MM.yyyy"
                                            selected={this.state.nasalPharynxDate}
                                            onChange={this.handleNasalPharynxDateChange}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col lg={1}>
                                        &nbsp;
                            </Col>
                                    <Col lg={3}>
                                        Was war das Ergebnis?
                            </Col>
                                    <Col lg={6}>
                                        <label className="text-sm text-muted">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Befund"
                                                onChange={this.handleNasalPharynxResultChange}
                                            />
                                Befund
                            </label>
                                    </Col>
                                </Row>
                            </div>
                        }
                        {(this.state.infect === 1)
                            && (this.state.sputumSwab === 1)
                            &&
                            <div>
                                <Row className="mb-2">
                                    <Col lg={1}>
                                        &nbsp;
                            </Col>
                                    <Col lg={3}>
                                        Wann wurde die Sputumprobe genommen?
                            </Col>
                                    <Col lg={2}>
                                        <DatePicker
                                            dateFormat="dd.MM.yyyy"
                                            selected={this.state.sputumDate}
                                            onChange={this.handleSputumDateChange}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col lg={1}>
                                        &nbsp;
                            </Col>
                                    <Col lg={3}>
                                        Was war das Ergebnis?
                            </Col>
                                    <Col lg={6}>
                                        <label className="text-sm text-muted">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Befund"
                                                onChange={this.handleSputumResultChange}
                                            />
                                Befund
                            </label>
                                    </Col>
                                </Row>
                            </div>
                        }
                        <Row className="mb-2">
                            <Col lg={1}>
                                &nbsp;
                            </Col>
                            <Col lg={3}>
                                Wo wurde(n) der/die Abstrich(e) gemacht?
                            </Col>
                            <Col lg={6}>
                                <label className="text-sm text-muted">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Dr. Mustermann, 76133 Karlsruhe"
                                        onChange={this.handleNasalPharynxDoctorChange}
                                    />
                                Name der Praxis und Ort
                            </label>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col lg={1}>
                                &nbsp;
                        </Col>
                            <Col lg={3}>
                                Dürfen wir mit der Praxis Kontakt aufnehmen?
                        </Col>
                            <Col lg={2}>
                                <Select
                                    options={boolOptions}
                                    onChange={this.handleNasalPharynxContactChange}
                                    placeholder="Kontakterlaubnis"
                                />
                            </Col>
                        </Row>
                    </div>
                }
                {(this.state.infect === 1)
                    && (this.state.sputumSwab === 1 || this.state.nasalPharynxSwab === 1)
                    && (this.state.nasalPharynxSputumContact === 1)
                    &&
                    <div>
                        <Row className="mb-2">
                            <Col lg={1}>
                                &nbsp;
                        </Col>
                            <Col lg={3}>
                                &nbsp;
                        </Col>
                            <Col lg={6}>
                                <label className="text-sm text-muted">
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="07211234567"
                                        onChange={this.handleNasalPharynxPhoneNumber}
                                    />
                                Telefonnummer der Praxis
                            </label>
                            </Col>
                        </Row>
                    </div>
                }
                {(this.state.infect === 1) &&
                    <div>
                        <Row className="mb-2">
                            <Col lg={4}>
                                Ist die Atemwegserkrankung ausgeheilt?
                    </Col>
                            <Col lg={2}>
                                <Select
                                    options={boolOptions}
                                    onChange={this.handleInfectHealedChange}
                                    placeholder="ausgeheilt"
                                />
                            </Col>
                        </Row>
                    </div>
                }

                {(this.state.infect === 1) &&
                    <div>
                        <Row className="mb-2">
                            <Col lg={4}>
                                Wären Sie bereit sich einen Abstrich aus dem Nasenrachenraum entnehmen zu lassen?
                             </Col>
                            <Col lg={2}>
                                <Select
                                    options={boolOptions}
                                    onChange={this.handleNasalPharynxSwapAllowedChange}
                                    placeholder="Abstrich"
                                />
                            </Col>
                        </Row>
                    </div>
                }

                {(this.state.infect === 1) &&
                    <div>
                        <Row className="mb-2">
                            <Col lg={4}>
                                Wären Sie bereit eine Sputumprobe abzugeben?
                             </Col>
                            <Col lg={2}>
                                <Select
                                    options={boolOptions}
                                    onChange={this.handleSputumSwapAllowedChange}
                                    placeholder="Sputumprobe"
                                />
                            </Col>
                        </Row>
                    </div>
                }
                {(this.state.infect === 1) &&
                    <div>
                        <Row className="mb-2">
                            <Col lg={4}>
                                Wären Sie bereit sich Blut abnehmen zu lassen?
                             </Col>
                            <Col lg={2}>
                                <Select
                                    options={boolOptions}
                                    onChange={this.handleBloodDrawAllowedChange}
                                    placeholder="Blutprobe"
                                />
                            </Col>
                        </Row>
                    </div>
                }
            </Container>
        );
    }
}

export default ContactPerson;

