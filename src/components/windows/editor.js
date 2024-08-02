import React from 'react';
import './editor.css'

function Editor(){
    return(
        <div id="editor-window">
            <div id="editor-info" className="information-windows">
                <label id="edit-file" className="textborder">
                    <i id="edit-icon" className="fal fa-file-edit" style={{marginRight: "10px"}}></i>
                    <span id="edit-file-edit">Edit</span>
                </label>
                <label id="file-name-opened"></label>
                <label id="close-editor-window"><i className="fal fa-window-close fa-2x"></i></label>
            </div>
            <div id="information"></div>
        </div>
    )
}
export default Editor