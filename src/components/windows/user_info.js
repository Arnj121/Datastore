import React from "react";

function UserInfo(props){

    return(
        <div id="userinfo-window">
            <div id="userdp"><i className="fal fa-user fa-3x" style={{color:"#424242"}}></i></div>
            <label id="username" style={{fontWeight: "bold"}}></label>
            <label id="change-username" className="textborder">
                <i className="fal fa-user-edit" style={{marginRight: "10px"}}></i>
                name
            </label>
            <input id="newusername" type="text" placeholder="new username"/>
            <label id="username-ok" className="textborder">Ok</label>
            <label id="username-back" className="textborder">back</label>
            <label id="change-password" className="textborder">
                <i className="fal fa-edit" style={{marginRight: "10px"}}></i>password</label>
            <input id="newpassword" type="password" placeholder="new password"/>
            <label id="password-ok" className="textborder">Ok</label>
            <label id="password-back" className="textborder">back</label>
            <label id="view-password" className="textborder">
                <i id="the-eye" className="fal fa-eye-slash" style={{marginRight: "10px"}}></i>
                password
            </label>
            <label id="password"></label>
        </div>
    )
}

export default UserInfo