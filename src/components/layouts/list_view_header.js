import React from "react";
import './list_view_header.css'

function ListViewHeader(){
    return(
        <div id="list-view-header">
            <label style={{gridArea: "1/1/1/2",marginLeft: "10px"}}>
                <i className="fal fa-file" style={{marginRight: "20px"}}></i>
                File name
            </label>
            <label style={{gridArea: "1/2/1/3",marginLeft: "100px"}}>
                <i className="fal fa-clock" style={{marginRight: "10px"}}></i>
                Date
            </label>
            <label style={{gridArea: "1/3/1/4",marginLeft: "70px"}}>Size</label>
            <label style={{gridArea: "1/4/1/4",marginLeft: "40px"}}>File Type</label>
        </div>
    )
}
export default ListViewHeader