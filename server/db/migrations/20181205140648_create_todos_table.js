exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', t => {
    t.increments('id')
    t.string('title', 32).notNullable()
    t.string('content', 255).notNullable()
    t.string('category', 16)
    t.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todos')
}
