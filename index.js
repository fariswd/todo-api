const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const todoRoute = require('./routes/todoRoute')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', todoRoute)

app.listen(3000, () => console.log('running on port 3000'))