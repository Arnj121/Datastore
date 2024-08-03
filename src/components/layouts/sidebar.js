import React, {useEffect, useState} from "react";
import './sidebar.css'
function Sidebar(props){

    const [curmenu,setCurmenu] = useState('my-home')


    function initmenu() {
        document.getElementById(curmenu).style.backgroundColor='whitesmoke'
        document.getElementById(curmenu).style.color='#FFAB00'
    }

    useEffect(initmenu)
    return(
        <div id="menu">
            <label id="add-new" className="sidelines">
                <i className="fal fa-plus" style={{color: "#fd273a",transform: "scale(1.2)",margin: "0 10px 0 0"}}></i>
                <span style={{fontWeight: "bold"}}>New</span></label>
            <div id="add-new-child">
                <label id="create-folder"><i className="fal fa-folder-plus" style={{marginRight: "10px"}}></i>New Folder</label>
                <label id="upload-image"><i className="fal fa-image" style={{marginRight: "10px"}}></i>Media Upload</label>
                <label id="upload-file"><i className="fal fa-file-upload" style={{marginRight: "10px"}}></i>File Upload</label>
                <label id="create-file"><i className="fal fa-file-plus" style={{marginRight: "10px"}}></i>Create File</label>
            </div>
            <label id="my-home" className="sidelines">
                <i className="fal fa-hdd" style={{transform: "scale(1.2)",margin: "0 10px 0 0"}}></i> Home</label>
            <label id="favorites" className="sidelines">
                <i className="fal fa-star" style={{transform: "scale(1.2)",margin: "0 10px 0 0"}}></i>Favorites</label>
            <label id="bin" className="sidelines">
                <i className="fal fa-trash" style={{transform: "scale(1.2)",margin: "0 10px 0 0"}}></i>Bin</label>
            <label id="share" className="sidelines">
                <i className="fal fa-share-alt" style={{transform: "scale(1.2)",margin: "0 10px 0 0"}}></i>
                Shared with me
                <label id="shareno" style={{height: "5px",width:"5px",padding: "0 5px",visibility: "hidden",
                    borderRadius: "50px",backgroundColor: "#14070e",color: "white"}}></label>
            </label>
            <label id="files-shared" className="sidelines">
                <i className="fal fa-share" style={{transform: "scale(1.2)",margin: "0 10px 0 0"}}></i>
                Files Shared
            </label>
            <label id="collection" className="sidelines">
                <i className="fal fa-tags" style={{transform: "scale(1.2)",margin: "0 10px 0 0"}}></i>
                Collections
            </label>
            <div id="collection-list">
                <div id="usercollec"></div>
                <div id="addnewcoll" className="col-listitems">
                    <i className="fal fa-plus" style={{margin: "0 10px 0 0"}}></i>New
                </div>
            </div>
        </div>
    )

}

export default Sidebar