import React from "react";
import './mainframe.css'
import ListViewHeader from "./list_view_header";
import Options from "./options";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Content from "./content";

function Mainframe(){
    return(
        <div id="mainframe">
            <Sidebar />
            <div id="container">
                <Navbar />
                <Options />
                <ListViewHeader />
                <Content />
            </div>
        </div>
    )
}
export default Mainframe