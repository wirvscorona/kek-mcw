import React from 'react';
import { Button } from 'react-bootstrap';

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
        console.log(content);
    }


}

function uploadEvent() {
    document.getElementById("file-input").click()
}

function UploadMovementButton() {
    return (
        <div>
             <Button variant='secondary' onClick={uploadEvent}>
                Upload Timeline .json
            </Button>
            <input id="file-input" type="file" name="name" style={{display: "none"}} onChange={inputChanged}/>
        </div>
    ) 
}

export default UploadMovementButton