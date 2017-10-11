import React from 'react';
import ReactDOM from 'react-dom';
import WholeNavBar from './WholeNavBar';
import AddArtworkForm from './uncontrolledForm'
import SearchForm from './SearchForm'


export default class App extends React.Component {
  render() {
       return (
      <div className="App"> 
         <WholeNavBar/>
         <AddArtworkForm/>
         <SearchForm/>
        </div>
    ); 
  }
}