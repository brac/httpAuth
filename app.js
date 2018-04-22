// jshint asi:true

const path          = require('path')
const express       = require('express')
const bcrypt        = require('bcryptjs')
const bodyParser    = require('body-parser')
const cookieParser  = require('cookie-parser') //needed with cookieSession ??
const cookieSession = require('cookie-session')
const signupRoutes  = require(path.join(__dirname, '/routes/signup'))
const loginRoutes   = require(path.join(__dirname, '/routes/login'))
const onHeaders     = require('on-headers')
const app           = express()

app.use(cookieSession({
  name: 'session',
  keys: 'abc123',
  maxAge: 30  * 60 * 1000, // 30 minutes
  httpOnly: true,          // don't let JS code access cookies
  secure: true,            // only set cookies over https
  ephemeral: true          // destroy cookies when the browser closes
}))

app.use(bodyParser.urlencoded({extended: true}))
app.use('/static', express.static('public'))
app.use(cookieParser())

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

app.use((req, res, next) => {
  if (req.cookies.sessionCookie == undefined) {
    req.cookies.sessionCookie = {}
  }

  req.session = req.cookies.sessionCookie

  onHeaders(res, () => {
    res.cookie('sessionCookie', req.session)
  })
  next()
})

app.use('/signup', signupRoutes)
app.use('/login', loginRoutes)

app.get('/', (req, res) => {
  res.render('index', {name: req.session.name})
})

app.post('/', (req, res) => {
  res.render('index', { name: req.session.name })
})

app.get('/logout', (req, res) => {
  res.session = {}
  res.render('index')
})

app.listen(3000, () => {
  console.log('HTTP Auth app listening on port 3000')
})