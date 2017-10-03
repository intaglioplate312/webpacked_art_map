import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    artistName: "",
    titleName: "",
    description: "",
    address: ""
    // picture: will this live in this component or another one?
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.address !== true) {
      // we may want to change how we are putting in these warnings
      alert("please provide an address");
      // will the upload of the picture live in this component?
    } else if (this.state.picture !== true) {
      alert(
        `we need a picture associated with the art `
      );
    } else {
      // if we are giving a review or admin option we'll need to change this
      alert(`your artwork has been uploaded`);
    }

    this.setState({
      artistName: "",
      titleName: "",
      description: "",
      address: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            value={this.state.artistName}
            name="artistName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Artist Name"
          />
          <input
            value={this.state.titleName}
            name="titleName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Title of Artwork"
          />
          <input
            value={this.state.description}
            name="description"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Description"
          />
          <input
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Address"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
