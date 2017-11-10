webpackJsonp([0],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(19);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _topBar = __webpack_require__(35);

var _animations = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Tooltips init */


//import 'es6-promise/auto';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* Top Bar Scripts */


/* Animations */

_animations.navAnimation.init();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* Nav animations */

/* Additional Controls */
var AdditionalControls = exports.AdditionalControls = {
	btns: $(".topBar__wrapper .additional__controls button"),
	fontSize: 10,
	init: function init() {
		this.btns.click(this.checkKind);
	},
	checkKind: function checkKind() {
		if ($(this).hasClass("btn__increaseFontSize") || $(this).hasClass("btn__decreaseFontSize")) {
			AdditionalControls.fontSizeChange(this);
		} else if ($(this).hasClass("langPL") || $(this).hasClass("langENG")) {
			AdditionalControls.language(this);
		}
	},
	fontSizeChange: function fontSizeChange(btn) {
		var $btn = $(btn);

		if ($btn.hasClass("btn__increaseFontSize")) {
			document.documentElement.style.setProperty('--fontSize', this.increseFont(this.fontSize));
		} else {
			document.documentElement.style.setProperty('--fontSize', this.decreaseFont(this.fontSize));
		}
	},

	increseFont: function increseFont(size) {
		size = parseFloat(size);
		if (size < 12) {
			AdditionalControls.fontSize = "" + size * 1.03;
		}

		return AdditionalControls.fontSize + "px";
	},
	decreaseFont: function decreaseFont(size) {
		size = parseFloat(size);
		if (size > 9) {
			AdditionalControls.fontSize = "" + size * 0.95;
		}

		return AdditionalControls.fontSize + "px";
	},
	language: function language(btn) {
		console.log("Work in progres...");
	}
};

AdditionalControls.init();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
var navAnimation = exports.navAnimation = {
	$link: $(".topBar__wrapper .nav-link"),
	$border: $(".nav__links_border"),
	timer: false,

	init: function init() {
		this.$link.hover(this.setBorder, this.outBorder);
	},
	setBorder: function setBorder(e) {
		if (navAnimation.timer != false) {
			clearInterval(navAnimation.timer);
			navAnimation.timer = false;
		}
		var $target = $(e.target);
		/* navAnimation.setBorder.bind(this ); */

		var width = $target.innerWidth() * 0.8,
		    left = $target.position().left + ($target.innerWidth() - width) / 2;

		console.log(width, left);
		navAnimation.$border.css({
			width: width,
			bottom: 0,
			left: left
		});
	},

	outBorder: function outBorder() {
		if (navAnimation.timer === false) {
			navAnimation.timer = setInterval(function () {
				navAnimation.$border.css({
					bottom: 100 + "px"
				});
			}, 1000);
		}
	}

};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ })

},[18]);
//# sourceMappingURL=app.js.map