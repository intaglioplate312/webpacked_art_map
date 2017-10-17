import React from 'react';
import ReactDOM from 'react-dom';
import WholeNavBar from './WholeNavBar';
import AddArtworkForm from './uncontrolledForm'
import SearchForm from './SearchForm'
// import Nav from './Nav'
// import About from './About'


export default class App extends React.Component {
  render() {
       return (
      <div className="App"> 
         <WholeNavBar/>
         {/* <About/> */}
         <AddArtworkForm/>
         <SearchForm/>
        </div>
    ); 
  }
}