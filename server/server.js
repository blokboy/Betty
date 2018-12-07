const express = require('express')
const server = express()
const User = require('./models/User')

server.use(express.json())

server.post('/register', async (req, res) => {
  const {username, phoneNumber} = req.body
  console.log(username, phoneNumber)
  User.register(username, phoneNumber, (err, verification) => {
    console.log(verification)
    if (err) {
      console.log(err)
      res.status(500).json({error: err})
    }
    res.status(200).json({verification})
  })
})

server.post('/verify', async (req, res) => {
  const {verificationCode} = req.body
  const phoneNumber = req.headers.phoneNumber || '281-818-7900'
  User.verify(phoneNumber, verificationCode, (err, {success}) => {
    if (err) {
      console.log(err)
      res.status(500).json({error: err})
    }
    console.log(('VERIFICATION SUCCESS:', success))
    res.status(200).json({success})
  })
})

const port = 5000
server.listen(port, () => {
  console.log(`\n=== Listening on http://localhost:${port} ===\n`)
})
