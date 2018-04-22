// jshint asi:true

const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  req.session = req.body
  console.log(req.session)
  res.render('index', req.session)
})

module.exports = router
