"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("container_Layout_Header_Header_js",{

/***/ "./container/Layout/Header/Header.js":
/*!*******************************************!*\
  !*** ./container/Layout/Header/Header.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stickynode */ \"./node_modules/react-stickynode/dist/es/Sticky.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Navbar/Navbar */ \"./components/Navbar/Navbar.js\");\n/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.style */ \"./container/Layout/Header/Header.style.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useTranslation */ \"./hooks/useTranslation.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AuthMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function() {\n    return __webpack_require__.e(/*! import() */ \"container_Layout_Header_AuthMenu_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./AuthMenu */ \"./container/Layout/Header/AuthMenu.js\"));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! ./AuthMenu */ \"./container/Layout/Header/AuthMenu.js\")\n            ];\n        },\n        modules: [\n            \"../container/Layout/Header/Header.js -> \" + \"./AuthMenu\"\n        ]\n    }\n});\n_c1 = AuthMenu;\nvar MainMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c2 = function() {\n    return __webpack_require__.e(/*! import() */ \"container_Layout_Header_MainMenu_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./MainMenu */ \"./container/Layout/Header/MainMenu.js\"));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! ./MainMenu */ \"./container/Layout/Header/MainMenu.js\")\n            ];\n        },\n        modules: [\n            \"../container/Layout/Header/Header.js -> \" + \"./MainMenu\"\n        ]\n    }\n});\n_c3 = MainMenu;\nvar MobileMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c4 = function() {\n    return __webpack_require__.e(/*! import() */ \"container_Layout_Header_MobileMenu_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./MobileMenu */ \"./container/Layout/Header/MobileMenu.js\"));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! ./MobileMenu */ \"./container/Layout/Header/MobileMenu.js\")\n            ];\n        },\n        modules: [\n            \"../container/Layout/Header/Header.js -> \" + \"./MobileMenu\"\n        ]\n    }\n});\n_c5 = MobileMenu;\nvar ProfileMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c6 = function() {\n    return __webpack_require__.e(/*! import() */ \"container_Layout_Header_ProfileMenu_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./ProfileMenu */ \"./container/Layout/Header/ProfileMenu.js\"));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! ./ProfileMenu */ \"./container/Layout/Header/ProfileMenu.js\")\n            ];\n        },\n        modules: [\n            \"../container/Layout/Header/Header.js -> \" + \"./ProfileMenu\"\n        ]\n    }\n});\n_c7 = ProfileMenu;\nvar Header = function(param) {\n    var user = param.user, isLoggedIn = param.isLoggedIn;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var locale = router.locale;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), visible = ref[0], setVisible = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), language = ref1[0], setLanguage = ref1[1];\n    var username;\n    var sideBarHandler = function() {\n        setVisible(!visible);\n    };\n    var Option = antd__WEBPACK_IMPORTED_MODULE_10__.Select.Option;\n    var headerType = router.pathname === \"/\" ? \"default\" : \"default\";\n    var auth = typeof user === 'string' ? JSON.parse(user) : user;\n    var t = (0,_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])().t;\n    var handleChangeLocale = function(key) {\n        router.push(router.asPath, router.asPath, {\n            locale: key\n        });\n        setLanguage(key);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __source: {\n            fileName: \"/Users/mathieuchambaud/Documents/Dossier-Pro/projet-ecommerce/front-ecommerce/container/Layout/Header/Header.js\",\n            lineNumber: 41,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_stickynode__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            top: 0,\n            innerZ: 1001,\n            enableTransforms: false,\n            activeClass: \"isHeaderSticky\",\n            __source: {\n                fileName: \"/Users/mathieuchambaud/Documents/Dossier-Pro/projet-ecommerce/front-ecommerce/container/Layout/Header/Header.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    user: user,\n                    logo: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        prefetch: false,\n                        locale: locale,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        })\n                    }),\n                    navMenu: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainMenu, {\n                        isLoggedIn: isLoggedIn\n                    }),\n                    authMenu: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthMenu, {\n                    }),\n                    isLogin: isLoggedIn,\n                    avatar: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    }),\n                    profileMenu: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProfileMenu, {\n                        user: user\n                    }),\n                    headerType: headerType,\n                    location: router,\n                    __source: {\n                        fileName: \"/Users/mathieuchambaud/Documents/Dossier-Pro/projet-ecommerce/front-ecommerce/container/Layout/Header/Header.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header_style__WEBPACK_IMPORTED_MODULE_7__.MobileNavbar, {\n                    __source: {\n                        fileName: \"/Users/mathieuchambaud/Documents/Dossier-Pro/projet-ecommerce/front-ecommerce/container/Layout/Header/Header.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header_style__WEBPACK_IMPORTED_MODULE_7__.LogoArea, {\n                        __source: {\n                            fileName: \"/Users/mathieuchambaud/Documents/Dossier-Pro/projet-ecommerce/front-ecommerce/container/Layout/Header/Header.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/Users/mathieuchambaud/Documents/Dossier-Pro/projet-ecommerce/front-ecommerce/container/Layout/Header/Header.js\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            },\n                            __self: _this\n                        })\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Header, \"KwMM9EbzagjlKOEeCOx7eI5mMH0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c8 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"AuthMenu$dynamic\");\n$RefreshReg$(_c1, \"AuthMenu\");\n$RefreshReg$(_c2, \"MainMenu$dynamic\");\n$RefreshReg$(_c3, \"MainMenu\");\n$RefreshReg$(_c4, \"MobileMenu$dynamic\");\n$RefreshReg$(_c5, \"MobileMenu\");\n$RefreshReg$(_c6, \"ProfileMenu$dynamic\");\n$RefreshReg$(_c7, \"ProfileMenu\");\n$RefreshReg$(_c8, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDckI7QUFDRTtBQUNPO0FBQ2M7QUFDTjtBQUNTO0FBQ2dCO0FBQ3BDO0FBQ3dCOzs7QUFFMUQsR0FBSyxDQUFDaUIsUUFBUSxHQUFHRixtREFBTyxNQUFDLFFBQVE7SUFBRkcsTUFBTSxDQUFOQSwyTEFBbUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2xELEdBQUssQ0FBQ0MsUUFBUSxHQUFHSixtREFBTyxPQUFDLFFBQVE7SUFBRkcsTUFBTSxDQUFOQSwyTEFBbUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2xELEdBQUssQ0FBQ0UsVUFBVSxHQUFHTCxtREFBTyxPQUFDLFFBQVE7SUFBRkcsTUFBTSxDQUFOQSxpTUFBcUI7Ozs7Ozs7Ozs7Ozs7O0FBQ3RELEdBQUssQ0FBQ0csV0FBVyxHQUFHTixtREFBTyxPQUFDLFFBQVE7SUFBRkcsTUFBTSxDQUFOQSxvTUFBc0I7Ozs7Ozs7Ozs7Ozs7O0FBRXhELEdBQUssQ0FBQ0ksTUFBTSxHQUFHLFFBQVEsUUFBa0IsQ0FBQztRQUF4QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTs7SUFFOUIsR0FBSyxDQUFDQyxNQUFNLEdBQUduQixzREFBUztJQUN4QixHQUFLLENBQUdvQixNQUFNLEdBQUtELE1BQU0sQ0FBakJDLE1BQU07SUFDZCxHQUFLLENBQXlCekIsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckMwQixPQUFPLEdBQWdCMUIsR0FBZSxLQUE3QjJCLFVBQVUsR0FBSTNCLEdBQWU7SUFDN0MsR0FBSyxDQUEyQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBdEM0QixRQUFRLEdBQWlCNUIsSUFBYyxLQUE3QjZCLFdBQVcsR0FBSTdCLElBQWM7SUFDOUMsR0FBRyxDQUFDOEIsUUFBUTtJQUVaLEdBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQzNCLEdBRGlDLENBQUM7UUFDMUJKLFVBQVUsRUFBRUQsT0FBTztJQUN2QixDQUFDO0lBRUQsR0FBSyxDQUFHTSxNQUFNLEdBQUt6QixnREFBTDtJQUVkLEdBQUssQ0FBQzBCLFVBQVUsR0FBR1QsTUFBTSxDQUFDVSxRQUFRLEtBQUssQ0FBRyxLQUFHLENBQVMsV0FBRyxDQUFTO0lBQ2xFLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLE1BQU0sQ0FBQ2IsSUFBSSxLQUFLLENBQVEsVUFBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUNmLElBQUksSUFBSUEsSUFBSTtJQUMvRCxHQUFLLENBQUdnQixDQUFDLEdBQUt2QixpRUFBYyxHQUFwQnVCLENBQUM7SUFFVCxHQUFLLENBQUNDLGtCQUFrQixHQUFHQyxRQUFRLENBQVJBLEdBQUcsRUFBSSxDQUFDO1FBQy9CaEIsTUFBTSxDQUFDaUIsSUFBSSxDQUFDakIsTUFBTSxDQUFDa0IsTUFBTSxFQUFFbEIsTUFBTSxDQUFDa0IsTUFBTSxFQUFFLENBQUM7WUFBQ2pCLE1BQU0sRUFBRWUsR0FBRztRQUFDLENBQUM7UUFDekRYLFdBQVcsQ0FBQ1csR0FBRztJQUNuQixDQUFDO0lBRUQsTUFBTSxzRUFDRDdCLHFEQUFhOzs7Ozs7O3dGQUNUUCx3REFBTTtZQUFDdUMsR0FBRyxFQUFFLENBQUM7WUFBRUMsTUFBTSxFQUFFLElBQUk7WUFBRUMsZ0JBQWdCLEVBQUUsS0FBSztZQUFFQyxXQUFXLEVBQUMsQ0FBZ0I7Ozs7Ozs7O3FGQUM5RXBDLGlFQUFNO29CQUNIWSxJQUFJLEVBQUVBLElBQUk7b0JBQ1Z5QixJQUFJLHVFQUNDN0Msa0RBQUk7d0JBQUM4QyxJQUFJLEVBQUMsQ0FBRzt3QkFBQ0MsUUFBUSxFQUFFLEtBQUs7d0JBQUV4QixNQUFNLEVBQUVBLE1BQU07dUdBQ3pDeUIsQ0FBQzs7O29CQUtWQyxPQUFPLHVFQUFHakMsUUFBUTt3QkFBQ0ssVUFBVSxFQUFFQSxVQUFVOztvQkFDekM2QixRQUFRLHVFQUFHcEMsUUFBUTs7b0JBQ25CcUMsT0FBTyxFQUFFOUIsVUFBVTtvQkFDbkIrQixNQUFNLHVFQUNEbkQsbURBQUs7O29CQUVWb0QsV0FBVyx1RUFDTm5DLFdBQVc7d0JBQ1JFLElBQUksRUFBRUEsSUFBSTs7b0JBR2xCVyxVQUFVLEVBQUVBLFVBQVU7b0JBQ3RCdUIsUUFBUSxFQUFFaEMsTUFBTTs7Ozs7Ozs7cUZBS25CWCx1REFBWTs7Ozs7OzttR0FDUkQsbURBQVE7Ozs7Ozs7dUdBQ0pzQyxDQUFDOzRCQUFDRixJQUFJLEVBQUMsQ0FBRzs7Ozs7Ozs7Ozs7OztBQVFuQyxDQUFDO0dBOURLM0IsTUFBTTs7UUFFT2hCLGtEQUFTO1FBY1ZVLDZEQUFjOzs7TUFoQjFCTSxNQUFNO0FBZ0VaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lci9MYXlvdXQvSGVhZGVyL0hlYWRlci5qcz85M2Q5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFNlbGVjdCwgQnV0dG9uLCBEcmF3ZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJztcbmltcG9ydCBIZWFkZXJXcmFwcGVyLCB7IExvZ29BcmVhLCBNb2JpbGVOYXZiYXIgfSBmcm9tICcuL0hlYWRlci5zdHlsZSc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRyYW5zbGF0aW9uJztcblxuY29uc3QgQXV0aE1lbnUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9BdXRoTWVudScpKTtcbmNvbnN0IE1haW5NZW51ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vTWFpbk1lbnUnKSk7XG5jb25zdCBNb2JpbGVNZW51ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vTW9iaWxlTWVudScpKTtcbmNvbnN0IFByb2ZpbGVNZW51ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vUHJvZmlsZU1lbnUnKSk7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHVzZXIsIGlzTG9nZ2VkSW4gfSkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBsb2NhbGUgfSA9IHJvdXRlcjtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICB2YXIgdXNlcm5hbWU7XG5cbiAgICBjb25zdCBzaWRlQmFySGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSghdmlzaWJsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcblxuICAgIGNvbnN0IGhlYWRlclR5cGUgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJkZWZhdWx0XCIgOiBcImRlZmF1bHRcIjtcbiAgICBjb25zdCBhdXRoID0gdHlwZW9mIHVzZXIgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZSh1c2VyKSA6IHVzZXI7XG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTG9jYWxlID0ga2V5ID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2gocm91dGVyLmFzUGF0aCwgcm91dGVyLmFzUGF0aCwgeyBsb2NhbGU6IGtleSB9KTtcbiAgICAgICAgc2V0TGFuZ3VhZ2Uoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SGVhZGVyV3JhcHBlcj5cbiAgICAgICAgICAgIDxTdGlja3kgdG9wPXswfSBpbm5lclo9ezEwMDF9IGVuYWJsZVRyYW5zZm9ybXM9e2ZhbHNlfSBhY3RpdmVDbGFzcz0naXNIZWFkZXJTdGlja3knPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIgXG4gICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgIGxvZ289e1xuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwcmVmZXRjaD17ZmFsc2V9IGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFR1IG1ldHRyYSBsZSBsb2dvIGljaSBhdmVjIGxhIGJhbGlzZSBpbWFnZSBkZSBuZXh0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuYXZNZW51PXs8TWFpbk1lbnUgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gLz59XG4gICAgICAgICAgICAgICAgICAgIGF1dGhNZW51PXs8QXV0aE1lbnUgLz59XG4gICAgICAgICAgICAgICAgICAgIGlzTG9naW49e2lzTG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlTWVudT17XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZU1lbnUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyVHlwZT17aGVhZGVyVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3JvdXRlcn1cbiAgICAgICAgICAgICAgICAgICAgLy8gc2VhcmNoVmlzaWJpbGl0eT17fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogTGEgb24gcGFzc2Ugc3VyIGxlIG1vZGUgbW9iaWxlIGRlIGxhIE5hdmJhciAqL31cbiAgICAgICAgICAgICAgICA8TW9iaWxlTmF2YmFyPlxuICAgICAgICAgICAgICAgICAgICA8TG9nb0FyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvJz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xvZ29BcmVhPlxuICAgICAgICAgICAgICAgIDwvTW9iaWxlTmF2YmFyPlxuICAgICAgICAgICAgPC9TdGlja3k+XG4gICAgICAgIDwvSGVhZGVyV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiTGluayIsIkltYWdlIiwiU3RpY2t5IiwidXNlUm91dGVyIiwid2l0aFJvdXRlciIsIlNlbGVjdCIsIkJ1dHRvbiIsIkRyYXdlciIsIk5hdmJhciIsIkhlYWRlcldyYXBwZXIiLCJMb2dvQXJlYSIsIk1vYmlsZU5hdmJhciIsImR5bmFtaWMiLCJ1c2VUcmFuc2xhdGlvbiIsIkF1dGhNZW51IiwiaW1wb3J0IiwiTWFpbk1lbnUiLCJNb2JpbGVNZW51IiwiUHJvZmlsZU1lbnUiLCJIZWFkZXIiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInJvdXRlciIsImxvY2FsZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInVzZXJuYW1lIiwic2lkZUJhckhhbmRsZXIiLCJPcHRpb24iLCJoZWFkZXJUeXBlIiwicGF0aG5hbWUiLCJhdXRoIiwiSlNPTiIsInBhcnNlIiwidCIsImhhbmRsZUNoYW5nZUxvY2FsZSIsImtleSIsInB1c2giLCJhc1BhdGgiLCJ0b3AiLCJpbm5lcloiLCJlbmFibGVUcmFuc2Zvcm1zIiwiYWN0aXZlQ2xhc3MiLCJsb2dvIiwiaHJlZiIsInByZWZldGNoIiwiYSIsIm5hdk1lbnUiLCJhdXRoTWVudSIsImlzTG9naW4iLCJhdmF0YXIiLCJwcm9maWxlTWVudSIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./container/Layout/Header/Header.js\n");

/***/ })

});