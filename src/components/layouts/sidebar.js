import React, {useEffect, useState} from "react";
import './sidebar.css'
import {render} from "react-dom";
function Sidebar(props){

    const [curmenu,setCurmenu] = useState('my-home')
    const [showNew, setShowNew]=useState(false)
    const [collectionList,setCollectionList] = useState(false)

    function initmenu() {
        document.getElementById(curmenu).style.backgroundColor='whitesmoke'
        document.getElementById(curmenu).style.color='#FFAB00'
    }
    function reinitmenu(cur){
        if (cur ==curmenu){}
        else {
            document.getElementById(curmenu).style.backgroundColor = 'white'
            document.getElementById(curmenu).style.color = '#4A148C'
        }
    }

    useEffect(initmenu,[curmenu])
    render()
    {
        let temp=[]
        for (let i = 0; i < props.data.collectionList.length; i++) {
            temp.push(props.data.collectionList[i])
            let ele = document.createElement('label')
            ele.className = 'col-listitems'
            ele.id=props.data.collectionList[i]+'p'
            let icon = document.createElement('i')
            icon.className = 'fal fa-minus cursor'
            icon.style.marginRight = '10px'
            icon.id = props.data.collectionList[i]+'rm'
            icon.style.color='#4A148C'
            icon.onclick = (e)=>{
                let xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function () {
                    if(xhr.readyState==4){
                        document.getElementById('usercollec').removeChild(document.getElementById(e.target.id.slice(0, -2)+'p'))
                    }
                }
                xhr.open('POST',`http://localhost:4000/removecol`)
                xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8')
                xhr.send(JSON.stringify({'name':e.target.id.slice(0,-2),'token':props.data.token}))
            }
            ele.appendChild(icon)
            let lbl = document.createElement('label')
            lbl.className = 'cursor'
            lbl.innerText = props.data.collectionList[i]
            lbl.id=props.data.collectionList[i]
            lbl.onclick = (e)=>{
                cwd = 'ROOT'
                cwdstring = 'ROOT'
                masking='Collections'
                browsehistory = ['collection#'+e.target.id]
                curcolname = e.target.id
                document.getElementById(curmenu).style.backgroundColor='whitesmoke'
                initmenu()
                props.data.cleanUp()
                props.data.getCollecFiles()
            }
            ele.appendChild(lbl)
            temp.append(ele)
            // document.getElementById('usercollec').appendChild(ele)
        }
        document.getElementById('my-home').onclick = (e)=>{
            if(collection){
                document.getElementById('collection-list').style.display='none'
                collection=0
            }
            cwd = 'ROOT'
            cwdstring = 'ROOT'
            masking='Home'
            document.getElementById(curmenu).style.backgroundColor='white'
            document.getElementById(curmenu).style.color ='#4A148C'
            curmenu = 'my-home'
            initmenu()
            browsehistory = ['ROOT']
            cleanUp()
            getFiles()
        }
        document.getElementById('favorites').onclick = (e)=>{
            if(collection){
                document.getElementById('collection-list').style.display='none'
                collection=0
            }
            cwd = 'ROOT'
            cwdstring = 'ROOT'
            masking='Favorites'
            browsehistory = ['Favorites']
            document.getElementById(curmenu).style.backgroundColor='white'
            document.getElementById(curmenu).style.color ='#4A148C'
            curmenu = 'favorites'
            initmenu()
            cleanUp()
            getFavfiles()
        }
        document.getElementById('share').onclick = ()=>{
            if(collection){
                document.getElementById('collection-list').style.display='none'
                collection=0
            }
            getnewshares(1)
            cwd = 'ROOT'
            cwdstring = 'ROOT'
            masking='Shared with me'
            document.getElementById('shareno').innerText ='0'
            document.getElementById('shareno').style.visibility='hidden'
            browsehistory = ['Shared with me']
            document.getElementById(curmenu).style.backgroundColor='white'
            document.getElementById(curmenu).style.color ='#4A148C'
            curmenu = 'share'
            initmenu()
            cleanUp()
            getsharefiles()
        }


        document.getElementById('bin').onclick = (e)=>{
            if(collection){
                document.getElementById('collection-list').style.display='none'
                collection=0
            }
            cwd = 'ROOT'
            cwdstring = 'ROOT'
            masking='Bin'
            browsehistory = ['Bin']
            document.getElementById(curmenu).style.backgroundColor='white'
            document.getElementById(curmenu).style.color ='#4A148C'
            curmenu = e.target.id
            initmenu()
            cleanUp()
            getBinFiles()
        }
        document.getElementById('files-shared').onclick = (e)=>{
            if(collection){
                document.getElementById('collection-list').style.display='none'
                collection=0
            }
            cwd = 'ROOT'
            cwdstring = 'ROOT'
            masking='Files-Shared'
            browsehistory = ['Files-Shared']
            document.getElementById(curmenu).style.backgroundColor='white'
            document.getElementById(curmenu).style.color ='#4A148C'
            curmenu = e.target.id
            initmenu()
            cleanUp()
            getfilesshared()
        }

        document.getElementById('collection').onclick = (e)=>{
            if(collection){
                document.getElementById('collection-list').style.display='none'
                collection=0
            }
            else{
                document.getElementById('collection-list').style.display='block'
                collection=1
                document.getElementById(curmenu).style.backgroundColor='white'
                document.getElementById(curmenu).style.color ='#4A148C'
                curmenu = e.target.id
                initmenu()

            }

        }
        return (
            <div id="menu">
                <label id="add-new" className="sidelines" onClick={() => {
                    setShowNew(!showNew)
                }}>
                    <i className="fal fa-plus"
                       style={{color: "#fd273a", transform: "scale(1.2)", margin: "0 10px 0 0"}}></i>
                    <span style={{fontWeight: "bold"}}>New</span></label>
                {showNew ? <div id="add-new-child">
                    <label id="create-folder" onClick={() => {
                        props.data.setCreateFolder(!props.data.createFolder);
                        setShowNew(!showNew)
                    }}>
                        <i className="fal fa-folder-plus" style={{marginRight: "10px"}}></i>New Folder</label>
                    <label id="upload-image" onClick={() => {
                        props.data.setUploadImage(!props.data.uploadImage);
                        setShowNew(!showNew)
                    }}>
                        <i className="fal fa-image" style={{marginRight: "10px"}}></i>Media Upload</label>
                    <label id="upload-file" onClick={() => {
                        props.data.setUploadFile(!props.data.uploadFile);
                        setShowNew(!showNew)
                    }}>
                        <i className="fal fa-file-upload" style={{marginRight: "10px"}}></i>File Upload</label>
                    <label id="create-file" onClick={() => {
                        props.data.setCreateFile(!props.data.createFile);
                        setShowNew(!showNew)
                    }}>
                        <i className="fal fa-file-plus" style={{marginRight: "10px"}}></i>Create File</label>
                </div> : ''}
                <label id="my-home" className="sidelines" onClick={() => {
                    reinitmenu('curmenu');
                    setCurmenu('my-home');
                    props.data.setMasking('Home')
                }}>
                    <i className="fal fa-hdd" style={{transform: "scale(1.2)", margin: "0 10px 0 0"}}></i> Home</label>
                <label id="favorites" className="sidelines" onClick={() => {
                    reinitmenu('favorites');
                    setCurmenu('favorites');
                    props.data.setMasking('Favorites')
                }}>
                    <i className="fal fa-star"
                       style={{transform: "scale(1.2)", margin: "0 10px 0 0"}}></i>Favorites</label>
                <label id="bin" className="sidelines" onClick={() => {
                    reinitmenu('bin');
                    setCurmenu('bin');
                    props.data.setMasking('Bin')
                }}>
                    <i className="fal fa-trash" style={{transform: "scale(1.2)", margin: "0 10px 0 0"}}></i>Bin</label>
                <label id="share" className="sidelines" onClick={() => {
                    reinitmenu('share');
                    setCurmenu('share');
                    props.data.setMasking('Shared with me')
                }}>
                    <i className="fal fa-share-alt" style={{transform: "scale(1.2)", margin: "0 10px 0 0"}}></i>
                    Shared with me
                    <label id="shareno" style={{
                        height: "5px", width: "5px", padding: "0 5px", visibility: "hidden",
                        borderRadius: "50px", backgroundColor: "#14070e", color: "white"
                    }}></label>
                </label>
                <label id="files-shared" className="sidelines" onClick={() => {
                    reinitmenu('files-shared');
                    setCurmenu('files-shared');
                    props.data.setMasking('Files-Shared')
                }}>
                    <i className="fal fa-share" style={{transform: "scale(1.2)", margin: "0 10px 0 0"}}></i>
                    Files Shared
                </label>
                <label id="collection" className="sidelines" onClick={() => {
                    reinitmenu('collection');
                    setCurmenu('collection');
                    setCollectionList(!collectionList);
                    props.data.setMasking('collection')
                }}>
                    <i className="fal fa-tags" style={{transform: "scale(1.2)", margin: "0 10px 0 0"}}></i>
                    Collections
                </label>
                {collectionList ? <div id="collection-list">
                    <div id="usercollec"></div>
                    <div id="addnewcoll" className="col-listitems" onClick={() => {
                        props.data.setCreateCollection(!props.data.createCollection)
                    }}>{temp}
                        <i className="fal fa-plus" style={{margin: "0 10px 0 0"}}></i>New
                    </div>
                </div> : ''}
            </div>
        )
    }
}

export default Sidebar