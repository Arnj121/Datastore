import React from "react";

import './display_collection.css'

function DisplayCollection(){
    return(
        <div id="display-collection">
            <div id="collect-var"></div>
            <label id="add-confirm" className="confirm-keys">Add</label>
            <label id="cancel-confirm" className="confirm-keys">cancel</label>
        </div>
    )
}
export default DisplayCollection