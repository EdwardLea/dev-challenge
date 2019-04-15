const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

mongoose.connect('mongodb://localhost/jdlt')

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(4000, () => console.log('Up and running on port 4000'))

module.exports = app
