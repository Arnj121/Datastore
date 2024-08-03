import React from "react";
import './content.css'

function Content(props){
    return(
        <div id="container-lvl2">
            {props.data.data}
        </div>
    )
}
export default Content