import React from "react";
import "./../files/sign.css";
import hamburger from "./../files/hamburger.jpg";
import { fun1,fun2 } from "../files/signup";
import { useNavigate } from "react-router-dom";

function Sign_up(){
    const nav=useNavigate();
    // const fun7=()=>{
    //     nav("Login");
    // }
    async function Submit(event)
    {
        event.preventDefault();
        var bodyContent={};
        var form=document.getElementById("form");
        const formData = new FormData(form);
        for (const pair of formData.entries()) {
            console.log(pair);
            bodyContent[pair[0]]=pair[1];
        }
        bodyContent=JSON.stringify(bodyContent);
        console.log(bodyContent);
        let headersList = {
            "Content-Type": "application/json"
        }
        
        let response = await fetch("http://localhost:8000/users", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        
        let data = await response.text();
        console.log(data);
        data=JSON.parse(data);
        //const nav=useNavigate();
        if(data.success)
        {
            nav("Login");
        }
        else{
            alert(data.message);
        }
        
    }
    return (
        <div className="container-fluid">
            <div id="content">
            <h1>Sign up</h1>
            <form onSubmit={Submit} id="form">
                <input required type="text" placeholder="Full Name" name="Name" className="input1"/>
                <input required type="email" placeholder="Email" name="Email" className="input1"/>
                <input required type="text" placeholder="Username" name="Username" className="input1"/>
                <div className="password">
                    <button id="button" onClick={fun1}>Show</button>
                    <input required type="password" placeholder="Password" name="Password" className="input1" onInput={fun2}/>
                </div>
                <p>Gender:</p>
                <span className="radio">
                    <label htmlFor="gender1">Male</label>
                    <input required type="radio" className="gender1" name="Gender" value="Male"/>
                </span>
                <span className="radio">
                    <label htmlFor="gender2">Female</label>
                    <input required type="radio" className="gender2" name="Gender" value="Female"/>
                </span>
                <p>Role:</p>
                <span className="radio">
                    <label htmlFor="student">Student</label>
                    <input required type="radio" className="student" name="Role" value="Student"/>
                </span>
                <span className="radio">
                    <label htmlFor="entrepreneur">Entrepreneur</label>
                    <input required type="radio" className="entrepreneur" name="Role" value="Entrepreneur"/>
                </span>
                <input type="submit" value="Sign Up" className="sign_up"/>
            </form>
            <hr/>
            <p>Have an account? <a href="/Login">Log in</a></p>
            </div>
        </div>
        )
    }
    export default Sign_up;