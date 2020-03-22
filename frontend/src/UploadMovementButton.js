import React from 'react';
import { Button } from 'react-bootstrap';
import { LocationDataControllerApi } from '@invi7x/api_documentation';
import { CloudUpload } from 'react-bootstrap-icons';

function getMatchingLocations(jsonData, setNewMarkerList) {
    let apiInstance = new LocationDataControllerApi();
    let opts = {
        'maxDistanceInMeters': 100, // Number | maxDistanceInMeters
        'virusPersistenceTimeInMillis': 1800000 // Number | virusPersistenceTimeInMillis
    };
    apiInstance.getMatchingLocationsUsingPOST(jsonData, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log('getMatchingLocationsUsingPOST called successfully.');
            setNewMarkerList(data)
        }
    });
}

function movementInputChanged(event, setNewMarkerList) {
    const file = event.target.files[0];

    if (file.type !== "application/json") {
        window.alert("File type must be json");
        return;
    }

    const reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerEvent => {
        const content = readerEvent.target.result; // this is the content!
        getMatchingLocations(content, setNewMarkerList);
    }
}

function uploadEvent() {
    document.getElementById("movement-file-input").click()
}

function UploadMovementButton(props) {
    return (
        <div className='upload-component'>
            <div className='upload-text'>
                Upload your timeline to check it against <br/>
                timelines of infected human timelines.
            </div>
            <div className='upload-button'>
                <Button variant='secondary' onClick={uploadEvent}>
                    <div>
                        <CloudUpload className='upload-svg' size={40}/>
                    </div>
                </Button>
            </div>
            <input id="movement-file-input" type="file" name="name" style={{display: "none"}} onChange={ e => movementInputChanged(e, props.setNewMarkerList) }/>
        </div>
    ) 
}

export default UploadMovementButton