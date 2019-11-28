webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");







var _jsxFileName = "/Users/nickmakuch/Documents/Code/nmakuch-portfolio/components/NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                a {\n                  margin-left: 50px;\n                  color: #333;\n                  font-size: 16px;\n                  font-weight: 500;\n                }\n\n                @media only screen and (max-width: 992px) {\n                  a {\n                    margin-left: 0;\n                    margin-bottom: 20px;\n                  }\n                }\n              "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */





var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav).call(this, props));
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state = {
      collapsed: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Nav, [{
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
      var classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("nav", {
        className: "navbar navbar-expand-lg navbar-light transparent-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
        className: "navbar-brand",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
        onClick: this.toggleNavbar,
        className: "".concat(classTwo),
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarResponsive",
        "aria-controls": "navbarResponsive",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "".concat(classOne),
        id: "navbarResponsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject()),
        className: "navbar-nav ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Portfolio")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/terms",
        as: "/terms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "About")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/faq",
        as: "/faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Contact Me")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/contact",
        as: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Contact Us"))))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.0530c7aa253759489e4f.hot-update.js.map