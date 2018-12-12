import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import 'bulma/css/bulma.css'

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const styles = {
      loginForm: {
        width: '400px',
        height: '400px',
        margin: '0 auto'
      }
    }
    return (
      <div className="hero-container">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
          integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
          crossorigin="anonymous"
        />

        <section className="hero is-info is-fullwidth is-fullheight">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div id="navbarMenuHeroB" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item">
                      <Link to="/">Home</Link>
                    </a>
                    <a
                      className="navbar-item"
                      href="https://github.com/blokboy/Betty/blob/master/README.md"
                    >
                      Documentation
                    </a>

                    <span className="navbar-item">
                      <a className="button is-info is-inverted">
                        <span className="icon">
                          <i className="fab fa-github" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">
                Betty | Login |{' '}
                <span className="icon">
                  <i className="fas fa-sticky-note" />
                </span>
              </p>
              <br />
              <div className="registration-form" style={styles.loginForm}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-success"
                      type="text"
                      name="username"
                      placeholder="Enter Your Username"
                      value={this.props.username}
                      onChange={this.props.updateLoginInfo}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check" />
                    </span>
                  </div>
                  <p className="help is-success">This username is available</p>
                </div>

                <div className="field">
                  <label className="label">Phone Number</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter Your Phone Number (XXX-XXX-XXXX)"
                      value={this.props.phoneNumber}
                      onChange={this.props.updateLoginInfo}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" />I agree to the{' '}
                      <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button
                      className="button is-rounded is-centered"
                      onClick={this.props.submitLoginInfo}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button className="button is-text">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
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
