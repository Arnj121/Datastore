import React from "react";
import './create_collection.css'

function CreateCollection(props){
    return(
        <div id="create-collection-window" className="create-windows">
            <input type="text" placeholder="collection name" id="name-coll" className="input-text"/>
            <label id="create-collection-confirm" className="confirm-keys">create</label>
            <label id="create-collection-cancel" className="confirm-keys" onClick={()=>{props.data.setCreateCollection(!props.data.createCollection)}}>cancel</label>
        </div>
    )
}

export default CreateCollection