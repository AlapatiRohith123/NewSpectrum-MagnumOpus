import React from "react";
import "./../files/nav.css";
var value='Entrepreneur';
export function value1(){
    return value;
}
function Entrepreneur(){
    return(
        <body style={{marginTop: "10%", marginLeft: "0"}}>
            <div className="container-fluid">
                <p className="content1"><a href="Post_problem">Post a problem</a></p>
                <p></p>
                <p className="content1"><a href="My_problems">My problems</a></p>
            </div>
        </body>
    )
}
export default Entrepreneur;