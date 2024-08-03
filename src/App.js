import React, { useEffect, useState } from 'react';

import Header from "./components/layouts/header";
import Mainframe from "./components/layouts/mainframe";
import About from "./components/windows/about";
import AddPeople from "./components/windows/add_people";

function App() {

    let link = document.createElement('link');
    link.href="http://localhost:2045/fontawesome.css";
    link.rel='stylesheet';
    link.type='text/css'
    let style = document.createElement('style');
    style.innerText="@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');"
    document.getElementsByTagName('head')[0].append(link,style)

    const [loggedIn,setLoggedIn] = useState(0)
    const [token,setToken] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [space,setSpace] = useState(0)
    const [about,setAbout] = useState(false)
    const [addPeople,setAddPeople] = useState(false)



    function inituserdetails() {
        let cookies = document.cookie
        cookies  = cookies.split(';')
        for(let i=0;i<cookies.length;i++){
            let v = cookies[i].split('=')
            let key =v[0].replaceAll(' ','')
            if(key == 'loggedin') setLoggedIn(1)
            if(key == 'token') setToken(v[1])
            if(key == 'name') setName(v[1])
            if(key == 'email') setEmail(v[1])
            if(key=='password') setPassword(v[1])
        }
        // if(token =='' || name==''){
        //     location.replace('http://localhost:4000/loginpage')
        // }
        // document.getElementById('username').innerText=name
    }
    inituserdetails()

    return (
        <div>
            <Header data={{name:name,password:password,space:space,setSpace:setSpace,setAbout:setAbout,about:about,
                    addPeople:addPeople,setAddPeople:setAddPeople}}/>
            <Mainframe data={{loggedIn:loggedIn,token:token,name:name,email:email,password:password,space:space}}/>
            {about?<About data={{setAbout:setAbout,about:about}}/>:''}
            {addPeople?<AddPeople data={{setAddPeople:setAddPeople,addPeople:addPeople}}/>:''}
        </div>
    );
}

export default App;
