import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'

import AddArtworkForm from './uncontrolledForm'
import SearchForm from './SearchForm'
import About from './About';
import Nav from './Nav';




export default class App extends React.Component {
  render() {
       return (
      <div className="App"> 
         {/* <Nav/>
         <SearchForm/>
         <AddArtworkForm/> */}
        <Switch>
        <Route exact path='/' component={Nav}/>
        <Route path='/About' component={About}/>
        <Route path='/Add' component={AddArtworkForm}/>
        <Route path='/Search' component={SearchForm}/>
        </Switch>
        </div>
    ); 
  }
}