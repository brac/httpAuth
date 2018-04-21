// jshint asi:true

const pgp = require('pg-promise')()
const cn = 'postgres://ben:null@host:5432/http_auth'
const db = pgp(cn)

module.exports = db
