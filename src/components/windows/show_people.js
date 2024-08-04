import React from "react";

import './show_people.css'

function ShowPeople(props){
    return(
        <div id="show-added-people-window">
            <div id="people-added-window"></div>
            <label id="add-more" className="confirm-keys">
                <i className="fal fa-user-plus" style={{marginRight: "10px"}}></i>
                Add
            </label>
            <label id="remove-more" className="confirm-keys">
                <i className="fal fa-user-minus" style={{marginRight: "10px"}}></i>
                Remove
            </label>
            <label id="show-added-people-window-close" className="confirm-keys" onClick={()=>{props.data.setShowAddedPeople(!props.data.showAddedPeople)}}>close</label>
        </div>
    )
}
export default ShowPeople