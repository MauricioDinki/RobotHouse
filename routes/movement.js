import express from 'express'

import Movement from '../models/'
import SendPush from '../helpers/parse'

const router = express.Router()

router.get('/', (req, res) => {

  console.log('GET movement/')

  Movement.find({}).sort('-ugly_date').exec( (err, docs) => {
    if (err) return res.sendStatus(500).json(err)
    res.json(docs)
  })

})

router.post('/', (req, res) => {

  console.log('POST movement/')

  let currentdate = new Date (),
      day = currentdate.getDate(),
      month = currentdate.getMonth(),
      year = currentdate.getFullYear(),
      hours = currentdate.getHours(),
      minutes = currentdate.getMinutes(),
      seconds = currentdate.getSeconds(),
      full_date = `${day} / ${month} / ${year}`,
      full_time = `${hours}:${minutes}:${seconds}`

  Movement.create({
    full_date: full_date,
    full_time: full_time,
    date: [{
      day: day,
      month: month,
      year: year
    }],

    time: [{
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }]
  }, function (err, doc) {
    if (err) return res.sendStatus(500).json(err)

    SendPush('Movement Detected', 'Push Sended')

    res.json(doc)
  })

})

export default router
