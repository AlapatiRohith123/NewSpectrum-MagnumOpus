import React from "react";
import "./../files/sign.css";
import hamburger from "./../files/hamburger.jpg";
function Login_as(){
    return (
        <div class="container-fluid">
            <div id="content" style={{marginTop: "16%"}}>
                <h1 style={{marginTop: "0"}}>Login as:</h1>
                <button id="button2"><a href="Student" style={{textDecoration: "none", color: "black"}}>Student</a></button>
                <button id="button2"><a href="Entrepreneur" style={{textDecoration: "none", color: "black"}}>Entrepreneur</a></button>
            </div>
        </div>
    )
}
export default Login_as;