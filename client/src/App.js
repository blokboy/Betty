import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import LandingPage from './Components/LandingPage.js'
import RegistrationPage from './Components/RegistrationPage.js'
import LoginPage from './Components/LoginPage.js'
import VerifyModal from './Components/VerifyModal.js'
import Dashboard from './Components/Dashboard.js'
import axios from 'axios'

class App extends Component {
  state = {
    username: '',
    phoneNumber: ''
  }
  updateInfo = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitRegistration = e => {
    e.preventDefault()
    const username = this.state.username
    const phoneNumber = this.state.phoneNumber
    console.log(username)
    console.log(phoneNumber)

    //on the front end disable the submit button if all fields aren't entered
    axios
      .post('http://localhost:5000/register', {username, phoneNumber})
      .then(res => {
        console.log(
          `You have successfully registered as ${username} with the number: ${phoneNumber}!`
        )
        this.props.history.push('/verify')
      })
      .catch(e => {
        console.log(e)
      })
  }
  submitLogin = e => {
    e.preventDefault()
    const username = this.state.username
    const phoneNumber = this.state.phoneNumber

    axios
      .post('http://localhost:5000/login', {username, phoneNumber})
      .then(res => {
        console.log('Check your phone for a verification text to login!')
        this.props.history.push('/verify')
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/login"
          render={props => (
            <LoginPage
              {...props}
              username={this.state.username}
              phoneNumber={this.state.phoneNumber}
              submitLoginInfo={this.submitLogin}
              updateLoginInfo={this.updateInfo}
            />
          )}
        />
        <Route
          path="/registration"
          render={props => (
            <RegistrationPage
              {...props}
              username={this.state.username}
              phoneNumber={this.state.phoneNumber}
              submitRegistration={this.submitRegistration}
              updateRegistrationInfo={this.updateInfo}
            />
          )}
        />
        <Route
          path="/verify"
          render={props => (
            <VerifyModal {...props} phoneNumber={this.state.phoneNumber} />
          )}
        />
        <Route
          path="/dashboard"
          render={props => (
            <Dashboard {...props} />
          )}
        />
      </div>
    )
  }
}

export default withRouter(App)
