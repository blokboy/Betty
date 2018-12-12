import React, {Component} from 'react'
import RegistrationPage from './RegistrationPage.js'
import axios from 'axios'
import {Link} from 'react-router-dom'
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
    if (this.props.phoneNumber) {
      axios
        .post(
          'http://localhost:5000/verify',
          {verificationCode},
          {
            headers: {
              phonenumber: this.props.phoneNumber
            }
          }
        )
        .then(res => {
          console.log('Phone Verified!')
        })
        .catch(e => {
          console.log(e)
        })
    }
    window.location.reload()
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background">
          <RegistrationPage />
        </div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              We Sent A Verification Code To Your Phone!
            </p>
            <Link to="/registration">
              <button className="delete" aria-label="close" />
            </Link>
          </header>

          <section className="modal-card-body">
            <label className="label">Verification Code</label>
            <input
              className="input is-rounded is-info"
              type="text"
              placeholder="Enter your 6 digit code here"
              name="verificationCode"
              value={this.state.verificationCode}
              onChange={this.updateInputText}
            />

            <footer className="modal-card-foot">
              <button className="button is-success" onClick={this.submit}>
                Verify Code
              </button>
              <button className="button">
                <Link to="/registration">Cancel</Link>
              </button>
            </footer>
          </section>
        </div>
      </div>
    )
  }
}
