'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MomeventSchema = new _mongoose.Schema({
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
});

var model = _mongoose2.default.model('Movement', MomeventSchema);

exports.default = model;