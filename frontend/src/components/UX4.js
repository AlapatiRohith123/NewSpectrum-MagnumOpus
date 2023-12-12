import React, { useEffect } from "react";
import "./../files/nav.css";
function UX4(){
    var count=1;
    useEffect(()=>{
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle="white";
        ctx.strokeStyle="green";
        ctx.arc(11,11,10,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(11,3);
        ctx.lineTo(11,19);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(3,11);
        ctx.lineTo(19,11);
        ctx.stroke();
        var ca=document.getElementById("myCanvas2");
        var ctxa=ca.getContext("2d");
        ctxa.beginPath();
        ctxa.fillStyle="white";
        ctxa.strokeStyle="red";
        ctxa.arc(11,11,10,0,2*Math.PI);
        ctxa.stroke();
        ctxa.fill();
        ctxa.beginPath();
        ctxa.moveTo(3,11);
        ctxa.lineTo(19,11);
        ctxa.stroke();
    },[]);

    const fun2=(id)=>
    {
        var index=id.slice(6);
        document.getElementById("dup"+index).remove();
    }

    const Fun=(id)=>
    {
        useEffect(()=>{
            var c=document.getElementById("myCanvas");
            var ca=document.getElementById("myCanvas2");
        
            var file=document.getElementById("myfile");
            var fclone=document.createElement("input");
            fclone.type="file";
            fclone.id="file"+count;
            var div=document.createElement("div");
            div.id="dup"+count;
            var br=document.createElement("br")
            br.id="break"+count;
            div.appendChild(fclone);
            var canvas1=document.createElement("canvas");
            var ctx1=canvas1.getContext("2d");
            canvas1.width=c.width;
            canvas1.height=c.height;
            canvas1.id="add"+count;
            canvas1.style.marginRight="4px";
            canvas1.style.marginLeft="4px";
            canvas1.style.cursor="pointer";
            canvas1.setAttribute("onClick","javascript: Fun(this.id);");
            ctx1.drawImage(c,0,0);
            div.appendChild(canvas1);
            var canvas2=document.createElement("canvas");
            var ctx2=canvas2.getContext("2d");
            canvas2.width=ca.width;
            canvas2.height=ca.height;
            canvas2.id="remove"+count;
            canvas2.style.cursor="pointer";
            canvas2.setAttribute("onClick","javascript: fun2(this.id);");
            ctx2.drawImage(ca,0,0);
            div.appendChild(canvas2);
            div.appendChild(br);
            var index=id.slice(3);
            document.getElementById("dup"+index).after(div);
            count++;
        });
    }

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
                        <canvas id="myCanvas" width="22" height="22" onClick={Fun('add0')} style={{cursor: "pointer"}}></canvas>
                        <canvas id="myCanvas2" width="22" height="22" style={{display: "none"}}></canvas><br/>
                    </div>
                    <br/>
                    <input type="submit" value="Submit" style={{fontSize: "large", padding: "5px"}}/>
                </div>
            </div>
        </body>
    )
}
export default UX4;