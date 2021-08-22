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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactInfo\": () => (/* binding */ contactInfo)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction contactInfo() {\n  const hoursDiv = document.createElement('div');\n  const addressDiv = document.createElement('div');\n\n  const address = [' 2023 Lorem Ipsum Street', '9000, New York, NY'];\n\n  address.forEach((item => {\n    const ul = document.createElement('ul');\n    const li = document.createElement('li');\n    li.appendChild(document.createTextNode(item));\n    ul.appendChild(li);\n    addressDiv.appendChild(ul);\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(addressDiv);\n  }));\n\n  const hoursTitle = document.createElement('h4');\n  hoursTitle.innerHTML = 'HOURS';\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(hoursTitle);\n\n  const hours = [\n    {\n      day: 'Monday - Thursday',\n      time: '10am to 9pm'\n    },\n    {\n      day: 'Friday - Saturday',\n      time: '10am to 11pm'\n    },\n    {\n      day: 'Sunday',\n      time: 'Closed'\n    },\n  ];\n\n  hours.forEach(item => {\n    \n    let day = document.createElement('h4');\n    day.innerHTML = item.day;\n    let time = document.createElement('h5');\n    time.innerHTML = item.time;\n    hoursDiv.appendChild(day);\n    day.after(time);\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(hoursDiv);\n  });\n}\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerInfo\": () => (/* binding */ footerInfo)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction footerInfo() {\n  const footerDiv = document.createElement('div');\n  const copyright = document.createElement('p');\n  copyright.innerHTML = 'Copyright © 2021 Mat';\n  footerDiv.appendChild(copyright);\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(footerDiv);\n\n}\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/footer.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\n(0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n\nfunction home() {\n  content.innerHTML = '';\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerInfo)();\n}\n\nfunction menu() {\n  content.innerHTML = '';\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerInfo)();\n}\n\nfunction contact() {\n  content.innerHTML = '';\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactInfo)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerInfo)();\n}\n\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)();\n(0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerInfo)();\n\n// Event listeners when clicking the nav\ndocument.addEventListener('click', (e) => {\n  const target = e.target.innerText;\n  \n  if(target == 'Home') {\n    home();\n  }\n  if(target == 'Menu') {\n    menu();\n  }\n  if(target == 'Contact') {\n    contact();\n  }\n});\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction renderMenu() {\n  const menuDiv = document.createElement('div');\n  const hr = document.createElement('hr');\n  const title = document.createElement('h2');\n  title.innerHTML = 'MENU';\n\n\n  const pizzaTitle = document.createElement('h3');\n  pizzaTitle.innerHTML = 'Pizzas';\n  menuDiv.appendChild(title);\n  menuDiv.appendChild(pizzaTitle);\n\n  const pizzaMenu = [\n    {\n      name: 'Margherita',\n      description: 'Fresh tomatoes, mozzarella and basil.'\n    },\n    {\n      name: 'Pepperoni',\n      description: 'Fresh tomatoes, mozzarella, salami(spicy).'\n    },\n    {\n      name: 'Marinara',\n      description: 'Tomato sauce and basil.'\n    },\n    {\n      name: 'Vegeterian',\n      description: 'Mushrooms, Zucchini, Tomatoes, Artichoke, cheese and belt peppers.'\n    },\n  ];\n\n  const drinkMenu = ['Sparkling Water', 'Coca-Cola', 'House Wine', 'Guinness Beer'];\n\n  pizzaMenu.forEach((item) => {\n\n    let name = document.createElement('h5');\n    let description = document.createElement('p');\n    name.innerHTML = item.name;\n    description.innerHTML = item.description;\n  \n    menuDiv.appendChild(name);\n    name.after(description);\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuDiv);\n\n  });\n\n  menuDiv.appendChild(hr);\n\n  const drinkTitle = document.createElement('h3');\n  drinkTitle.innerHTML ='Drinks';\n  menuDiv.appendChild(drinkTitle);\n\n  drinkMenu.forEach((item) => {\n    let name = document.createElement('h5');\n    name.innerHTML = item;\n    const ul = document.createElement('ul');\n    const li = document.createElement('li');\n    li.appendChild(name);\n    ul.appendChild(li);\n    menuDiv.appendChild(ul); \n });\n}\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ renderNav)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction renderNav() {\n  const pageTitle = document.createElement('h1');\n  pageTitle.innerHTML = 'Pizzeria Del Campo';\n  const navItems = ['Home', 'Menu', 'Contact'];\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n \n  for(let i = 0; i < navItems.length; i++) {\n    let item = navItems[i];\n \n    let li = document.createElement('li');\n    li.appendChild(document.createTextNode(item));\n    ul.appendChild(li);\n  }\n  nav.appendChild(ul);\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(nav);\n  ul.before(pageTitle);\n}\n\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/navbar.js?");

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