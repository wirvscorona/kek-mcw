import React from 'react'
import { Form, Col, Row } from 'react-bootstrap';
import Select from 'react-select';


class ContactPerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            plz: -1,
            email: '',
            phone: ''
        };

        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleAdress = this.handleAdress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handlePLZ = this.handlePLZ.bind(this)
    }

    handleFirstName(e) {
        this.setState({ firstname: e.target.value }, () => {
            this.props.callback(this.state, this.props.index)
        })
    }

    handleLastName(e) {
        this.setState({ lastname: e.target.value }, () => {
            this.props.callback(this.state, this.props.index)
        })
    }

    handlePhone(e) {
        this.setState({ phone: e.target.value }, () => {
            this.props.callback(this.state, this.props.index)
        })
    }

    handleEmail(e) {
        this.setState({ email: e.target.value }, () => {
            this.props.callback(this.state, this.props.index)
        })
    }

    handleAdress(e) {
        this.setState({ adress: e.target.value }, () => {
            this.props.callback(this.state, this.props.index)
        })
    }

    handlePLZ(e) {
        this.setState({ plz: e.target.value }, () => {
            this.props.callback(this.state, this.props.index)
        })
    }

    handleCity(e) {
        this.setState({ city: e.target.value }, () => {
            this.props.callback(this.state, this.props.index)
        })
    }

    render() {
        const dates = this.props.dates.map(d => ({ value: d, label: d }))
        return (
            <Form>
                <p className="font-bold text-muted">Kontaktperson {this.props.index + 1}</p>
                <Row className="mb-4">
                    <Col lg={1}>
                        &nbsp;
                    </Col>
                    <Col lg={2}>
                        <Form.Label>Vorname</Form.Label>
                        <Form.Control placeholder="Vorname" onChange={this.handleFirstName} />
                    </Col>
                    <Col lg={2}>
                        <Form.Label>Nachname</Form.Label>
                        <Form.Control placeholder="Nachname" onChange={this.handleLastName} />
                    </Col>
                    <Col lg={2}>
                        <Form.Label>Telefonnummer</Form.Label>
                        <Form.Control placeholder="0721 123456" onChange={this.handlePhone} />
                    </Col>
                    <Col lg={4}>
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control type="email" placeholder="E-Mail" onChange={this.handleEmail} />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col lg={1}>
                        &nbsp;
                    </Col>
                    <Col lg={5}>
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control placeholder="Blumenstraße 12" onChange={this.handleAdress} />
                    </Col>
                    <Col lg={1}>
                        <Form.Label>Postleitzahl</Form.Label>
                        <Form.Control type="number" placeholder="76133" onChange={this.handlePLZ} />
                    </Col>
                    <Col lg={4}>
                        <Form.Label>Stadt</Form.Label>
                        <Form.Control placeholder="Karlsruhe" onChange={this.handleCity} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}>
                        &nbsp;
                    </Col>
                    <Col lg={4}>
                        <Select
                            options={dates}
                            onChange={this.handleProtectionChange}
                            isMulti="true"
                            placeholder="Kontakt am..."
                        />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default ContactPerson;

