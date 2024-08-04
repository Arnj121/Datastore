import React, { useEffect, useState } from 'react';

import Header from "./components/layouts/header";
import Mainframe from "./components/layouts/mainframe";
import About from "./components/windows/about";
import AddPeople from "./components/windows/add_people";
import CreateFile from "./components/windows/create_file";
import UploadImage from "./components/windows/upload_image";
import FileUpload from "./components/windows/file_upload";
import CreateFolder from "./components/windows/create_folder";
import SpaceInfo from "./components/windows/space_info";
import SearchSettings from "./components/windows/search_settings";
import CreateCollection from "./components/windows/create_collection";
import Blank from "./components/windows/blank"
import ShowPeople from "./components/windows/show_people";
import Editor from "./components/windows/editor";
import Video from "./components/windows/video";
import Photo from "./components/windows/photo";
import Audio from "./components/windows/audio";
import Popup from "./components/windows/popup";
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
    const [createFolder,setCreateFolder] = useState(false)
    const [uploadFile,setUploadFile] = useState(false)
    const [uploadImage,setUploadImage] = useState(false)
    const [createFile,setCreateFile] = useState(false)
    const [spaceInfo,setSpaceInfo] = useState(false)
    const [searchOptions,setSearchOptions] = useState(false)
    const [createCollection,setCreateCollection] =useState(false)
    const [blank,setBlank]=useState(false)
    const [showAddedPeople,setShowAddedPeople] = useState(false)
    const [editorWindow,setEditorWindow] = useState(false)
    const [photoWindow,setPhotoWindow] = useState(false)
    const [videoWindow,setVideoWindow] = useState(false)
    const [audioWindow,setAudioWindow] = useState(false)
    const [fdata,setFdata] = useState('')
    const [mediasrc,setMediasrc] = useState('')
    const [mediaWinName,setMediaWinName] = useState('')
    const [popup,setpopup]=useState(false)
    const [popupMsg,setPopupMsg] = useState('')
    const [showpplAdded,setShowpplAdded] = useState([])
    const [curCollecName,setCurCollecName] = useState('')

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
    //TODO blank on all components

    return (
        <div>
            <Header data={{name:name,password:password,space:space,setSpace:setSpace,setAbout:setAbout,about:about,
                    addPeople:addPeople,setAddPeople:setAddPeople,spaceInfo:spaceInfo,setSpaceInfo:setSpaceInfo,
                    searchOptions:searchOptions,setSearchOptions:setSearchOptions,showAddedPeople:showAddedPeople,
                    setShowAddedPeople:setShowAddedPeople}}/>

            <Mainframe data={{loggedIn:loggedIn,token:token,name:name,email:email,password:password,space:space,
                createFolder:createFolder,setCreateFolder:setCreateFolder,createFile:createFile,blank:blank,
                setBlank:setBlank,setFdata:setFdata,setMediasrc:setMediasrc,setMediaWinName:setMediaWinName,
                setEditorWindow:setEditorWindow,setVideoWindow:setVideoWindow,setPhotoWindow:setPhotoWindow,
                setAudioWindow:setAudioWindow,popup:popup,setpopup:setpopup,setPopupMsg:setPopupMsg,setCurCollecName:setCurCollecName,
                setCreateFile:setCreateFile,uploadFile:uploadFile,setUploadFile:setUploadFile,uploadImage:uploadImage,
                setUploadImage:setUploadImage,createCollection:createCollection,setCreateCollection:setCreateCollection,
                curCollecName:curCollecName}}/>

            {about?<About data={{setAbout:setAbout,about:about,blank:blank,setBlank:setBlank}}/>:''}

            {addPeople?<AddPeople data={{setAddPeople:setAddPeople,addPeople:addPeople,blank:blank,setBlank:setBlank}}/>:''}

            {createFile? <CreateFile data={{createFile:createFile, setCreateFile:setCreateFile,blank:blank,setBlank:setBlank}}/> :''}

            {uploadImage? <UploadImage data={{uploadImage:uploadImage, setUploadImage:setUploadImage,blank:blank,setBlank:setBlank}}/> :''}

            {uploadFile? <FileUpload data={{uploadFile:uploadFile,setUploadFile:setUploadFile,blank:blank,setBlank:setBlank}}/> :''}

            {createFolder? <CreateFolder data={{createFolder:createFolder,setCreateFolder:setCreateFolder,blank:blank,setBlank:setBlank}}/> :''}

            {spaceInfo? <SpaceInfo data={{spaceInfo:spaceInfo,setSpaceInfo:setSpaceInfo,blank:blank,setBlank:setBlank}}/>:""}

            <SearchSettings data={{searchOptions:searchOptions,setSearchOptions:setSearchOptions}}/>

            {createCollection?<CreateCollection data={{createCollection:createCollection,setCreateCollection:setCreateCollection,blank:blank,setBlank:setBlank}}/> :''}

            {showAddedPeople?<ShowPeople data={{showAddedPeople:showAddedPeople,setShowAddedPeople:setShowAddedPeople,addPeople:addPeople,
            setAddPeople:setAddPeople,token:token,setShowpplAdded:setShowpplAdded}}/>:''}

            {editorWindow? <Editor data={{editorWindow:editorWindow,setEditorWindow:setEditorWindow,fdata:fdata,mediaWinName:mediaWinName}}/>:''}

            {videoWindow? <Video data={{videoWindow:videoWindow,setVideoWindow:setVideoWindow,mediasrc:mediasrc,mediaWinName:mediaWinName}}/> : ''}

            {photoWindow ? <Photo data={{photoWindow:photoWindow,setPhotoWindow:setPhotoWindow,mediasrc:mediasrc,mediaWinName:mediaWinName}}/>: ''}

            {audioWindow? <Audio data={{audioWindow:audioWindow,setAudioWindow:setAudioWindow,mediasrc:mediasrc,mediaWinName:mediaWinName}}/>:''}

            {popup?<Popup data={{popupMsg:popupMsg}}/>:''}

            {blank?<Blank/> :''}
        </div>
    );
}

export default App;
