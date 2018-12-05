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

        <section class="hero is-info is-fullwidth is-fullheight">

          <div class="hero-head">
            <nav class="navbar">
              <div class="container">

              <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item"><Link to="/">Home</Link></a>
                <a class="navbar-item" href="https://github.com/blokboy/Betty/blob/master/README.md">Documentation</a>

                <span class="navbar-item">
                  <a class="button is-info is-inverted" href="https://github.com/blokboy/Betty/archive/master.zip">
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
                Betty | <span class="icon"><i class="fas fa-sticky-note"></i></span>
              </p>
              <br />
              <p class="subtitle">
                Made w/ <span class="icon"><i class="fas fa-heart"></i></span> by <a href="https://github.com/blokboy">Blokboy</a> & <a href="https://github.com/coetry">Coetry</a>.
              </p>
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
