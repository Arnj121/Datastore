import React, {useEffect, useState} from "react";
import './mainframe.css'
import ListViewHeader from "./list_view_header";
import Options from "./options";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Content from "./content";

function Mainframe(props){

    const [imgFilter,setimgFilter] = useState(false);
    const [fileFilter,setfileFilter] = useState(false);
    const [folderFilter,setfolderFilter] = useState(false);
    const [videoFilter,setvideoFilter] = useState(false);
    const [audioFilter,setaudioFilter] = useState(false);
    const [view,setView]=useState(false)
    const [rndids,setrndids]=useState({})
    const [fileRecieved,setFileReceived] = useState({})
    const [favFileRecieved,setFavFileReceived] = useState({})
    const [shareFileRecieved,setShareFileReceived] = useState({})
    const [binFileRecieved,setBinFileReceived] = useState({})
    const [effectiveFile,setEffectiveFile] = useState({})
    const [rndlist,setrndlist]=useState([])
    const [info,setInfo]=useState({})
    const [currentSelected,setCurrentSelected] = useState('')
    const [contextMenu,setContextMenu] = useState(false)
    const [fullscreen,setFullscreen] = useState(false)
    const [masking,setMasking] = useState('Home')
    const [cwd,setCwd] = useState('')
    const [cwdString,setCwdString] = useState('')
    const [collectionList,setCollectionList] = useState([])
    const [fileDblClick,setFileDblClick]=useState('')
    const [selectFile,setSelectFile] = useState(false)
    const [selectedFileList,setSelectedFileList] = useState([])
    const [filterFileRecieved,setFilterFileRecieved] = useState([])
    const [browseHistory,setBrowseHistory] = useState([])
    const [trashIds,setTrashIds] = useState({})
    const [shareIds,setShareIds] = useState({})

    useEffect(()=>{
        if (view){
            //TODO change into list
            document.getElementById('gallery-view').style.color='#d1d1d0'
            document.getElementById('list-view').style.color='#FF4081'
            document.getElementById('container-lvl2').style.flexDirection  = 'column'
            document.getElementById('container-lvl2').style.flexWrap  = 'nowrap'

        }
        else{
            //TODO change into grid
            document.getElementById('gallery-view').style.color='#FF4081'
            document.getElementById('list-view').style.color='#d1d1d0'
            document.getElementById('container-lvl2').style.flexWrap = 'wrap'
            document.getElementById('container-lvl2').style.removeProperty('flexDirection')
        }
    },[view])
    useEffect(RelaodWithFilter,[imgFilter,fileFilter,folderFilter,videoFilter,audioFilter])
    useEffect(initCollections)

    function cleanUp(){
        setrndids({})
        setrndlist([])
        setCurrentSelected('')
        setInfo({})
        setContextMenu(false)
        setFullscreen(false)
    }
    function getFiles(){
        if(masking == 'Favorites'){
            getFavfiles()
            showremovefavicon()
        }
        else if(masking == 'collection')
            getCollecFiles()
        else if (masking=='Shared with me')
            getsharefiles()
        else if(masking=='Bin'){
            getBinFiles()
        }
        else if(masking == 'Files-Shared')
            getfilesshared()
        else if(masking == 'Home') {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    setFileReceived(JSON.parse(this.response))
                    console.log(fileRecieved)
                    eventListeners()
                    showNav()
                }
            }
            xhr.open('GET', `http://localhost:4000/listallfiles?token=${props.data.token}&cwd=${cwd}&cwdstring=${cwdString}`)
            xhr.send()
        }
    }
    function getFavfiles(){
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                setFavFileReceived(JSON.parse(this.response))
                setEffectiveFile(JSON.parse(this.response))
                showremovefavicon()
                eventListeners()
                showNav()
            }
        }
        xhr.open('GET', `http://localhost:4000/getfav?token=${props.data.token}`)
        xhr.send()
    }
    function getsharefiles() {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4 && xhr.status==200){
                setFileReceived(JSON.parse(this.response))
                setEffectiveFile(JSON.parse(this.response))
                eventListeners()
                showNav()
            }
        }
        xhr.open('GET',`http://localhost:4000/getsharefile?token=${props.data.token}&only=all`)
        xhr.send()
    }
    function getCollecFiles() {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState==4 && xhr.status == 200){
                setFileReceived(JSON.parse(xhr.response))
                setEffectiveFile(JSON.parse(this.response))
                eventListeners()
                showremovefromcol()
                showNav()
            }
        }
        xhr.open('GET',`http://localhost:4000/listcollection?token=${props.data.token}&cname=${props.data.curCollecName}`)
        xhr.send()
    }
    function getfilesshared() {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4 && xhr.status==200){
                setShareFileReceived(JSON.parse(this.response))
                setEffectiveFile(JSON.parse(this.response))
                showStopSharingicon()
                eventListeners()
                showNav()
            }
        }
        xhr.open('GET',`http://localhost:4000/getfilesshared?token=${props.data.token}`)
        xhr.send()
    }
    function getBinFiles() {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4 && xhr.status==200){
                setBinFileReceived(JSON.parse(this.response))
                setEffectiveFile(JSON.parse(this.response))
                eventListeners()
                showNav()
                showTrashIcon()
            }
        }
        xhr.open('GET',`http://localhost:4000/listbinfiles?token=${props.data.token}&bin=1`)
        xhr.send()
    }
    function RelaodWithFilter() {
        let filterlist = ''
        if (imgFilter)
            filterlist += 'image-filter;'
        if (fileFilter)
            filterlist += 'file-filter;'
        if (folderFilter)
            filterlist += 'folder-filter;'
        if (videoFilter)
            filterlist += 'video-filter;'
        if (audioFilter)
            filterlist += 'audio-filter;'
        if (filterlist.length != 0) {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    setFilterFileRecieved(JSON.parse(this.response))
                    cleanUp()
                    eventListeners()
                    showNav()
                    if(masking=='Bin')
                        showTrashIcon()
                }
            }
            let url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdString}&token=${props.data.token}`
            if(masking=='Bin')
                url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdString}&token=${props.data.token}&bin=1`
            else if(masking =='Favorites')
                url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdString}&token=${props.data.token}&fav=1`
            else if(masking == 'shared with me')
                url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdString}&token=${props.data.token}&swm=1`
            else if(masking == 'files-shared')
                url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdString}&token=${props.data.token}&fs=1`
            xhr.open('GET',url)
            xhr.send()
        }
        else {
            cleanUp()
            getFiles()
        }
    }
    function showTrashIcon() {
        let rndidskeys = Object.keys(rndids)
        let trashids={}
        for(let i=0;i<rndidskeys.length;i++){
            let id = Math.floor(Math.random()*1000).toString()+'tra'
            trashids[id] = rndidskeys[i]
            let ele = document.createElement('i')
            ele.className = 'fal fa-trash-restore-alt cursor'
            ele.id=id
            ele.style.transform = 'scale(1.5)'
            ele.style.marginLeft = '10px'
            ele.style.marginTop = '10px'
            ele.style.color = '#1A237E'
            ele.onclick = (e)=>{
                let filename = rndids[trashids[e.target.id]]['name']
                let xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        delete rndids[trashIds[e.target.id]]
                        delete info[trashIds[e.target.id]]
                        delete rndlist[rndlist.indexOf(trashIds[e.target.id])]
                        document.getElementById('container-lvl2').removeChild(document.getElementById(trashIds[e.target.id]).parentElement)
                        displaypopup(`'${filename}' restored`)
                        if(Object.keys(rndids).length==0){
                            let ele = document.createElement('label')
                            if(view ==0) {
                                ele.innerText = 'Nothing here'
                                ele.id ='nothing'
                                ele.style.fontSize = 'large'
                                ele.style.margin = 'auto'
                                setEffectiveFile({})
                                // document.getElementById('container-lvl2').appendChild(ele)
                            }
                            else{
                                ele.innerText = 'Nothing here'
                                ele.id ='nothing'
                                ele.style.fontSize = 'large'
                                ele.style.margin = 'auto'
                                setEffectiveFile({})
                                // document.getElementById('container-lvl2').appendChild(ele)
                            }
                        }
                    }
                }
                xhr.open('POST',`http://localhost:4000/restorefile?token=${props.data.token}`)
                xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8')
                xhr.send(JSON.stringify({'filename':filename,'cwdstring':info[trashids[e.target.id]]['cwd']}))
            }
            document.getElementById(rndidskeys[i]).appendChild(ele)
        }
        setTrashIds(trashids)
    }
    function initCollections() {
        if(props.data.token.length!=0) {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let res = JSON.parse(this.response)
                    res = res[0];
                    setCollectionList(res)
                }
            }
            xhr.open('GET', `http://localhost:4000/getcollection?token=${props.data.token}`)
            xhr.send()
        }
    }
    function addcheck(id){
        if(selectedFileList.includes(id)){
            setSelectedFileList(selectedFileList.slice(0,selectedFileList.indexOf(id)).concat(selectedFileList.slice(selectedFileList.indexOf(id)+1,selectedFileList.length-1)))
            if(view ==0)
                try {document.getElementById(id).removeChild(document.getElementById(id).getElementsByTagName('i')[0])}catch (e) {}
            else{
                document.getElementById(id).style.backgroundColor = 'white'
            }

        }
        else {
            if(view==0) {
                let ele = document.createElement('i')
                ele.className = 'fal fa-check-square fa-2x'
                let t=selectedFileList;t.push(id)
                setSelectedFileList(t)
                ele.style.color = '#3FFF4D'
                ele.style.margin= '10px 0 0 10px'
                //ele.style.transform = 'scale(3)'
                try {document.getElementById(id).appendChild(ele)} catch (e) {}
            }
            else{
                let t=selectedFileList;t.push(id)
                setSelectedFileList(t)
                document.getElementById(id).parentElement.style.backgroundColor = 'whitesmoke'
                document.getElementById(id).parentElement.style.borderRadius = '5px'
            }
        }
    }
    function eventListeners(all=1,work=0) {
        let key = Object.keys(rndids)
        if(work != 0){
            key = [work]
        }
        for(let i=0;i<key.length;i++) {
            let id = key[i]
            document.getElementById(id).onclick = (e) => {
                if(selectFile==1){
                    addcheck(e.target.id)
                }
                else {
                    if (currentSelected == '') {
                        setCurrentSelected(e.target.id)
                        if(view ==0)
                            document.getElementById(currentSelected).parentElement.style.opacity = '0.8'
                        else {
                            document.getElementById(currentSelected).parentElement.style.backgroundColor = 'whitesmoke'
                        }
                    } else if (currentSelected == e.target.id) {
                        if(view ==0)
                            document.getElementById(currentSelected).parentElement.style.opacity='1';
                        else{
                            document.getElementById(currentSelected).parentElement.style.backgroundColor = 'white'
                        }
                        setCurrentSelected('')

                    } else {
                        if(view == 0)
                            document.getElementById(currentSelected).parentElement.style.opacity='1';
                        else{
                            document.getElementById(currentSelected).parentElement.style.backgroundColor = 'white'
                            document.getElementById(currentSelected).parentElement.style.borderRadius='0'
                        }
                        setCurrentSelected(e.target.id)
                        if(view ==0 )
                            document.getElementById(currentSelected).parentElement.style.opacity='0.8';
                        else{
                            document.getElementById(currentSelected).parentElement.style.backgroundColor = 'whitesmoke'
                            document.getElementById(currentSelected).parentElement.style.borderRadius='5px'
                        }
                    }
                }
            }
            document.getElementById(id).oncontextmenu = (e) => {
                e.preventDefault()
                if(selectFile==0 && masking!='Bin' && masking!='shared with me' && masking!='Favorites' && masking!='Files-Shared') {
                    if (currentSelected == '') {
                        setContextMenu(true)
                        setCurrentSelected(e.target.id)
                        rndids[currentSelected]['ow'] = 1
                        document.getElementById('right-click-contextmenu').style.top = e.clientY.toString() + 'px'
                        document.getElementById('right-click-contextmenu').style.left = e.clientX.toString() + 'px'
                        document.getElementById('right-click-contextmenu').style.visibility = 'visible'
                        if(view==0)
                            document.getElementById(currentSelected).parentElement.style.opacity = '0.8'
                        else
                            document.getElementById(currentSelected).parentElement.style.backgroundColor = 'whitesmoke'
                    } else {
                        setContextMenu(true)
                        if(view==0)
                            document.getElementById(currentSelected).parentElement.style.opacity = '1'
                        else
                            document.getElementById(currentSelected).parentElement.style.backgroundColor ='white'
                        rndids[currentSelected]['ow'] = 0
                        document.getElementById('right-click-contextmenu').style.top = e.clientY.toString() + 'px'
                        document.getElementById('right-click-contextmenu').style.left = e.clientX.toString() + 'px'
                        document.getElementById('right-click-contextmenu').style.visibility = 'visible';
                        setCurrentSelected(e.target.id)
                        rndids[currentSelected]['ow'] = 1
                        if(view==0)
                            document.getElementById(currentSelected).parentElement.style.opacity = '0.8'
                        else
                            document.getElementById(currentSelected).parentElement.style.backgroundColor = 'whitesmoke'
                    }
                }
            }
            document.getElementById(id).ondblclick = (e) => {
                if(!selectFile) {
                    props.data.setBlank(true)
                    let filename = rndids[e.target.id]['name']
                    if (rndids[e.target.id]['type'] == 'file') {
                        setFileDblClick(e.target.id)
                        let url = `http://localhost:4000/loadfile?filename=${filename}&token=${info[e.target.id]['owner']}&cwdstring=${cwdString}`
                        let xhr = new XMLHttpRequest()
                        let data = ''
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                data = xhr.responseText
                                data = data.replaceAll('\n', '<br>').replaceAll(' ', '&nbsp')
                                props.data.setEditorWindow(true)
                                props.data.setFdata(data)
                                props.data.setMediaWinName(filename)
                                document.getElementById('editor-window').style.visibility = 'visible'
                            }
                        }
                        xhr.open('GET', url)
                        xhr.send()
                    } else if (rndids[e.target.id]['type'] == 'image') {
                        props.data.setPhotoWindow(true)
                        props.data.setMediasrc(info[e.target.id]['src'])
                        props.data.setMediaWinName(filename)
                    }
                    else if(rndids[e.target.id]['type'] =='video'){
                        props.data.setVideoWindow(true)
                        props.data.setMediasrc(info[e.target.id]['src'])
                        props.data.setMediaWinName(filename)
                        document.getElementById('video-data').play()
                    }
                    else if(rndids[e.target.id]['type'] == 'audio'){
                        props.data.setAudioWindow(true)
                        props.data.setMediasrc(info[e.target.id]['src'])
                        props.data.setMediaWinName(info[e.target.id]['name'])
                        document.getElementById('audio-data').play()
                    }
                    else if (rndids[e.target.id]['type'] == 'dir') {
                        if (masking == 'Favorites') {
                            setMasking('Home')
                            setCwdString(rndids[e.target.id]['cwd'])
                            let b=browseHistory;b.push(rndids[e.target.id]['name'])
                            setBrowseHistory(b)
                            cleanUp()
                            getFiles()
                        } else if (masking == 'Collections') {
                            setMasking('Home')
                            setCwdString(rndids[e.target.id]['cwd'])
                            let b=browseHistory;b.push(rndids[e.target.id]['name'])
                            setBrowseHistory(b)
                            cleanUp()
                            getFiles()
                        } else if (masking == 'Shared with me') {
                            setMasking('Home')
                            setCwdString(rndids[e.target.id]['cwd'])
                            let b=browseHistory;b.push(rndids[e.target.id]['name'])
                            setBrowseHistory(b)
                            cleanUp()
                            getFiles()
                        } else if(masking =='Bin'){
                            setMasking('Home')
                            setCwdString(rndids[e.target.id]['cwd'])
                            let b=browseHistory;b.push(rndids[e.target.id]['name'])
                            setBrowseHistory(b)
                            cleanUp()
                            getFiles()
                        }
                        else {
                            setCwd(rndids[e.target.id]['name'])
                            setCwdString(cwdString+'-' + cwd)
                            let b=browseHistory;b.push(rndids[e.target.id]['name'])
                            setBrowseHistory(b)
                            cleanUp()
                            getFiles()
                        }
                        props.data.setBlank(false)
                    }
                }
            }
        }
    }
    function showremovefavicon(){
        let keys = Object.keys(rndids)
        for(let i=0;i<keys.length;i++){
            let ele = document.createElement('i')
            ele.className = 'fal fa-minus cursor'
            ele.style.margin = '10px 0 0 15px'
            ele.style.color = '#AA00FF'
            ele.style.transform  = 'scale(1.5)'
            ele.id = keys[i]+'fav'
            ele.onclick = (e)=>{
                let id = e.target.id.slice(0,-3)
                let xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function () {
                    if(xhr.readyState == 4){
                        document.getElementById('container-lvl2').removeChild(document.getElementById(id).parentElement)
                        displaypopup(`'${info[id]['name']}' removed from favorites`) //TODO
                        delete rndids[id]           //TODO
                        delete info[id]
                        delete rndlist[rndlist.indexOf(id)]
                        if(Object.keys(rndids).length==0){
                            let ele = document.createElement('label')
                            ele.innerText = 'Nothing here'
                            ele.style.fontSize='large'
                            ele.id ='nothing'
                            ele.style.margin ='auto'
                            document.getElementById('container-lvl2').appendChild(ele)
                        }
                    }
                }
                xhr.open('POST','http://localhost:4000/removefav')
                xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8')
                xhr.send(JSON.stringify({'token':props.data.token,'cwd':info[id]['cwd'],'name':info[id]['name']}))
            }
            document.getElementById(keys[i]).appendChild(ele)
        }
    }
    function showNav(){
        // let abskeys = Object.keys(absoluteids)
        // for(let i=0;i<abskeys.length;i++){
        //     document.getElementById('nav-display').removeChild(document.getElementById(absoluteids[abskeys[i]]))
        // }
        // absoluteids=[];
        // let splitcwdstring = cwdstring.split('-')
        // for(let i=0;i<splitcwdstring.length;i++){
        //     let name = document.createElement('label')
        //     let j = document.createElement('i')
        //     let text;
        //     if(splitcwdstring[i] == 'ROOT')
        //         text = masking
        //     else
        //         text = splitcwdstring[i]
        //     name.innerText=text
        //     let nameid=splitcwdstring.slice(0,i+1).join('-')
        //     name.id=text == masking?'ROOT':nameid
        //     name.className = 'links'
        //     j.className='fal fa-chevron-right arrow'
        //     let rnd= Math.floor(Math.random()*1000).toString()+'abc'
        //     absoluteids[nameid] = text ==masking?'ROOT':nameid
        //     rnd = Math.floor(Math.random()*1000).toString()+'abc'
        //     j.id=rnd
        //     absoluteids[rnd]=rnd
        //     name.addEventListener('click',(e)=>{
        //         cwdstring=e.target.id;//it has the id to where the cut-off must be perfomred
        //         let cwdstringsplit = cwdstring.split('-')
        //         cwd = cwdstringsplit[cwdstringsplit.length-1]
        //         cleanUp();
        //         getFiles()})
        //     document.getElementById('nav-display').appendChild(name)
        //     document.getElementById('nav-display').appendChild(j)
        // }
    }
    function displaypopup(msg){
        function hide(){
            document.getElementById('pop-up').style.animationName='hidepopup'
            props.data.setpopup(false)
        }

        if(props.data.popup){
            clearInterval(hide)
            document.getElementById('pop-up').style.animationName='hidepopup'
            props.data.setpopup(false)
            displaypopup(msg)
        }
        else{
            props.data.setpopup(true)
            props.data.setPopupMsg(msg)
            document.getElementById('pop-up').style.animationName='showpopup'
            setTimeout(hide,5000)
        }

    }
    function showremovefromcol() {
        let keys = Object.keys(rndids)
        for(let i=0;i<keys.length;i++){
            let ele = document.createElement('i')
            ele.className = 'fal fa-minus cursor'
            ele.style.color = '#AA00FF'
            ele.style.transform  = 'scale(1.5)'
            ele.id = keys[i]+'col'
            ele.style.marginLeft ='10px'
            ele.onclick = (e)=>{
                let id = e.target.id.slice(0,-3)
                let xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function () {
                    if(xhr.readyState == 4){
                        document.getElementById('container-lvl2').removeChild(document.getElementById(id).parentElement)
                        displaypopup(`'${info[id]['name']}' removed from ${props.data.curCollecName}`)
                        delete rndids[id]
                        delete info[id]
                        delete rndlist[rndlist.indexOf(id)]
                        if(Object.keys(rndids).length==0){
                            let ele = document.createElement('label')
                            ele.innerText = 'Nothing here'
                            ele.style.fontSize='large'
                            ele.id ='nothing'
                            ele.style.margin ='auto'
                            document.getElementById('container-lvl2').appendChild(ele)
                        }
                    }
                }
                xhr.open('POST','http://localhost:4000/removefromcol')
                xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8')
                xhr.send(JSON.stringify({'token':props.data.token,'cwd':info[id]['cwd'],'name':info[id]['name'],'cname':props.data.curCollecName}))
            }
            document.getElementById(keys[i]).appendChild(ele)
        }
    }
    function showStopSharingicon() {
        let rndidskeys = Object.keys(rndids),shareids={}
        for(let i=0;i<rndidskeys.length;i++){
            let id = Math.floor(Math.random()*1000).toString()+'stsh'
            shareids[id] = rndidskeys[i]
            let ele = document.createElement('label')
            ele.id=id
            ele.className='cursor'
            ele.innerText='Stop Sharing'
            ele.style.padding='0 10px 5px 10px'
            ele.style.backgroundColor='#252524'
            ele.style.color = 'white'
            ele.onclick = (e)=>{
                let filename = rndids[shareids[e.target.id]]['name']
                let xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        delete rndids[shareIds[e.target.id]]
                        delete info[shareIds[e.target.id]]
                        delete rndlist[rndlist.indexOf(shareIds[e.target.id])]
                        document.getElementById('container-lvl2').removeChild(document.getElementById(shareids[e.target.id]).parentElement)
                        displaypopup(`'${filename}' stopped sharing`)
                        if(Object.keys(rndids).length==0){
                            let ele = document.createElement('label')
                            ele.innerText = 'Nothing here'
                            ele.style.fontSize='large'
                            ele.id ='nothing'
                            ele.style.margin ='auto'
                            document.getElementById('container-lvl2').appendChild(ele)
                        }
                    }
                }
                xhr.open('POST',`http://localhost:4000/stopsharing?token=${props.data.token}`)
                xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8')
                xhr.send(JSON.stringify({'filename':filename,'cwdstring':info[shareIds[e.target.id]]['cwd']}))
            }
            document.getElementById(rndidskeys[i]).appendChild(ele)
        }
        setShareIds(shareids)
    }

    return(
        <div id="mainframe">
            <Sidebar data={{createFolder:props.data.createFolder,setCreateFolder:props.data.setCreateFolder,token:props.data.token,
                createFile:props.data.createFile, setCreateFile:props.data.setCreateFile,uploadFile:props.data.uploadFile,
                setUploadFile:props.data.setUploadFile,uploadImage:props.data.uploadImage,getCollecFiles:getCollecFiles,
                setUploadImage:props.data.setUploadImage,createCollection:props.data.createCollection,cleanUp:cleanUp,
                getFiles:getFiles,getFavfiles:getFavfiles,getsharefiles:getsharefiles,getBinFiles:getBinFiles,getfilesshared:getfilesshared,
                setCreateCollection:props.data.setCreateCollection,setMasking:setMasking,collectionList:collectionList,
                setCwdString:setCwdString,setCwd:setCwd,setBrowseHistory:setBrowseHistory,setCurCollecName:props.data.setCurCollecName}}/>
            <div id="container">
                <Navbar />
                <Options data={{imgfilter:imgFilter,videofilter:videoFilter,filefilter:fileFilter,
                        folderfilter:folderFilter, audiofilter:audioFilter,reload:RelaodWithFilter,
                    setimgFilter:setimgFilter,setfileFilter:setfileFilter,setfolderFilter:setfolderFilter,
                    setvideoFilter:setvideoFilter,setaudioFilter:setaudioFilter,view:view,
                    setView:setView}}/>
                {view? <ListViewHeader />:''}
                <Content data={{effectiveFile:effectiveFile,view:view,setrndids:setrndids,setInfo:setInfo,setrndlist:setrndlist,
                        eventListeners:eventListeners}}/>
            </div>
        </div>
    )
}
export default Mainframe