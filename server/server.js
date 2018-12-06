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

const port = 5000
server.listen(port, () => {
  console.log(`\n=== Listening on http://localhost:${port} ===\n`)
})
