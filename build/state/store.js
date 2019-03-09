"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("flux/utils");

var _dispatcher = _interopRequireDefault(require("./dispatcher"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Store =
/*#__PURE__*/
function (_ReduceStore) {
  _inherits(Store, _ReduceStore);

  function Store() {
    _classCallCheck(this, Store);

    return _possibleConstructorReturn(this, _getPrototypeOf(Store).call(this, _dispatcher.default));
  }

  _createClass(Store, [{
    key: "getInitialState",
    value: function getInitialState() {
      return {
        visible: false
      };
    }
  }, {
    key: "reduce",
    value: function reduce(state, _ref) {
      var type = _ref.type,
          _ref$data = _ref.data;
      _ref$data = _ref$data === void 0 ? {} : _ref$data;
      var message = _ref$data.message,
          snackbarType = _ref$data.type,
          autoHideDuration = _ref$data.autoHideDuration;

      switch (type) {
        case _actions.SHOW_SNACKBAR:
          return Object.assign({}, state, this.getInitialState(), {
            visible: true,
            message: message,
            type: snackbarType,
            autoHideDuration: autoHideDuration
          });

        case _actions.HIDE_SNACKBAR:
          return Object.assign({}, state, this.getInitialState(), {
            visible: false
          });

        default:
          return state;
      }
    }
  }]);

  return Store;
}(_utils.ReduceStore);

var _default = new Store();

exports.default = _default;