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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_createNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createNav */ \"./src/modules/createNav.js\");\n\r\n\r\n \r\n(0,_modules_createNav__WEBPACK_IMPORTED_MODULE_1__.createNav)();\r\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/createNav.js":
/*!**********************************!*\
  !*** ./src/modules/createNav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/modules/pageLoad.js\");\n\r\n\r\nfunction createNav() {\r\n    const page = document.getElementById('content');\r\n    const sidebar = document.createElement('div');\r\n    const header = document.createElement('div');\r\n    const footer = document.createElement('div');\r\n\r\n    footer.className = 'footer';\r\n    header.className = 'header';\r\n    sidebar.id = 'sidebar';\r\n\r\n    header.innerHTML = `<h1 id='headerTitle'>TODO List</h1>\r\n    <input id='searchbar' type='text' placeholder='Search'>`\r\n    sidebar.innerHTML = `\r\n    <h1 id='assignmentTitle'>Assignments</h1>`\r\n\r\n    const sideButtonToday = ButtonFactory('todayBtn', 'sideBtns', 'Today')\r\n    const sideButtonThisWeek = ButtonFactory('thisWeekBtn', 'sideBtns', 'This Week')\r\n    const sideButtonCalendar = ButtonFactory('calendar', 'sideBtns', 'Calendar')\r\n    const sideButtonOdin = ButtonFactory('project', 'sideBtns', 'Odin');\r\n    const sideButtonAdd = ButtonFactory('addProject', 'sideBtn', 'Add Project');\r\n    \r\n    sidebar.appendChild(sideButtonToday)\r\n    sidebar.appendChild(sideButtonThisWeek)\r\n    sidebar.appendChild(sideButtonCalendar)\r\n\r\n    sidebar.innerHTML +=`<h1 id='projectTitle'>My Projects</h1>`\r\n    sidebar.appendChild(sideButtonOdin)\r\n    sidebar.appendChild(sideButtonAdd)\r\n\r\n    page.appendChild(header);\r\n    page.appendChild(sidebar);\r\n    page.appendChild(footer); \r\n}\r\n\r\nfunction ButtonFactory(id, classname, text) { \r\n    var button = document.createElement('button');\r\n    button.id = id;\r\n    button.className = classname;\r\n    button.textContent = text;\r\n    button.addEventListener('click', function() {(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(id)});\r\n    return button;\r\n    \r\n}\n\n//# sourceURL=webpack://todo/./src/modules/createNav.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\r\n    const page = document.getElementById('content');\r\n    \r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n\r\n\r\n\r\nfunction pageLoad(page) {\r\n    const content = document.getElementById('content');\r\n    content.removeChild(content.childNodes[2])\r\n    if(page == 'todayBtn') {\r\n        return loadTodayTasks()\r\n    } else if (page == 'thisWeekBtn') {\r\n        return loadThisWeeksTasks()\r\n    } else if (page == 'calender') {\r\n        return loadCalender()\r\n    } else if(page == 'project') {\r\n        return (0,_projects__WEBPACK_IMPORTED_MODULE_1__.loadProjects)()\r\n    } else {\r\n       return (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)()\r\n    }\r\n}\n\n//# sourceURL=webpack://todo/./src/modules/pageLoad.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects)\n/* harmony export */ });\nlet listOfProjects = [];\r\nfunction Project(title, description, list) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.list = list;\r\n\r\n    this.addTask = function(task) {\r\n        list.push(task);\r\n    }\r\n    this.removeTask = function(task) {\r\n        this.list = this.list.filter(listItem => listItem != task);\r\n    }\r\n    this.deleteProject = function(projectName) {\r\n        listOfProjects = listOfProjects.filter(name => name != projectName)\r\n    }\r\n}\r\nfunction loadProjects() {\r\n    \r\n}\r\nfunction createProject() {\r\n\r\n    \r\n    //add it to the master list of projects\r\n    listOfProjects.push(this)\r\n}\n\n//# sourceURL=webpack://todo/./src/modules/projects.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;