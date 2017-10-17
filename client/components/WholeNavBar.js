import React from 'react';
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap';


export default class WholeNavBar extends React.Component {
    render () { 
        return (
            <div >
               <Navbar className= "navDesign" id="navColor" inverse collapseOnSelect>
               <img className="img-fluid" alt="Responsive image" height="100px" width="200px" src="./assets/img/Chi_PUB_ART_LOGO.jpg"/>
               <Navbar.Header>
                 <Navbar.Brand>
                   {/* <img height="400px" width="500px" src="./assets/img/Chi_PUB_ART_LOGO.jpg"/> */}
                 </Navbar.Brand>
                 <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse>
                 <Nav>
                   {/* <li> <a href="/about">Link Test</a></li>
                   <li> <a href="http://justofflakeshoredrive.com">Link Test</a></li> */}
                   {/* <NavDropdown eventKey={3} title="Search for a type of artwork" id="basic-nav-dropdown">
                     <MenuItem eventKey={3.1}>Mural</MenuItem>
                     <MenuItem eventKey={3.2}>Sculpture</MenuItem>
                     <MenuItem eventKey={3.3}>Statue</MenuItem>
                     <MenuItem eventKey={3.4}>Graffiti</MenuItem>
                     <MenuItem eventKey={3.5}>Performance</MenuItem>
                     <MenuItem eventKey={3.6}>Other</MenuItem>
                   </NavDropdown> */}
                 </Nav>
                    <Nav pullRight >
                      <a className="addArtwork" href="/auth/google">SIGN IN TO ADD ARTWORK: <img src="./assets/img/2x/btn_google_signin_light_normal_web@2x.png" width="40%" height="40%"></img></a>
                    </Nav>
               </Navbar.Collapse>
             </Navbar>
            </div>
          )
      } 
}