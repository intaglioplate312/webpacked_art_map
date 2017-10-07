import React from 'react';
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap';

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
                   <NavItem eventKey={1} href="#">About</NavItem>
                   <NavItem eventKey={2} href="#">Link</NavItem>
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
                   <NavItem eventKey={1} href="#">Login to Add Images to Map</NavItem>
                 </Nav>
               </Navbar.Collapse>
             </Navbar>
</div>
    
        
    )
 } 
 }