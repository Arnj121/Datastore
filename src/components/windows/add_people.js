import React from "react";
import './add_people.css'
function AddPeople(props){
    return(
        <div id="add-people-window">
            <input type="email" placeholder="Email" id="add-email-input"/>
            <label id="add-plus"><i className="fal fa-plus-square fa-2x"></i></label>
            <label id="people-added-lbl">People Added</label>
            <div id="people-added"></div>
            <label id="add-people-confirm" className="confirm-keys">
                <i className="fal fa-user-plus" style={{marginRight: "10px"}}></i>
                Add
            </label>
            <label id="remove-people" className="confirm-keys">
                <i className="fal fa-user-minus" style={{marginRight: "10px"}}></i>
                Remove
            </label>
            <label id="add-people-cancel" className="confirm-keys" onClick={()=>{props.data.setAddPeople(!props.data.addPeople);
                    props.data.setShowAddedPeople(!props.data.showAddedPeople)}}>
                Cancel</label>
        </div>

)
}
export default AddPeople