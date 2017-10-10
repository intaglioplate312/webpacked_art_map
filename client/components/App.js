import React from 'react';
import ReactDOM from 'react-dom';
import WholeNavBar from './WholeNavBar';
import RegisterModal from './uncontrolledForm'
import Login from './Login'


export default class App extends React.Component {
  render() {
       return (
      <div className="App"> 
         <WholeNavBar/>
         <RegisterModal/>
         <Login/>
         <h1> Start of Map </h1>
        </div>
    ); 
  }
}