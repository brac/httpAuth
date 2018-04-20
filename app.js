// jshint asi:true

const express       = require('express')
const bcrypt        = require('bcryptjs')
const bodyParser    = require('body-parser')
// const cookieParser  = require('cookie-parser') //needed with cookieSession ??
const cookieSession = require('cookie-session')
const path          = require('path')
const app           = express()

app.use(bodyParser.urlencoded({extended: true}))


app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('HTTP Auth app listening on port 3000')
})

// "pg-promise": "^8.4.0",
// "pug": "^2.0.3"