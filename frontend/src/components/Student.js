import React from "react";
import "./../files/nav.css";
function Student(){
    return (
        <body style={{marginTop: "10%", marginLeft: "0"}}>
            <div className="container-fluid">
                <p className="content1"><a href="My_ideas">My Ideas</a></p>
                <p></p>
                <p className="content1"><a href="Problems">Post a solution for existing problems</a></p>
            </div>
        </body>
    )
}
export default Student;