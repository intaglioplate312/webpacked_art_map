import React from 'react';
import ReactDOM from 'react-dom';
import WholeNavBar from './WholeNavBar';
import NameForm from './uncontrolledForm'


export default class App extends React.Component {
  render() {
       return (
      <div className="App"> 
         <WholeNavBar/>
         <NameForm/>
         <h1> Start of Map </h1>
        </div>
    ); 
  }
}