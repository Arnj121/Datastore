import React from "react";
import './photo.css'

function Photo(){
    return(
        <div id="photo-window">
            <div id="photo-info" className="information-windows">
                <label id="full-screen" className="textborder">Full Screen</label>
                <label id="photo-name"></label>
                <label id='close-photo-window'><i className="fal fa-window-close fa-2x"></i></label>
            </div>
            <img src="" id="photo-data" alt="Connot Load Image"/>
        </div>
    )
}
export default Photo