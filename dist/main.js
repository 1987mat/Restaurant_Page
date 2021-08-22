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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction homePage() {\n  const homeDiv = document.createElement('div');\n  const welcomeTitle = document.createElement('h3');\n  const subtitle = document.createElement('h5');\n  welcomeTitle.innerHTML = 'Welcome to Pizzeria Del Campo!';\n  subtitle.innerHTML = 'Artisan Pizza since 1958';\n  homeDiv.appendChild(welcomeTitle);\n  welcomeTitle.after(subtitle);\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(homeDiv);\n}\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst content = document.getElementById('content');\n(0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n\nfunction home() {\n  content.innerHTML = '';\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)();\n}\n\nfunction menu() {\n  content.innerHTML = '';\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();\n}\n\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)();\n\ndocument.addEventListener('click', (e) => {\n  const target = e.target.innerText;\n\n  if(target == 'Home') {\n    home();\n  }\n  if(target == 'Menu') {\n    menu();\n  }\n});\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction renderMenu() {\n  const menuDiv = document.createElement('div');\n\n  const pizzaTitle = document.createElement('h3');\n  pizzaTitle.innerHTML = 'Pizzas';\n  menuDiv.appendChild(pizzaTitle)\n\n  const pizzaMenu = [\n    {\n      name: 'Margherita',\n      description: 'Fresh tomatoes, mozzarella and basil.'\n    },\n    {\n      name: 'Pepperoni',\n      description: 'Fresh tomatoes, mozzarella, salami(spicy).'\n    },\n    {\n      name: 'Marinara',\n      description: 'Tomato sauce and basil.'\n    },\n    {\n      name: 'Vegeterian',\n      description: 'Mushrooms, Zucchini, Tomatoes, Artichoke, cheese and belt peppers.'\n    },\n  ];\n\n  const drinkMenu = ['Sparkling Water', 'Coca-Cola', 'House Wine', 'Guinness Beer'];\n\n\n  pizzaMenu.forEach((item) => {\n\n    let name = document.createElement('h5');\n    let description = document.createElement('p');\n    name.innerHTML = item.name;\n    description.innerHTML = item.description;\n  \n    menuDiv.appendChild(name);\n    name.after(description);\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuDiv);\n\n  });\n\n  const drinkTitle = document.createElement('h3');\n  drinkTitle.innerHTML ='Drinks';\n  menuDiv.appendChild(drinkTitle);\n\n  drinkMenu.forEach((item) => {\n    let name = document.createElement('h5');\n    name.innerHTML = item;\n    const ul = document.createElement('ul');\n    const li = document.createElement('li');\n    li.appendChild(name);\n    ul.appendChild(li);\n    menuDiv.appendChild(ul); \n });\n}\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ renderNav)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction renderNav() {\n  const pageTitle = document.createElement('h1');\n  pageTitle.innerHTML = 'Pizzeria Del Campo';\n  const navItems = ['Home', 'Menu', 'About'];\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n \n  for(let i = 0; i < navItems.length; i++) {\n    let item = navItems[i];\n \n    let li = document.createElement('li');\n    li.appendChild(document.createTextNode(item));\n    ul.appendChild(li);\n  }\n\n  nav.appendChild(ul);\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(nav);\n  ul.before(pageTitle);\n}\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/navbar.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;