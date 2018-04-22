// jshint asi:true

const db = require('./client')

const findAll = () => {
  return db.many(`SELECT * FROM users`).then(
    results => results,
    error   => error
  )
}

const findOne = (name) => {
  return db.one(`SELECT * FROM users WHERE name = $1`, [name]).then(
    results => results,
    error   => error
  )
}

const createUser = (user) => {
  return db.one(`INSERT INTO users (name, password) VALUES ($1, $2) RETURNING id`, [user.name, user.password]).then(
    results => results.id,
    error   => error
  )
}

module.exports = {
  findAll,
  findOne,
  createUser
}