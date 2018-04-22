// jshint asi:true

const db = require('./client')

const findAll = () => {
  return db.many(`SELECT * FROM users`).then(
    results => results,
    error => error
  )
}

const findOne = () => {
  // TODO: Find a single user based on name
  // return db.one(`SELECT`)
}

const createUser = () => {
  // TODO: Insert a new user into the table
}

module.exports = {
  findAll,
  findOne,
  createUser
}