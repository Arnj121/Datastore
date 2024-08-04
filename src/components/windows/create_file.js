import React from "react";
import './create_file.css'
function CreateFile(props){
    return(
        <div id="create-file-window">
            <div id="info-window" className="information-windows">
                <label id="save-cancel-file" className="textborder" onClick={()=>{props.data.setCreateFile(!props.data.createFile)}}>cancel</label>
                <input type="text" placeholder="Unnamed" id="unnamedfile"/>
                <label id="save-file" className="textborder" onClick={()=>{props.data.setCreateFile(!props.data.createFile)}}>
                    <i className="fal fa-save" style={{marginRight: "10px"}}></i>
                    Save
                </label>
            </div>
            <textarea id="text-data"></textarea>
        </div>
    )
}
export default CreateFile