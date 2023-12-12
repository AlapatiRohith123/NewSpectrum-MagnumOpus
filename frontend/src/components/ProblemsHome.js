import React, { useEffect, useState } from "react";
import "./../files/nav.css";
import dp from "./../files/profile_pic.png";

function sendId(thiss)
{
    console.log(typeof thiss);
    console.log(thiss.innerHTML);
    localStorage.setItem("currentQue",thiss.nextElementSibling.innerHTML);
}
function ProblemsHome(){
    //const [Email,changeEmail]=useState(localStorage.getItem("Email"));
    //const [fetchDataHasRun, setFetchDataHasRun] = useState(false);
    //useEffect(()=>{
    async function fetchData()
    {
        let Email=localStorage.getItem("Email");
        
        let response = await fetch(`http://localhost:8000/getAllProblems?Email=${Email}`, { 
            method: "GET"
        });
        
        let data=await response.text();
        data=JSON.parse(data);
        console.log(data);
        var a=[];
        for(let i of data)
        {
            a.push(i.Field);
        }
        var fields=new Set(a);
        var c=1;
        var fieldsFilter=document.getElementsByClassName("fieldsFilter");
        for(let i of fields)
        {
            let input=document.createElement("input");
            input.class="filtersList"
            input.name="filter"+c;
            input.id="filter"+c;
            input.type="checkbox";
            input.value=i;
            let label=document.createElement("label");
            label.htmlFor="filter"+c;
            label.innerHTML=i;
            let br=document.createElement("br");
            c++;
            fieldsFilter[0].append(input);
            fieldsFilter[0].append(label);
            fieldsFilter[0].append(br);
        }
        for(let i of data)
        {
            let box=document.getElementsByClassName("box")[0];
            let boxClone=box.cloneNode(true);
            boxClone.style.display="block";
            let profile=boxClone.querySelector(".profile");
            let pname=profile.querySelector(".pname").querySelector(".b");
            pname.innerHTML=i.Name;
            let heading=boxClone.querySelector(".heading");
            heading.innerHTML=i.Heading;
            let matter=boxClone.querySelector(".matter");
            matter.innerHTML=i.Problem;
            let id=boxClone.querySelector(".queId");
            id.innerHTML=i._id;
            console.log(document.getElementsByClassName("fullbutton")[0]);
            let button=boxClone.querySelector(".fullbutton");
            button.onclick=function(){
                sendId(button);
            };
            //Object(document.getElementsByClassName("fullbutton")[0].onclick);
            let br=document.createElement("br");
            document.getElementsByClassName("content2")[0].append(br);
            document.getElementsByClassName("content2")[0].append(boxClone);
        }
        
    }
    fetchData()
    return (
        <div>
        <div className="filter">
                <h2>Filters</h2>
                <div className="fieldsFilter">
                    {/* <input type="checkbox" name="filter1" id="filter1" value="UX"/>
                    <label htmlFor="filter1">UX</label><br/>
                    <input type="checkbox" name="filter2" id="filter2" value="Information Technology"/>
                    <label htmlFor="filter2">Information Technology</label><br/>
                    <input type="checkbox" name="filter3" id="filter3" value="Digital transformation"/>
                    <label htmlFor="filter3">Digital transformation</label><br/>
                    <input type="checkbox" name="filter4" id="filter4" value="Software as a service (or SaaS)"/>
                    <label htmlFor="filter4">Software as a service (or SaaS)</label><br/>
                    <input type="checkbox" name="filter5" id="filter5" value="Business"/>
                    <label htmlFor="filter5">Business</label><br/> */}
                </div>
            </div>
        <div className="container-fluid">
            <div style={{marginLeft: "18%"}}>
                <div className="content2" style={{paddingTop: "40px"}}>
                    <div className="box">
                        <div className="profile">
                            <img src={dp} className="dp"></img>
                            <p className="pname"><b className="b">rohith</b></p>
                        </div>
                        <h3 className="heading">Surveys conducted by ABC Supermarkets suggest that sales are lowest among people</h3>
                        <p className="matter">Statistics from the 2019 Indian Business Review show that consumer spending within this demographic is at an all-time high. The study attributed these findings to the increase in disposable income and quality of life among city dwellers. The 2019 Indian Fitness Journal also shows increased consumer interest in diet and health among people between the ages of 18 to 25. among people between the ages of 18 to 25</p>
                        <hr/>
                        <a href="/FullProblemStu"><button className="fullbutton" onClick={(e)=>sendId(e.target)}>See full problem</button><p className="queId"></p></a>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ProblemsHome;