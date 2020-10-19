require("dotenv").config();
// Update with your config settings.

module.exports = {

  development: {
      client:'pg',
      connection: {
        host : '127.0.0.1',
        user : 'process.env.DB_USER',
        database : 'process.env.DB_NAME'
      }
    
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'hakuba_hotsprings',
      user:     '3301hakuba',
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
      database: 'hakuba_hotsprings',
      user:     '3301hakuba',
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
