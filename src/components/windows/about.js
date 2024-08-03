import React from "react";
import './about.css'
function About(props){

    return(
        <div id="about-window">
            <div id="about-heading">
                <label style={{color:"#4A148C"}}>About</label>
                <label className="textborder" id="close-about-window" onClick={()=>{props.data.setAbout(!props.data.about)}}>close</label>
            </div>
            <div id="about-content">
                <div id="about-home">
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fas fa-cloud" style={{marginRight: "10px"}}></i>Home</label>
                    <ul className="para">
                        <li>This is where all the files and folder uploaded and created will appear.</li>
                        <li>It is the Root of your drive where all files can be accessed.</li>
                    </ul>
                </div>
                <div id="about-fav">
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-star" style={{marginRight: "10px"}}></i>Favorites</label>
                    <ul className="para">
                        <li>Files added to Favorites can be viewed here.</li>
                        <li>Right click on any folder and select
                            <i className="fal fa-plus" style={{margin: "0 10px 0 5px"}}></i>
                            <i>add to favorites</i>
                        </li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-share-alt" style={{marginRight: "10px"}}></i>
                        Shared with me
                    </label>
                    <ul className="para">
                        <li>Files can also be shared with other users on this platform.</li>
                        <li>Files can be shared in private mode or public mode.</li>
                        <li>Files shared in public mode can be accsed by others through search.</li>
                        <li>Files shared in private mode will only share the files with specified user</li>
                        <li>You can't share folders</li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-tags" style={{marginRight: "10px"}}></i>
                        Collections
                    </label>
                    <ul className="para">
                        <li>You can create collections and add files to them for easy access</li>
                        <li>Right click on any file to and select
                            <i className="fal fa-plus" style={{margin: "0 10px 0 5px"}}></i>
                            <i>add to collection</i>
                        </li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize:"large",color:"#4A148C"}}>
                        <i className="fal fa-upload" style={{marginRight: "10px"}}></i>Uploading</label>
                    <ul className="para">
                        <li>Files and images can be uploaded from the
                            <i className="fal fa-plus" style={{margin: "0 10px 0 5px"}}></i>
                            <i>New</i>
                            icon on top
                        </li>
                        <li>folders and file can be created from here</li>
                        <li>files and images can be uploaded from here</li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-filter" style={{marginRight: "10px"}}></i>Filters</label>
                    <ul className="para">
                        <li>You can also filter files and folder with the filter option</li>
                        <li>Filter images, files, and folder</li>
                        <li>Filters only files in current directory</li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-th" style={{marginRight: "10px"}}></i>
                        Views
                    </label>
                    <ul className="para">
                        <li>More details on a file can be viewed by selecting
                            <i className="fal fa-th-list" style={{margin: "0 5px 0 5px"}}></i>
                            list view
                        </li>
                        <li>Gallery view can be selected for elegant view</li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-search" style={{marginRight: "10px"}}></i>
                        Search
                    </label>
                    <ul className="para">
                        <li>You can search your files throughout the drive</li>
                        <li>Filter your searches from the
                            <i className="fal fa-search-location" style={{marginRight: "10px",marginLeft: "5px"}}></i>search
                            options in the search bar
                        </li>
                        <li>Depending on the
                            <i>search options</i>
                            it will search the files shared by all users or a particular user
                        </li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-cog" style={{marginRight: "10px"}}></i>Settings</label>
                    <ul className="para">
                        <li>Can be used to logout, add people and access info</li>
                        <li>If you want to share a file with user then click on
                            <i className="fal fa-user-plus" style={{marginRight: "10px",marginLeft: "10px"}}></i>
                            Add people
                        </li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-user" style={{marginRight: "10px"}}></i>
                        User
                    </label>
                    <ul className="para">
                        <li>view user info like</li>
                        <li>Change and view password and username</li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>
                        <i className="fal fa-users" style={{marginRight: "10px"}}></i>People</label>
                    <ul className="para">
                        <li>pople added can be viewed here</li>
                        <li>people can be deleted or new ones can be added</li>
                    </ul>
                </div>
                <div>
                    <label style={{fontSize: "large",color:"#4A148C"}}>Miscellaneous</label>
                    <ul className="para">
                        <li>File options are</li>
                        <li><i className="fal fa-trash" style={{marginRight: "10px"}}></i>Delete</li>
                        <li><i className="fal fa-copy" style={{marginRight: "10px"}}></i>Copy</li>
                        <li><i className="fal fa-cut" style={{marginRight: "10px"}}></i>Cut</li>
                        <li><i className="fal fa-edit" style={{marginRight: "10px"}}></i>Rename</li>
                        <li><i className="fal fa-download" style={{marginRight: "10px"}}></i>Download</li>
                        <li>Files content can be edited and saved</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About