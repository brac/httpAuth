// jshint asi:true
const router = require('express').Router()
const queries = require('../database/queries')

router.get('/', (req, res) => {
  res.render('signup')
})

router.post('/', (req, res) => {
  res.render('signup', {message: `${req.body.name}, ${req.body.password}, ${req.body.passwordConfirm}`})
})

module.exports = router