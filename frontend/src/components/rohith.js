import React from "react";
function Navbar(){
    return (
        <div>
        <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        
      
        <div classNameName="collapse navbar-collapse" id="navbarNav">
          
      
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" style={{position: relative}}>
              <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="favicon.png" className="profile-image" alt="Profile Image" style={{height: "40px" ,width: "40px"}}/>
              </a>
              <div className="dropdown-menu" aria-labelledby="profileDropdown">
                <div className="profile-info">
                  <img src="favicon.png" className="profile-image" alt="Profile Image" style={{height: "40px" ,width: "40px"}}/>
                  <div className="profile-details">
                    <p className="profile-name">John Doe</p>
                    <p className="profile-email">johndoe@example.com</p>
                  </div>
                </div>
                <a className="dropdown-item" href="#">My Ideas</a>
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#changeProfileModal">Change Profile Picture</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>  

      <div className="modal fade" id="changeProfileModal" tabindex="-1" role="dialog" aria-labelledby="changeProfileModalLabel" aria-hidden="true">
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
                <img src="favicon.png" className="profile-image" alt="Current Profile Picture" style={{height: "100px", width: "100px"}}/>
              </div>
              <div className="change-buttons">
                <button className="btn btn-danger" id="deleteProfilePicBtn">Delete</button>
                <button className="btn btn-primary" id="changeProfilePicBtn">Change</button>
              </div>
              <div className="file-upload">
                <input type="file" id="profilePicUpload" accept="image/*" style={{display: none}}/>
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
    
    export default Navbar;