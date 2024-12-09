
// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
console.log("DB_HOST","hjfhjdfhdjhfjdhj")
console.log(process.env.DB_USER)

module.exports = {
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port: process.env.DB_PORT|| 5431,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10
    }
};
