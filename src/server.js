import express from 'express'
import api from 'api'
import mongoose from 'mongoose'
import uriUtil from 'mongodb-uri'

const app = express()
const port = process.env.PORT || 8000

var mongodbUri = process.env.MONGOLAB_URL || 'mongodb://localhost/robot-db'
var mongooseUri = uriUtil.formatMongoose(mongodbUri)

mongoose.connect(mongooseUri)

var conn = mongoose.connection

conn.on('error', console.error.bind(console, 'connection error:'))

app.use('/movement', api)
app.listen(port, () => console.log(`Server listening on port ${port}`))
