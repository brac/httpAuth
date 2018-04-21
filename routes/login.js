// jshint asi:true

const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  res.render('index', req.body)
})

module.exports = router
