import React from "react";
import './content.css'
import {render} from "react-dom";

function Content(props){

    function createImagelvlElement(obj){
        let rnd = Math.floor(Math.random()*1000).toString()+'rnd'
        let ele= document.createElement('div')
        let trans = document.createElement('div')
        trans.className='trans'
        trans.id=rnd
        ele.className = `images`
        let img = document.createElement('img')
        img.src = obj['src']
        img.className = 'src'
        let name = document.createElement('label')
        name.innerText = obj['name']
        name.className = `file-lbl`
        ele.append(img,name,trans)
        // document.getElementById('container-lvl2').appendChild(ele)
        let rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'image','cwd':obj['cwd']}
        let info = {'rnd':rnd,'name':obj['name'],'type':obj['type'],'src':obj['src'],'size':obj['size'],
            'lastmod':obj['lastmod'],'mimetype':obj['mimetype'],'owner':obj['owner'],'cwd':obj['cwd']}
        return [ele,rndid,info]
    }
    function createFilelvlElement(obj) {
        let rnd = Math.floor(Math.random()*1000).toString()+'rnd'

        let ele= document.createElement('div')
        let trans = document.createElement('div')

        trans.className='trans'
        ele.className = `files`

        let encode = ['py','java','c','cpp','css','js','html','swift','rb','pynb','json','sass']
        let img = document.createElement('label')
        let i = document.createElement('i')
        let splitted = obj['name'].split('.');
        let split = splitted[splitted.length-1];
        if(split == 'txt') i.className = `fal fa-file-alt `
        else if(encode.includes(split)) i.className = `fal fa-file-code `
        else if(['zip','rar'].includes(split)) i.className ='fal fa-file-archive '
        else if(['mp3','m4a'].includes(split)) i.className = 'fal fa-file-audio '

        img.style.display = 'flex'
        img.style.justifyContent = 'center'
        img.style.position='relative'
        i.style.position='absolute'
        i.style.top = '50%'
        trans.id=rnd
        i.style.transform = 'scale(4)'
        i.style.color='#FF5252'
        img.className='src'
        img.appendChild(i)

        let name = document.createElement('label')
        name.innerText = obj['name']
        name.className = `file-lbl`

        //info.appendChild(name)
        ele.append(img,name,trans)
        // document.getElementById('container-lvl2').appendChild(ele)
        let rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'file','cwd':obj['cwd']}
        let info = {'rnd':rnd,'name':obj['name'],'type':obj['type'],'size':obj['size'],'lastmod':obj['lastmod'],'mimetype':obj['mimetype'],'owner':obj['owner'],'cwd':obj['cwd']}
        return [ele,rndid,info]

    }
    function createDirlvlElement(obj) {
        let rnd = Math.floor(Math.random()*1000).toString()+'rnd'
        let ele= document.createElement('div')
        let trans = document.createElement('div')

        trans.className='trans'
        ele.className = `files`

        let img = document.createElement('label')
        let i = document.createElement('i')
        i.className = `fal fa-folder fa-4x`
        img.style.display = 'flex'
        img.style.justifyContent = 'center'
        trans.id=rnd
        i.style.color='#448AFF'
        i.style.margin='auto'
        img.appendChild(i)
        img.className='src'
        let name = document.createElement('label')
        name.innerText = obj['name']
        name.className = `file-lbl`
        ele.append(img,name,trans)

        // document.getElementById('container-lvl2').appendChild(ele)
        let rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'dir','cwd':obj['cwd']}
        let info = {'rnd':rnd,'name':obj['name'],'created':obj.created,'type':'dir','mimetype':'dir'}

        return [ele,rndid,info]
    }
    function createVideolvlElement(obj) {
        let rnd = Math.floor(Math.random()*1000).toString()+'rnd'
        let ele= document.createElement('div')
        let trans = document.createElement('div')

        trans.className='trans'
        ele.className = `files`

        let img = document.createElement('label')
        let i = document.createElement('i')
        i.className = `fal fa-file-video fa-4x`
        img.style.display = 'flex'
        img.style.justifyContent = 'center'
        trans.id=rnd
        i.style.color='#FFAB00'
        i.style.margin='auto'
        img.appendChild(i)
        img.className='src'
        let name = document.createElement('label')
        name.innerText = obj['name']
        name.className = `file-lbl`
        ele.append(img,name,trans)

        // document.getElementById('container-lvl2').appendChild(ele)
        let rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'video','cwd':obj['cwd']}
        let info = {'rnd':rnd,'name':obj['name'],'type':obj['type'],'src':obj['src'],'size':obj['size'],'lastmod':obj['lastmod'],'mimetype':obj['mimetype'],'owner':obj['owner'],'cwd':obj['cwd']}

        return [ele,rndid,info]
    }
    function createAudiolvlElement(obj) {
        let rnd = Math.floor(Math.random()*1000).toString()+'rnd'
        let ele= document.createElement('div')
        let trans = document.createElement('div')

        trans.className='trans'
        ele.className = `files`

        let img = document.createElement('label')
        let i = document.createElement('i')
        i.className = `fal fa-file-audio fa-4x`
        img.style.display = 'flex'
        img.style.justifyContent = 'center'
        trans.id=rnd
        i.style.color='#E040FB'
        i.style.margin='auto'
        img.appendChild(i)
        img.className='src'
        let name = document.createElement('label')
        name.innerText = obj['name']
        name.className = `file-lbl`
        ele.append(img,name,trans)

        // document.getElementById('container-lvl2').appendChild(ele)
        let rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'audio','cwd':obj['cwd']}
        let info = {'rnd':rnd,'name':obj['name'],'type':obj['type'],'src':obj['src'],'size':obj['size'],'lastmod':obj['lastmod'],'mimetype':obj['mimetype'],'owner':obj['owner'],'cwd':obj['cwd']}
        return [ele,rndid,info]
    }
    function createListlvlElement(obj){
        let rnd = Math.floor(Math.random()*1000).toString()+'rnd'
        let ele= document.createElement('div')
        let trans = document.createElement('div')
        let icon = document.createElement('i');icon.style.margin = '0 10px 0 10px'
        let name = document.createElement('label')
        let date = document.createElement('label')
        let size = document.createElement('label');
        let type = document.createElement('label')

        trans.className='translist'
        ele.className = `list`
        trans.id=rnd

        name.innerText = obj['name']
        name.className = `name`
        name.style.gridArea = '1/1/1/2'

        try {
            date.innerText = obj['lastmod'].slice(0, 15)
        }catch (e) {
            date.innerText = obj['created'].slice(0, 15)
        }
        date.style.marginLeft='70px'
        date.style.gridArea = '1/2/1/3'
        ele.appendChild(date)
        try {
            let a, s = obj['size'].toString()
            if (s.length > 6) {
                a = (parseFloat(s) / 1000000).toString().slice(0, 4) + ' MB'
            } else if (s.length >= 4)
                a = (parseFloat(s) / 1000).toString().slice(0, 4) + ' kB'
            else
                a = s + ' b'
            size.innerText = a
            size.style.marginLeft = '60px'
            size.style.gridArea = '1/3/1/4'
            ele.appendChild(size)
        }catch (e) {

        }
        type.innerText = obj['mimetype']
        //type.style.marginLeft='30px'
        type.style.textAlign = 'center'
        type.style.gridArea='1/4/1/4'
        ele.appendChild(type)
        name.prepend(icon)
        icon.style.color='#b4b4b3'
        let rndid,info
        if(obj['type']=='image'){
            icon.className = 'fal fa-image'
            icon.style.color = '#E040FB'
            rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'image','cwd':obj['cwd']}
            info = {'rnd':rnd,'name':obj['name'],'type':obj['type'],'src':obj['src'],'size':obj['size'],'lastmod':obj['lastmod'],'mimetype':obj['mimetype'],'owner':obj['owner'],'cwd':obj['cwd']}

        }
        else if(obj['type'] == 'file'){
            icon.className='fal fa-file'
            icon.style.color = '#FF5252'
            rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'file','cwd':obj['cwd']}
            info = {'rnd':rnd,'name':obj['name'],'type':obj['type'],'size':obj['size'],'lastmod':obj['lastmod'],'mimetype':obj['mimetype'],'owner':obj['owner'],'cwd':obj['cwd']}
        }
        else if(obj['type'] == 'video'){
            icon.className='fal fa-file-video'
            icon.style.color = '#FFAB00'
            rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'video','cwd':obj['cwd']}
            info = {'rnd':rnd,'name':obj['name'],'type':obj['type'],'src':obj['src'],'size':obj['size'],'lastmod':obj['lastmod'],'mimetype':obj['mimetype'],'owner':obj['owner'],'cwd':obj['cwd']}
        }
        else if(obj['type'] == 'audio'){
            icon.className='fal fa-file-audio'
            icon.style.color = '#FFFF00'
            rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'audio','cwd':obj['cwd']}
            info = {'rnd':rnd,'name':obj['name'],'type':obj['type'],'src':obj['src'],'size':obj['size'],'lastmod':obj['lastmod'],'mimetype':obj['mimetype'],'owner':obj['owner'],'cwd':obj['cwd']}
        }
        else{
            icon.className = 'fal fa-folder'
            icon.style.color = '#448AFF'
            rndid = {'rnd':rnd,'ow':0,'name':obj['name'],'type':'dir','cwd':obj['cwd']}
            info = {'rnd':rnd,'name':obj['name'],'created':obj.created}
        }
        ele.append(name,trans)
        // document.getElementById('container-lvl2').appendChild(ele)
        return [ele,rndid,info]
    }

    render()
    {
        let rndids={},info={},listitems=[],r,ii,e
        if(Object.keys(props.data.effectiveFile).length ==0){
            let ele = document.createElement('label')
            ele.innerText = 'Nothing here'
            ele.style.fontSize='large'
            ele.id ='nothing'
            ele.style.margin ='auto'
            // document.getElementById('container-lvl2').appendChild(ele)
            // document.getElementById('list-view-header').style.visibility='hidden'
            listitems.push(ele)
        }
        else {
            for (let i of Object.keys(props.data.effectiveFile)) {
                let obj = props.data.effectiveFile[i]
                if (props.data.view) { //TODO see if this changes
                    [e, r, ii] = createListlvlElement(obj)
                    rndids[r['rnd']] = r
                    info[r['rnd']] = ii
                    listitems.push(e)
                } else {
                    if (obj['type'] == 'image') {
                        [e, r, ii] = createImagelvlElement(obj)
                        rndids[r['rnd']] = r
                        info[r['rnd']] = ii
                        listitems.push(e)
                    } else if (obj['type'] == 'dir') {
                        [e, r, ii] = createDirlvlElement(obj)
                        rndids[r['rnd']] = r
                        info[r['rnd']] = ii
                        listitems.push(e)
                    } else if (obj['type'] == 'file') {
                        [e, r, ii] = createFilelvlElement(obj)
                        rndids[r['rnd']] = r
                        info[r['rnd']] = ii
                        listitems.push(e)
                    } else if (obj['type'] == 'video') {
                        [e, r, ii] = createVideolvlElement(obj)
                        rndids[r['rnd']] = r
                        info[r['rnd']] = ii
                        listitems.push(e)
                    } else if (obj['type'] == 'audio') {
                        [e, r, ii] = createAudiolvlElement(obj)
                        rndids[r['rnd']] = r
                        info[r['rnd']] = ii
                        listitems.push(e)
                    }
                }
            }
            props.data.setrndids(rndids)
            props.data.setInfo(info)
            props.data.setrndlist(Object.keys(rndids))
            props.data.eventListeners()
        }

        return (
            <div id="container-lvl2">
                {listitems}
            </div>
        )
    }
}
export default Content