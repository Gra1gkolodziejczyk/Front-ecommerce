"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("container_Layout_Header_MainMenu_js",{

/***/ "./container/Layout/Header/MainMenu.js":
/*!*********************************************!*\
  !*** ./container/Layout/Header/MainMenu.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useTranslation */ \"./hooks/useTranslation.js\");\n/* harmony import */ var _MainMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainMenu.style */ \"./container/Layout/Header/MainMenu.style.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Desktop/front-ecommerce/container/Layout/Header/MainMenu.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar MainMenu = function MainMenu(_ref) {\n  _s();\n\n  var className = _ref.className,\n      isLoggedIn = _ref.isLoggedIn;\n\n  var _useTranslation = (0,_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      t = _useTranslation.t;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var locale = router.locale,\n      query = router.query;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MainMenu_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MainMenu_style__WEBPACK_IMPORTED_MODULE_4__.BurgerMenuItem, {\n      onClick: setVisible,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MainMenu_style__WEBPACK_IMPORTED_MODULE_4__.TopSpan, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MainMenu_style__WEBPACK_IMPORTED_MODULE_4__.MidSpan, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MainMenu_style__WEBPACK_IMPORTED_MODULE_4__.BotSpan, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this), visible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(MainMenu, \"rjNeirvghhmciqZTF27auKT2lFw=\", false, function () {\n  return [_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = MainMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.withRouter)(MainMenu));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MainMenu\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9NYWluTWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsU0FBNEIsUUFBNUJBLFNBQTRCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFDNUMsd0JBQWNSLGlFQUFjLEVBQTVCO0FBQUEsTUFBUVMsQ0FBUixtQkFBUUEsQ0FBUjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdmLHNEQUFTLEVBQXhCO0FBQ0EsTUFBUWdCLE1BQVIsR0FBMEJELE1BQTFCLENBQVFDLE1BQVI7QUFBQSxNQUFnQkMsS0FBaEIsR0FBMEJGLE1BQTFCLENBQWdCRSxLQUFoQjs7QUFDQSxrQkFBZ0NmLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4QmpCLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9rQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0ksOERBQUMsMkRBQUQ7QUFBZ0IsYUFBTyxFQUFFQSxVQUF6QjtBQUFBLDhCQUNJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQU1NRCxPQUFPLGdCQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxHQUlQLElBVk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFjSCxDQXJCRDs7R0FBTVQ7VUFDWU4sK0RBQ0NMOzs7S0FGYlc7QUF1Qk4sK0RBQWUsTUFBQVYsdURBQVUsQ0FBQ1UsUUFBRCxDQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9NYWluTWVudS5qcz81NGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRyYW5zbGF0aW9uJztcbmltcG9ydCBCdXJnZXJNZW51LCB7IEJ1cmdlck1lbnVJdGVtLCBUb3BTcGFuLCBNaWRTcGFuLCBCb3RTcGFuIH0gZnJvbSAnLi9NYWluTWVudS5zdHlsZSc7XG5cbmNvbnN0IE1haW5NZW51ID0gKHsgY2xhc3NOYW1lLCBpc0xvZ2dlZEluIH0pID0+IHtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBsb2NhbGUsIHF1ZXJ5IH0gPSByb3V0ZXI7XG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCdXJnZXJNZW51PlxuICAgICAgICAgICAgPEJ1cmdlck1lbnVJdGVtIG9uQ2xpY2s9e3NldFZpc2libGV9PlxuICAgICAgICAgICAgICAgIDxUb3BTcGFuPjwvVG9wU3Bhbj5cbiAgICAgICAgICAgICAgICA8TWlkU3Bhbj48L01pZFNwYW4+XG4gICAgICAgICAgICAgICAgPEJvdFNwYW4+PC9Cb3RTcGFuPlxuICAgICAgICAgICAgPC9CdXJnZXJNZW51SXRlbT5cbiAgICAgICAgICAgIHsgdmlzaWJsZSA/XG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsIH1cbiAgICAgICAgPC9CdXJnZXJNZW51PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNYWluTWVudSlcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ3aXRoUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlVHJhbnNsYXRpb24iLCJCdXJnZXJNZW51IiwiQnVyZ2VyTWVudUl0ZW0iLCJUb3BTcGFuIiwiTWlkU3BhbiIsIkJvdFNwYW4iLCJNYWluTWVudSIsImNsYXNzTmFtZSIsImlzTG9nZ2VkSW4iLCJ0Iiwicm91dGVyIiwibG9jYWxlIiwicXVlcnkiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwidmlzaWJsZSIsInNldFZpc2libGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./container/Layout/Header/MainMenu.js\n");

/***/ })

});