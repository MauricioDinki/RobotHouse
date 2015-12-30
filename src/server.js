import express from 'express'
import api from 'api'
import mongoose from 'mongoose'
import uriUtil from 'mongodb-uri'

const app = express()
const port = process.env.PORT || 8000

let mongodbUri = process.env.MONGOLAB_URL || 'mongodb://localhost/robot-db'
let mongooseUri = uriUtil.formatMongoose(mongodbUri)

mongoose.connect(mongooseUri)

let conn = mongoose.connection

conn.on('error', console.error.bind(console, 'connection error:'))

conn.once('open', function() {
  app.use('/movement', api)
  app.listen(port, () => console.log(`Server listening on port ${port}`))
});
