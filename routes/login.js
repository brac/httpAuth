// jshint asi:true

const bcrypt        = require('bcryptjs')
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

      bcrypt.compare(req.body.password, results.password, (error, result) => {
        if (error) {
          console.log(error)
          res.status(500).render('login', {message: 'Internal Error'})
        }

        if (result) {
          results.password = ''
          req.session = results
          return res.render('index', req.session)
        }

        if (!result) {
          res.render('login', {message: 'Incorrect Username or Password'})
        }
      })
    },
    error => {
      return res.render('login', {message: error})
    }
  )
})

module.exports = router
