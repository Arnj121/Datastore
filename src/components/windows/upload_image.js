import React from "react";
import './upload_image.css'

function UploadImage(){
    return(
        <div id="upload-image-input-window" className="upload-window">
            <input type="file" id="image-input" hidden multiple accept="image/*"/>
            <label className="add" id="add-image">
                <i className="fal fa-plus" style={{transform: "scale(1.5)"}}></i>
            </label>
            <label className="cancel" id="cancel-image">Cancel</label>
            <label id="image-upload-confirm" className="upload-confirm">
                <i className="fal fa-file-upload" style={{transform: "scale(1.5)"}}></i>
            </label>
            <div id="images-selected" className="selected"></div>
        </div>
    )
}
export default UploadImage