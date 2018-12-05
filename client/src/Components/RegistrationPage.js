import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bulma/css/bulma.css'

export default class RegistrationPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      phoneNumber: '',
    }
  }

  updateInputText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = e => {
    e.preventDefault()
    const username = this.state.usernameText
    const phoneNumber = this.state.phoneNumber

    //on the front end disable the submit button if all fields are entered and password !== passwordConf
    if(username && phoneNumber.length < 12) {
        axios
          .post("http://localhost:3333/registration", { username, phoneNumber })
          .then(() => {
            console.log(`You have successfully registered as ${username} with the number: ${phoneNumber}!`)
          })
          .catch(e => {
            console.log(e)
          })
      }
    window.location.reload()
  }

  render() {
    const styles = {
      registrationForm: {
        width: '400px',
        height: '400px',
        margin: '0 auto'
      }
    }
    return(
      <div className="hero-container">
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>

        <section class="hero is-info is-fullwidth is-fullheight">

          <div class="hero-head">
            <nav class="navbar">
              <div class="container">

              <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item"><Link to="/">Home</Link></a>
                <a class="navbar-item" href="https://github.com/blokboy/Betty/blob/master/README.md">Documentation</a>

                <span class="navbar-item">
                  <a class="button is-info is-inverted">
                    <span class="icon">
                    <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
              </div>
              </div>
            </nav>
          </div>

          <div class="hero-body">
            <div class="container has-text-centered">
              <p class="title">
                Betty | Registration | <span class="icon"><i class="fas fa-sticky-note"></i></span>
              </p>
              <br />
              <div class="registration-form" style={styles.registrationForm}>

                  <div class="field">
                  <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        class="input is-success"
                        type="text"
                        name="usernameText"
                        placeholder="Enter Your Username"
                        value={this.state.usernameText}
                        onChange={this.updateInputText}
                       />
                       <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                       </span>
                       <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                       </span>
                     </div>
                     <p class="help is-success">This username is available</p>
                   </div>

                   <div class="field">
                   <label class="label">Phone Number</label>
                     <div class="control">
                       <input
                         class="input"
                         type="text"
                         name="passwordText"
                         placeholder="Enter Your Password"
                         value={this.state.phoneNumber}
                         onChange={this.updateInputText}
                       />
                     </div>
                   </div>

                   <div class="field">
                   <div class="control">
                    <label class="checkbox">
                      <input type="checkbox"/>
                        I agree to the <a href="#">terms and conditions</a>
                    </label>
                    </div>
                    </div>

                    <div class="field is-grouped">
                    <div class="control">
                      <button class="button is-rounded is-centered" onClick={this.submit}>Submit</button>
                    </div>
                    <div class="control">
                      <button class="button is-text">Cancel</button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

          <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/registration">Register</Link>
                </li>
              </ul>
            </div>
            </nav>
          </div>
      </section>
    </div>
    )
  }
}
