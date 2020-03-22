import React from 'react'
import Creatable from 'react-select/creatable';


const infoOptions = [
    { value: 'AP', label: 'ärztliches Personal' },
    { value: 'P', label: 'Pflegepersonal' },
    { value: 'L', label: 'Laborpersonal' },
    { value: 'F', label: 'Familienmitglied' },
    { value: 'Flug', label: 'Passagier im selben Flugzeug wie Patient:in' }
]

class PersonalInformation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infos: null,
            isValid: false
        };
        this.handleInfoChange = this.handleInfoChange.bind(this);
        this.isValidated = this.isValidated.bind(this)
    }

    isValidated() {
        this.props.passInfo(this.state.infos)
        return true
        //return this.state.infos
    }

    handleInfoChange(newInfos) {
        this.setState({ 
            infos: newInfos,
            isValid: newInfos
         });
    }

    render() {
        return (
            <div className="mx-4 my-4">
                <h3>Risikogruppe</h3>
                <hr/>
                <div>Bitte nennen Sie uns zu welchen Risikogruppen Sie gehören.</div>
                <hr/>
                <Creatable
                    options={infoOptions}
                    onChange={this.handleInfoChange}
                    isMulti={true}
                    placeholder="Ich gehöre zur Gruppe..."
                />
                <p className="text-sm text-muted">Andere Optionen können durch Eingabe hinzgefügt werden.</p>
            </div>
        );
    }
}


export default PersonalInformation;

