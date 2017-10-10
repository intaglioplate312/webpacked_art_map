import React, { Component } from 'react';

class RegisterModal extends Component
{
    render() {
        return(
            <div>
                <form method="post" action="/upload" encType="multipart/form-data">
                    Upload Image:<br/>
                    <input type="file" name="image"/>
                    <input type="text" name="artist" placeholder="Artist" id= "artistBox"/>
                    <input type="text" name="title" placeholder="Title" id="titleBox"/><br/>
                    <input type="text" name="description" placeholder="Description" id="descriptionBox"/>
                    <label>
            //         Type of Artwork:
            //           <select>
            //             <option value="mural" name="mural">Mural</option>
            //             <option value="sculpture" name="sculpture">Sculpture</option>
            //             <option value="statue" name="statue">Statue</option>
            //             <option value="graffiti" name="graffiti">Graffiti</option>
            //             <option value="performance" name="performance">Performance</option>
            //             <option value="other" name="other">Other</option>
            //           </select>
//                  </label>
                    <input type="text" name="address" placeholder="Address" id="addressBox"/>
                    <input type="submit" value="Submit" id= "submitBox"/>
                </form>
             </div>
        );
    }
}

export default RegisterModal;
// import React, { Component } from 'react'

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleSubmit(event) {
//       alert('Your information was submitted: ' + this.input.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit} 
//         id='uploadForm' 
//         action='./upload' 
//         method='post'>
//           <label>
//             Upload Image:
//           <input
//             /* value={this.state.uploadImage} */
//             ref={(input) => this.input = input}
//             name= "image"
//             type="file"
//             placeholder="Upload Image"
//             />
//             </label>
//           <label>
//             <input type="text" placeholder= "Artist" id= "artistBox" ref={(input) => this.input = input} />
//           </label>
//           <label>
//             <input type="text" placeholder="Title" id= "titleBox" ref={(input) => this.input = input} />
//           </label>
//           <label>
//             <input type="text" placeholder="Description" id= "descriptionBox" ref={(input) => this.input = input} />
//           </label>
//           <label>
//             Type of Artwork:
//           <select>
//             <option value="mural">Mural</option>
//             <option value="sculpture">Sculpture</option>
//             <option value="statue">Statue</option>
//             <option value="graffiti">Graffiti</option>
//             <option value="performance">Performance</option>
//             <option value="other">Other</option>
//           </select>
//           </label>
//           <label>
//             <input type="text" placeholder="Address" id= "addressBox" ref={(input) => this.input = input} />
//           </label>
        
//             <input type="submit" value="Submit" id= "submitBox" />
//         </form>
//       );
//     }
//   }

//   export default NameForm;