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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/database.json":
/*!******************************!*\
  !*** ./config/database.json ***!
  \******************************/
/*! exports provided: development, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"development\\\":{\\\"client\\\":\\\"mysql\\\",\\\"connection\\\":{\\\"host\\\":\\\"first-crud-db\\\",\\\"user\\\":\\\"root\\\",\\\"password\\\":\\\"toor\\\",\\\"database\\\":\\\"database\\\"},\\\"migrations\\\":{\\\"tableName\\\":\\\"migrations\\\",\\\"directory\\\":\\\"../migrations\\\"},\\\"seeds\\\":{\\\"directory\\\":\\\"../seeds\\\"}}}\");\n\n//# sourceURL=webpack:///./config/database.json?");

/***/ }),

/***/ "./config/jwt.json":
/*!*************************!*\
  !*** ./config/jwt.json ***!
  \*************************/
/*! exports provided: secret, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"secret\\\":\\\"abc123\\\"}\");\n\n//# sourceURL=webpack:///./config/jwt.json?");

/***/ }),

/***/ "./config/swagger.json":
/*!*****************************!*\
  !*** ./config/swagger.json ***!
  \*****************************/
/*! exports provided: swagger, info, schemes, consumes, produces, paths, definitions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"swagger\\\":\\\"2.0\\\",\\\"info\\\":{\\\"title\\\":\\\"first-crud\\\",\\\"version\\\":\\\"1.0.0\\\"},\\\"schemes\\\":[\\\"http\\\"],\\\"consumes\\\":[\\\"application/json\\\"],\\\"produces\\\":[\\\"application/json\\\"],\\\"paths\\\":{\\\"/login\\\":{\\\"post\\\":{\\\"summary\\\":\\\"Login with user\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"body\\\",\\\"name\\\":\\\"body\\\",\\\"schema\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"email\\\":{\\\"type\\\":\\\"string\\\"},\\\"password\\\":{\\\"type\\\":\\\"string\\\"}},\\\"required\\\":[\\\"email\\\",\\\"password\\\"]}}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"Token with user\\\",\\\"schema\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"token\\\":{\\\"type\\\":\\\"string\\\"},\\\"user\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"firstName\\\":{\\\"type\\\":\\\"string\\\"},\\\"lastName\\\":{\\\"type\\\":\\\"string\\\"},\\\"fullName\\\":{\\\"type\\\":\\\"string\\\"}}}}}}}}},\\\"/group\\\":{\\\"get\\\":{\\\"summary\\\":\\\"Get all groups\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"query\\\",\\\"name\\\":\\\"q\\\",\\\"type\\\":\\\"string\\\"}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"\\\",\\\"schema\\\":{\\\"type\\\":\\\"array\\\",\\\"items\\\":{\\\"$ref\\\":\\\"#definitions/Group\\\"}}}}},\\\"post\\\":{\\\"summary\\\":\\\"Create group\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"body\\\",\\\"name\\\":\\\"body\\\",\\\"schema\\\":{\\\"$ref\\\":\\\"#definitions/GroupRequest\\\"}}],\\\"responses\\\":{\\\"201\\\":{\\\"description\\\":\\\"\\\"}}}},\\\"/group/{id}\\\":{\\\"get\\\":{\\\"summary\\\":\\\"Get group by ID\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"Return with Group object\\\",\\\"schema\\\":{\\\"$ref\\\":\\\"#definitions/Group\\\"}}}},\\\"put\\\":{\\\"summary\\\":\\\"Modify group\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true},{\\\"in\\\":\\\"body\\\",\\\"name\\\":\\\"body\\\",\\\"schema\\\":{\\\"$ref\\\":\\\"#definitions/GroupRequest\\\"}}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"Update successful\\\"}}},\\\"delete\\\":{\\\"summary\\\":\\\"Delete group\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true}],\\\"responses\\\":{\\\"204\\\":{\\\"description\\\":\\\"Deleted\\\"}}}},\\\"/user\\\":{\\\"get\\\":{\\\"summary\\\":\\\"Users index\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"All users\\\",\\\"schema\\\":{\\\"type\\\":\\\"array\\\",\\\"items\\\":{\\\"$ref\\\":\\\"#definitions/User\\\"}}}}},\\\"post\\\":{\\\"summary\\\":\\\"User create\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"body\\\",\\\"name\\\":\\\"body\\\",\\\"schema\\\":{\\\"$ref\\\":\\\"#definitions/UserRequest\\\"}}],\\\"responses\\\":{\\\"201\\\":{\\\"description\\\":\\\"User created\\\"}}}},\\\"/user/{id}\\\":{\\\"get\\\":{\\\"summary\\\":\\\"Get a user by id\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"The user\\\",\\\"schema\\\":{\\\"$ref\\\":\\\"#definitions/User\\\"}}}},\\\"put\\\":{\\\"summary\\\":\\\"Update user by id\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true},{\\\"in\\\":\\\"body\\\",\\\"name\\\":\\\"body\\\",\\\"schema\\\":{\\\"$ref\\\":\\\"#definitions/UserRequest\\\"}}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"Update successful\\\"}}},\\\"delete\\\":{\\\"summary\\\":\\\"Delete user\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true}],\\\"responses\\\":{\\\"204\\\":{\\\"description\\\":\\\"Delete successful\\\"}}}},\\\"/group/{groupId}/user\\\":{\\\"get\\\":{\\\"summary\\\":\\\"Get users from group\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"groupId\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"Users in array\\\",\\\"schema\\\":{\\\"type\\\":\\\"array\\\",\\\"items\\\":{\\\"$ref\\\":\\\"#definitions/User\\\"}}}}},\\\"post\\\":{\\\"summary\\\":\\\"Create a user into a group\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"groupId\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true},{\\\"in\\\":\\\"body\\\",\\\"name\\\":\\\"body\\\",\\\"schema\\\":{\\\"$ref\\\":\\\"#definitions/UserRequest\\\"}}],\\\"responses\\\":{\\\"201\\\":{\\\"description\\\":\\\"Created user\\\"}}}},\\\"/group/{groupId}/user/{id}\\\":{\\\"get\\\":{\\\"summary\\\":\\\"Get user by id from a group\\\",\\\"parameters\\\":[{\\\"in\\\":\\\"header\\\",\\\"name\\\":\\\"Authorization\\\",\\\"type\\\":\\\"string\\\"},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"groupId\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true},{\\\"in\\\":\\\"path\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"string\\\",\\\"required\\\":true}],\\\"responses\\\":{\\\"200\\\":{\\\"description\\\":\\\"The user by id in a group\\\",\\\"schema\\\":{\\\"$ref\\\":\\\"#definitions/User\\\"}}}}}},\\\"definitions\\\":{\\\"Group\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"id\\\":{\\\"type\\\":\\\"integer\\\"},\\\"name\\\":{\\\"type\\\":\\\"string\\\"},\\\"description\\\":{\\\"type\\\":\\\"string\\\"},\\\"location\\\":{\\\"type\\\":\\\"string\\\"},\\\"maximalSize\\\":{\\\"type\\\":\\\"integer\\\"}}},\\\"GroupRequest\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"name\\\":{\\\"type\\\":\\\"string\\\"},\\\"description\\\":{\\\"type\\\":\\\"string\\\"},\\\"location\\\":{\\\"type\\\":\\\"string\\\"},\\\"maximalSize\\\":{\\\"type\\\":\\\"integer\\\"}},\\\"required\\\":[\\\"name\\\",\\\"description\\\",\\\"location\\\",\\\"maximalSize\\\"]},\\\"UserRequest\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"email\\\":{\\\"type\\\":\\\"string\\\"},\\\"password\\\":{\\\"type\\\":\\\"string\\\"},\\\"firstName\\\":{\\\"type\\\":\\\"string\\\"},\\\"lastName\\\":{\\\"type\\\":\\\"string\\\"},\\\"age\\\":{\\\"type\\\":\\\"integer\\\"}}},\\\"User\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"id\\\":{\\\"type\\\":\\\"integer\\\"},\\\"firstName\\\":{\\\"type\\\":\\\"string\\\"},\\\"lastName\\\":{\\\"type\\\":\\\"string\\\"},\\\"fullName\\\":{\\\"type\\\":\\\"string\\\"}}}}}\");\n\n//# sourceURL=webpack:///./config/swagger.json?");

/***/ }),

/***/ "./src/app/controllers/group.ts":
/*!**************************************!*\
  !*** ./src/app/controllers/group.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar database_1 = __webpack_require__(/*! ../../lib/database */ \"./src/lib/database.ts\");\nexports.authorization = function (req, res, next) {\n    if (['admin', 'groupManager'].includes(res.locals.user.role)) {\n        next();\n    }\n    else {\n        res.sendStatus(403);\n    }\n};\nexports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var groups;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, database_1.database('groups').select()];\n            case 1:\n                groups = _a.sent();\n                res.json(groups);\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var group, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, database_1.database('groups').select().where({ id: req.params.id }).first()];\n            case 1:\n                group = _a.sent();\n                if (typeof group !== 'undefined') {\n                    res.json(group);\n                }\n                else {\n                    res.sendStatus(404);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.error(error_1);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var group, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                group = {\n                    name: req.body.name,\n                    description: req.body.description,\n                    location: req.body.location,\n                    maximalSize: req.body.maximalSize\n                };\n                return [4 /*yield*/, database_1.database('groups').insert(group)];\n            case 1:\n                _a.sent();\n                res.sendStatus(201);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                console.error(error_2);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var group, newGroup, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, database_1.database('groups').select().where({ id: req.params.id }).first()];\n            case 1:\n                group = _a.sent();\n                if (!group) return [3 /*break*/, 3];\n                newGroup = {\n                    name: req.body.name,\n                    description: req.body.description,\n                    location: req.body.location,\n                    maximalSize: req.body.maximalSize\n                };\n                return [4 /*yield*/, database_1.database('groups').update(newGroup).where({ id: req.params.id })];\n            case 2:\n                _a.sent();\n                res.sendStatus(200);\n                return [3 /*break*/, 4];\n            case 3:\n                res.sendStatus(404);\n                _a.label = 4;\n            case 4: return [3 /*break*/, 6];\n            case 5:\n                error_3 = _a.sent();\n                console.error(error_3);\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\nexports.destroy = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var group, error_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, database_1.database('groups').select().where({ id: req.params.id }).first()];\n            case 1:\n                group = _a.sent();\n                if (!group) return [3 /*break*/, 3];\n                return [4 /*yield*/, database_1.database('groups')[\"delete\"]().where({ id: req.params.id })];\n            case 2:\n                _a.sent();\n                res.sendStatus(204);\n                return [3 /*break*/, 4];\n            case 3:\n                res.sendStatus(404);\n                _a.label = 4;\n            case 4: return [3 /*break*/, 6];\n            case 5:\n                error_4 = _a.sent();\n                console.error(error_4);\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/app/controllers/group.ts?");

/***/ }),

/***/ "./src/app/controllers/groupUser.ts":
/*!******************************************!*\
  !*** ./src/app/controllers/groupUser.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar database_1 = __webpack_require__(/*! ../../lib/database */ \"./src/lib/database.ts\");\nvar userSerializer = __webpack_require__(/*! ../serializers/user */ \"./src/app/serializers/user.ts\");\nexports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, database_1.database('users').where({ groupId: req.params.groupId }).select()];\n            case 1:\n                users = _a.sent();\n                res.json(users);\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, database_1.database('users').select().where({ groupId: req.params.groupId, id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                if (typeof user !== 'undefined') {\n                    res.json(userSerializer.show(user));\n                }\n                else {\n                    res.sendStatus(404);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.error(error_1);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                user = {\n                    firstName: req.body.firstName,\n                    lastName: req.body.lastName,\n                    email: req.body.email,\n                    age: req.body.age,\n                    groupId: Number(req.params.groupId)\n                };\n                return [4 /*yield*/, database_1.database('users').insert(user)];\n            case 1:\n                _a.sent();\n                res.sendStatus(201);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                console.error(error_2);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, newUser, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, database_1.database('users').select().where({ groupId: req.params.groupId, id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                if (!user) return [3 /*break*/, 3];\n                newUser = {\n                    firstName: req.body.firstName,\n                    lastName: req.body.lastName,\n                    email: req.body.email,\n                    age: req.body.age\n                };\n                return [4 /*yield*/, database_1.database('users').update(newUser).where({ groupId: req.params.groupId, id: req.params.id })];\n            case 2:\n                _a.sent();\n                res.sendStatus(200);\n                return [3 /*break*/, 4];\n            case 3:\n                res.sendStatus(404);\n                _a.label = 4;\n            case 4: return [3 /*break*/, 6];\n            case 5:\n                error_3 = _a.sent();\n                console.error(error_3);\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\nexports.destroy = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, database_1.database('users').select().where({ groupId: req.params.groupId, id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                if (!user) return [3 /*break*/, 3];\n                return [4 /*yield*/, database_1.database('users')[\"delete\"]().where({ groupId: req.params.groupId, id: req.params.id })];\n            case 2:\n                _a.sent();\n                res.sendStatus(204);\n                return [3 /*break*/, 4];\n            case 3:\n                res.sendStatus(404);\n                _a.label = 4;\n            case 4: return [3 /*break*/, 6];\n            case 5:\n                error_4 = _a.sent();\n                console.error(error_4);\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/app/controllers/groupUser.ts?");

/***/ }),

/***/ "./src/app/controllers/login.ts":
/*!**************************************!*\
  !*** ./src/app/controllers/login.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar database_1 = __webpack_require__(/*! ../../lib/database */ \"./src/lib/database.ts\");\nvar loginSerializer = __webpack_require__(/*! ../serializers/login */ \"./src/app/serializers/login.ts\");\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar jwtConfig = __webpack_require__(/*! ../../../config/jwt.json */ \"./config/jwt.json\");\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nexports.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, info, token, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, database_1.database('users').select().where({\n                        email: req.body.email\n                    }).first()];\n            case 1:\n                user = _a.sent();\n                if (typeof user !== 'undefined' && bcrypt.compareSync(req.body.password, user.password)) {\n                    info = { userId: user.id };\n                    token = jwt.sign(info, jwtConfig.secret);\n                    res.json(loginSerializer.create(token, user));\n                }\n                else {\n                    res.sendStatus(404);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.error(error_1);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/app/controllers/login.ts?");

/***/ }),

/***/ "./src/app/controllers/user.ts":
/*!*************************************!*\
  !*** ./src/app/controllers/user.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar database_1 = __webpack_require__(/*! ../../lib/database */ \"./src/lib/database.ts\");\nvar userSerializer = __webpack_require__(/*! ../serializers/user */ \"./src/app/serializers/user.ts\");\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nexports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, database_1.database('users').select()];\n            case 1:\n                users = _a.sent();\n                res.json(userSerializer.index(users));\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, database_1.database('users').select().where({ id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                console.log(user);\n                if (typeof user !== 'undefined') {\n                    res.json(userSerializer.show(user));\n                }\n                else {\n                    res.sendStatus(404);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.error(error_1);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var encryptedPassword, user, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                encryptedPassword = bcrypt.hashSync(req.body.password, 10);\n                user = {\n                    firstName: req.body.firstName,\n                    lastName: req.body.lastName,\n                    email: req.body.email,\n                    password: encryptedPassword,\n                    age: req.body.age\n                };\n                return [4 /*yield*/, database_1.database('users').insert(user)];\n            case 1:\n                _a.sent();\n                res.sendStatus(201);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                console.error(error_2);\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, newUser, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, database_1.database('users').select().where({ id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                if (!user) return [3 /*break*/, 3];\n                newUser = {\n                    firstName: req.body.firstName,\n                    lastName: req.body.lastName,\n                    email: req.body.email,\n                    age: req.body.age\n                };\n                return [4 /*yield*/, database_1.database('users').update(newUser).where({ id: req.params.id })];\n            case 2:\n                _a.sent();\n                res.sendStatus(200);\n                return [3 /*break*/, 4];\n            case 3:\n                res.sendStatus(404);\n                _a.label = 4;\n            case 4: return [3 /*break*/, 6];\n            case 5:\n                error_3 = _a.sent();\n                console.error(error_3);\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\nexports.destroy = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, database_1.database('users').select().where({ id: req.params.id }).first()];\n            case 1:\n                user = _a.sent();\n                if (!user) return [3 /*break*/, 3];\n                return [4 /*yield*/, database_1.database('users')[\"delete\"]().where({ id: req.params.id })];\n            case 2:\n                _a.sent();\n                res.sendStatus(204);\n                return [3 /*break*/, 4];\n            case 3:\n                res.sendStatus(404);\n                _a.label = 4;\n            case 4: return [3 /*break*/, 6];\n            case 5:\n                error_4 = _a.sent();\n                console.error(error_4);\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/app/controllers/user.ts?");

/***/ }),

/***/ "./src/app/routers/group.ts":
/*!**********************************!*\
  !*** ./src/app/routers/group.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar groupController = __webpack_require__(/*! ../controllers/group */ \"./src/app/controllers/group.ts\");\nexports.router = express_1.Router({ mergeParams: true });\nexports.router.get('/', groupController.index);\nexports.router.get('/:id', groupController.show);\nexports.router.use(groupController.authorization);\nexports.router.post('/', groupController.create);\nexports.router.put('/:id', groupController.update);\nexports.router[\"delete\"]('/:id', groupController.destroy);\n/*import { Router } from 'express';\nimport * as groupController from '../controllers/group';\n\nexport const router: Router = Router({ mergeParams: true });\n\nrouter.use(groupController.authorization);\nrouter.get('/', groupController.index);\nrouter.get('/:id', groupController.show);\nrouter.post('/', groupController.create);\nrouter.put('/:id', groupController.update);\nrouter.delete('/:id', groupController.destroy);\n*/ \n\n\n//# sourceURL=webpack:///./src/app/routers/group.ts?");

/***/ }),

/***/ "./src/app/routers/groupUser.ts":
/*!**************************************!*\
  !*** ./src/app/routers/groupUser.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar groupUserController = __webpack_require__(/*! ../controllers/groupUser */ \"./src/app/controllers/groupUser.ts\");\nexports.router = express_1.Router({ mergeParams: true });\nexports.router.get('/', groupUserController.index);\nexports.router.get('/:id', groupUserController.show);\nexports.router.post('/', groupUserController.create);\nexports.router.put('/:id', groupUserController.update);\nexports.router[\"delete\"]('/:id', groupUserController.destroy);\n\n\n//# sourceURL=webpack:///./src/app/routers/groupUser.ts?");

/***/ }),

/***/ "./src/app/routers/index.ts":
/*!**********************************!*\
  !*** ./src/app/routers/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/app/routers/user.ts\");\nvar group_1 = __webpack_require__(/*! ./group */ \"./src/app/routers/group.ts\");\nvar groupUser_1 = __webpack_require__(/*! ./groupUser */ \"./src/app/routers/groupUser.ts\");\nvar login_1 = __webpack_require__(/*! ./login */ \"./src/app/routers/login.ts\");\n//import { router as todoRouter } from './todo'\n//import { router as categoryRouter } from './category'\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nexports.router = express_1.Router({ mergeParams: true });\nexports.router.use('/user', user_1.router);\nexports.router.use('/group', group_1.router);\nexports.router.use('/group/:groupId/user', groupUser_1.router);\nexports.router.use('/login', login_1.router);\n//router.use(todoRouter);\n//router.use(categoryRouter);\n\n\n//# sourceURL=webpack:///./src/app/routers/index.ts?");

/***/ }),

/***/ "./src/app/routers/login.ts":
/*!**********************************!*\
  !*** ./src/app/routers/login.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar loginController = __webpack_require__(/*! ../controllers/login */ \"./src/app/controllers/login.ts\");\nexports.router = express_1.Router({ mergeParams: true });\nexports.router.post('/', loginController.create);\n\n\n//# sourceURL=webpack:///./src/app/routers/login.ts?");

/***/ }),

/***/ "./src/app/routers/user.ts":
/*!*********************************!*\
  !*** ./src/app/routers/user.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar userController = __webpack_require__(/*! ../controllers/user */ \"./src/app/controllers/user.ts\");\nexports.router = express_1.Router({ mergeParams: true });\nexports.router.get('/', userController.index);\nexports.router.get('/:id', userController.show);\nexports.router.post('/', userController.create);\nexports.router.put('/:id', userController.update);\nexports.router[\"delete\"]('/:id', userController.destroy);\n\n\n//# sourceURL=webpack:///./src/app/routers/user.ts?");

/***/ }),

/***/ "./src/app/serializers/login.ts":
/*!**************************************!*\
  !*** ./src/app/serializers/login.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar userSerializer = __webpack_require__(/*! ./user */ \"./src/app/serializers/user.ts\");\nexports.create = function (token, user) {\n    return {\n        token: token,\n        user: userSerializer.show(user)\n    };\n};\n\n\n//# sourceURL=webpack:///./src/app/serializers/login.ts?");

/***/ }),

/***/ "./src/app/serializers/user.ts":
/*!*************************************!*\
  !*** ./src/app/serializers/user.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.show = function (user) {\n    return {\n        firstName: user.firstName,\n        lastName: user.lastName,\n        fullName: user.firstName + \" \" + user.lastName\n    };\n};\nexports.index = function (users) {\n    return users.map(function (user) { return exports.show(user); });\n};\n\n\n//# sourceURL=webpack:///./src/app/serializers/user.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routers_1 = __webpack_require__(/*! ./app/routers */ \"./src/app/routers/index.ts\");\nvar auth_1 = __webpack_require__(/*! ./lib/auth */ \"./src/lib/auth.ts\");\n//\nvar createMiddleware = __webpack_require__(/*! swagger-express-middleware */ \"swagger-express-middleware\");\nvar swaggerUi = __webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\");\nvar swaggerDocument = __webpack_require__(/*! ../config/swagger.json */ \"./config/swagger.json\");\nvar app = express();\napp.use(express.json());\ncreateMiddleware('config/swagger.json', app, function (err, middleware) {\n    if (err) {\n        console.error(err);\n    }\n    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));\n    app.use(middleware.metadata());\n    app.use(middleware.CORS());\n    app.use(middleware.parseRequest());\n    app.use(middleware.validateRequest());\n    app.use(express.json());\n    var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\n    /*app.get('/', async (req: Request, res: Response) => {\n      res.json({\n        message: 'hello world',\n      });\n    });*/\n    app.use(auth_1.authentication);\n    app.use(routers_1.router);\n    app.listen(PORT, function () {\n        console.log(\"server started at http://localhost:\" + PORT);\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar database_1 = __webpack_require__(/*! ./database */ \"./src/lib/database.ts\");\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar jwtConfig = __webpack_require__(/*! ../../config/jwt.json */ \"./config/jwt.json\");\nexports.authentication = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var token, info, userId, user, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if ((req.path.endsWith('/user') || req.path.endsWith('/login')) && req.method === 'POST') {\n                    return [2 /*return*/, next()];\n                }\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                token = req.headers.authorization.split(' ')[1];\n                info = jwt.verify(token, jwtConfig.secret);\n                userId = info.userId;\n                return [4 /*yield*/, database_1.database('users').where({ id: userId }).first()];\n            case 2:\n                user = _a.sent();\n                res.locals.user = user;\n                next();\n                return [3 /*break*/, 4];\n            case 3:\n                error_1 = _a.sent();\n                res.sendStatus(401);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/lib/auth.ts?");

/***/ }),

/***/ "./src/lib/database.ts":
/*!*****************************!*\
  !*** ./src/lib/database.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Knex = __webpack_require__(/*! knex */ \"knex\");\nvar configs = __webpack_require__(/*! ../../config/database.json */ \"./config/database.json\");\nvar config = configs[\"development\" || false];\nexports.database = Knex(config);\n\n\n//# sourceURL=webpack:///./src/lib/database.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"knex\");\n\n//# sourceURL=webpack:///external_%22knex%22?");

/***/ }),

/***/ "swagger-express-middleware":
/*!*********************************************!*\
  !*** external "swagger-express-middleware" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swagger-express-middleware\");\n\n//# sourceURL=webpack:///external_%22swagger-express-middleware%22?");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swagger-ui-express\");\n\n//# sourceURL=webpack:///external_%22swagger-ui-express%22?");

/***/ })

/******/ });