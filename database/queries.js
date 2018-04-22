// jshint asi:true

const db = require('./client')

const findAll = () => {
  return db.many(`SELECT * FROM users`).then(
    results => results,
    error => error
  )
}

module.exports = {
  findAll
}