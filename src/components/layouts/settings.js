import React from "react";
import './settings.css'

function Settings(props){
    return(
        <div id="settings">
            <label id="logout-lbl"><i className="fal fa-sign-out-alt" style={{marginRight: "15px"}}></i>sign out</label>
            <label id="add-people" onClick={()=>{props.data.setAddPeople(!props.data.addPeople);props.data.setSettings(!props.data.settings)}}><i className="fal fa-user-plus" style={{marginRight: "10px"}}></i>Add People</label>
            <label id="about-lbl" onClick={()=>{props.data.setAbout(!props.data.about);props.data.setSettings(!props.data.settings)}}><
                i className="fal fa-info" style={{marginRight: "20px",marginLeft: "5px"}}></i>
                About
            </label>
        </div>
    )
}
export default Settings
