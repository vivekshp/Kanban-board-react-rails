(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["server_rendering"],{

/***/ "./app/javascript/components sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./app/javascript/components/ sync ^\.\/.*$ ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./App": "./app/javascript/components/App.jsx",
	"./App.jsx": "./app/javascript/components/App.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/components sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/javascript/components/App.jsx":
/*!*******************************************!*\
  !*** ./app/javascript/components/App.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");


function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hi, this is the home page");
}
function Board() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hi, this is the board page");
}
function Lists() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hi, this is the lists page");
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Home, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: "/board",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Board, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: "/lists",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Lists, null)
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/javascript/packs/server_rendering.js":
/*!**************************************************!*\
  !*** ./app/javascript/packs/server_rendering.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
var componentRequireContext = __webpack_require__("./app/javascript/components sync recursive ^\\.\\/.*$");
var ReactRailsUJS = __webpack_require__(/*! react_ujs */ "./node_modules/react_ujs/react_ujs/index.js");
ReactRailsUJS.useContext(componentRequireContext);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react_ujs_react_ujs_index_js","vendors-node_modules_react-router-dom_dist_index_js"], function() { return __webpack_exec__("./app/javascript/packs/server_rendering.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=server_rendering.js.map