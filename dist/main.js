/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/today */ \"./src/modules/today.js\");\n/* harmony import */ var _modules_createNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createNav */ \"./src/modules/createNav.js\");\n\r\n\r\n \r\n(0,_modules_createNav__WEBPACK_IMPORTED_MODULE_1__.createNav)();\r\n(0,_modules_today__WEBPACK_IMPORTED_MODULE_0__.loadTodayTasks)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calendar.js":
/*!*********************************!*\
  !*** ./src/modules/calendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCalender\": () => (/* binding */ loadCalender)\n/* harmony export */ });\nfunction loadCalender() {\r\n    \r\n}\n\n//# sourceURL=webpack://todo/./src/modules/calendar.js?");

/***/ }),

/***/ "./src/modules/createNav.js":
/*!**********************************!*\
  !*** ./src/modules/createNav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/modules/pageLoad.js\");\n\r\n\r\nfunction createNav() {\r\n    const page = document.getElementById('content');\r\n    const sidebar = document.createElement('div');\r\n    const header = document.createElement('div');\r\n    const footer = document.createElement('div');\r\n\r\n    footer.className = 'footer';\r\n    header.className = 'header';\r\n    sidebar.id = 'sidebar';\r\n\r\n    header.innerHTML = `<h1 id='headerTitle'>TODO List</h1>\r\n    <input id='searchbar' type='text' placeholder='Search'>`\r\n    sidebar.innerHTML = `\r\n    <h1 class='sidebarLabel' id='assignmentTitle'>Assignments</h1>`\r\n    const sideBarH1 = document.createElement('h1');\r\n    sideBarH1.innerHTML = `<h1 class='sidebarLabel' id='projectTitle'>My Projects</h1>`\r\n    const sideButtonToday = ButtonFactory('todayBtn', 'sideBtns', 'Today')\r\n    const sideButtonThisWeek = ButtonFactory('thisWeekBtn', 'sideBtns', 'This Week')\r\n    const sideButtonCalendar = ButtonFactory('calendar', 'sideBtns', 'Calendar')\r\n    const sideButtonOdin = ButtonFactory('project', 'sideBtns', 'Odin');\r\n    const sideButtonAdd = ButtonFactory('addProject', 'sideBtn', 'Add Project');\r\n    \r\n    sidebar.appendChild(sideButtonToday)\r\n    sidebar.appendChild(sideButtonThisWeek)\r\n    sidebar.appendChild(sideButtonCalendar)\r\n\r\n    sidebar.appendChild(sideBarH1)\r\n    sidebar.appendChild(sideButtonOdin)\r\n    sidebar.appendChild(sideButtonAdd)\r\n\r\n    page.appendChild(header);\r\n    page.appendChild(sidebar);\r\n    page.appendChild(footer); \r\n}\r\n\r\nfunction ButtonFactory(id, classname, text) { \r\n    var button = document.createElement('button');\r\n    button.id = id;\r\n    button.className = classname;\r\n    button.textContent = text;\r\n    button.addEventListener('click', function() {(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(id)});\r\n    return button;\r\n    \r\n}\n\n//# sourceURL=webpack://todo/./src/modules/createNav.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ \"./src/modules/today.js\");\n/* harmony import */ var _thisweek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thisweek */ \"./src/modules/thisweek.js\");\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ \"./src/modules/calendar.js\");\n\r\n\r\n\r\n\r\nfunction pageLoad(page) {\r\n    const content = document.getElementById('content');\r\n    content.removeChild(content.childNodes[3]) //is there a better way to remove current content? \r\n    if(page == 'todayBtn') {\r\n        return (0,_today__WEBPACK_IMPORTED_MODULE_0__.loadTodayTasks)()\r\n    } else if (page == 'thisWeekBtn') {\r\n        return (0,_thisweek__WEBPACK_IMPORTED_MODULE_1__.loadThisWeeksTasks)()\r\n    } else if (page == 'calender') {\r\n        return (0,_calendar__WEBPACK_IMPORTED_MODULE_2__.loadCalender)()\r\n    } else if(page == 'project') {\r\n        return loadProjects()\r\n    } else {\r\n        (0,_today__WEBPACK_IMPORTED_MODULE_0__.loadTodayTasks)()\r\n    }\r\n}\n\n//# sourceURL=webpack://todo/./src/modules/pageLoad.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ \"./src/modules/today.js\");\n\r\n\r\nfunction createTask() {\r\n    const page = document.getElementById('content');\r\n    const taskFormBox = document.createElement('div');\r\n    taskFormBox.id = 'taskFormBox';\r\n    taskFormBox.innerHTML =`<form id='taskForm'>\r\n    <h1> Task info</h1>\r\n    <input id='newTaskDescription' placeholder='Description'>\r\n    <h2>Task Prioity</h2>\r\n    <label for='newTaskPrioLow'><input type=radio id='newTaskPrioLow' name='newTaskPrio' value='low'>Low</label>\r\n    \r\n    <label for='newTaskPrioMedium'><input type=radio id='newTaskPrioMedium' name='newTaskPrio' value='medium>Medium</label>\r\n    <label for='newTaskPrioHigh'><input type=radio id='newTaskPrioHigh' name='newTaskPrio' valie='high'>High</label>\r\n\r\n    <h2>Completed</h2>\r\n    True<input type='radio' id='newTaskCompletedTrue' name='newTaskCompleted' value='true'>\r\n    False<input type='radio' id='newTaskCompletedFalse'name='newTaskCompleted' value='false'>\r\n    <button onlcick='addNewTask(); return false' id='addNewTaskBtn'>Add Task</button>\r\n    <button id='formCloseBtn'>X</button>\r\n    </form>`\r\n\r\n    page.style.backgroundColor = '#495464'\r\n    page.style.opacity = '.5'\r\n    document.body.appendChild(taskFormBox)\r\n    taskFormBox.style.display = 'block'\r\n\r\n\r\n    function Task(id, description, priority, completed) {\r\n        this.id = id;\r\n        this.description = description;\r\n        this.priority = priority;\r\n        this.completed = completed;\r\n    }\r\n    \r\n    function addNewTask() {\r\n        let tasksList = []\r\n        let taskDescription = document.getElementById('newTaskDescription').value;\r\n        let taskPrio = document.querySelector(`name='newTaskPrio'`).value;\r\n        let taskCompleted = document.querySelector(`name='newTaskCompleted'`).value;\r\n        let task = Task(1, taskDescription, taskPrio, taskCompleted);\r\n        //check if its correct\r\n        console.log(task, 'called from tasks')\r\n        tasksList.push(task);\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo/./src/modules/tasks.js?");

/***/ }),

/***/ "./src/modules/thisweek.js":
/*!*********************************!*\
  !*** ./src/modules/thisweek.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadThisWeeksTasks\": () => (/* binding */ loadThisWeeksTasks)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n\r\nfunction loadThisWeeksTasks() {\r\n    const page = document.getElementById('content');\r\n\r\n    const thisWeekPage = document.createElement('div');\r\n    thisWeekPage.id = 'thisWeekPage';\r\n    thisWeekPage.className = 'pageContent';\r\n\r\n    thisWeekPage.innerHTML = `<h1>This Weeks Tasks</h1>\r\n    <button onclick='createTask()' id='addTaskBtn'>Add New Task</button>`\r\n    page.appendChild(thisWeekPage);\r\n}\n\n//# sourceURL=webpack://todo/./src/modules/thisweek.js?");

/***/ }),

/***/ "./src/modules/today.js":
/*!******************************!*\
  !*** ./src/modules/today.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadTodayTasks\": () => (/* binding */ loadTodayTasks)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n\r\n\r\nfunction loadTodayTasks() {\r\n    const todaysTasks = [];\r\n    console.log(todaysTasks, 'called from today')\r\n    const page = document.getElementById('content');\r\n    const addBtn = document.createElement('button');\r\n    const taskArea = document.createElement('div');\r\n    taskArea.id = 'todaysTasks'\r\n    addBtn.id = 'addTaskBtn';\r\n    addBtn.textContent = 'Add New Task';\r\n    addBtn.onclick = function() {\r\n        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)()\r\n    }\r\n    const todayPage = document.createElement('div');\r\n    todayPage.id = 'todayPage';\r\n    todayPage.className = 'pageContent';\r\n\r\n    taskArea.textContent = _tasks__WEBPACK_IMPORTED_MODULE_0__.createTask.taskList;\r\n    todayPage.innerHTML = `<h1> Todays Tasks</h1>`\r\n    todayPage.appendChild(taskArea)\r\n    todayPage.appendChild(addBtn)\r\n    page.appendChild(todayPage);\r\n}\n\n//# sourceURL=webpack://todo/./src/modules/today.js?");

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