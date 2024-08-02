import React from "react";
import './context.css'
import PasteContext from "./paste_context";
function Context(){
    return(
        <div>
            <div id="right-click-contextmenu">
                <label id="cut" className="contextmenu-items"><i className="fal fa-cut"
                                                                 style="margin-right: 10px"></i>cut</label>
                <label id="copy" className="contextmenu-items"><i className="fal fa-copy" style={{marginRight: "10px"}}></i>copy</label>
                <label id="rename" className="contextmenu-items"><i className="fal fa-edit" style={{marginRight: "10px"}}></i>rename</label>
                <label id="delete" className="contextmenu-items"><i className="fal fa-trash" style={{marginRight: "10px"}}></i>delete</label>
                <label id="add-to" className="contextmenu-items"><i className="fal fa-plus" style={{marginRight: "10px"}}></i>collection</label>
                <label id="fav" className="contextmenu-items"><i className="fal fa-star" style={{marginRight: "10px"}}></i>favorites</label>
                <label id="download" className="contextmenu-items">
                    <i className="fal fa-download" style={{marginRight: "10px"}}></i>
                    Download
                </label>
                <label id="sharethis" className="contextmenu-items">
                    <i className="fal fa-share-alt" style={{marginRight: "10px"}}></i>
                    share
                </label>
                <label id="details" className="contextmenu-items">
                    <i className="fal fa-info" style={{marginRight: "10px"}}></i>
                    details
                </label>
            </div>
            <PasteContext />
        </div>
    )
}
export default Context