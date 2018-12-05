require('dotenv').load()

module.exports = {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
  twilioNumber: process.env.TWILIO_NUMBER,
  authyKey: process.env.AUTHY_API_KEY
}
