exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments('id')
    t.string('email', 128).notNullable()
    t.string('username', 16).notNullable()
    t.string('phone_number', 16).notNullable()
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
