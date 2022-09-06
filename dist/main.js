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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/today */ \"./src/modules/today.js\");\n/* harmony import */ var _modules_createNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createNav */ \"./src/modules/createNav.js\");\n\n\n \n(0,_modules_createNav__WEBPACK_IMPORTED_MODULE_1__.createNav)();\n(0,_modules_today__WEBPACK_IMPORTED_MODULE_0__.loadTodayTasks)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calendar.js":
/*!*********************************!*\
  !*** ./src/modules/calendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCalender\": () => (/* binding */ loadCalender)\n/* harmony export */ });\nfunction loadCalender() {\n    \n}\n\n//# sourceURL=webpack://todo/./src/modules/calendar.js?");

/***/ }),

/***/ "./src/modules/createNav.js":
/*!**********************************!*\
  !*** ./src/modules/createNav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/modules/pageLoad.js\");\n\n\nfunction createNav() {\n    const page = document.getElementById('content');\n    const sidebar = document.createElement('div');\n    const header = document.createElement('div');\n    const footer = document.createElement('div');\n\n    footer.className = 'footer';\n    header.className = 'header';\n    sidebar.id = 'sidebar';\n\n    header.innerHTML = `<h1 id='headerTitle'>TODO List</h1>\n    <input id='searchbar' type='text' placeholder='Search'>`\n    sidebar.innerHTML = `\n    <h1 class='sidebarLabel' id='assignmentTitle'>Assignments</h1>`\n    const sideBarH1 = document.createElement('h1');\n    sideBarH1.innerHTML = `<h1 class='sidebarLabel' id='projectTitle'>My Projects</h1>`\n    const sideButtonToday = ButtonFactory('todayBtn', 'sideBtns', 'Today')\n    const sideButtonThisWeek = ButtonFactory('thisWeekBtn', 'sideBtns', 'This Week')\n    const sideButtonCalendar = ButtonFactory('calendar', 'sideBtns', 'Calendar')\n    const sideButtonOdin = ButtonFactory('project', 'sideBtns', 'Odin');\n    const sideButtonAdd = ButtonFactory('addProject', 'sideBtn', 'Add Project');\n    \n    sidebar.appendChild(sideButtonToday)\n    sidebar.appendChild(sideButtonThisWeek)\n    sidebar.appendChild(sideButtonCalendar)\n\n    sidebar.appendChild(sideBarH1)\n    sidebar.appendChild(sideButtonOdin)\n    sidebar.appendChild(sideButtonAdd)\n\n    page.appendChild(header);\n    page.appendChild(sidebar);\n    page.appendChild(footer); \n}\n\nfunction ButtonFactory(id, classname, text) { \n    var button = document.createElement('button');\n    button.id = id;\n    button.className = classname;\n    button.textContent = text;\n    button.addEventListener('click', function() {(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(id)});\n    return button;\n    \n}\n\n//# sourceURL=webpack://todo/./src/modules/createNav.js?");

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ \"./src/modules/today.js\");\n\n\nfunction createTask() {\n    const page = document.getElementById('content');\n    const taskFormBox = document.createElement('div');\n    taskFormBox.id = 'taskFormBox';\n    taskFormBox.innerHTML =`<form id='taskForm'>\n    <h1> Task info</h1>\n    <input id='newTaskDescription' placeholder='Description'>\n    <h2>Task Prioity</h2>\n    <label for='newTaskPrioLow'><input type=radio id='newTaskPrioLow' name='newTaskPrio' value='low'>Low</label>\n    \n    <label for='newTaskPrioMedium'><input type=radio id='newTaskPrioMedium' name='newTaskPrio' value='medium>Medium</label>\n    <label for='newTaskPrioHigh'><input type=radio id='newTaskPrioHigh' name='newTaskPrio' valie='high'>High</label>\n\n    <h2>Completed</h2>\n    True<input type='radio' id='newTaskCompletedTrue' name='newTaskCompleted' value='true'>\n    False<input type='radio' id='newTaskCompletedFalse'name='newTaskCompleted' value='false'>\n    <button id='addNewTaskBtn'>Add Task</button>\n    <button id='formCloseBtn'>X</button>\n    </form>`\n\n    page.style.backgroundColor = '#495464'\n    page.style.opacity = '.5'\n    document.body.appendChild(taskFormBox)\n    taskFormBox.style.display = 'block'\n    \n    // function addNewTask() {\n    //     let tasksList = []\n    //     let taskDescription = document.getElementById('newTaskDescription').value;\n    //     let taskPrio = document.querySelector(`name='newTaskPrio'`).value;\n    //     let taskCompleted = document.querySelector(`name='newTaskCompleted'`).value;\n    //     let task = Task(1, taskDescription, taskPrio, taskCompleted);\n    //     //check if its correct\n    //     console.log(task, 'called from tasks')\n    //     tasksList.push(task);\n    // }\n}\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/createTask.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ \"./src/modules/today.js\");\n/* harmony import */ var _thisweek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thisweek */ \"./src/modules/thisweek.js\");\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ \"./src/modules/calendar.js\");\n\n\n\n\nfunction pageLoad(page) {\n    const content = document.getElementById('content');\n    content.removeChild(content.childNodes[3]) //is there a better way to remove current content? \n    if(page == 'todayBtn') {\n        return (0,_today__WEBPACK_IMPORTED_MODULE_0__.loadTodayTasks)()\n    } else if (page == 'thisWeekBtn') {\n        return (0,_thisweek__WEBPACK_IMPORTED_MODULE_1__.loadThisWeeksTasks)()\n    } else if (page == 'calender') {\n        return (0,_calendar__WEBPACK_IMPORTED_MODULE_2__.loadCalender)()\n    } else if(page == 'project') {\n        return loadProjects()\n    } else {\n        (0,_today__WEBPACK_IMPORTED_MODULE_0__.loadTodayTasks)()\n    }\n}\n\n//# sourceURL=webpack://todo/./src/modules/pageLoad.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nfunction Task(id, description, priority, completed) {\n    this.id = id;\n    this.description = description;\n    this.priority = priority;\n    this.completed = completed;\n}\n\n//# sourceURL=webpack://todo/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/thisweek.js":
/*!*********************************!*\
  !*** ./src/modules/thisweek.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadThisWeeksTasks\": () => (/* binding */ loadThisWeeksTasks)\n/* harmony export */ });\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ \"./src/modules/createTask.js\");\n\n\nfunction loadThisWeeksTasks() {\n    const page = document.getElementById('content');\n\n    const thisWeekPage = document.createElement('div');\n    thisWeekPage.id = 'thisWeekPage';\n    thisWeekPage.className = 'pageContent';\n\n    thisWeekPage.innerHTML = `<h1>This Weeks Tasks</h1>\n    <button onclick='createTask()' id='addTaskBtn'>Add New Task</button>`\n    page.appendChild(thisWeekPage);\n}\n\n//# sourceURL=webpack://todo/./src/modules/thisweek.js?");

/***/ }),

/***/ "./src/modules/today.js":
/*!******************************!*\
  !*** ./src/modules/today.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadTodayTasks\": () => (/* binding */ loadTodayTasks)\n/* harmony export */ });\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ \"./src/modules/createTask.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\n\nfunction loadTodayTasks() {\n    const todaysTasks = [];\n\n\n    const page = document.getElementById('content');\n    const addBtn = document.createElement('button');\n    const taskArea = document.createElement('div');\n\n    taskArea.id = 'todaysTasks'\n    addBtn.id = 'addTaskBtn';\n    addBtn.textContent = 'Add New Task';\n    addBtn.onclick = function() {\n        (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)()\n        document.getElementById('addNewTaskBtn').addEventListener('click', addNewTask)\n    }\n    const todayPage = document.createElement('div');\n    todayPage.id = 'todayPage';\n    todayPage.className = 'pageContent';\n\n    taskArea.textContent = _createTask__WEBPACK_IMPORTED_MODULE_0__.createTask.taskList;\n    todayPage.innerHTML = `<h1> Todays Tasks</h1>`\n    todayPage.appendChild(taskArea)\n    todayPage.appendChild(addBtn)\n    page.appendChild(todayPage);\n\n    function addNewTask() {\n        let tasksList = []\n        let taskDescription = document.getElementById('newTaskDescription').value;\n        let taskPrio = document.querySelector(`name='newTaskPrio'`).value;\n        let taskCompleted = document.querySelector(`name='newTaskCompleted'`).value;\n        let task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(1, taskDescription, taskPrio, taskCompleted);\n        \n        todaysTasks.push(task);\n        console.log(todaysTasks)\n        console.log('called')\n        return false\n    }\n}\n\n//# sourceURL=webpack://todo/./src/modules/today.js?");

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