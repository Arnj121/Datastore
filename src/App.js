import React, { useEffect, useState } from 'react';

import Header from "./components/layouts/header";
import Sidebar from "./components/layouts/sidebar";
import Mainframe from "./components/layouts/mainframe";

function App() {
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()
    const [] = useState()


    let link = document.createElement('link');
    link.href="http://localhost:2045/fontawesome.css";
    link.rel='stylesheet';
    link.type='text/css'
    let style = document.createElement('style');
    style.innerText="@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');"

    document.getElementsByTagName('head')[0].append(link,style)
    return (
        <div>
            <Header data={{}}/>
            <Mainframe data={{}}/>
        </div>
    );
}

export default App;
