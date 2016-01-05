import express from 'express'
import Configuration from '../models/configuration_model'

const router = express.Router()

router.get('/', (req, res) => {
  console.log('GET /configuration')
  Configuration.find({}, (err, docs) => {
    if (err) return res.sendStatus(500).json(err)
    res.json(docs)
  })

})

export default router
