/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet mainWindow;\nconst wait = 1000;\nconst isDevelopment = \"development\" !== 'production';\nif (isDevelopment) {\n    __webpack_require__(/*! module */ \"module\").globalPaths.push(\"/home/maxime/Devs/qwirk/front/node_modules\");\n}\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', async () => {\n    const bounds = electron__WEBPACK_IMPORTED_MODULE_0__[\"screen\"].getPrimaryDisplay().workArea;\n    const scaling = {\n        splashScreen: { width: 350, height: 600 },\n        app: { x: 1600, y: 900 },\n        dividedBy: 2\n    };\n    const boundsCalc = {\n        splashScreen: {\n            x: bounds.x + ((bounds.width - scaling.splashScreen.width) / scaling.dividedBy),\n            y: bounds.y + ((bounds.height - scaling.splashScreen.height) / scaling.dividedBy)\n        },\n        app: {\n            x: bounds.x + ((bounds.width - scaling.app.x) / scaling.dividedBy),\n            y: bounds.y + ((bounds.height - scaling.app.y) / scaling.dividedBy)\n        }\n    };\n    const loading = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\n        width: scaling.splashScreen.width,\n        height: scaling.splashScreen.height,\n        x: boundsCalc.splashScreen.x,\n        y: boundsCalc.splashScreen.y,\n        backgroundColor: '#36393E',\n        show: false,\n        frame: false\n    });\n    loading.once('show', () => {\n        mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\n            width: scaling.app.x,\n            height: scaling.app.y,\n            x: boundsCalc.app.x,\n            y: boundsCalc.app.y,\n            useContentSize: true,\n            backgroundColor: '#36393E',\n            show: false,\n            frame: false\n        });\n        mainWindow.webContents.once('dom-ready', () => {\n            mainWindow.show();\n            loading.hide();\n            loading.close();\n        });\n        setTimeout(() => {\n            mainWindow.webContents.openDevTools();\n            mainWindow.loadURL(\"http://localhost:8081/\");\n        }, wait);\n    });\n    loading.loadURL('http://localhost:8080/splash-screen');\n    loading.show();\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', () => {\n    if (process.platform !== 'darwin') {\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\n    }\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', () => {\n    if (mainWindow === null) {\n        mainWindow.loadURL(\"http://localhost:8081/\");\n    }\n});\n\n\n//# sourceURL=webpack:///./src/background.ts?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/background.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/maxime/Devs/qwirk/front/src/background.ts */\"./src/background.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/background.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"module\");\n\n//# sourceURL=webpack:///external_%22module%22?");

/***/ })

/******/ });