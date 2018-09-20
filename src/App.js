import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import routes from "./Routes";
class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, i) => <Route key={i} { ... route} />)}
      </Switch>
    );
  }
}

export default App;
