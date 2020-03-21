import React, { Component } from 'react'
import DiaryTableEntry from './DiaryEntry'

import { Container, Row, Col } from 'react-bootstrap';


class Diary extends Component {
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

export default Diary