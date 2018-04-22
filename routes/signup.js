// jshint asi:true
const router = require('express').Router()
const { findAll } = require('../database/queries')

router.get('/', (req, res) => {
  res.render('signup')
})

router.post('/', (req, res) => {
  findAll().then(
    results => {
      console.log(results)
      return res.render('signup', {message: `this is working`}),
    error => {
      return res.render('signup', {message: error})
      }
    })
})

module.exports = router