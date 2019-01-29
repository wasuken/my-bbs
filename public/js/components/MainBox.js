"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    padding:10px 0px 5px 20px\n\tfont-size:18px;\n"], ["\n    padding:10px 0px 5px 20px\n\tfont-size:18px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    padding:10px 0px 5px 20px;\n\tfloat: left;\n\twidth: 50%;\n\tfont-size:18px;\n"], ["\n    padding:10px 0px 5px 20px;\n\tfloat: left;\n\twidth: 50%;\n\tfont-size:18px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    padding:10px 0px 5px 20px\n\twidth: 50%;\n\tfloat: right;\n\tfont-size:18px;\n"], ["\n    padding:10px 0px 5px 20px\n\twidth: 50%;\n\tfloat: right;\n\tfont-size:18px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.div(_templateObject);
var LeftBox = _styledComponents2.default.div(_templateObject2);
var RightBox = _styledComponents2.default.div(_templateObject3);
var FooterBox = _styledComponents2.default.div(_templateObject);

var MainBox = function (_React$Component) {
	_inherits(MainBox, _React$Component);

	function MainBox() {
		_classCallCheck(this, MainBox);

		return _possibleConstructorReturn(this, (MainBox.__proto__ || Object.getPrototypeOf(MainBox)).call(this));
	}

	_createClass(MainBox, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					Header,
					{ title: this.props.title },
					this.props.headerComponent
				),
				_react2.default.createElement(
					LeftBox,
					null,
					this.props.leftComponent
				),
				_react2.default.createElement(
					RightBox,
					null,
					this.props.rightComponent
				),
				_react2.default.createElement(
					FooterBox,
					null,
					this.props.footerComponent
				)
			);
		}
	}]);

	return MainBox;
}(_react2.default.Component);

exports.default = MainBox;