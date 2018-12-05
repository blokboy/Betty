import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage.js';
import RegistrationPage from './Components/RegistrationPage.js';
import LoginPage from './Components/LoginPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ LandingPage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/registration" component={ RegistrationPage } />
      </div>
    );
  }
}

export default App;
