'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _models = require('models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {

  console.log('GET movement/');

  _models2.default.find({}).sort('-ugly_date').exec(function (err, docs) {
    if (err) return res.sendStatus(500).json(err);
    res.json(docs);
  });
});

router.post('/', function (req, res) {

  console.log('POST movement/');

  var currentdate = new Date(),
      day = currentdate.getDate(),
      month = currentdate.getMonth(),
      year = currentdate.getFullYear(),
      hours = currentdate.getHours(),
      minutes = currentdate.getMinutes(),
      seconds = currentdate.getSeconds(),
      full_date = day + ' / ' + month + ' / ' + year,
      full_time = hours + ':' + minutes + ':' + seconds;

  _models2.default.create({
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
    if (err) return res.sendStatus(500).json(err);
    res.json(doc);
  });
});

exports.default = router;