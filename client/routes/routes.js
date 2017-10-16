import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import SearchForm from './SearchForm';
import AddArtworkForm from './uncontrolledForm';
import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Router history={BrowserRouter}>
        <Route path="/" component={Nav}/>
        <Route path="/About" component={About}/>
        <Route path="/Add" component={AddArtworkForm}/>
        <Route path="/Search" component={SearchForm}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));