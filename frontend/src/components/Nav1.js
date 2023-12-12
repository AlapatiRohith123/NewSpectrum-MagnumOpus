import React from "react";
import "./../files/nav.css";
import hamburger from "./../files/hamburger.jpg";
import {myFunction} from "./../files/code.js";
function Nav1(){
    return (
        <div className="container-fluid">
            <div className="nav1" id="nav">
                <img src={hamburger} alt="hambugger" id="ham" height="30px" width="30px" onClick={myFunction} style={{float: "right"}}/>
                <p id="notifications"><a href="#not">Notifications</a></p>
                <p className="right"><a href="#not">Profile</a></p>
                <p className="right"><a href="#not">About us</a></p>
            </div>
        </div>
    )
}
export default Nav1;