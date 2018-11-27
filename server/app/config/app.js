const express = require('express')
const consign = require('consign')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/InterviewAPPDb', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

consign()
	.include('./app/controllers')
	.into(app)

//Bad request
app.use((req, res) => {
	res.status(404).send(`url: ${req.originalUrl}  not found`)
})

module.exports = app