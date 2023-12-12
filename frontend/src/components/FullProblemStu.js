import React from "react";
import "./../files/nav.css";
import dp from "./../files/profile_pic.png";
function adjustTextareaHeight() {
    const textarea = document.getElementById('solutionTextarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}
function selectFile()
{
    document.getElementsByClassName("chooseFile")[0].click();
}
function showSolutions()
{
    //console.log(document.getElementById("spanShowSol").innerHTML);
    if(document.getElementById("spanShowSol").innerHTML=="Show Solutions")
    {
        document.getElementsByClassName("AllSolutions")[0].style.display="block";
        document.getElementById("spanShowSol").innerHTML="Hide Solutions";
    }
    else{
        document.getElementsByClassName("AllSolutions")[0].style.display="none";
        document.getElementById("spanShowSol").innerHTML="Show Solutions";
    }
}
var flag=1
function showAddSol()
{
    if(flag==1)
    {
        document.getElementsByClassName("AddSolution")[0].style.display="block";
        flag=0;
    }
    else
    {
        document.getElementsByClassName("AddSolution")[0].style.display="none";
        flag=1;
    }

}
function FullProblemStu(){
    async function fetchData()
    {
        let response = await fetch(`http://localhost:8000/getFullProblem?currentQue=${localStorage.getItem("currentQue")}`, { 
            method: "GET"
        });
        
        let data = await response.text();
        data=JSON.parse(data);
        console.log(data);
        let problem=document.getElementsByClassName("ProblemStatement")[0];
        let problemClone=problem.cloneNode(true);
        problemClone.querySelector(".proHeading").innerHTML=data.Heading;
        problemClone.querySelector(".proStatement").innerHTML=data.Problem;
        problemClone.style.display="block";
        problemClone.querySelector(".ProblemFooter").onclick=showSolutions;
        problemClone.querySelectorAll(".ProblemFooter")[1].onclick=showAddSol;
        document.getElementsByClassName("container")[0].insertBefore(problemClone,problem);
        for(let i of data.Solutions)
        {
            let solution=document.getElementsByClassName("TotalSolution")[0];
            let solutionClone=solution.cloneNode(true);
            solutionClone.style.display="flex";
            solutionClone.querySelector(".solHeading").innerHTML=i.solHeading;
            solutionClone.querySelector(".solStatement").innerHTML=i.Solution;
            solutionClone.querySelector(".attachedFile").innerHTML=i.Filename;
            const Buffer = require('buffer').Buffer;
            console.log(i.File.data);
            console.log(Buffer.from(i.File.data));
            const blob = new Blob([Buffer.from(i.File.data)], { type: 'application/octet-stream' });
            console.log(blob);
            const blobURL = URL.createObjectURL(blob);
            console.log(blobURL);
            solutionClone.querySelector(".attachedFile").href=blobURL;
            // solutionClone.querySelector(".attachedFile").href="http://localhost:8000/downloadFile/"+i._id;
            solutionClone.querySelector(".attachedFile").download=i.Filename;
            document.getElementsByClassName("AllSolutions")[0].append(solutionClone);
        }

    }
    fetchData();
    async function postSolution()
    {
        // event.preventDefault();
        var form=document.getElementById("form");
        var file=document.getElementsByClassName("chooseFile")[0];
        const formData = new FormData(form);
        //console.log(file.files[0]);
        //formData.append("File",file.files[0]);

        formData.append("Email",localStorage.getItem("Email"));
        formData.append("currentQue",localStorage.getItem("currentQue"));
        console.log(formData);
        let response = await fetch("http://localhost:8000/postSolution", { 
            method: "POST",
            body: formData,
            // headers: headersList
        });
        
        let data = await response.text();
        console.log(data);
        data=JSON.parse(data);
        alert(data.message);
    }
    return(
        <div>
            <div className="container">
                <div className="ProblemStatement">
                    <h3 className="proHeading">Surveys conducted by ABC Supermarkets suggest that sales are lowest among people</h3>
                    <p className="proStatement">Statistics from the 2019 Indian Business Review show that consumer spending within this demographic is at an all-time high. The study attributed these findings to the increase in disposable income and quality of life among city dwellers. The 2019 Indian Fitness Journal also shows increased consumer interest in diet and health among people between the ages of 18 to 25. among people between the ages of 18 to 25</p>
                    <hr/>
                    <div className="ProblemFooter" onClick={showSolutions}>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="svgImage">
                            <path fillRule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clipRule="evenodd"></path>
                        </svg>
                        <span id="spanShowSol">Show Solutions</span>
                    </div>
                    <div className="ProblemFooter" onClick={showAddSol}>
                        <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="svgImage">
                            <path fillRule="evenodd" d="M5.83 2.106c.628-.634 1.71-.189 1.71.704v2.065c4.821.94 6.97 4.547 7.73 8.085l-.651.14.652-.134c.157.757-.83 1.192-1.284.565l-.007-.009c-1.528-2.055-3.576-3.332-6.44-3.502v2.352c0 .893-1.082 1.338-1.71.704L1.091 8.295a1 1 0 010-1.408l4.737-4.78zm7.303 8.617C12.08 8.495 10.204 6.68 7.046 6.14c-.47-.08-.84-.486-.84-.99V3.62L2.271 7.591l3.934 3.971V9.667a.993.993 0 011.018-.995c2.397.065 4.339.803 5.909 2.051z" clipRule="evenodd"></path>
                        </svg>
                        <span>Add Solution</span>
                    </div>
                </div>

                <div className="SubSolution AddSolution">
                    <form onSubmit={postSolution} id="form" encType="multipart/form-data">
                        <input required
                        name="Heading"
                        className="input-field solInputs"
                        placeholder="Enter heading here..."
                        />
                        <textarea required
                        id="solutionTextarea"
                        name="Solution"
                        className="input-field solInputs"
                        placeholder="Enter your solution here..."
                        onInput={adjustTextareaHeight}
                        ></textarea>
                        <div className="linkFile" onClick={selectFile}>
                            <svg viewBox="0 0 18 18" width="1em" height="1em" fill="currentColor" className="linkFileIcon">
                                <path fillRule="evenodd" d="M13 7a1 1 0 011-1h2a6 6 0 010 12h-2a1 1 0 110-2h2a4 4 0 000-8h-2a1 1 0 01-1-1zm-3 10a1 1 0 01-1 1H8A6 6 0 018 6h1a1 1 0 010 2H8a4 4 0 100 8h1a1 1 0 011 1zm-1-6h6a1 1 0 110 2H9a1 1 0 110-2z" clipRule="evenodd"></path>
                            </svg>
                            <span>Link file</span>
                        </div>
                        <input type="file" name="File" className="chooseFile"/>
                        <input type="submit" className="SolutionSubmit"/>
                    </form>
                </div>
                <div className="AllSolutions">
                    <div className="TotalSolution">
                        <img src={dp} className="dp" style={{margin: "0 10px"}}></img>
                        <div className="SubSolution">
                            <h4 className="solHeading">Surveys conducted by ABC Supermarkets suggest that sales are lowest among people</h4>
                            <p className="solStatement">Statistics from the 2019 Indian Business Review show that consumer spending within this demographic is at an all-time high. The study attributed these findings to the increase in disposable income and quality of life among city dwellers. The 2019 Indian Fitness Journal also shows increased consumer interest in diet and health among people between the ages of 18 to 25. among people between the ages of 18 to 25</p>
                            <hr/>
                            <a className="attachedFile" href="favicon.pdf" download={"abc.png"}>file.txt</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FullProblemStu;