import React from "react";
import './create_folder.css'
function CreateFolder(){

    return(
        <div id="create-folder-window" className="create-windows">
            <input id="folder-name" type="text" placeholder="Folder Name" className="input-text"/>
            <label id="create-folder-confirm" className="confirm-keys">Create</label>
            <label id="cancel-folder-confirm" className="confirm-keys">Cancel</label>
        </div>
    )
}

export default CreateFolder