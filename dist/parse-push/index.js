'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = require('parse/node');

var _node2 = _interopRequireDefault(_node);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.load();

_node2.default.initialize(process.env.PARSE_APPLICATION_ID, process.env.PARSE_JS_KEY, process.env.PARSE_MASTER_KEY);

var SendPush = function SendPush(alert, success_alert) {

  var query = new _node2.default.Query(_node2.default.Installation);

  _node2.default.Push.send({
    where: query,
    data: {
      alert: alert
    }
  }, {
    success: function success() {
      console.log(success_alert);
    },
    error: function error(_error) {
      console.log('Push error', _error);
    }
  });
};

exports.default = SendPush;