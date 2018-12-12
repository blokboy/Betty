import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'

export default class LandingPage extends Component {
  render() {
    return(
      <div className="hero-container">
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>

        <section className="hero is-info is-fullwidth is-fullheight">

          <div className="hero-head">
            <nav className="navbar">
              <div className="container">

              <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item"><Link to="/">Home</Link></a>
                <a className="navbar-item" href="https://github.com/blokboy/Betty/blob/master/README.md">Documentation</a>

                <span className="navbar-item">
                  <a className="button is-info is-inverted" href="https://github.com/blokboy/Betty/archive/master.zip">
                    <span className="icon">
                    <i className="fab fa-github"></i>
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
                Betty | <span className="icon"><i className="fas fa-sticky-note"></i></span>
              </p>
              <br />
              <p className="subtitle">
                Made w/ <span className="icon"><i className="fas fa-heart"></i></span> by <a href="https://github.com/blokboy">Blokboy</a> & <a href="https://github.com/coetry">Coetry</a>.
              </p>
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
