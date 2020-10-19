// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',

      connection: {
        host : '127.0.0.1',
        user : '3301hakuba',
        password : 'your_database_password',
        database : 'hakuba_hotsprings'
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
