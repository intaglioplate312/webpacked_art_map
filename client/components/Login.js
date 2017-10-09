import React, { Component } from 'react'

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      alert('You are logged in: ' + this.input.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
           Login:
          <input
            /* value={this.state.uploadImage} */
            ref={(input) => this.input = input}
            name= "login"
            placeholder="Login"
            />
            </label>
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Login;