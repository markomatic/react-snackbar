"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideSnackbar = exports.HIDE_SNACKBAR = exports.showSnackbar = exports.SHOW_SNACKBAR = void 0;

var _dispatcher = _interopRequireDefault(require("./dispatcher"));

var _model = require("../model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHOW_SNACKBAR = Symbol('Show snackbar');
exports.SHOW_SNACKBAR = SHOW_SNACKBAR;

var showSnackbar = function showSnackbar(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _model.SNACKBAR_TYPES.info;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$autoHideDuration = _ref.autoHideDuration,
      autoHideDuration = _ref$autoHideDuration === void 0 ? 4000 : _ref$autoHideDuration;

  return _dispatcher.default.dispatch({
    type: SHOW_SNACKBAR,
    data: {
      message: message,
      type: type,
      autoHideDuration: autoHideDuration
    }
  });
};

exports.showSnackbar = showSnackbar;
var HIDE_SNACKBAR = Symbol('Hide snackbar');
exports.HIDE_SNACKBAR = HIDE_SNACKBAR;

var hideSnackbar = function hideSnackbar() {
  return _dispatcher.default.dispatch({
    type: HIDE_SNACKBAR
  });
};

exports.hideSnackbar = hideSnackbar;