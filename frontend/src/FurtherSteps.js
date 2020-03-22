import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

class FurtherSteps extends React.Component {

    render() {
        return (
            <div className="mb-4">
                <h3>
                    Vielen Dank für Ihre Hilfe!
                </h3>
                <hr />
                <Container fluid>
                    <Row>
                        <Col>
                            Bitte führen Sie dieses Tagebuch fort, falls noch keine 14 Tage seit dem letzen Kontakt mit infizierten Personen oder Material vergangen sind.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button onClick={this.props.callback()} href="/">
                            Daten absenden
                        </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FurtherSteps;

