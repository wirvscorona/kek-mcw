import React from 'react'
import Creatable from 'react-select/creatable';


const infoOptions = [
    { value: 'AP', label: 'ärztliches Personal' },
    { value: 'P', label: 'Pflegepersonal' },
    { value: 'L', label: 'Laborpersonal' },
    { value: 'F', label: 'Famileinmitglied' },
    { value: 'Flug', label: 'Passagier im selben Flugzeug wie Patient:in' }
]

class PersonalInformation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infos: [],
        };
        this.handleInfoChange = this.handleInfoChange.bind(this);

    }
    handleInfoChange(newInfos) {
        this.setState({ infos: newInfos });
    }

    render() {
        return (
            <div className="mx-4 my-4">
                <Creatable
                    options={infoOptions}
                    onChange={this.handleInfoChange}
                    isMulti={true}
                    placeholder="Ich gehöre zu..."
                />
                <p className="text-sm text-muted">Andere Optionen können durch Eingabe hinzgefügt werden.</p>
            </div>
        );
    }
}


export default PersonalInformation;

