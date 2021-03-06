import mongoose, { Schema } from 'mongoose'

let ConfigurationSchema = new Schema({
  notifications: Boolean,
  username: String
})

let model = mongoose.model('Configuration', ConfigurationSchema)

export default model
