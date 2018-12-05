const db = require('knex')(require('../config/knexfile').development)
const authy = require('authy')(require('../config').authyKey)

module.exports = {
  register: (email, phone, cb) => {
    // default country code: US(1)
    authy.register_user(email, phone, 1, async (err, {user}) => {
      if (err) cb(err)

      const userId = await db('users').insert({email, phone, authyId: user.id})

      authy.request_sms(user.id, true, (err, res) => {
        if (err) cb(err)
        cb(null, {userId, authyId: user.id, email, phone, token: res})
      })
    })
  }
}
