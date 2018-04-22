// jshint asi:true

const router = require('express').Router()
const { findAll,
        findOne,
        createUser } = require('../database/queries')

router.get('/', (req, res) => {
  if (req.session.name) {
    return res.redirect('/')
  }
  res.render('login')
})

router.post('/', (req, res) => {
  if (!req.body.name || !req.body.password) {
    return res.render('login', {message: 'Please provide a valid Username and Password'} )
  }

  findOne(req.body.name).then(
    results => {
      if (results.received == 0) {
        return res.render('login', {message: 'User not found' })
      }

      if (req.body.password != results.password) {
        return res.render('login', {message: 'Incorrect Password'})
      }

      req.session = req.body
      res.render('index', req.session)
    },
    error =>   {return res.render('login', {message: error})}
  )
})

module.exports = router
