import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header=()=>  {
  
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a href="#" class="navbar-brand">
            <img className="himage" src="../images/mainlogo.jpg" />
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ml-auto">
              <Link to="/about" class="nav-item nav-link">
                About
              </Link>
              <a
                href="https://forms.gle/fny9Cx7AbzBPqBsw7"
                className="nav-item nav-link"
              >
                Feedback
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  
}

export default Header;
