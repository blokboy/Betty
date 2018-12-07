import React, { Component } from 'react'
import RegistrationPage from './RegistrationPage.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'

export default class VerifyModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verificationCode: '',
      isVerified: false
    }
  }

  updateInputText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = e => {
    e.preventDefault()
    const verificationCode = this.state.verificationCode
    const isVerified = this.state.isVerified

    axios
      .post("http://localhost:5000/verify", { verificationCode },
      {
        headers: {
          phonenumber: this.props.phoneNumber || '281-818-7900'
        },
      })
      .then(res => {
        console.log('Phone Verified!')
      })
      .catch(e => {
        console.log(e)
      })

    window.location.reload()
  }

  render() {
    return(
      <div class="modal is-active">
        <div class="modal-background">
          <RegistrationPage />
        </div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">We Sent A Verification Code To Your Phone!</p>
              <Link to='/registration'><button class="delete" aria-label="close"></button></Link>
            </header>

        <section class="modal-card-body">

          <label class="label">Verification Code</label>
          <input
            class="input is-rounded is-info"
            type="text"
            placeholder="Enter your 6 digit code here"
            name="verificationCode"
            value={this.state.verificationCode}
            onChange={this.updateInputText}
          />

        <footer class="modal-card-foot">
          <button class="button is-success" onClick={this.submit}>Verify Code</button>
          <button class="button"><Link to='/registration'>Cancel</Link></button>
        </footer>
        </section>
      </div>
    </div>
    )
  }
}
