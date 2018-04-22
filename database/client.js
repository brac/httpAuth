// jshint asi:true

const pgp = require('pg-promise')()

const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'httpAuth',
    user: 'ben',
    password: null
}

const db = pgp(cn) // database instance;
module.exports = db
