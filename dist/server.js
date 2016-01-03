'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('api');

var _api2 = _interopRequireDefault(_api);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongodbUri = require('mongodb-uri');

var _mongodbUri2 = _interopRequireDefault(_mongodbUri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8000;

var mongodbUri = process.env.MONGOLAB_URL || 'mongodb://localhost/robot-db';
var mongooseUri = _mongodbUri2.default.formatMongoose(mongodbUri);

_mongoose2.default.connect(mongooseUri);

var conn = _mongoose2.default.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {
  app.use('/movement', _api2.default);
  app.listen(port, function () {
    return console.log('Server listening on port ' + port);
  });
});