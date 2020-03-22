import React from 'react';
import { Button } from 'react-bootstrap';
import { LocationDataControllerApi } from '@invi7x/api_documentation';
import { CloudUpload } from 'react-bootstrap-icons';

function uploadLocationData(jsonData) {
    let apiInstance = new LocationDataControllerApi();
    apiInstance.uploadLocationDataUsingPOST(jsonData, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ' + data);
      }
    });
}

function inputChanged(event) {
    var file = event.target.files[0];

    if (file.type !== "application/json") {
        window.alert("File type must be json");
        return;
    }

    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerEvent => {
        var content = readerEvent.target.result; // this is the content!
        uploadLocationData(content)
    }
}

function uploadEvent() {
    document.getElementById("infected-file-input").click()
}

function UploadInfectedButton() {
    return (
        <div className='upload-component'>
            <div className='upload-text'>
                Upload your timeline, if you are <br/>
                infected and want to contribute.
            </div>
            <div className='upload-button'>
                <Button variant='secondary' onClick={uploadEvent}>
                    <CloudUpload className='upload-svg' size={40}/>
                </Button>
            </div>
            <input id="infected-file-input" type="file" name="name" style={{display: "none"}} onChange={inputChanged}/>
        </div>
    ) 
}

export default UploadInfectedButton