import React from "react";
import './popup.css'

function Popup(props){
    return(
        <div id="pop-up">
            <label id="msg">{props.data.popupMsg}</label>
        </div>
    )

}
export default Popup