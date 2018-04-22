// jshint asi:true

const router = require('express').Router()

router.get('/', (req, res) => {
  if (req.session.name) {
    return res.redirect('/')
  }
  res.render('login')
})

router.post('/', (req, res) => {
  req.session = req.body
  res.render('index', req.session)
})

module.exports = router
