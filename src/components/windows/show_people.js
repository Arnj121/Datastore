import React from "react";

import './show_people.css'
import {render} from "react-dom";

function ShowPeople(props){

    render()
    {
        let temp=[],showppl=[]
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                let peopleRecieved = JSON.parse(this.response)
                peopleRecieved = peopleRecieved['0']
                if(peopleRecieved.length == 0){
                    let ele = document.createElement('label')
                    ele.style.margin = 'auto'
                    ele.innerText = 'You have not added anyone'
                    ele.style.fontSize ='large'
                    ele.id = 'notadded'
                    // document.getElementById('people-added-window').appendChild(ele)
                    temp.push(ele)
                }
                else {
                    for (let i = 0; i < peopleRecieved.length; i++) {
                        let lab = document.createElement('label')
                        lab.id = Math.floor(Math.random() * 1000).toString() + 'rnd'
                        let fa = document.createElement('i');
                        fa.className = 'fal fa-user';
                        fa.style.marginRight = '10px'
                        showppl.push(lab.id)
                        lab.className = 'people-added-var'
                        lab.innerText = peopleRecieved[i]
                        lab.style.color = 'black'
                        lab.onclick = (e) => {
                            let peopleselct = e.target.id
                            if (document.getElementById(peopleselct).style.color == 'black') {
                                document.getElementById(peopleselct).style.backgroundColor = 'black'
                                document.getElementById(peopleselct).style.color = 'white'
                            } else {
                                document.getElementById(peopleselct).style.backgroundColor = 'whitesmoke'
                                document.getElementById(peopleselct).style.color = 'black'
                            }
                        }
                        lab.prepend(fa)
                        temp.push(lab)
                        // document.getElementById('people-added-window').appendChild(lab)
                    }
                    props.data.setShowpplAdded(showppl)
                }
                // document.getElementById('show-added-people-window').style.visibility = 'visible'
                // document.getElementById('blank').style.visibility='visble'
                // document.getElementById('blank').style.visibility = 'visible'
            }
        }
        xhr.open('GET',`http://localhost:4000/getpeople?token=${props.data.token}`)
        xhr.send()

        // document.getElementById('add-more').onclick = ()=>{
        //     document.getElementById('add-people-window').style.visibility='visible'
        //     document.getElementById('show-added-people-window').style.visibility='hidden'
        //     document.getElementById('people-added-window').removeChild(document.getElementById('notadded'))
        //     let ele = document.getElementsByClassName('people-added-var')
        //     for(let i=0;i<ele.length;i++){
        //         document.getElementById('people-added-window').removeChild(ele[i])
        //     }
        //     addpeople=1;showpplwind=0
        // }

        // document.getElementById('remove-more').onclick = ()=>{
        //     if(peopleselct!=0){
        //         let email = document.getElementById(peopleselct).innerText
        //         let xhr = new XMLHttpRequest()
        //         xhr.onreadystatechange = function(){
        //             if(xhr.readyState==4){
        //                 document.getElementById('people-added-window').removeChild(document.getElementById(peopleselct))
        //                 peopleselct=0
        //                 displaypopup(`'${email}' has been removed from people`)
        //             }
        //         }
        //         xhr.open('DELETE',`http://localhost:4000/removepeople?token=${userdetails['token']}&email=${email}`)
        //         xhr.send()
        //     }
        // }
        return (
            <div id="show-added-people-window">
                <div id="people-added-window">{temp}</div>
                <label id="add-more" className="confirm-keys" onClick={() => {
                    props.data.setAddPeople(!props.data.setAddPeople);props.data.setAddPeople(!props.data.addPeople)}}>
                    <i className="fal fa-user-plus" style={{marginRight: "10px"}}></i>
                    Add
                </label>
                <label id="remove-more" className="confirm-keys">
                    <i className="fal fa-user-minus" style={{marginRight: "10px"}}></i>
                    Remove
                </label>
                <label id="show-added-people-window-close" className="confirm-keys"
                       onClick={() => {props.data.setShowAddedPeople(!props.data.showAddedPeople)}}>close</label>
            </div>
        )
    }
}
export default ShowPeople