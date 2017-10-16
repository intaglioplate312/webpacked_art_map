import React from "react";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import uncontrolledForm from "../components/uncontrolledForm";
import NoMatch from "../components/NoMatch";
import Nav from "../components/Nav";

const Routes = () =>
  <Router>
    <div>
      <Nav />
        <Route exact path="/" />
        <Route exact path="/addArt" component={uncontrolledForm} />
        <Route component={NoMatch} />
    </div>
  </Router>;

export default Routes;

