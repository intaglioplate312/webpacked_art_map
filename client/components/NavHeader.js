import React from 'react';
import {Grid, Row, Col, Clearfix, Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'reactstrap';



export default class NavHeader extends React.Component {
    render () { 
        return (
            <div >
                <Navbar className= "navDesign" id="navColor" inverse collapseOnSelect>
                  <Navbar.Header>
                    <Grid>
                      <Row className="show-grid">
                        <Col xs={6} md={3} > 
                          <img className="img-fluid" alt="Responsive image" height="150px" src="./assets/img/Chi_PUB_ART_LOGO.png"/>
                        </Col>
                  
                      <Col xsHidden md={1} >
                      </Col>
                  
                      <Col xsHidden md={4} lg={4}>
                        <ul>
                          <li> <a href="/index.html">Home</a></li>
                          <li> <a href="/indexsearch.html">Search</a></li>
                          <li> <a href="/about.html">About</a></li>
                          <li> <a href="https://www.facebook.com/newchiartspace/">Neo Chicago Art and Music</a></li>
                        </ul>
                      </Col>
                  
                      <Col xs={6} md={4} lg={3}>
                        <h5>To Add Art Work</h5>
                        <a href="/auth/google"><img src="./assets/img/2x/btn_google_signin_light_normal_web@2x.png" width="191px" height="46px"></img></a>
                      </Col>
                    </Row>
                  </Grid>
                </Navbar.Header>
              </Navbar>
            </div>
          )
      } 
}