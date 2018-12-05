exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments()
    t.string('username', 16).notNullable()
    t.string('phone_number', 16).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
