import React, { Component }  from 'react';

const navLinksStyle = {
  minWidth: '87px'
};

class NavigationBar extends Component {
  render(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="https://cooljeffrey.github.io">Jeffrey Yu</a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="https://cooljeffrey.github.io">Home</a></li>
                <li className="navlinks-container" style={navLinksStyle}>
                  <a className="navlinks-parent" href="#">About Me</a>
                  <div className="navlinks-children">
                    <a href="/aboutme">Profile</a>
                    <a href="https://cooljeffrey.github.io/resume">Resume</a>
                  </div>
                </li>
            </ul>
          </div>
        	<div className="avatar-container">
        	  <div className="avatar-img-border">
        	    <a href="https://cooljeffrey.github.io ">
        	      <img className="avatar-img" src="http://cooljeffrey.com/img/avatar-icon.jpg" alt="avatar"/>
        		  </a>
        	  </div>
        	</div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;