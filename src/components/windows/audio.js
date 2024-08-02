import React from "react";
import './audio.css'
function Audio(props){
    return(
        <div id="audio-window">
            <div className="cursor" id="close-audio">
                <span id="audio-name"></span>
                <i className="fal fa-window-close" style={{transform: "scale(1.5)"}}></i>
            </div>
            <video controls width="400" height="50" src="" id="audio-data"></video>
            <div id="audio-controls">
                <i className="fal fa-backward cursor" id="audio-backward"></i>
                <i className="fal fa-forward cursor" id="audio-forward"></i>
                <i className="fal fa-minus-circle cursor" id="audio-minus"></i>
                <label id="audio-pr" className="textborder">1</label>
                <i className="fal fa-plus-circle cursor" id="audio-plus"></i>
            </div>
        </div>
    )
}

export default Audio