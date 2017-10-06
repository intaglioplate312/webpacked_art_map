import React from 'react';
import ReactDOM from 'react-dom';
import WholeNavBar from './WholeNavBar';


export default class App extends React.Component {
  render() {
       return (
      <div className="App"> 
         <WholeNavBar/>
        
         <h1> Start of Map </h1>
        </div>
    ); 
  }
}