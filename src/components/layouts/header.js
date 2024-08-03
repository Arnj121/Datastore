import React, {useEffect, useState} from "react";
import './header.css'

import UserInfo from "../windows/user_info";
import Settings from "./settings";
function Header(props){

    const [userInfo,setUserInfo] = useState(false);
    const [settings,setSettings] =useState(false);
    const [spaceLbl,setSpaceLbl]=useState('')
    const [progress,setProgress]=useState('')
    function initspace(){
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if(xhr.readyState ==4){
                props.data.setSpace(parseInt(this.responseText))
            }
        }
        xhr.open('GET',`http://localhost:4000/getspace?email=${props.data.email}`)
        xhr.send()
    }
    function convertBytes(bytes){
        let s = bytes.toString(),x
        if(s.toString().length>9) {
            x = (s / 10 ** 9).toString()
            x = x.toString().slice(0, x.toString().indexOf('.') + 2) + ' Gb'
        }
        else if(s.toString().length>6) {
            x = (s / 10 ** 6).toString()
            x = x.toString().slice(0, x.toString().indexOf('.') + 2) + ' Mb'
        }
        else if(s.toString().length>2){
            x = (s / 10 ** 3).toString()
            x = x.toString().slice(0, x.toString().indexOf('.') + 2) + ' Kb'
        }
        else x= s+' b'
        return x
    }

    function displayspace(){
        setSpaceLbl(convertBytes(props.data.space) +"/ 5 Gb")
        setProgress((props.data.space/(5*(10**9))).toString())
    }

    initspace()
    useEffect(displayspace,[props.data.space])


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
                    <label id="space-lbl">{spaceLbl}</label>
                    <i className="fal fa-info-square cursor" id="space-info"
                       style={{color: "#ff383c",margin: "auto 10px auto 0"}}></i>
                </div>
                <progress value={progress} id="space-progress"/>
            </div>
            <div id="side-options">
                <div style={{display: 'flex',flexDirection: "column",textAlign: 'center',margin: '25px 10px'}}>
                    <i id="show-added-people" className="fal fa-users" onClick={()=>{}}
                       style={{transform: 'scale(1.5)',color: '#c5c5c4',marginBottom: "5px"}}></i>
                    <label>People</label>
                </div>
                <div style={{display: 'flex',flexDirection: 'column',textAlign: 'center',margin: '25px 10px'}}>
                    <i id="user-info" className="fal fa-user" onClick={()=>{setUserInfo(!userInfo);console.log(13)}}
                       style={{transform: 'scale(1.5)',color: '#c5c5c4',zIndex: '4',marginBottom: "5px"}}></i>
                    <label>User</label>
                </div>
                <div style={{display: 'flex',flexDirection: 'column',textAlign: 'center',margin: "25px 10px"}}>
                    <i id="setting-icon" className="fal fa-cog " onClick={()=>{setSettings(!settings);console.log(23)}}
                       style={{color: '#c5c5c4',transform:' scale(1.5)',marginBottom: "5px"}}></i>
                    <label>Settings</label>
                </div>
            </div>
            {settings ? <Settings data={{setAbout:props.data.setAbout,about:props.data.about,settings:settings,
                setSettings:setSettings,addPeople:props.data.addPeople,setAddPeople:props.data.setAddPeople}}/> : ''}
            {userInfo ? <UserInfo data={{name:props.data.name,password:props.data.password}}/> : ''}
        </div>
    )


}

export default Header