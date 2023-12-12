import React from "react";
function Navbar2(){
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
      
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>  

      </div>
    );
}
export default Navbar2;