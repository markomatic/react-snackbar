"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _model = require("../model");

var _actions = require("../state/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var iconType = {
  success: _CheckCircle.default,
  error: _Error.default,
  warning: _Warning.default,
  info: _Info.default
};

var Snackbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Snackbar, _Component);

  function Snackbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Snackbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Snackbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClose = function () {
      return _this.props.snackbarData.visible && (0, _actions.hideSnackbar)();
    };

    return _this;
  }

  _createClass(Snackbar, [{
    key: "render",
    value: function render() {
      var snackbarData = this.props.snackbarData;

      var _Object$assign = Object.assign({
        type: _model.SNACKBAR_TYPES.success
      }, snackbarData),
          type = _Object$assign.type,
          visible = _Object$assign.visible,
          message = _Object$assign.message,
          autoHideDuration = _Object$assign.autoHideDuration;

      var Icon = iconType[type];
      return _react.default.createElement(_Snackbar.default, {
        className: "MMReactSnackbar",
        open: visible,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        autoHideDuration: autoHideDuration,
        onClose: this.handleClose
      }, _react.default.createElement(_SnackbarContent.default, {
        className: "MMReactSnackbar-".concat(type, "Content"),
        message: _react.default.createElement("span", {
          className: "MMReactSnackbar-message"
        }, _react.default.createElement(Icon, {
          className: "MMReactSnackbar-icon iconType"
        }), message),
        action: [_react.default.createElement(_IconButton.default, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          onClick: this.handleClose
        }, _react.default.createElement(_Close.default, {
          className: "MMReactSnackbar-icon"
        }))]
      }));
    }
  }]);

  return Snackbar;
}(_react.Component);

Snackbar.propTypes = {
  snackbarData: _propTypes.default.object.isRequired
};
var _default = Snackbar;
exports.default = _default;