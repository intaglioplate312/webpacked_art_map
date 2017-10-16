import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
      <a href="/" className="navbar-brand">
          Chicago Public Art Map
        </a>
        <ul>
        <li><a href="/auth/google"><img src="./assets/img/2x/btn_google_signin_light_normal_web@2x.png" width="40%" height="40%"></img></a></li>
      </ul>
      </div>
      <form className="navbar-form pull-right" name="type_search" action="/search" method="post">  
        <label>
          Type of Artwork:
          <input id= "searchForm" type="text" name="typeSearch" placeholder="Mural, Sculpture, Statue, Graffiti, Performance, Other"/>
        </label>
          <input type="submit" name="Submit" id= "submitBox"/>
      </form>
      
      </div>
   
  </nav>;

export default Nav;
