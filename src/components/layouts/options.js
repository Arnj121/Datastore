import React from "react";
import './options.css'

function Options(){
    return(
        <div id="display-lvl2">
            <div id="filters">
                <label id="filter-lbl" style={{color: "#4A148C"}}>
                    <i className="fal fa-filter" style={{margin:"auto 5px auto 5px",color:"#FF4081"}}></i>
                    Filters
                </label>
                <label id="image-filter" className="filter-txt filter-obj" style={{fontWeight: "bold"}}>
                    <i id="image-notch" className="far fa-images" style={{marginRight: "5px",color:"#FF4081"}}></i>
                    Images
                </label>
                <label id="file-filter" className="filter-txt filter-obj" style={{fontWeight: "bold"}}>
                    <i id="file-notch" className="far fa-file-alt" style={{marginRight: "5px",color:"#FF4081"}}></i>
                    Files
                </label>
                <label id="folder-filter" className="filter-txt filter-obj" style={{fontWeight: "bold"}}>
                    <i id="folder-notch" className="far fa-folders" style={{marginRight: "5px",color:"#FF4081"}}></i>
                    Folders
                </label>
                <label id="video-filter" className="filter-txt filter-obj" style={{fontWeight: "bold"}}>
                    <i id="video-notch" className="far fa-video" style={{marginRight: "5px",color:"#FF4081"}}></i>
                    Videos
                </label>
                <label id="audio-filter" className="filter-txt filter-obj" style={{fontWeight: "bold"}}>
                    <i id="audio-notch" className="far fa-file-audio" style={{marginRight: "5px",color:"#FF4081"}}></i>
                    Audios
                </label>
            </div>
            <i className="fal fa-grip-lines-vertical fa-2x" style={{color: "#d1d1d0",margin: "5px 10px 0 10px"}}></i>
            <div id="universal">
                <label id="select-file" className="filter-txt filter-obj">
                    <i id="check" className="far fa-check-circle" style={{marginRight: "5px",color: "#ff4081"}}></i>
                    select
                </label>
                <label id="delete-all" className="filter-txt filter-obj">
                    <i className="fal fa-trash" style={{color:"#FF4081"}}></i>
                </label>
            </div>
            <i className="fal fa-grip-lines-vertical fa-2x" style={{color: "#d1d1d0",margin: "5px 10px 0 10px"}}></i>
            <div id="view">
                <label id="list-view" style={{color:"#d1d1d0",transform: "scale(1.5)"}}>
                    <i className="fal fa-th-list"></i>
                </label>
                <label id="gallery-view" style={{color: "#FF4081",transform: "scale(1.5)"}}>
                    <i className="fal fa-th"></i>
                </label>
            </div>
        </div>
    )
}
export default Options