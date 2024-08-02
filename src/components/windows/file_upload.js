import React from "react";

import './file_upload.css'

function FileUpload(){
    return(
        <div id="upload-file-input-window" className="upload-window">
            <input type="file" id="file-input" hidden multiple accept="text/*"/>
            <label className="add" id="add-file">
                <i className="fal fa-plus" style={{transform: "scale(1.5)"}}></i>
            </label>
            <label className="cancel" id="cancel-file">Cancel</label>
            <label id="file-upload-confirm" className="upload-confirm">
                <i className="fal fa-file-upload" style={{transform: "scale(1.5)"}}></i>
            </label>
                <div id="files-selected" className="selected"></div>
        </div>
    )
}
export default FileUpload