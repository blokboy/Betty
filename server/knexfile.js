// Update with your config settings.

module.exports = {

  development: {
  client: 'sqlite3',
  connection: {
    filename: './db/betty.sqlite3'
  },
  useNullAsDefault: true,
  migrations: {
    directory: './db/migrations',
    tableName: 'migrations'
  },
  seeds: { directory: './seeds' }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
