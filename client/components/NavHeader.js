import React from 'react';
import {Grid, Row, Col, Clearfix, Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap';


export default class WholeNavBar extends React.Component {
    render () { 
        return (
            <div >
              <Row className="show-grid">
      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
      <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
    </Row>
               <Navbar className= "navDesign" id="navColor" inverse collapseOnSelect>
               <img className="img-fluid" alt="Responsive image" height="100px" width="200px" src="./assets/img/Chi_PUB_ART_LOGO.png"/>
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
                      <a className="addArtwork" href="/auth/google">SIGN IN TO ADD ARTWORK: <img src="./assets/img/2x/btn_google_signin_light_normal_web@2x.png" width="191px" height="46px"></img></a>
                    </Nav>
               </Navbar.Collapse>
             </Navbar>
            </div>
          )
      } 
}