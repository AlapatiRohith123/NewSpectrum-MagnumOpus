import React from "react";
import "./../files/sign.css";
import { useNavigate } from "react-router-dom";
const fun1=()=>
{
    var password=document.getElementsByClassName("input2")[1];
    var button=document.getElementById("button");
    if(button.innerHTML=="Show")
    {
        password.type="text";
        button.innerHTML="Hide";
    }
    else
    {
        password.type="password";
        button.innerHTML="Show";
    }
}
const fun2=()=>
{
    var password=document.getElementsByClassName("input2")[1];
    var button=document.getElementById("button");
    if(password.value.length!=0)
    {
        button.style.display="inline-block";
    }
    else
    {
        button.style.display="none";
    }
}
function Login({who, changeWho}){
    const nav=useNavigate();
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
        
        let response = await fetch("http://localhost:8000/login", { 
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
            nav("/"+data.message);
            changeWho(data.message);
            localStorage.setItem("who",data.message);
            localStorage.setItem("Email", data.Email);
            console.log(localStorage);
            console.log(who);
        }
        else{
            alert(data.message);
        }
        
    }
    return (
        <div className="container-fluid">
            <div id="content" style={{marginTop: "10%"}}>
                <h1>Login</h1>
                <form onSubmit={Submit} id="form">
                    <input required type="text" name="Username_Email" placeholder="Email or username" className="input2"/>
                    <div className="password">
                        <button id="button" onClick={fun1}>Show</button>
                        <input required type="password" name="Password" placeholder="Password" className="input2" onInput={fun2}/>
                    </div>
                    <button className="log_in">Log in</button>
                </form>
                <a href="#not">Forgot password?</a>
                <hr/>
                <p>Don't have an account? <a href="Signup">Sign up</a></p>
            </div>
        </div>
    )
}
export default Login;