import express from 'express'
import bodyParser from 'body-parser'

import Configuration from '../models/configuration'

const router = express.Router()

router.get('/', (req, res) => {

  console.log('GET /configuration')

  Configuration.find({}, (err, docs) => {
    if (err) return res.sendStatus(500).json(err)
    res.json(docs)
  })

})

router.post('/', (req, res) => {

  console.log('POST /configuration')

  let new_notification = req.body.notification

  let conditions = { username: 'MauricioDinki' },
      update = { notifications: new_notification },
      options = { multi: false }

  Configuration.update(conditions, update, options, (err, docs) => {
    if (err) return res.sendStatus(500).json(err)
    res.json(docs)
  });
  // Configuration.create({
  //   notifications: true,
  //   username: 'MauricioDinki'
  // }, (err, doc) => {
  //   if (err) return res.sendStatus(500).json(err)
  //   res.json(doc)
  // })
})

export default router
