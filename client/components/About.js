import React, { Component } from 'react';
import Bootstrap from 'reactstrap';

class About extends Component
{
    render() {
        return(
            <div>
             
                    <div className="aboutContainer">
                        <h1>About</h1>
                     
                        <p>The Chicago public art map and database is an interactive tool that highlights the art we see everyday
                            in the street, from the ephemeral to the concrete.  We encourage users to define what art means to them, take a picture,
                            write a description, record the location, and enter it into our database.</p>
                  
                        <h1>Developers</h1>
                        <img src="../assets/img/artwork/baba.jpg" height="120" width="150"/><h4>Cory Miljour</h4>
                        <img src="../assets/img/artwork/Angelic.png" height="120" width="150"/><h4>Helen Smith</h4>
                        <img src="../assets/img/artwork/frida_deer.jpg" height="120" width="150"/><h4>Sara Heymann</h4>
                     
               
             </div>
             </div>
        );
    }
}

export default About;
