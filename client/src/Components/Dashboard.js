import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    /*
    axios
      .get('http://localhost:5000/dashboard/:id' + id, )
    */
    /*
    this.setState({
      todos:
    })
    */
  }

  render() {
    const styles = {
      sideBar : {
        height: 'auto',
        backgroundColor: 'lightgrey',
        paddingTop: '30px'
      },
      container: {
        display: 'flex',
      },
      dashboard: {
        width: 'auto',
      },
      header: {
        marginTop: '20px'
      },
      searchBar: {
        width: '200px',
        marginLeft: '20px'
      },
      menu: {
        paddingTop: '60px',
        width: '300px'
      }
    }
    return(
      <div className="hero-container" style={styles.container}>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>

      <aside class="menu" style={styles.menu}>
      <div class="field has-addons">
        <div class="control" style={styles.searchBar}>
          <input class="input" type="text" placeholder="Find a Task"  />
        </div>
        <div class="control">
          <a class="button is-info">
            Search
          </a>
        </div>
      </div>
        <p class="menu-label" style={styles.menu}>
          General
        </p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Calendar</a></li>
          <li><a>Reminders</a></li>
          <li><a>Notifications</a></li>
        </ul>
        <p class="menu-label" style={styles.menu}>
          Administration
        </p>
        <ul class="menu-list">
          <li><a>Betty Settings</a></li>
          <li><a>Account Settings</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
      </aside>

        <section className="hero is-info is-fullheight" style={styles.dashboard}>

          <div className="hero-head" style={styles.header}>
            <div className="container has-text-centered">
              <p className="title">
                Dashboard | <span className="icon"><i className="fas fa-sticky-note"></i></span>
              </p>
              <hr />
            </div>
          </div>

          <div className="hero-body">

          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Logout</Link>
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
