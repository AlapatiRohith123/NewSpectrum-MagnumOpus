import React from "react";
import "./../files/nav.css";

function adjustTextareaHeight() {
    const textarea = document.getElementById('solutionTextarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}
function searchField(thiss)
{
    var fileds=document.getElementsByClassName("subField");
    // console.log(thiss);
    for(let i=0;i<fileds.length;i++)
    {
        //console.log(fileds[i].innerHTML.slice(0,thiss.value.length));
        console.log(thiss.value);
        if(fileds[i].innerHTML.slice(0,thiss.value.length).toLowerCase()==thiss.value.toLowerCase())
        {
            fileds[i].style.display="block";
        }
        else
        {
            fileds[i].style.display="none";
        }
    }
}
function selectField(thiss)
{
    console.log("efg");
    var input=document.getElementById("fieldInput");
    input.value=thiss.innerHTML;
}
function dismissList()
{
    var fileds=document.getElementsByClassName("subField");
    console.log("abc");
    for(let i=0;i<fileds.length;i++)
    {
        fileds[i].style.display="none";
    }
}
function PostProblem() {
  async function Submit()
    {
        var bodyContent={};
        var form=document.getElementById("form");
        const formData = new FormData(form);
        for (const pair of formData.entries()) {
            console.log(pair);
            bodyContent[pair[0]]=pair[1];
        }
        bodyContent["Email"]=localStorage.getItem("Email");
        bodyContent=JSON.stringify(bodyContent);
        console.log(bodyContent);
        let headersList = {
            "Content-Type": "application/json"
        }
        
        let response = await fetch("http://localhost:8000/postProblem", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        
        let data = await response.text();
        console.log(data);
        data=JSON.parse(data);
        //const nav=useNavigate();
        alert(data.message);
    }
  return (
    <div className="container-fluid">
      <div className="content">
        <h1 className="heading">Problem Statement</h1>
        <form onSubmit={Submit} id="form">
          <div className="form-group" id="field">
            <label className="label" htmlFor="fieldInput">Enter Field:</label>
            <input required
              id="fieldInput"
              name="Field"
              className="input-field form-control"
              type="text"
              placeholder="Enter field here..."
              onClick={(e) => searchField(e.target)}
              onInput={(e) => searchField(e.target)}
              onBlur={()=>setTimeout(dismissList, 250)}
            />
            <div className="fieldList">
              <div className="subField" onClick={(e) => selectField(e.target)}>Rohith</div>
              <div className="subField" onClick={(e) => selectField(e.target)}>primary</div>
              <div className="subField" onClick={(e) => selectField(e.target)}>search</div>
              <div className="subField" onClick={(e) => selectField(e.target)}>name</div>
              <div className="subField" onClick={(e) => selectField(e.target)}>saveProfilePicBtn</div>
            </div>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="headingInput">Enter Heading:</label>
            <input required
              id="headingInput"
              name="Heading"
              className="input-field form-control"
              type="text"
              placeholder="Enter heading here..."
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="solutionTextarea">Enter Your Problem:</label>
            <textarea required
              id="solutionTextarea"
              name="Problem"
              className="input-field form-control"
              placeholder="Enter your problem here..."
              onInput={adjustTextareaHeight}
            ></textarea>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="lastDateInput">Select Last Date:</label>
            <input required
              id="lastDateInput"
              name="LastDate"
              className="input-field form-control"
              type="date"
            />
          </div>
          <input required
            type="submit"
            value="Submit"
            className="submit-button btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
}

export default PostProblem;
