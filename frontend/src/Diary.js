import React, { Component } from 'react'
import DiaryTableEntry from './DiaryEntry'
import PersonalInformation from './PersonalInformation'
import './styles/main.css';

import StepZilla from "react-stepzilla";


import { Container, Row, Col } from 'react-bootstrap';


class DiaryEntries extends Component {
    render() {
        const diaryEntries = []
        let i = 0
        while (i < 14) {
            diaryEntries.push(<div key={i}>< DiaryTableEntry /></div>)
            i++;
        }
        return (
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
        )
    }
}

const steps =
    [
        { name: 'Persönliche Informationen', component: <PersonalInformation /> },
        { name: 'Kontakttagebuch', component: <DiaryEntries /> },
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