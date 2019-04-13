import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Auth from './containers/Auth'
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/auth" component={Auth}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
