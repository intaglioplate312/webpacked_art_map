import React, { Component } from 'react'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      alert('Your information was submitted: ' + this.input.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload Image:
          <input
            /* value={this.state.uploadImage} */
            ref={(input) => this.input = input}
            name= "image"
            type="file"
            placeholder="Upload Image"
            />
            </label>
          <label>
            <input type="text" placeholder= "Artist" ref={(input) => this.input = input} />
          </label>
          <label>
            <input type="text" placeholder="Title" ref={(input) => this.input = input} />
          </label>
          <label>
            <input type="text" placeholder="Description" ref={(input) => this.input = input} />
          </label>
          <label>
            <input type="text" placeholder="Description" ref={(input) => this.input = input} />
          </label>
          <label>
            Type of Artwork:
          <select>
            <option value="mural">Mural</option>
            <option value="sculpture">Sculpture</option>
            <option value="statue">Statue</option>
            <option value="graffiti">Graffiti</option>
            <option value="performance">Performance</option>
            <option value="other">Other</option>
          </select>
          </label>
        
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;