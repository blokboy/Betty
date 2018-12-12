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
        width: '300px'
      }
    }
    return(
      <div className="hero-container" style={styles.container}>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>

      <div className="column is-one-fifth" style={styles.sideBar}>
      <p className="title">
        Betty | <span className="icon"><i className="fas fa-sticky-note"></i></span>
      </p>
      <div className="field has-addons">
        <div className="control" style={styles.searchBar}>
          <input className="input" type="text" placeholder="Find a Note"  />
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
      <a className="button is-normal is-fullwidth">Account Settings</a>

      </div>
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
