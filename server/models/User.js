const db = require('knex')(require('../knexfile').development)
const authy = require('authy')(require('../config').authyKey)

module.exports = {
  register: async (username, phone_number, cb) => {
    console.log('User.register(...)')
    console.log(username, phone_number)
    const id = await db('users').insert({username, phone_number})
    console.log('User ID:', id)
    console.log('verifying phone number ...')
    authy
      .phones()
      .verification_start(
        phone_number,
        '1',
        {via: 'sms', locale: 'en', code_length: '6'},
        cb
      )
  },
  verify: (phoneNumber, verificationCode, cb) => {
    authy.phones().verification_check(phoneNumber, '1', verificationCode, cb)
  },
  sendMessage: async (message, successCallback, errCallback) => {
    console.log('User.sendMessage(...)')
    console.log(message)
  }
  login: async (username, phone_number, cb) => {
    console.log('User.login(...)')
    console.log(username, phone_number)
    const id = await db('users')
    console.log('User ID:', id)
  }
}
