const db = require('knex')(require('../config/knexfile').development)
const authy = require('authy')(require('../config').authyKey)

module.exports = {
  register: async (username, phone_number, cb) => {
    console.log('User.register(...)')
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
  }
}
