// jshint asi:true

const db = require('./client')

const test = () => {
  db.any(`SELECT * FROM users`).then(
    results => results,
    error => error
  )
}

module.exports = {
  test
}