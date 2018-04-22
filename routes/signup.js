// jshint asi:true
const router = require('express').Router()
const { findAll } = require('../database/queries')

router.get('/', (req, res) => {
  res.render('signup')
})

router.post('/', (req, res) => {
  // TODO: Determine if all fields are present
  if (req.body.name === '' || req.body.password === '' || req.body.passwordConfirm === '' ) {
    return res.render('signup', { message: 'Please provide a username and password' })
  }

  // TODO: Determine if passwords match
  if (req.body.password != req.body.passwordConfirm) {
    return res.render('signup', { message: 'Your password did not match' })
  }

  // TODO: Determine if name is taken - stretch

  // TODO: Store data to database, render index

  findAll().then(
    results => {
      return res.render('signup', {message: `${results[0].name} and ${results[1].name}`}),
    error => {
      return res.render('signup', {message: error})
      }
    })
})

module.exports = router