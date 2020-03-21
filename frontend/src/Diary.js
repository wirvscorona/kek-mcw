import React, { Component } from 'react'
import DiaryTableEntry from './DiaryEntry'
import PersonalInformation from './PersonalInformation'
import ContactPerson from './ContactPerson'
import InfectCheck from './InfectCheck'
import './styles/main.css';

import StepZilla from "react-stepzilla";


import { Container, Row, Col, Button } from 'react-bootstrap';


class DiaryEntries extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numChilds: 1,
            entries: []
        }

        this.addEntryForm = this.addEntryForm.bind(this)
        this.entryCallback = this.entryCallback.bind(this)
    }
    
    isValidated() {
        this.props.callback(this.state.entries)
    }

    addEntryForm() {
        this.setState({ numChilds: this.state.numChilds + 1 })
    }


    entryCallback(entry, index) {
        if(this.state.entries[index]) {
            let ens = this.state.entries
            ens[index] = entry
            this.setState({ entries: ens }, () => {
            })
        } else {
            this.setState({ entries: [... this.state.entries, entry] }) 
        }  

    }

    render() {
        const diaryEntries = []
        let i = 0
        for (let i = 0; i < this.state.numChilds; i++) {
            diaryEntries.push(
                <div key={i}>
                    < DiaryTableEntry
                        className="mb-4"
                        callback={this.entryCallback}
                        index={i}
                    />
                </div>)
        }
        return (
            <div>
                <p>Der erste Eintrag ist der Tag an dem Sie den ersten Kontakt mit einer infizierten Person bzw. infektiösem Material hatten.</p>
                <p>Füllen Sie für jeden seitdem vergangen Tag eine Zeile der Tabelle aus.</p>
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

                    <Row>
                        <Col lg={6}>
                            <Row className="my-4 font-bold">
                                <Col lg={2}>
                                    Datum
                                </Col>
                                <Col lg={6}>
                                    Art des Kontakts
                                </Col>
                                <Col lg={4}>
                                    Art des verwendeten Schutzes
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
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
                        </Col>
                    </Row>

                    {diaryEntries}

                    <Row>
                        <Col lg={11}>
                            &nbsp;
                        </Col>
                        <Col lg={1}>
                            <Button onClick={this.addEntryForm}>+</Button>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

class ContactPersons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numChilds: 1,
            contacts: []
        }

        this.addPersonForm = this.addPersonForm.bind(this)
        this.contactPersonCallback = this.contactPersonCallback.bind(this)
    }

    isValidated() {
        this.props.callback(this.state.contacts)
    }

    addPersonForm() {
        this.setState({ numChilds: this.state.numChilds + 1 })
    }
    

    contactPersonCallback(contact, index) {
        if(this.state.contacts[index]) {
            let cons = this.state.contacts
            cons[index] = contact
            this.setState({ contacts: cons }, () => {
            })
        } else {
            this.setState({ contacts: [... this.state.contacts, contact] }) 
        }  

    }

    render() {
        let persons = []
        for (let i = 0; i < this.state.numChilds; i++) {
            persons.push(
                <div key={i}>
                    < ContactPerson
                        className="mb-4"
                        callback={this.contactPersonCallback}
                        index={i}
                        dates={this.props.dates}
                    />
                </div>)
        }

        return (
            <div>
                <p>Sie haben angegeben selbst Krankheitssymptome gezeigt zu haben.
                    Bitte nennen Sie die Personen mit denen Sie an den entsprechenden Tagen Kontakt hatten.
                    Geben Sie bitte deren Kontaktdaten, sowie die Tage an denen Sie Kontakt hatten an.</p>
                <div>{persons}</div>
                <Container fluid>
                    <Row>
                        <Col lg={11}>
                            &nbsp;
                        </Col>
                        <Col lg={1}>
                            <Button onClick={this.addPersonForm}>+</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
class Diary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            personalInformation: [],
            diaryEntries: [],
            contactPersons: [],
            infectCheck: [],
            wizard: [
                { name: 'Persönliche Informationen', component: <PersonalInformation passInfo={this.personalInfoCallback.bind(this)} /> },
                { name: 'Kontakttagebuch', component: <DiaryEntries callback={this.diaryEntryCallback.bind(this)} /> },
                { name: 'Kontaktpersonen', component: <ContactPersons callback={this.contactsCallback.bind(this)} dates={this.contactDates()}/> },
                { name: 'Atemwegsinfekt', component: <InfectCheck callback={this.infectCallback.bind(this)}/> },
                { name: 'Atemwegsinfekt', component: <InfectCheck callback={this.infectCallback.bind(this)}/> }
            ]
        }

    }

    infectCallback(infectData) {
        this.setState({ infectCheck: infectData }, () => {
            console.log(this.state)
        })
        
    }

    contactDates() {
        const dates = [new Date('December 17, 1995 03:24:00'), new Date('1996-12-17T03:24:00')]
        return dates.map(d => d.toDateString())
    }

    personalInfoCallback(personalInfoData) {
        this.setState({ personalInformation: personalInfoData })
    }

    diaryEntryCallback(entries) {
        this.setState({ diaryEntries: entries })
    }

    contactsCallback(contacts) {
        this.setState({ contactPersons: contacts })
    }


    render() {
        return (
            <div className="example">
                <div className='step-progress mx-4 my-4'>
                    <StepZilla
                        steps={this.state.wizard}
                        preventEnterSubmission={true}
                        nextButtonText="Weiter"
                        backButtonText="Zurück"
                    />
                </div>
            </div>

        )
    }
}

export default Diary