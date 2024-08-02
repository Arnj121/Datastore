import React from "react";
import './details.css'
function Details(){
    return(
        <div id="details-window">
            <label id="details-lbl" style={{color: "#4e68ee"}}>File Info</label>
            <label id="detail-name">Name </label>
            <label id="name"></label>
            <label id="detail-type">Type </label>
            <label id="type"></label>
            <label id="detail-size">Size </label>
            <label id="size"></label>
            <label id="detail-lastmod">Last Modified </label>
            <label id="lastmod"></label>
            <label id="detail-src">src </label>
            <label id="src"></label>
            <label id="close-detail-window" className="textborder">close</label>
        </div>
    )
}
export default Details