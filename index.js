const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const todoRoute = require('./routes/todoRoute')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', todoRoute)

app.listen(3000, () => console.log('on port 3000'))