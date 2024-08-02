import React, {useState} from "react";
import './header.css'

import UserInfo from "../windows/user_info";
function Header(props){

    const [userInfo,setUserInfo] = useState(false);

    return (
        <div id="header">
            <div style={{minWidth: '220px',textAlign: 'center',paddingTop: '10px',color: '#4A148C'}}>
                <i className="fas fa-cloud fa-2x" style={{margin: "0 10px 0 10px"}}></i>
                <span style={{fontSize: "xx-large"}}>rainyCloud</span>
            </div>
            <div id="search-div">
                <input placeholder="Search drive" type="text" id="search" autoComplete="off"/>
                <div id="search-results"></div>
            </div>
            <div id="search-options">
                <i className="fal fa-search-location" style={{color: "#c5c5c4",transform: "scale(1.5)"}}></i>
            </div>
            <div id="space-used">
                <div style={{display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
                    <label id="space-lbl"></label>
                    <i className="fal fa-info-square cursor" id="space-info"
                       style={{color: "#ff383c",margin: "auto 10px auto 0"}}></i>
                </div>
                <progress value="0" id="space-progress"/>
            </div>
            <div id="side-options">
                <div style={{display: 'flex',flexDirection: "column",textAlign: 'center',margin: '25px 10px'}}>
                    <i id="show-added-people" className="fal fa-users"
                       style={{transform: 'scale(1.5)',color: '#c5c5c4',marginBottom: "5px"}}></i>
                    <label>People</label>
                </div>
                <div style={{display: 'flex',flexDirection: 'column',textAlign: 'center',margin: '25px 10px'}}>
                    <i id="user-info" className="fal fa-user"
                       style={{transform: 'scale(1.5)',color: '#c5c5c4',zIndex: '4',marginBottom: "5px"}}></i>
                    <label>User</label>
                </div>
                <div style={{display: 'flex',flexDirection: 'column',textAlign: 'center',margin: "25px 10px"}}>
                    <i id="setting-icon" className="fal fa-cog "
                       style={{color: '#c5c5c4',transform:' scale(1.5)',marginBottom: "5px"}}></i>
                    <label>Settings</label>
                </div>
            </div>
            <div id="settings">
                <label id="logout-lbl"><i className="fal fa-sign-out-alt" style={{marginRight: "15px"}}></i>sign out</label>
                <label id="add-people"><i className="fal fa-user-plus" style={{marginRight: "10px"}}></i>Add People</label>
                <label id="about-lbl"><i className="fal fa-info" style={{marginRight: "20px",marginLeft: "5px"}}></i>About</label>
            </div>
            {userInfo ? <UserInfo data={{}}/> : ''}
        </div>
    )


}

export default Header