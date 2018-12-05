const express = require('express')
const server = express()
const User = require('../models/User')

server.use(express.json())

server.post('/register', async (req, res) => {
  const {email, phone} = req.body
  User.register(email, phone, (err, user) => {
    if (err) {
      console.log(err)
      res.status(500).json({error: err})
    }
    res.status(200).json({user})
  })
})

const port = 5000
server.listen(port, () => {
  console.log(`\n=== Listening on http://localhost:${port} ===\n`)
})
