/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/images/pizza.jpg */ \"./dist/images/pizza.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Lato', sans-serif;\\n  color: #282828;\\n}\\n\\nhtml,\\nbody {\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  background: rgb(255, 255, 255);\\n  background: linear-gradient(\\n    90deg,\\n    rgba(255, 255, 255, 1) 0%,\\n    rgba(229, 230, 231, 1) 100%\\n  );\\n}\\n\\n/* Nav */\\nnav {\\n  position: sticky;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 1rem 1.5rem;\\n  width: 100%;\\n  height: 5em;\\n  top: 0;\\n  z-index: 10;\\n  background: #ebebeb;\\n}\\n\\n.logo-link {\\n  cursor: pointer;\\n}\\n\\n.logo {\\n  width: 15em;\\n  height: 100%;\\n}\\n\\n.main-title {\\n  font-size: 1.5rem;\\n  margin-left: 1em;\\n  text-align: center;\\n  color: #282828;\\n  font-family: 'Ms Madi', cursive;\\n}\\n\\n.main-title:hover {\\n  cursor: pointer;\\n}\\n\\n.nav-menu {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 2em;\\n}\\n\\n.nav-item {\\n  list-style-type: none;\\n  margin-right: 5.5em;\\n  font-size: 1rem;\\n  color: #282828;\\n  opacity: 1;\\n  transition: all 0.1s ease-in;\\n}\\n\\n.nav-item:hover {\\n  cursor: pointer;\\n  opacity: 0.9;\\n  border-bottom: 3px solid #585858;\\n}\\n\\n.hamburger {\\n  display: none;\\n}\\n\\n.bar {\\n  display: block;\\n  width: 25px;\\n  height: 3px;\\n  margin: 5px auto;\\n  -webkit-transition: all 0.3s ease-in-out;\\n  transition: all 0.3s ease-in-out;\\n  background-color: #f4f0ec;\\n}\\n\\n.container {\\n  animation: transitionIn 1s;\\n}\\n\\n/* Page transition */\\n@keyframes transitionIn {\\n  from {\\n    opacity: 0;\\n    transform: rotateX(-10deg);\\n  }\\n\\n  to {\\n    opacity: 1;\\n    transform: rotateX(0);\\n  }\\n}\\n\\n/* Home Page */\\n.welcome-container {\\n  margin-top: -4em;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 2em;\\n  text-align: center;\\n}\\n\\n.welcome-title {\\n  font-size: 5rem;\\n  color: #ebebeb;\\n  font-family: 'Ms Madi', cursive;\\n}\\n\\n.subtitle {\\n  color: #ebebeb;\\n  font-style: italic;\\n  font-size: 1rem;\\n  margin-top: -2em;\\n}\\n\\n.order-now-link {\\n  border: none;\\n  border-radius: 5px;\\n  font-weight: bold;\\n  background: rgb(240, 240, 240);\\n  background: linear-gradient(\\n    90deg,\\n    rgba(240, 240, 240, 1) 0%,\\n    rgba(146, 185, 208, 1) 100%\\n  );\\n  margin-top: 1em;\\n  color: #282828;\\n  height: 2.5em;\\n  width: 10em;\\n  font-size: 1.2rem;\\n  text-align: center;\\n  opacity: 0.85;\\n  transition: opacity 0.2s ease-in;\\n}\\n\\n.order-now-link:hover {\\n  cursor: pointer;\\n  opacity: 1;\\n}\\n\\n.order-now-link:active {\\n  transform: translateY(-2px);\\n}\\n\\n.home-div {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.hero-div {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-attachment: contain;\\n  height: 100vh;\\n}\\n\\n.article-section {\\n  display: flex;\\n  flex-direction: column;\\n  height: 40%;\\n  width: 100%;\\n  margin-bottom: 4em;\\n}\\n\\n.our-story-text {\\n  margin: 2em;\\n  text-align: center;\\n  font-size: 3rem;\\n  font-weight: bold;\\n}\\n\\n.article-home-image {\\n  width: 60%;\\n  margin: 0 auto;\\n  margin-top: 3em;\\n  border-radius: 2px;\\n}\\n\\n.text-div {\\n  margin: 0 auto;\\n  margin-top: 3em;\\n  width: 80%;\\n}\\n\\n.homepage-text {\\n  padding: 3em;\\n  text-align: center;\\n  line-height: 180%;\\n}\\n\\n.follow-text {\\n  margin: 2em;\\n  text-align: center;\\n  font-size: 3rem;\\n  font-weight: bold;\\n}\\n\\n.icon-div {\\n  display: flex;\\n  justify-content: center;\\n  gap: 3em;\\n  margin-bottom: 2em;\\n}\\n\\n.icon-div a {\\n  font-size: 1.2rem;\\n  transition: transform 0.2s ease-in;\\n}\\n\\n.icon-div a:hover {\\n  cursor: pointer;\\n  transform: scale(1.1);\\n}\\n\\n.bi-facebook {\\n  font-size: 2.2em;\\n  color: blue;\\n}\\n\\n.bi-instagram {\\n  font-size: 2.2em;\\n  padding-left: 1rem;\\n  color: darkred;\\n}\\n\\n.bi-twitter {\\n  font-size: 2.2em;\\n  padding-left: 1rem;\\n  color: skyblue;\\n}\\n\\n.feed-div {\\n  margin: 0 auto;\\n  margin-top: 6em;\\n  margin-bottom: 15em;\\n  width: 80%;\\n  height: 70%;\\n  display: flex;\\n  gap: 2em;\\n}\\n\\n.feed {\\n  width: 32%;\\n  height: 90%;\\n  opacity: 1;\\n  border-radius: 5px;\\n  transition: opacity 0.2s linear;\\n}\\n\\n.feed:hover {\\n  opacity: 0.8;\\n  cursor: pointer;\\n}\\n\\n/* Menu Page */\\n.menu-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 1em;\\n  padding-top: 2em;\\n  margin-bottom: 20em;\\n}\\n\\n.menu-title {\\n  font-weight: 500;\\n  font-size: 3.5rem;\\n  margin-top: 1em;\\n}\\n\\n.drink-title {\\n  text-align: center;\\n  font-size: 1.5rem;\\n}\\n\\n.menu-div {\\n  background-color: #f2f3f4;\\n  border: none;\\n  border-radius: 5px;\\n  margin: 4em;\\n  box-shadow: 2px 2px 2px gray;\\n  padding: 2em 2em 3em 2em;\\n  width: 50%;\\n}\\n\\n.pizza-name,\\n.drink-title {\\n  margin: 1em;\\n}\\n\\n.pizza-description {\\n  margin: 2em;\\n}\\n\\nhr {\\n  margin: 0 auto;\\n  margin-top: 3em;\\n  width: 18em;\\n}\\n\\n.images-div {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 4em;\\n  justify-content: center;\\n  margin: 3em;\\n  margin-bottom: 10em;\\n}\\n\\n.menu-images {\\n  height: 25%;\\n  width: 40%;\\n  border-radius: 5px;\\n  transition: all 0.2s linear;\\n}\\n\\n.menu-images:hover {\\n  opacity: 0.8;\\n  cursor: pointer;\\n}\\n\\n/* Contact Page */\\nh4 {\\n  text-align: center;\\n  font-size: 1.5rem;\\n  margin-bottom: 1em;\\n}\\n\\np {\\n  text-align: center;\\n  font-size: 1rem;\\n}\\n\\n.form-div {\\n  margin-top: 3em;\\n  margin-bottom: 5em;\\n  width: 55%;\\n}\\n\\n.form-title {\\n  text-align: center;\\n  font-size: 3rem;\\n  margin-bottom: 1.5em;\\n}\\n\\n.contact-form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 1em;\\n}\\n\\ninput,\\ntextarea {\\n  padding: 0.8em;\\n  border-radius: 5px;\\n  border-top: none;\\n  font-family: 'Lato', sans-serif;\\n}\\n\\ntextarea {\\n  height: 8em;\\n}\\n\\n.submit-btn {\\n  padding: 0.8em;\\n  height: 3em;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  border: none;\\n  border-radius: 5px;\\n  background: rgb(233, 233, 233);\\n  background: linear-gradient(\\n    90deg,\\n    rgba(233, 233, 233, 1) 0%,\\n    rgba(213, 226, 241, 1) 100%\\n  );\\n  color: black;\\n  transition: background-color 0.5s ease-in;\\n}\\n\\n.submit-btn:hover {\\n  cursor: pointer;\\n  background: lightgray;\\n}\\n\\n.submit-btn:active {\\n  transform: translateY(-2px);\\n}\\n\\n.contact-div {\\n  margin-bottom: 6em;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding-top: 2em;\\n}\\n\\n.info-div {\\n  margin-top: 5em;\\n  margin-bottom: 10em;\\n  display: flex;\\n  gap: 10em;\\n}\\n\\n.message {\\n  font-size: 1rem;\\n  margin-top: -2em;\\n  margin-bottom: 2em;\\n}\\n\\n/* Footer */\\n.footer {\\n  width: 100%;\\n  height: 5em;\\n  text-align: center;\\n  font-weight: bold;\\n  background: #ebebeb;\\n  bottom: 0;\\n  padding-top: 1.8em;\\n}\\n\\n/* Media Query */\\n@media only screen and (min-width: 320px) {\\n  html {\\n    font-size: 40%;\\n  }\\n\\n  .main-title {\\n    display: none;\\n  }\\n\\n  .welcome-container {\\n    padding-top: 10em;\\n  }\\n\\n  .nav-menu {\\n    position: fixed;\\n    left: -100%;\\n    top: 0;\\n    display: block;\\n    width: 100%;\\n    height: 100vh;\\n    text-align: center;\\n    transition: left 0.2s ease-in;\\n    background: #ebebeb;\\n  }\\n\\n  .nav-menu.active {\\n    left: 0;\\n  }\\n\\n  .nav-item {\\n    margin: 12em;\\n    font-size: 1.5rem;\\n    font-weight: bold;\\n  }\\n\\n  .hamburger .bar {\\n    background-color: black;\\n    border-radius: 5px;\\n  }\\n\\n  .hamburger {\\n    display: block;\\n    cursor: pointer;\\n    z-index: 3;\\n  }\\n\\n  /* BURGER */\\n  .hamburger.active .bar {\\n    background-color: black;\\n  }\\n\\n  .hamburger.active .bar:nth-child(2) {\\n    opacity: 0;\\n  }\\n\\n  .hamburger.active .bar:nth-child(1) {\\n    transform: translateY(8px) rotate(45deg);\\n  }\\n\\n  .hamburger.active .bar:nth-child(3) {\\n    transform: translateY(-8px) rotate(-45deg);\\n  }\\n\\n  .menu-container {\\n    flex-direction: column;\\n  }\\n\\n  .images-div {\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n\\n  .info-div {\\n    flex-direction: column;\\n  }\\n\\n  .hours-div {\\n    margin-top: -2em;\\n  }\\n}\\n\\n@media screen and (min-width: 786px) and (max-width: 992px) {\\n  html {\\n    font-size: 85%;\\n  }\\n\\n  .welcome-container {\\n    padding-top: 10em;\\n  }\\n}\\n\\n@media screen and (min-width: 992px) {\\n  html {\\n    font-size: 90%;\\n  }\\n\\n  .main-title {\\n    display: block;\\n  }\\n\\n  .hamburger {\\n    display: none;\\n  }\\n\\n  .nav-menu {\\n    position: relative;\\n    left: 0;\\n    padding: 0;\\n    z-index: 0;\\n    height: 5em;\\n    width: auto;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    gap: 2em;\\n    background-color: transparent;\\n  }\\n\\n  .nav-item {\\n    margin: 3em;\\n    font-size: 1rem;\\n    font-weight: normal;\\n  }\\n}\\n\\n@media screen and (min-width: 1200px) {\\n  html {\\n    font-size: 100%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactInfo\": () => (/* binding */ contactInfo)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction contactInfo() {\n  const contactDiv = document.createElement('div');\n  contactDiv.classList.add('contact-div');\n  contactDiv.classList.add('container');\n\n  // Create form\n  const formDiv = document.createElement('div');\n  formDiv.classList.add('form-div');\n\n  const formTitle = document.createElement('h2');\n  formTitle.classList.add('form-title');\n  formTitle.innerText = 'Get in touch!';\n\n  const form = document.createElement('form');\n  form.classList.add('contact-form');\n\n  const firstName = document.createElement('input');\n  firstName.type = 'text';\n  firstName.placeholder = 'First Name';\n  firstName.required = true;\n\n  const lastName = document.createElement('input');\n  lastName.type = 'text';\n  lastName.placeholder = 'Last Name';\n  lastName.required = true;\n\n  const email = document.createElement('input');\n  email.type = 'email';\n  email.placeholder = 'Email';\n  email.required = true;\n\n  const text = document.createElement('textarea');\n  text.maxLength = '30';\n  text.placeholder = 'Your comments here...';\n  text.required = true;\n\n  const submitBtn = document.createElement('button');\n  submitBtn.classList.add('submit-btn');\n  submitBtn.type = 'submit';\n  submitBtn.innerText = 'SUBMIT';\n\n  form.appendChild(firstName);\n  form.appendChild(lastName);\n  form.appendChild(email);\n  form.appendChild(text);\n  form.appendChild(submitBtn);\n  formDiv.appendChild(formTitle);\n  formDiv.appendChild(form);\n\n  // Create divs for Address and Hours\n  const infoDiv = document.createElement('div');\n  infoDiv.classList.add('info-div');\n\n  const addressDiv = document.createElement('div');\n  addressDiv.classList.add('address-div');\n\n  const hoursDiv = document.createElement('div');\n  hoursDiv.classList.add('hours-div');\n\n  // Address\n  const addressTitle = document.createElement('h4');\n  addressTitle.innerHTML = 'ADDRESS';\n  addressDiv.appendChild(addressTitle);\n  const address = document.createElement('p');\n  address.innerHTML = '2023 Lorem Ipsum Street, 9000 <br><br> New York, NY';\n  addressDiv.appendChild(address);\n\n  // Hours\n  const hoursTitle = document.createElement('h4');\n  hoursTitle.innerHTML = 'HOURS';\n  hoursDiv.appendChild(hoursTitle);\n  const hours = document.createElement('p');\n  hours.innerHTML =\n    'Monday - Thursday : 9am to 9pm <br><br> Friday - Saturday : 9am to 11pm <br><br> Sunday : Closed';\n  hoursDiv.appendChild(hours);\n\n  contactDiv.append(formDiv, infoDiv);\n  infoDiv.append(addressDiv, hoursDiv);\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(contactDiv);\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const message = document.createElement('p');\n    message.classList.add('message');\n    message.innerText = 'Thanks! You will hear back from us shortly!';\n    form.insertAdjacentElement('beforebegin', message);\n\n    setTimeout(() => {\n      message.innerText = '';\n    }, 3000);\n    form.reset();\n  });\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerInfo\": () => (/* binding */ footerInfo)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction footerInfo() {\n  const footer = document.createElement('div');\n  footer.classList.add('footer');\n  footer.innerHTML = 'Copyright &copy; 2022. All right reserved.';\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(footer);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction homePage() {\n  window.scroll(0, 0);\n\n  const homeDiv = document.createElement('div');\n  homeDiv.classList.add('home-div');\n  homeDiv.classList.add('container');\n\n  const heroDiv = document.createElement('div');\n  heroDiv.classList.add('hero-div');\n\n  const welcomeContainer = document.createElement('div');\n  welcomeContainer.classList.add('welcome-container');\n  const welcomeTitle = document.createElement('h3');\n  welcomeTitle.innerHTML = 'Pizzeria Del Campo';\n  welcomeTitle.classList.add('welcome-title');\n\n  const subtitle = document.createElement('h5');\n  subtitle.innerHTML = 'Artisan Pizza since 1960';\n  subtitle.classList.add('subtitle');\n\n  const orderNowBtn = document.createElement('button');\n  orderNowBtn.innerHTML = 'MENU';\n  orderNowBtn.classList.add('order-now-link');\n  welcomeContainer.append(welcomeTitle, subtitle, orderNowBtn);\n\n  const articleSection = document.createElement('div');\n  articleSection.classList.add('article-section');\n\n  const ourStory = document.createElement('h3');\n  ourStory.innerText = 'OUR STORY';\n  ourStory.classList.add('our-story-text');\n\n  const ovenImage = document.createElement('img');\n  ovenImage.src = 'images/oven.jpg';\n  ovenImage.classList.add('article-home-image');\n\n  // SM Icons\n  const iconDiv = document.createElement('div');\n  iconDiv.classList.add('icon-div');\n\n  const fbIcon = document.createElement('i');\n  fbIcon.classList.add('bi');\n  fbIcon.classList.add('bi-facebook');\n\n  const igIcon = document.createElement('i');\n  igIcon.classList.add('bi');\n  igIcon.classList.add('bi-instagram');\n\n  const twitterIcon = document.createElement('i');\n  twitterIcon.classList.add('bi');\n  twitterIcon.classList.add('bi-twitter');\n\n  const linkFB = document.createElement('a');\n  linkFB.href = 'https://www.facebook.com';\n  linkFB.target = '_blank';\n  linkFB.appendChild(fbIcon);\n\n  const linkIG = document.createElement('a');\n  linkIG.href = 'https://www.instagram.com';\n  linkIG.target = '_blank';\n  linkIG.appendChild(igIcon);\n\n  const linkTW = document.createElement('a');\n  linkTW.href = 'https://www.twitter.com/';\n  linkTW.target = '_blank';\n  linkTW.appendChild(twitterIcon);\n\n  iconDiv.append(linkFB, linkIG, linkTW);\n\n  // Feed\n  const feedDiv = document.createElement('div');\n  feedDiv.classList.add('feed-div');\n\n  const followText = document.createElement('h3');\n  followText.classList.add('follow-text');\n  followText.innerText = 'FOLLOW US!';\n  const feed1 = document.createElement('img');\n  feed1.src = 'images/pizza-feed.jpg';\n  feed1.classList.add('feed');\n\n  const feed2 = document.createElement('img');\n  feed2.src = 'images/pizza-feed2.jpg';\n  feed2.classList.add('feed');\n\n  const feed3 = document.createElement('img');\n  feed3.src = 'images/pizza-feed3.jpg';\n  feed3.classList.add('feed');\n\n  feedDiv.append(feed1, feed2, feed3);\n\n  const textDiv = document.createElement('div');\n  textDiv.classList.add('text-div');\n\n  const text = document.createElement('p');\n  text.classList.add('homepage-text');\n  text.innerText =\n    'Pizzeria Del Campo was founded in 1960 in NYC. Initially a small pizzeria, the business quickly grew and today is considered one of the top spots for authentic Italian pizza in the whole city. All of our ingredients are carefully selected and imported. The dough is fermented for hours and all of our pizzas are cooked in a wood fired oven. We look forward to open more locations soon. We are happy to have you as our customer.';\n\n  textDiv.appendChild(text);\n  articleSection.append(\n    ourStory,\n    ovenImage,\n    textDiv,\n    followText,\n    iconDiv,\n    feedDiv\n  );\n\n  heroDiv.append(welcomeContainer);\n  homeDiv.append(heroDiv, articleSection);\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(homeDiv);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\n(0,_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNav)();\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.homePage)();\n(0,_footer__WEBPACK_IMPORTED_MODULE_5__.footerInfo)();\n\nfunction home() {\n  content.innerHTML = '';\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNav)();\n  (0,_home__WEBPACK_IMPORTED_MODULE_2__.homePage)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_5__.footerInfo)();\n}\n\nfunction menu() {\n  content.innerHTML = '';\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNav)();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_5__.footerInfo)();\n}\n\nfunction contact() {\n  content.innerHTML = '';\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNav)();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_4__.contactInfo)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_5__.footerInfo)();\n}\n\n// Event listeners when clicking nav links\ndocument.addEventListener('click', (e) => {\n  if (\n    e.target.classList.contains('logo') ||\n    (e.target.classList.contains('nav-item') && e.target.innerText === 'Home')\n  ) {\n    home();\n  }\n\n  if (\n    (e.target.classList.contains('nav-item') &&\n      e.target.innerText === 'Menu') ||\n    e.target.classList.contains('order-now-link')\n  ) {\n    menu();\n  }\n  if (\n    e.target.classList.contains('nav-item') &&\n    e.target.innerText === 'Contact'\n  ) {\n    contact();\n  }\n});\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction renderMenu() {\n  window.scroll(0, 0);\n\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n  menuContainer.classList.add('container');\n\n  const menuDiv = document.createElement('div');\n  menuDiv.classList.add('menu-div');\n  const hr = document.createElement('hr');\n\n  // Create array of pizza items\n  const pizzaMenu = [\n    {\n      name: 'Pepperoni',\n      description: 'Fresh tomatoes, mozzarella, salami(spicy).',\n    },\n    {\n      name: 'Marinara',\n      description: 'Tomato sauce and basil.',\n    },\n    {\n      name: 'Vegetarian',\n      description: 'Mushrooms, zucchini, tomatoes, prtichoke, Peppers.',\n    },\n  ];\n\n  // Loop through items in the array and create the menu\n  pizzaMenu.forEach((item) => {\n    let name = document.createElement('h4');\n    name.classList.add('pizza-name');\n    name.innerHTML = item.name;\n\n    let description = document.createElement('p');\n    description.classList.add('pizza-description');\n    description.innerHTML = item.description;\n\n    menuDiv.appendChild(name);\n    name.after(description);\n  });\n\n  menuDiv.appendChild(hr);\n\n  const drinkTitle = document.createElement('h3');\n  drinkTitle.innerHTML = 'Drinks';\n  drinkTitle.classList.add('drink-title');\n\n  const drinks = document.createElement('p');\n  drinks.innerHTML =\n    'Sparkling Water <br><br> Coca-Cola <br><br> House Wine <br><br> House Beer';\n\n  menuDiv.appendChild(drinkTitle);\n  menuDiv.appendChild(drinks);\n\n  menuContainer.appendChild(menuDiv);\n\n  // Create array of pizza images\n  const pizzaImages = [\n    { title: 'veggie', src: 'images/pepp.jpg' },\n    { title: 'veggie2', src: 'images/veggie.jpg' },\n    { title: 'pepperoni', src: 'images/veggie2.jpg' },\n    { title: 'veg', src: 'images/veg.jpg' },\n  ];\n\n  const imagesDiv = document.createElement('div');\n  imagesDiv.classList.add('images-div');\n\n  for (let i = 0; i < pizzaImages.length; i++) {\n    let image = document.createElement('img');\n    image.classList.add('menu-images');\n    image.src = pizzaImages[i].src;\n    imagesDiv.appendChild(image);\n  }\n\n  menuContainer.appendChild(imagesDiv);\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuContainer);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ renderNav)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction renderNav() {\n  const nav = document.createElement('nav');\n  const logoLink = document.createElement('a');\n  logoLink.classList.add('logo-link');\n  const logo = document.createElement('img');\n  logo.src = 'images/logo.png';\n  logo.classList.add('logo');\n  logoLink.append(logo);\n\n  const ul = document.createElement('ul');\n  ul.classList.add('nav-menu');\n\n  // Create array of nav links\n  const navItems = ['Home', 'Menu', 'Contact'];\n\n  for (let i = 0; i < navItems.length; i++) {\n    let link = document.createElement('li');\n    link.innerText = navItems[i];\n    link.classList.add('nav-item');\n    ul.appendChild(link);\n  }\n\n  const hamburger = document.createElement('div');\n  hamburger.classList.add('hamburger');\n\n  for (let j = 0; j < navItems.length; j++) {\n    let bar = document.createElement('span');\n    bar.classList.add('bar');\n    hamburger.appendChild(bar);\n  }\n\n  nav.appendChild(logoLink);\n  nav.appendChild(ul);\n  nav.appendChild(hamburger);\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(nav);\n\n  // Event listener when clicking hamburger menu on tablet/mobile screen\n  hamburger.addEventListener('click', mobileMenu);\n\n  function mobileMenu() {\n    // Transform hamburger icon into 'X' icon\n    hamburger.classList.toggle('active');\n    // Show menu links\n    ul.classList.toggle('active');\n  }\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./dist/images/pizza.jpg":
/*!*******************************!*\
  !*** ./dist/images/pizza.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"152ffd75e6f3505adf2b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./dist/images/pizza.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;