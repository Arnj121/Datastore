import React from "react";

import './share_window.css'

function ShareWindow(){
    return(
        <div id="share-window">
            <label id="share-info">Share file</label>
            <label id="public-private-lbl">Make this</label>
            <select id="public-private-select">
                <option value="share-public">Public</option>
                <option value="share-private">Private</option>
            </select>
            <label id="share-with">Share with</label>
            <select id="private-person-input">
                <option value="none">No one</option>
            </select>
            <label id="add-from-share" className="confirm-keys">Add</label>
            <label id="share-ok" className="confirm-keys">Share</label>
            <label id="share-cancel" className="confirm-keys">cancel</label>
        </div>
    )
}
export default ShareWindow