import React, {useEffect, useState} from "react";
import './mainframe.css'
import ListViewHeader from "./list_view_header";
import Options from "./options";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Content from "./content";
import About from "../windows/about";

function Mainframe(){


    const [content,setContent] = useState('');
    const [imgFilter,setimgFilter] = useState(false);
    const [fileFilter,setfileFilter] = useState(false);
    const [folderFilter,setfolderFilter] = useState(false);
    const [videoFilter,setvideoFilter] = useState(false);
    const [audioFilter,setaudioFilter] = useState(false);



    useEffect(RelaodWithFilter,[imgFilter,fileFilter,folderFilter,videoFilter,audioFilter])

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
        // if (filterlist.length != 0) {
        //     let xhr = new XMLHttpRequest()
        //     xhr.onreadystatechange = function () {
        //         if (xhr.readyState == 4 && xhr.status == 200) {
        //             let filterFilerecieved = JSON.parse(this.response)
        //             cleanUp()
        //             ShowFiles(filterFilerecieved)
        //             eventListeners()
        //             showNav()
        //             if(masking=='Bin')
        //                 showTrashIcon()
        // }
        // }
        // let url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdstring}&token=${userdetails['token']}`
        // if(masking=='Bin')
        //     url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdstring}&token=${userdetails['token']}&bin=1`
        // else if(masking =='Favorites')
        //     url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdstring}&token=${userdetails['token']}&fav=1`
        // else if(masking == 'shared with me')
        //     url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdstring}&token=${userdetails['token']}&swm=1`
        // else if(masking == 'files-shared')
        //     url = `http://localhost:4000/reloadwithfilter?filterlist=${filterlist}&cwdstring=${cwdstring}&token=${userdetails['token']}&fs=1`
        // xhr.open('GET',url)
        // xhr.send()
        // } else {
        //     cleanUp()
        //     getFiles()
        // }
        console.log(filterlist)
        setContent(a=>filterlist)
    }






    return(
        <div id="mainframe">
            <Sidebar />
            <div id="container">
                <Navbar />
                <Options data={{imgfilter:imgFilter,videofilter:videoFilter,filefilter:fileFilter,
                        folderfilter:folderFilter, audiofilter:audioFilter,reload:RelaodWithFilter,
                    setimgFilter:setimgFilter,setfileFilter:setfileFilter,setfolderFilter:setfolderFilter,
                    setvideoFilter:setvideoFilter,setaudioFilter:setaudioFilter,content:content}}/>
                <ListViewHeader />
                <Content data={{data:content}}/>
            </div>
        </div>
    )
}
export default Mainframe