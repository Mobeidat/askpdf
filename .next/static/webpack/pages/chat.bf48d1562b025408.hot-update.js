"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/FileViewerList.tsx":
/*!*******************************************!*\
  !*** ./src/components/FileViewerList.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./File */ \"./src/components/File.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FileViewerList(props) {\n    _s();\n    var _props_listExpanded;\n    const [listExpanded, setListExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_props_listExpanded = props.listExpanded) !== null && _props_listExpanded !== void 0 ? _props_listExpanded : false);\n    const handleListExpand = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setListExpanded((prev)=>!prev);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-left justify-center w-full\",\n        children: props.files.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-left justify-center w-full mt-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md flex shadow px-2 py-3 mb-2 w-full bg-gray-50 items-center cursor-pointer border \",\n                            onClick: handleListExpand,\n                            children: [\n                                props.title,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-gray-300 ml-2 px-2 rounded-full w-max text-center text-sm \",\n                                    children: props.files.length\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-auto w-max flex items-center justify-center absolute right-0 inset-y-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon, {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"w-6 h-6 ml-2 stroke-slate-400 transition-transform cursor-pointer\", !listExpanded && \"-rotate-180\"),\n                                onClick: handleListExpand\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                    show: listExpanded,\n                    enter: \"transition duration-125 ease-out\",\n                    enterFrom: \"transform translate-y-4 opacity-0\",\n                    enterTo: \"transform translate-y-0 opacity-100\",\n                    leave: \"transition duration-125 ease-out\",\n                    leaveFrom: \"transform translate-y-0 opacity-100\",\n                    leaveTo: \"transform translate-y-4 opacity-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-gray-500 space-y-2\",\n                        children: props.files.map((file)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_File__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                file: file,\n                                showScore: props.showScores\n                            }, file.name, false, {\n                                fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/askpdf/src/components/FileViewerList.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(FileViewerList, \"3MtI0StXmtlFHxCIem1A5nrmX5g=\");\n_c = FileViewerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FileViewerList));\nvar _c, _c1;\n$RefreshReg$(_c, \"FileViewerList\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlVmlld2VyTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTJEO0FBQ0M7QUFDcEM7QUFDdUI7QUFFckI7QUFVMUIsU0FBU1EsZUFBZUMsS0FBMEIsRUFBRTs7UUFDREE7SUFBakQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUNNLENBQUFBLHNCQUFBQSxNQUFNQyxZQUFZLGNBQWxCRCxpQ0FBQUEsc0JBQXNCLEtBQUs7SUFFNUUsTUFBTUcsbUJBQW1CVixrREFBV0EsQ0FBQyxJQUFNO1FBQ3pDUyxnQkFBZ0IsQ0FBQ0UsT0FBUyxDQUFDQTtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWk4sTUFBTU8sS0FBSyxDQUFDQyxNQUFNLEdBQUcsbUJBQ3BCLDhEQUFDSDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFDQ0MsV0FBVTs0QkFDVkcsU0FBU047O2dDQUVSSCxNQUFNVSxLQUFLOzhDQUNaLDhEQUFDTDtvQ0FBSUMsV0FBVTs4Q0FDWk4sTUFBTU8sS0FBSyxDQUFDQyxNQUFNOzs7Ozs7Ozs7Ozs7c0NBR3ZCLDhEQUFDSDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1gsc0VBQWFBO2dDQUNaVyxXQUFXVixnREFBSUEsQ0FDYixxRUFDQSxDQUFDSyxnQkFBZ0I7Z0NBRW5CUSxTQUFTTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS2YsOERBQUNOLHlEQUFVQTtvQkFDVGMsTUFBTVY7b0JBQ05XLE9BQU07b0JBQ05DLFdBQVU7b0JBQ1ZDLFNBQVE7b0JBQ1JDLE9BQU07b0JBQ05DLFdBQVU7b0JBQ1ZDLFNBQVE7OEJBRVIsNEVBQUNaO3dCQUFJQyxXQUFVO2tDQUNaTixNQUFNTyxLQUFLLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEIsOERBQUNyQiw2Q0FBSUE7Z0NBRUhxQixNQUFNQTtnQ0FDTkMsV0FBV3BCLE1BQU1xQixVQUFVOytCQUZ0QkYsS0FBS0csSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXaEM7R0F2RFN2QjtLQUFBQTtBQXlEVCxrRkFBZVAsMkNBQUlBLENBQUNPLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsZVZpZXdlckxpc3QudHN4P2FiYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hldnJvblVwSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5cbmltcG9ydCBGaWxlIGZyb20gXCIuL0ZpbGVcIjtcbmltcG9ydCB7IEZpbGVMaXRlIH0gZnJvbSBcIi4uL3R5cGVzL2ZpbGVcIjtcblxudHlwZSBGaWxlVmlld2VyTGlzdFByb3BzID0ge1xuICBmaWxlczogRmlsZUxpdGVbXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgbGlzdEV4cGFuZGVkPzogYm9vbGVhbjtcbiAgc2hvd1Njb3Jlcz86IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBGaWxlVmlld2VyTGlzdChwcm9wczogRmlsZVZpZXdlckxpc3RQcm9wcykge1xuICBjb25zdCBbbGlzdEV4cGFuZGVkLCBzZXRMaXN0RXhwYW5kZWRdID0gdXNlU3RhdGUocHJvcHMubGlzdEV4cGFuZGVkID8/IGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVMaXN0RXhwYW5kID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldExpc3RFeHBhbmRlZCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtbGVmdCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgIHtwcm9wcy5maWxlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWxlZnQganVzdGlmeS1jZW50ZXIgdy1mdWxsIG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBmbGV4IHNoYWRvdyBweC0yIHB5LTMgbWItMiB3LWZ1bGwgYmctZ3JheS01MCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpc3RFeHBhbmR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBtbC0yIHB4LTIgcm91bmRlZC1mdWxsIHctbWF4IHRleHQtY2VudGVyIHRleHQtc20gXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmZpbGVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byB3LW1heCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZSByaWdodC0wIGluc2V0LXktMVwiPlxuICAgICAgICAgICAgICA8Q2hldnJvblVwSWNvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAgIFwidy02IGgtNiBtbC0yIHN0cm9rZS1zbGF0ZS00MDAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICFsaXN0RXhwYW5kZWQgJiYgXCItcm90YXRlLTE4MFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaXN0RXhwYW5kfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgc2hvdz17bGlzdEV4cGFuZGVkfVxuICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTEyNSBlYXNlLW91dFwiXG4gICAgICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gdHJhbnNsYXRlLXktNCBvcGFjaXR5LTBcIlxuICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSB0cmFuc2xhdGUteS0wIG9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBkdXJhdGlvbi0xMjUgZWFzZS1vdXRcIlxuICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIHRyYW5zbGF0ZS15LTAgb3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgbGVhdmVUbz1cInRyYW5zZm9ybSB0cmFuc2xhdGUteS00IG9wYWNpdHktMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5maWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgICAgICA8RmlsZVxuICAgICAgICAgICAgICAgICAga2V5PXtmaWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgICBmaWxlPXtmaWxlfVxuICAgICAgICAgICAgICAgICAgc2hvd1Njb3JlPXtwcm9wcy5zaG93U2NvcmVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oRmlsZVZpZXdlckxpc3QpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJDaGV2cm9uVXBJY29uIiwiY2xzeCIsIlRyYW5zaXRpb24iLCJGaWxlIiwiRmlsZVZpZXdlckxpc3QiLCJwcm9wcyIsImxpc3RFeHBhbmRlZCIsInNldExpc3RFeHBhbmRlZCIsImhhbmRsZUxpc3RFeHBhbmQiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsZXMiLCJsZW5ndGgiLCJvbkNsaWNrIiwidGl0bGUiLCJzaG93IiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwibWFwIiwiZmlsZSIsInNob3dTY29yZSIsInNob3dTY29yZXMiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FileViewerList.tsx\n"));

/***/ })

});