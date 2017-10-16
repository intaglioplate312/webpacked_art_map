import React from "react";
import { Link } from 'react-router-dom'

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
      <a href="/" className="navbar-brand">
          Chicago Public Art Map
        </a>
        <ul className="nav navbar-nav">
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Search">Search Map</Link></li>
        <li><Link to="/Add">Add Art to Map</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
        <li><a href="/auth/google"><img src="./assets/img/2x/btn_google_signin_light_normal_web@2x.png" width="40%" height="40%"></img></a></li>
        </ul>
      </div>
      
      
      </div>
   
  </nav>;

export default Nav;