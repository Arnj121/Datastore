import React from "react";

function searchSettings(){

    return(
        <div id="search-settings-window">
            <label id="search-location-lbl">Search</label>
            <select id="search-location-input">
                <option value="home">home</option>
                <option value="everywhere">everywhere</option>
                <option value="shared">shared with me</option>
            </select>
            <label id="from-lbl">Owner</label>
            <select id="from-input">
                <option value="all">All</option>
                <option value="user">user</option>
            </select>
            <input id="user-email" type="email" placeholder="user email" style={{fontFamily: "'Open Sans', sans-serif"}}/>
                <label id="filetypes">Search type</label>
                <select id="search-type">
                    <option value="all">All</option>
                    <option value="images">Images</option>
                    <option value="docs">Documents</option>
                </select>
                <label id="close-settings-window" className="confirm-keys">close</label>
        </div>
    )
}

export default searchSettings