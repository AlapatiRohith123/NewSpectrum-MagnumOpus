import React from "react";
import "./../files/nav.css";


function adjustTextareaHeight() {
    const textarea = document.getElementById('solutionTextarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

function PostProblem() {
  return (
    <div className="container-fluid">
      <div className="content">
        <h1 className="heading">Problem Statement</h1>
        <div className="form-group">
          <label className="label" htmlFor="fieldInput">Enter Field:</label>
          <input
            id="fieldInput"
            className="input-field form-control"
            type="text"
            placeholder="Enter field here..."
            list="fieldOptions"
          />
          <datalist id="fieldOptions">
            <option>Brave</option>
            <option>Chrome</option>
            <option>Edge</option>
            <option>Firefox</option>
            <option>Internet Explorer</option>
            <option>Opera</option>
            <option>Safari</option>
            <option>Vivaldi</option>
            <option>other</option>
            <option>Brave</option>
            <option>Chrome</option>
            <option>Edge</option>
            <option>Firefox</option>
            <option>Internet Explorer</option>
            <option>Opera</option>
            <option>Safari</option>
            <option>Vivaldi</option>
            <option>other</option>
          </datalist>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="headingInput">Enter Heading:</label>
          <input
            id="headingInput"
            className="input-field form-control"
            type="text"
            placeholder="Enter heading here..."
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="solutionTextarea">Enter Your Problem:</label>
          <textarea
            id="solutionTextarea"
            className="input-field form-control"
            placeholder="Enter your problem here..."
            onInput={adjustTextareaHeight}
          ></textarea>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="lastDateInput">Select Last Date:</label>
          <input
            id="lastDateInput"
            className="input-field form-control"
            type="date"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="submit-button btn btn-primary"
        />
      </div>
    </div>
  );
}

export default PostProblem;
