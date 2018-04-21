// jshint asi:true

const express       = require('express')
const bcrypt        = require('bcryptjs')
const bodyParser    = require('body-parser')
// const cookieParser  = require('cookie-parser') //needed with cookieSession ??
const cookieSession = require('cookie-session')
const path          = require('path')
const app           = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use('/static', express.static('public'))


app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('index', { name: req.body.name })
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', (req, res) => {
  res.render('signup', {message: 'Please provide a Username'})
})

app.get('/logout', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('HTTP Auth app listening on port 3000')
})

// "pg-promise": "^8.4.0",
// "pug": "^2.0.3"