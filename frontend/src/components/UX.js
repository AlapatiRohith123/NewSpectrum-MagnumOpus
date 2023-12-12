import React, { useEffect } from "react";
import "./../files/nav.css";
function UX(){
    return (
        <body style={{marginTop: "52px"}}>
            <div className="container-fluid" style={{backgroundColor: "rgba(134, 187, 195,0.8)"}}>
                <div className="content3">
                    <h1>Problem statement</h1>
                    <p>Users of our proposal software have reported frustration at having to copy information into the CRM after they send a proposal. They use their CRMs to track all email conversations, phone calls, and other lead and client interactions. Without CRM integrations, our proposal software causes a frustrating experience for our power users. While users from very small businesses and firms don’t have this issue, we are hearing from sales reps at SMBs and enterprises that the need to duplicate proposal sending information in their CRM causes an additional two to three hours of work every week. The problem is that we don’t have any integrations with CRMs and we have not yet identified the CRMs of our best users. We need to send segmented surveys to determine our priorities for the first three CRMs to integrate with, and we need to build in the user flows around these integrations.</p>
                    <h2>Solution</h2>
                    <textarea id="solution" placeholder="Enter your solution here"></textarea>
                    <label htmlFor="myfile">Link related files:</label>
                    <div id="dup0">
                        <input type="file" id="myfile" name="myfile"/>
                    </div>
                    <br/>
                    <input type="submit" value="Submit" style={{fontSize: "large", padding: "5px"}}/>
                </div>
            </div>
        </body>
    )
}
export default UX;