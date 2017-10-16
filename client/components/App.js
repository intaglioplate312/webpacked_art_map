import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'

import AddArtworkForm from './uncontrolledForm'
import SearchForm from './SearchForm'
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
         {/* both /roster and /roster/:number begin with /roster */}
        <Route path='/Add' component={AddArtworkForm}/>
        <Route path='/Search' component={SearchForm}/>
        </Switch>
        </div>
    ); 
  }
}