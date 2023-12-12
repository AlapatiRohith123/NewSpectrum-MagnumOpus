import React from "react";
import { changeProfilePic, deleteProfilePic, profilePicUpload } from "../files/code";
import dp from "./../files/profile_pic.png";

function NavbarStu(){
  function logout()
  {
    localStorage.clear();
    console.log(localStorage);
  }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="favicon.png" alt="logo" width="40px" height="40px"/>
        <a className="navbar-brand" href="#">MagnumOpus</a>
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="notificationsDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Notifications
                </a>
                <div className="dropdown-menu" aria-labelledby="notificationsDropdown">
                  <a className="dropdown-item" href="#">Notification 1</a>
                  <a className="dropdown-item" href="#">Notification 2</a>
                  <a className="dropdown-item" href="#">Notification 3</a>
                </div>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/Student">Home</a>
            </li>

            <li className="nav-item dropdown" style={{position: "relative"}}>
              <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={dp} className="profile-image" alt="Profile Image" style={{height: "30px" ,width: "30px",borderRadius: "30px"}}/>
              </a>
              <div className="dropdown-menu profiledropdown" aria-labelledby="profileDropdown">
                <div className="profile-info">
                  <img src={dp} className="profile-image" data-toggle="modal" data-target="#changeProfileModal" id="profilepic" alt="Profile Image" style={{height: "60px" ,width: "60px"}}/>
                  <div className="profile-details">
                    <p className="profile-name">John Doe</p>
                    <p className="profile-email">{localStorage.getItem("Email")}</p>
                  </div>
                </div>
                <a className="dropdown-item" href="My_ideas">My Ideas</a>
                <a className="dropdown-item" href="/" onClick={logout}>Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>  

      <div className="modal fade" id="changeProfileModal" tabIndex="-1" role="dialog" aria-labelledby="changeProfileModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="changeProfileModalLabel">Change Profile Picture</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="current-profile-pic">
                <img src={dp} className="profile-image" alt="Current Profile Picture" style={{height: "100px", width: "100px"}}/>
              </div>
              <div className="change-buttons">
                <button className="btn btn-danger" id="deleteProfilePicBtn" onClick={deleteProfilePic}>Delete</button>
                <button className="btn btn-primary" id="changeProfilePicBtn" onClick={changeProfilePic}>Change</button>
              </div>
              <div className="file-upload">
                <input type="file" id="profilePicUpload" accept="image/*" style={{display: "none"}} onChange={profilePicUpload}/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" id="saveProfilePicBtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}
export default NavbarStu;