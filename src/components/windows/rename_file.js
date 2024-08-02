import React from "react";
import './rename_file.css'

function RenameFile(){
    return(
        <div id="renamefile-window" className="create-windows">
            <input id="newfilename" type="text" className="input-text"/>
            <label id="rename-confirm" className="confirm-keys">Rename</label>
            <label id="rename-cancel" className="confirm-keys">Cancel</label>
        </div>
    )
}
export default RenameFile