// jshint asi:true
const router = require('express').Router()
const { findAll,
        findOne,
        createUser } = require('../database/queries')

router.get('/', (req, res) => {
  res.render('signup')
})

router.post('/', (req, res) => {
  const user = req.body

  // Determine if all fields are present
  if (user.name === '' || user.password === '' || user.passwordConfirm === '' ) {
    return res.render('signup', { message: 'Please provide a username and password' })
  }

  // Determine if password confirmation matches
  if (user.password != user.passwordConfirm) {
    return res.render('signup', { message: 'Your password did not match' })
  }

  // TODO: Determine if name is taken - stretch

  // Store data to database, render index
  createUser(user).then(
    results => {
      console.log(req.session)
      return res.render('index', {name: user.name, message: `User Created`}),
    error => {
      return res.render('signup', {message: error})
    }
  })
})

module.exports = router