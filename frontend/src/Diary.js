import React, { Component } from 'react'
import DiaryTableEntry from './DiaryEntry'
import PersonalInformation from './PersonalInformation'
import ContactPerson from './ContactPerson'
import InfectCheck from './InfectCheck'
import FurtherSteps from './FurtherSteps'
import UploadMovementButton from './UploadMovementButton'
import './styles/main.css';

import { DiaryControllerApi, SymptomControllerApi } from '@invi7x/api_documentation';


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

    patientHasSymptoms() {
        let symptoms = false
        this.state.entries.forEach(e => {
            if (e.fever > 0 || e.cough > 0 || e.soreThroat > 0 || e.shortnessOfBreath > 0 || e.otherSymptoms !== '') {
                symptoms = true
                return true
            }
        })
        return symptoms
    }

    getDates() {
        let dates = []
        this.state.entries.forEach(e => {
            dates.push(e.date.toDateString())
        })
        return dates
    }


    isValidated() {
        this.props.callback(this.state.entries)
        this.props.updateStore({ symptoms: this.patientHasSymptoms(), dates: this.getDates() })
    }

    addEntryForm() {
        this.setState({ numChilds: this.state.numChilds + 1 })
    }


    entryCallback(entry, index) {
        if (this.state.entries[index]) {
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
                <h3>Kontaktagebuch</h3>
                <hr />
                <p>Der erste Eintrag ist der Tag an dem Sie den ersten Kontakt mit einer infizierten Person bzw. infektiösem Material hatten.</p>
                <p>Füllen Sie für jeden seitdem vergangen Tag eine Zeile der Tabelle aus.</p>
                <p>Sie müssen keine weiteren Zeilen ausfüllen wenn 14 Tage seit dem letzten Kontakt mit einer infizierten Person bzw. infektiösem Material vergangen sind.</p>
                <hr />
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
        if (this.state.contacts[index]) {
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
                        getStore={this.props.getStore}
                    />
                </div>)
        }

        return (
            <div>
                <h3>Kontakpersonen</h3>
                <hr />
                {this.props.getStore().symptoms &&
                    <div>
                        <p>Sie haben angegeben selbst Krankheitssymptome gezeigt zu haben.
                        Bitte nennen Sie die Personen mit denen Sie an den entsprechenden Tagen Kontakt hatten.
                        Geben Sie bitte deren Kontaktdaten, sowie die Tage an denen Sie Kontakt hatten an.</p>
                        <hr />
                    </div>}
                {!this.props.getStore().symptoms &&
                    <div>
                        <div>
                            Da Sie angegeben haben keine Symptome bis 14 Tage nach dem letzten potentiell infektiösen Kontakt gehabt zu haben, müssen Sie keine Kontakpersonen angeben.
                    </div>
                        <div>
                            SARS-CoV-2 kann sich jedeoach auch übertragen ohne Symptomatik auszulösen.
                    </div>
                        <div>
                            Geben Sie Personen an mit denen Sie in den letzten Tagen häufigen und engen Kontakt hatten (z.B. Familienmitglieder, Freunde oder Arbeitskollegen)
                    </div>
                        <hr />

                    </div>

                }
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
                    <Row>
                        <Col lg={9}>
                            Wenn Sie uns Ihre Google Maps Bewegungsdaten zur Verfügung stellen, können wir mögliche weiter Kontaktpersonen feststellen und benachrichtigen.
                            </Col>
                    </Row>
                    <Row>
                        <Col lg={9}>
                        </Col>
                        <Col lg={2}>
                            <UploadMovementButton />
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
            infectCheck: []
        }

        this.sampleStore = {
            symptoms: false,
            dates: []
        };


        this.prepareJson = this.prepareJson.bind(this)
        this.state.wizard = [
            { name: 'Persönliche Informationen', component: <PersonalInformation passInfo={this.personalInfoCallback.bind(this)} /> },
            { name: 'Kontakttagebuch', component: <DiaryEntries callback={this.diaryEntryCallback.bind(this)} getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
            { name: 'Kontaktpersonen', component: <ContactPersons callback={this.contactsCallback.bind(this)} getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
            { name: 'Atemwegsinfekt', component: <InfectCheck callback={this.infectCallback.bind(this)} /> },
            { name: 'Fertig', component: <FurtherSteps callback={this.finishedCallback.bind(this)} /> }
        ]
    }

    getStore() {
        return this.sampleStore;
    }

    updateStore(update) {
        this.sampleStore = {
            ...this.sampleStore,
            ...update,
        }
    }

    async infectCallback(infectData) {
        await this.setState({ infectCheck: infectData }, () => {
            console.log(this.state)
        })
    }

    finishedCallback() {
        this.saveDiary()
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

    prepareJson() {
        const cured = this.state.infectCheck.infectHealed
        let json_contacts = []
        let contacts = []
        
    }

    async saveDiary(callback) {
        let apiInstance = new DiaryControllerApi();

        const jsonData= {
            "contacts": [
              {
                "contactWith": "string",
                "customSymptom": "string",
                "customSymptomPresent": true,
                "date": "2020-03-22T08:23:13.362Z",
                "description": "string",
                "examination": {
                  "city": "string",
                  "dateOfExamination": "2020-03-22T08:23:13.362Z",
                  "latitudeE7": 0,
                  "longitudeE7": 0,
                  "streetname": "string",
                  "symptomDescription": [
                    "string"
                  ],
                  "symptomsID": [
                    0
                  ],
                  "zipCode": "string"
                }
              }
            ],
            "cured": true,
            "userId": 0
          }
        const result = await apiInstance.saveDiaryUsingPOST(jsonData, (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
                // callback(data)
                return data
            }
        });
    
        console.log(result)
    }
}

export default Diary