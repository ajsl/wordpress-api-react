import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Posts from "./Container/Posts";
import Post from "./Container/Post";


import "./App.css";

const App = () => (
  <Fragment>
      <Router>
        <Switch>
          <Route path="/post/:id" component={Post} />
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </Router> 
  </Fragment>
);

export default App;
