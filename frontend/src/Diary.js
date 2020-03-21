import React, { Component } from 'react'
import DiaryTableEntry from './DiaryEntry'
import PersonalInformation from './PersonalInformation'
import ContactPerson from './ContactPerson'
import InfectCheck from './InfectCheck'
import './styles/main.css';

import StepZilla from "react-stepzilla";


import { Container, Row, Col } from 'react-bootstrap';


class DiaryEntries extends Component {
    render() {
        const diaryEntries = []
        let i = 0
        while (i < 4) {
            diaryEntries.push(<div key={i}>< DiaryTableEntry /></div>)
            i++;
        }
        return (
            <div>
                <p>Der erste Eintrag ist der Tag an dem Sie den ersten Kontakt mit einer infizierten Person bzw. infektiösem Material hatten.</p>
                <p>Füllen Sie für jeden seitdem vergangen Tag eine Zeile der Tabelle aus.</p>
                <p>Sie müssen keine weiteren Zeilen ausfüllen wenn 14 Tage seit dem letzten Kontakt mit einer infizierten Person bzw. infektiösem Material vergangen sind.</p>
                <p>Sie müssen keine weiteren Zeilen ausfüllen wenn 14 Tage seit dem letzten Kontakt mit einer infizierten Person bzw. infektiösem Material vergangen sind.</p>
                <Container fluid>
                    <Row>
                        <Col lg={1}>
                            &nbsp;
                        </Col>
                        <Col lg={2}>
                            &nbsp;
                        </Col>
                        <Col lg={2}>
                            &nbsp;
                        </Col>
                        <Col className="text-center font-bold">
                            Eigene Symptomatik
                        </Col>
                    </Row>
                    <Row className="my-4 font-bold">
                        <Col lg={1}>
                            Datum
                        </Col>
                        <Col lg={2}>
                            Art des Kontakts
                        </Col>
                        <Col lg={2}>
                            Art des verwendeten Schutzes
                        </Col>
                        <Col>
                            <Container>
                                <Row className="text-muted">
                                    <Col lg={2}>
                                        Fieber
                                    </Col>
                                    <Col lg={2}>
                                        Husten
                                    </Col>
                                    <Col lg={2}>
                                        Halsschmerzen
                                    </Col>
                                    <Col lg={2}>
                                        Kurzatmigkeit
                                    </Col>
                                    <Col lg={2}>
                                        Sonstige Symptome
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    {diaryEntries}
                </Container>
            </div>
        )
    }
}

class ContactPersons extends Component {
    render() {
        const persons = []
        let i = 0
        while (i < 4) {
            persons.push(<div key={i}>< ContactPerson /></div>)
            i++;
        }

        return (
            <div>{persons}</div>
        )
    }
}

const steps =
    [
        { name: 'Persönliche Informationen', component: <PersonalInformation /> },
        { name: 'Kontakttagebuch', component: <DiaryEntries /> },
        { name: 'Kontaktpersonen', component: <ContactPersons /> },
        { name: 'Atemwegsinfekt', component: <InfectCheck /> }
    ]


class Diary extends Component {
    render() {
        return (
            <div className="example">
                <div className='step-progress mx-4 my-4'>
                    <StepZilla steps={steps} />
                </div>
            </div>

        )
    }
}

export default Diary