import express from 'express'
import mongoose from 'mongoose'
import uriUtil from 'mongodb-uri'
import path from 'path'
import swig from 'swig'
import cons from 'consolidate'
import bodyParser from 'body-parser'

import movement from './routes/movement'
import routes from './routes/index'
import configuration from './routes/configuration'

const app = express()
const port = process.env.PORT || 8000

let mongodbUri = process.env.MONGOLAB_URL || 'mongodb://localhost/robot-db'
let mongooseUri = uriUtil.formatMongoose(mongodbUri)

mongoose.connect(mongooseUri)

let conn = mongoose.connection

conn.on('error', console.error.bind(console, 'connection error:'))

app.engine('html', cons.swig)

app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes)
app.use('/movement', movement)
app.use('/configuration', configuration)

conn.once('open', function() {
  app.listen(port, () => console.log(`Server listening on port ${port}`))
});
