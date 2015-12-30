import express from 'express'
import api from 'api'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 8000

mongoose.connect(process.env.MONGOLAB_URL || 'mongodb://localhost/robot-db')

app.use('/movement', api)

app.listen(port, () => console.log(`Server listening on port ${port}`))
