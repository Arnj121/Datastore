import React, {useEffect, useState} from "react";
import './options.css'

function Options(props){


    useEffect(()=> {
        document.getElementById('image-filter').onclick = () => {
            if (!props.data.imgfilter) {
                props.data.setimgFilter(a=> !a)
                console.log(props.data.imgfilter)
                document.getElementById('image-filter').style.backgroundColor = 'black'
                document.getElementById('image-notch').style.color = '#FFA615'
                document.getElementById('image-filter').style.color = 'white'
                // props.data.reload()
            } else {
                props.data.setimgFilter(a=>!a)
                document.getElementById('image-filter').style.backgroundColor = 'whitesmoke'
                document.getElementById('image-notch').style.color = '#FF4081'
                document.getElementById('image-filter').style.color = '#4A148C'
                // props.data.reload()
            }
        }
        document.getElementById('file-filter').onclick = () => {
            if (!props.data.filefilter) {
                props.data.setfileFilter(a=>!a)
                document.getElementById('file-filter').style.backgroundColor = 'black'
                document.getElementById('file-notch').style.color = '#FFA615'
                document.getElementById('file-filter').style.color = 'white'
                // props.data.reload()
            } else {
                props.data.setfileFilter(a=>!a)
                document.getElementById('file-filter').style.backgroundColor = 'whitesmoke'
                document.getElementById('file-notch').style.color = '#FF4081'
                document.getElementById('file-filter').style.color = '#4A148C'
                // props.data.reload()
            }
        }
        document.getElementById('folder-filter').onclick = () => {
            if (!props.data.folderfilter) {
                props.data.setfolderFilter(a=>!a)
                document.getElementById('folder-filter').style.backgroundColor = 'black'
                document.getElementById('folder-notch').style.color = '#FFA615'
                document.getElementById('folder-filter').style.color = 'white'
                // props.data.reload()
            } else {
                props.data.setfolderFilter(a=>!a)
                document.getElementById('folder-filter').style.backgroundColor = 'whitesmoke'
                document.getElementById('folder-notch').style.color = '#FF4081'
                document.getElementById('folder-filter').style.color = '#4A148C'
                // props.data.reload()
            }
        }

        document.getElementById('video-filter').onclick = () => {
            if (!props.data.videofilter) {
                props.data.setvideoFilter(a=>!a)
                document.getElementById('video-filter').style.backgroundColor = 'black'
                document.getElementById('video-notch').style.color = '#FFA615'
                document.getElementById('video-filter').style.color = 'white'
                // props.data.reload()
            } else {
                props.data.setvideoFilter(a=>!a)
                document.getElementById('video-filter').style.backgroundColor = 'whitesmoke'
                document.getElementById('video-notch').style.color = '#FF4081'
                document.getElementById('video-filter').style.color = '#4A148C'
                // props.data.reload()
            }
        }
        document.getElementById('audio-filter').onclick = () => {
            if (!props.data.audiofilter) {
                props.data.setaudioFilter(a=>!a)
                document.getElementById('audio-filter').style.backgroundColor = 'black'
                document.getElementById('audio-notch').style.color = '#FFA615'
                document.getElementById('audio-filter').style.color = 'white'
                // props.data.reload()
            } else {
                props.data.setaudioFilter(a=>!a)
                document.getElementById('audio-filter').style.backgroundColor = 'whitesmoke'
                document.getElementById('audio-notch').style.color = '#FF4081'
                document.getElementById('audio-filter').style.color = '#4A148C'
                // props.data.reload()
            }
        }
    })
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
                <label id="select-file" className="filter-txt filter-obj" onClick={()=>{}}>
                    <i id="check" className="far fa-check-circle" style={{marginRight: "5px",color: "#ff4081"}}></i>
                    select
                </label>
                <label id="delete-all" className="filter-txt filter-obj" onClick={()=>{}}>
                    <i className="fal fa-trash" style={{color:"#FF4081"}}></i>
                </label>
            </div>
            <i className="fal fa-grip-lines-vertical fa-2x" style={{color: "#d1d1d0",margin: "5px 10px 0 10px"}}></i>
            <div id="view">
                <label id="list-view" style={{color:"#d1d1d0",transform: "scale(1.5)"}} onClick={()=>{props.data.setView(true)}}>
                    <i className="fal fa-th-list"></i>
                </label>
                <label id="gallery-view" style={{color: "#FF4081",transform: "scale(1.5)"}} onClick={()=>{props.data.setView(false)}}>
                    <i className="fal fa-th"></i>
                </label>
            </div>
        </div>
    )
}
export default Options