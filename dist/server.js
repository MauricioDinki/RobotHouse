'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('api');

var _api2 = _interopRequireDefault(_api);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8000;

_mongoose2.default.connect(process.env.MONGOLAB_URL || 'mongodb://localhost/robot-db');

app.use('/movement', _api2.default);

app.listen(port, function () {
  return console.log('Server listening on port ' + port);
});