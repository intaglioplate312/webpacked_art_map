import React from 'react';
import ReactDOM from 'react-dom';
import AddArtworkForm from './uncontrolledForm'
import SearchForm from './SearchForm'
import Nav from './Nav';
import Login from './Login';
import LoginButton from './LoginButton'
// import NoMAtch from './NoMatch';
// import About from './About'
// import WholeNavBar from './WholeNavBar';



export default class App extends React.Component {
  render() {
       return (
      <div className="App"> 
            {/* <WholeNavBar/> */}
            {/* <About/> */}
            {/* <SearchForm/> */}
            {/*<NoMAtch/>*/}
         <Nav/>
         <Login/>
         <LoginButton/>
         <AddArtworkForm/>
        
        </div>
    ); 
  }
}