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
                   <NavDropdown eventKey={3} title="Refine Map" id="basic-nav-dropdown">
                     <MenuItem eventKey={3.1}>Sculpture</MenuItem>
                     <MenuItem eventKey={3.2}>Murals</MenuItem>
                     <MenuItem eventKey={3.3}>Graffiti</MenuItem>
                     <MenuItem eventKey={3.4}>Topiary</MenuItem>
                     <MenuItem eventKey={3.5}>Mixed Media</MenuItem>
                     <MenuItem eventKey={3.6}>constructs</MenuItem>
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