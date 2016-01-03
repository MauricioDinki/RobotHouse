import mongoose, { Schema } from 'mongoose'

let MomeventSchema = new Schema({
  full_date: String,
  full_time: String,
  ugly_date: { type: Date, default: Date.now },

  date: [{
    day: Number,
    month: Number,
    year: Number
  }],

  time: [{
    hours: Number,
    minutes: Number,
    seconds: Number
  }]
})

let model = mongoose.model('Movement', MomeventSchema)

export default model
