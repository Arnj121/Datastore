import React from "react";
import './space_info.css'

function SpaceInfo(){
    return(
        <div id="space-info-window">
            <label style={{gridArea: "1/1/1/span 2",textAlign: "center",margin: "auto 0",fontSize: "larger"}}>Storage Analysis</label>
            <div id="space-occupied">
                <div id="free" style={{backgroundColor: "#3D5AFE",width: "100%",height: "100%"}}></div>
                <div id="docs" style={{backgroundColor: "#FF5252",width: "0",height: "100%"}}></div>
                <div id="images" style={{backgroundColor: "#E040FB",width: "0",height: "100%"}}></div>
                <div id="audio" style={{backgroundColor: "#FFFF00",width: "0",height: "100%"}}></div>
                <div id="video" style={{backgroundColor: "#FFAB00",width: "0",height: "100%"}}></div>
            </div>
            <div id="storage-container">
                <div className="storage-obj">
                    <i className="fal fa-hdd fa-2x" style={{color:"#3D5AFE",textAlign: "center"}}></i>
                    <label style={{textAlign: "center"}}>Free</label>
                    <label id="free-size" style={{textAlign: "center"}}></label>
                </div>
                <div className="storage-obj">
                    <i className="fal fa-file fa-2x" style={{color:"#FF5252",textAlign: "center"}}></i>
                    <label>Docs (<span id="doccount">0</span>)</label>
                    <label id="docs-size" style={{textAlign: "center"}}></label>
                </div>
                <div className="storage-obj">
                    <i className="fal fa-file-image fa-2x" style={{color:"#E040FB",textAlign: "center"}}></i>
                    <label>Images (<span id="imgcount">0</span>)</label>
                    <label id="img-size" style={{textAlign: "center"}}></label>
                </div>
                <div className="storage-obj">
                    <i className="fal fa-file-audio fa-2x" style={{color:"#FFFF00",textAlign: "center"}}></i>
                    <label>Audio (<span id="audiocount">0</span>)</label>
                    <label id="audio-size" style={{textAlign: "center"}}></label>
                </div>
                <div className="storage-obj">
                    <i className="fal fa-file-video fa-2x" style={{color:"#FFAB00",textAlign: "center"}}></i>
                    <label>Video (<span id="videocount">0</span>)</label>
                    <label id="video-size" style={{textAlign: "center"}}></label>
                </div>
            </div>
            <label className="cursor" style={{gridArea: "1/4/1/4",borderColor: "#4A148C",margin: "auto 10px auto auto"}}
                   id="close-space-window">
                <i className="fal fa-window-close fa-2x"></i>
            </label>
        </div>
    )
}
export default SpaceInfo