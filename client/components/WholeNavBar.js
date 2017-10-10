import React from 'react';
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import LoginButton from './LoginButton'

export default class WholeNavBar extends React.Component {
    render () { 
        return (
            <div>
               <Navbar inverse collapseOnSelect>
               <Navbar.Header>
                 <Navbar.Brand>
                   <a href="#">Chicago Public Art Map</a>
                 </Navbar.Brand>
                 <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse>
                 <Nav>
                   <li> <a href="http://justofflakeshoredrive.com">Link Test</a></li>
                   <li> <a href="http://justofflakeshoredrive.com">Link Test</a></li>
                   <NavDropdown eventKey={3} title="Search for a type of artwork" id="basic-nav-dropdown">
                     <MenuItem eventKey={3.1}>Mural</MenuItem>
                     <MenuItem eventKey={3.2}>Sculpture</MenuItem>
                     <MenuItem eventKey={3.3}>Statue</MenuItem>
                     <MenuItem eventKey={3.4}>Graffiti</MenuItem>
                     <MenuItem eventKey={3.5}>Performance</MenuItem>
                     <MenuItem eventKey={3.6}>Other</MenuItem>
                   </NavDropdown>
                 </Nav>
                 <Nav pullRight>
                   <LoginButton/>
                 </Nav>
               </Navbar.Collapse>
             </Navbar>
            </div>
          )
      } 
}