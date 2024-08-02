import React from "react";
import './video.css'

function Video(){
    return(
        <div id="video-window">
            <div className="cursor" id="close-video">
                <span id="video-name"></span>
                <i className="fal fa-window-close" style={{transform: "scale(1.5)"}}></i>
            </div>
            <video src="" controls height="360" width="640" id="video-data"></video>
            <div id="video-controls">
                <i className="fal fa-backward cursor" id="video-backward"></i>
                <i className="fal fa-forward cursor" id="video-forward"></i>
                <i className="fal fa-minus-circle cursor" id="video-minus"></i>
                <label id="video-pr" className="textborder">1</label>
                <i className="fal fa-plus-circle cursor" id="video-plus"></i>
            </div>
        </div>
    )
}
export default Video