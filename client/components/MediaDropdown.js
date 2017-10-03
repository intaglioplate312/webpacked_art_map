import React from 'react';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

export default class MediaDropdown extends React.Component {
    render () { 
        return (
            <div>
              < ButtonToolbar>
                < DropdownButton bsSize="large" title="Media" id="dropdown-size-large">
                  <MenuItem eventKey="1">Graffitti</MenuItem>
                  <MenuItem eventKey="2">Sculpture </MenuItem>
                  <MenuItem eventKey="3">Statues</MenuItem>
                  <MenuItem eventKey="4">Murals</MenuItem>
                  <MenuItem eventKey="4">Constructs</MenuItem>
                </DropdownButton>
              </ButtonToolbar>  
</div>
    
        
    )
 } 
 }