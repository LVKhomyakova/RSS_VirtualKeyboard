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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_data_Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/data/Data */ "./src/js/data/Data.js");
/* harmony import */ var _js_keyboard_keyboard_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/keyboard/keyboard-elements */ "./src/js/keyboard/keyboard-elements.js");
/* harmony import */ var _js_events_event_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/events/event-listeners */ "./src/js/events/event-listeners.js");
/* harmony import */ var _js_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/constants/class-names-constants */ "./src/js/constants/class-names-constants.js");
/* harmony import */ var _js_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/constants/localstorage-constants */ "./src/js/constants/localstorage-constants.js");






window.onload = function () {
  localStorage.setItem(_js_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__["default"].CAPSLOCKPRESSED, 'false');

  if (!document.querySelector(".".concat(_js_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].WRAPPER))) {
    var _wrapper = _js_keyboard_keyboard_elements__WEBPACK_IMPORTED_MODULE_1__["default"].renderWrapper();

    document.body.append(_wrapper);

    _wrapper.append(_js_keyboard_keyboard_elements__WEBPACK_IMPORTED_MODULE_1__["default"].renderTitle());

    _wrapper.append(_js_keyboard_keyboard_elements__WEBPACK_IMPORTED_MODULE_1__["default"].renderTextarea());

    _wrapper.append(_js_keyboard_keyboard_elements__WEBPACK_IMPORTED_MODULE_1__["default"].renderInstruction());
  }

  var wrapper = document.querySelector(".".concat(_js_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].WRAPPER));

  if (_js_data_Data__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    wrapper.append(_js_keyboard_keyboard_elements__WEBPACK_IMPORTED_MODULE_1__["default"].renderKeyBoard());
  } // add listeners


  document.addEventListener('keydown', _js_events_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"].buttonKeyDown);
  document.addEventListener('keyup', _js_events_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"].buttonKeyUp);
  document.querySelector(".".concat(_js_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].BUTTON_LANGUAGE)).addEventListener('click', _js_events_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"].changeLanguage);
  document.querySelectorAll(".".concat(_js_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].BUTTON)).forEach(function (btn) {
    return btn.addEventListener('mousedown', _js_events_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"].mouseKeyDown);
  });
  document.querySelectorAll(".".concat(_js_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].BUTTON)).forEach(function (btn) {
    return btn.addEventListener('mouseup', _js_events_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"].mouseKeyUp);
  });
  document.querySelectorAll(".".concat(_js_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].BUTTON)).forEach(function (btn) {
    return btn.addEventListener('mouseout', _js_events_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"].mouseKeyOut);
  });
};

/***/ }),

/***/ "./src/js/components/Key.js":
/*!**********************************!*\
  !*** ./src/js/components/Key.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Key; });
/* harmony import */ var _constants_attributes_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/attributes-constants */ "./src/js/constants/attributes-constants.js");
/* harmony import */ var _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/class-names-constants */ "./src/js/constants/class-names-constants.js");
/* harmony import */ var _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/key-special-constants */ "./src/js/constants/key-special-constants.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/utils */ "./src/js/helpers/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Key = /*#__PURE__*/function () {
  function Key(_ref) {
    var code = _ref.code,
        key = _ref.key,
        keyShift = _ref.keyShift,
        keySpecial = _ref.keySpecial;

    _classCallCheck(this, Key);

    this.code = code;
    this.key = key;
    this.keyShift = keyShift;
    this.keySpecial = keySpecial;
  }

  _createClass(Key, [{
    key: "generateKey",
    value: function generateKey() {
      var template = '';
      var button = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('div', [{
        name: 'className',
        value: _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON
      }], [{
        name: _constants_attributes_constants__WEBPACK_IMPORTED_MODULE_0__["default"].DATA_CODE,
        value: this.code
      }]);

      if (this.keySpecial) {
        button.classList.add("button_".concat(this.keySpecial.toLowerCase()), _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON_SPECIAL);
      } else {
        button.classList.add(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON_KEY);
      }

      if (this.keySpecial === _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].SPACE) {
        button.classList.remove(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON_SPECIAL);
      }

      template += "<span class=\"".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL, " ").concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL_UNSHIFT, "\">").concat(this.key, "</span>") + "<span class=\"".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL, " ").concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL_SHIFT, " ").concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE, "\">").concat(this.keyShift, "</span>");
      button.innerHTML = template;
      return button;
    }
  }]);

  return Key;
}();



/***/ }),

/***/ "./src/js/constants/attributes-constants.js":
/*!**************************************************!*\
  !*** ./src/js/constants/attributes-constants.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  DATA_CODE: 'data-code',
  ROWS: 'rows'
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/js/constants/class-names-constants.js":
/*!***************************************************!*\
  !*** ./src/js/constants/class-names-constants.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var classNamesConstants = {
  BUTTON: 'button',
  BUTTON_SPECIAL: 'button_special',
  BUTTON_KEY: 'button_key',
  BUTTON_LANGUAGE: 'button_language',
  SYMBOL: 'symbol',
  SYMBOL_UNSHIFT: 'symbol_unshift',
  SYMBOL_SHIFT: 'symbol_shift',
  HIDE: 'hide',
  KEYBOARD: 'keyboard',
  BUTTON_CAPSLOCK: 'button_capslock',
  PRESSED: 'pressed',
  WRAPPER: 'wrapper',
  TITLE: 'title',
  INSTRUCTION: 'instruction',
  ROW: 'row'
};
/* harmony default export */ __webpack_exports__["default"] = (classNamesConstants);

/***/ }),

/***/ "./src/js/constants/id-names-constants.js":
/*!************************************************!*\
  !*** ./src/js/constants/id-names-constants.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var idNamesConstants = {
  TEXTAREA: 'textarea'
};
/* harmony default export */ __webpack_exports__["default"] = (idNamesConstants);

/***/ }),

/***/ "./src/js/constants/key-special-constants.js":
/*!***************************************************!*\
  !*** ./src/js/constants/key-special-constants.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var keySpecialConstants = {
  ALT: 'Alt',
  BACKSPACE: 'Backspace',
  CAPSLOCK: 'CapsLock',
  DELETE: 'Delete',
  ENTER: 'Enter',
  SPACE: 'Space',
  SHIFT: 'Shift',
  TAB: 'Tab'
};
/* harmony default export */ __webpack_exports__["default"] = (keySpecialConstants);

/***/ }),

/***/ "./src/js/constants/keyboard-languages.js":
/*!************************************************!*\
  !*** ./src/js/constants/keyboard-languages.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var nextKeyboardLanguage = {
  eng: 'ru',
  ru: 'eng'
};
/* harmony default export */ __webpack_exports__["default"] = (nextKeyboardLanguage);

/***/ }),

/***/ "./src/js/constants/localstorage-constants.js":
/*!****************************************************!*\
  !*** ./src/js/constants/localstorage-constants.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var localStorageConstants = {
  CAPSLOCKPRESSED: 'capslockPressed',
  LANGUAGE: 'language'
};
/* harmony default export */ __webpack_exports__["default"] = (localStorageConstants);

/***/ }),

/***/ "./src/js/constants/string-constants.js":
/*!**********************************************!*\
  !*** ./src/js/constants/string-constants.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var stringConstants = {
  TITLE: 'Virtual Keyboard (by LVKhomyakova)',
  INSTRUCTION: 'Сhange language (for Windows): Ctrl + Alt or ENG/RU'
};
/* harmony default export */ __webpack_exports__["default"] = (stringConstants);

/***/ }),

/***/ "./src/js/data/Data.js":
/*!*****************************!*\
  !*** ./src/js/data/Data.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return data; });
var data = {
  eng: [[{
    code: 'Backquote',
    key: '`',
    keyShift: '~',
    keySpecial: ''
  }, {
    code: 'Digit1',
    key: '1',
    keyShift: '!',
    keySpecial: ''
  }, {
    code: 'Digit2',
    key: '2',
    keyShift: '@',
    keySpecial: ''
  }, {
    code: 'Digit3',
    key: '3',
    keyShift: '#',
    keySpecial: ''
  }, {
    code: 'Digit4',
    key: '4',
    keyShift: '$',
    keySpecial: ''
  }, {
    code: 'Digit5',
    key: '5',
    keyShift: '%',
    keySpecial: ''
  }, {
    code: 'Digit6',
    key: '6',
    keyShift: '^',
    keySpecial: ''
  }, {
    code: 'Digit7',
    key: '7',
    keyShift: '&',
    keySpecial: ''
  }, {
    code: 'Digit8',
    key: '8',
    keyShift: '*',
    keySpecial: ''
  }, {
    code: 'Digit9',
    key: '9',
    keyShift: '(',
    keySpecial: ''
  }, {
    code: 'Digit0',
    key: '0',
    keyShift: ')',
    keySpecial: ''
  }, {
    code: 'Minus',
    key: '-',
    keyShift: '_',
    keySpecial: ''
  }, {
    code: 'Equal',
    key: '=',
    keyShift: '+',
    keySpecial: ''
  }, {
    code: 'Backspace',
    key: 'Backspace',
    keyShift: 'Backspace',
    keySpecial: 'Backspace'
  }], [{
    code: 'Tab',
    key: 'Tab',
    keyShift: 'Tab',
    keySpecial: 'Tab'
  }, {
    code: 'KeyQ',
    key: 'q',
    keyShift: 'Q',
    keySpecial: ''
  }, {
    code: 'KeyW',
    key: 'w',
    keyShift: 'W',
    keySpecial: ''
  }, {
    code: 'KeyE',
    key: 'e',
    keyShift: 'E',
    keySpecial: ''
  }, {
    code: 'KeyR',
    key: 'r',
    keyShift: 'R',
    keySpecial: ''
  }, {
    code: 'KeyT',
    key: 't',
    keyShift: 'T',
    keySpecial: ''
  }, {
    code: 'KeyY',
    key: 'y',
    keyShift: 'Y',
    keySpecial: ''
  }, {
    code: 'KeyU',
    key: 'u',
    keyShift: 'U',
    keySpecial: ''
  }, {
    code: 'KeyI',
    key: 'i',
    keyShift: 'I',
    keySpecial: ''
  }, {
    code: 'KeyO',
    key: 'o',
    keyShift: 'O',
    keySpecial: ''
  }, {
    code: 'KeyP',
    key: 'p',
    keyShift: 'P',
    keySpecial: ''
  }, {
    code: 'BracketLeft',
    key: '[',
    keyShift: '{',
    keySpecial: ''
  }, {
    code: 'BracketRight',
    key: ']',
    keyShift: '}',
    keySpecial: ''
  }, {
    code: 'Delete',
    key: 'Delete',
    keyShift: 'Delete',
    keySpecial: 'Delete'
  }], [{
    code: 'CapsLock',
    key: 'CapsLock',
    keyShift: 'CapsLock',
    keySpecial: 'CapsLock'
  }, {
    code: 'KeyA',
    key: 'a',
    keyShift: 'A',
    keySpecial: ''
  }, {
    code: 'KeyS',
    key: 's',
    keyShift: 'S',
    keySpecial: ''
  }, {
    code: 'KeyD',
    key: 'd',
    keyShift: 'D',
    keySpecial: ''
  }, {
    code: 'KeyF',
    key: 'f',
    keyShift: 'F',
    keySpecial: ''
  }, {
    code: 'KeyG',
    key: 'g',
    keyShift: 'G',
    keySpecial: ''
  }, {
    code: 'KeyH',
    key: 'h',
    keyShift: 'H',
    keySpecial: ''
  }, {
    code: 'KeyJ',
    key: 'j',
    keyShift: 'J',
    keySpecial: ''
  }, {
    code: 'KeyK',
    key: 'k',
    keyShift: 'K',
    keySpecial: ''
  }, {
    code: 'KeyL',
    key: 'l',
    keyShift: 'L',
    keySpecial: ''
  }, {
    code: 'Semicolon',
    key: ';',
    keyShift: ':',
    keySpecial: ''
  }, {
    code: 'Quote',
    key: '\'',
    keyShift: '"',
    keySpecial: ''
  }, {
    code: 'Enter',
    key: 'Enter',
    keyShift: 'Enter',
    keySpecial: 'Enter'
  }], [{
    code: 'ShiftLeft',
    key: 'Shift',
    keyShift: 'Shift',
    keySpecial: 'ShiftLeft'
  }, {
    code: 'IntlBackslash',
    key: '\\',
    keyShift: '|',
    keySpecial: ''
  }, {
    code: 'KeyZ',
    key: 'z',
    keyShift: 'Z',
    keySpecial: ''
  }, {
    code: 'KeyX',
    key: 'x',
    keyShift: 'X',
    keySpecial: ''
  }, {
    code: 'KeyC',
    key: 'c',
    keyShift: 'C',
    keySpecial: ''
  }, {
    code: 'KeyV',
    key: 'v',
    keyShift: 'V',
    keySpecial: ''
  }, {
    code: 'KeyB',
    key: 'b',
    keyShift: 'B',
    keySpecial: ''
  }, {
    code: 'KeyN',
    key: 'n',
    keyShift: 'N',
    keySpecial: ''
  }, {
    code: 'KeyM',
    key: 'm',
    keyShift: 'M',
    keySpecial: ''
  }, {
    code: 'Comma',
    key: ',',
    keyShift: '<',
    keySpecial: ''
  }, {
    code: 'Period',
    key: '.',
    keyShift: '>',
    keySpecial: ''
  }, {
    code: 'Slash',
    key: '/',
    keyShift: '?',
    keySpecial: ''
  }, {
    code: 'ArrowUp',
    key: '▲',
    keyShift: '▲',
    keySpecial: ''
  }, {
    code: 'ShiftRight',
    key: 'Shift',
    keyShift: 'Shift',
    keySpecial: 'ShiftRight'
  }], [{
    code: 'ControlLeft',
    key: 'Ctrl',
    keyShift: 'Ctrl',
    keySpecial: 'CtrlLeft'
  }, {
    code: 'MetaLeft',
    key: 'Win',
    keyShift: 'Win',
    keySpecial: 'Win'
  }, {
    code: 'AltLeft',
    key: 'Alt',
    keyShift: 'Alt',
    keySpecial: 'AltLeft'
  }, {
    code: 'Space',
    key: ' ',
    keyShift: ' ',
    keySpecial: 'Space'
  }, {
    code: 'AltRight',
    key: 'Alt',
    keyShift: 'Alt',
    keySpecial: 'AltRight'
  }, {
    code: 'ControlRight',
    key: 'Ctrl',
    keyShift: 'Ctrl',
    keySpecial: 'CtrlRight'
  }, {
    code: 'Language',
    key: 'ENG',
    keyShift: 'ENG',
    keySpecial: 'Language'
  }, {
    code: 'ArrowLeft',
    key: '◄',
    keyShift: '◄',
    keySpecial: ''
  }, {
    code: 'ArrowDown',
    key: '▼',
    keyShift: '▼',
    keySpecial: ''
  }, {
    code: 'ArrowRight',
    key: '►',
    keyShift: '►',
    keySpecial: ''
  }]],
  ru: [[{
    code: 'Backquote',
    key: 'ё',
    keyShift: 'Ё',
    keySpecial: ''
  }, {
    code: 'Digit1',
    key: '1',
    keyShift: '!',
    keySpecial: ''
  }, {
    code: 'Digit2',
    key: '2',
    keyShift: '"',
    keySpecial: ''
  }, {
    code: 'Digit3',
    key: '3',
    keyShift: '№',
    keySpecial: ''
  }, {
    code: 'Digit4',
    key: '4',
    keyShift: ';',
    keySpecial: ''
  }, {
    code: 'Digit5',
    key: '5',
    keyShift: '%',
    keySpecial: ''
  }, {
    code: 'Digit6',
    key: '6',
    keyShift: ':',
    keySpecial: ''
  }, {
    code: 'Digit7',
    key: '7',
    keyShift: '?',
    keySpecial: ''
  }, {
    code: 'Digit8',
    key: '8',
    keyShift: '*',
    keySpecial: ''
  }, {
    code: 'Digit9',
    key: '9',
    keyShift: '(',
    keySpecial: ''
  }, {
    code: 'Digit0',
    key: '0',
    keyShift: ')',
    keySpecial: ''
  }, {
    code: 'Minus',
    key: '-',
    keyShift: '_',
    keySpecial: ''
  }, {
    code: 'Equal',
    key: '=',
    keyShift: '+',
    keySpecial: ''
  }, {
    code: 'Backspace',
    key: 'Backspace',
    keyShift: 'Backspace',
    keySpecial: 'Backspace'
  }], [{
    code: 'Tab',
    key: 'Tab',
    keyShift: 'Tab',
    keySpecial: 'Tab'
  }, {
    code: 'KeyQ',
    key: 'й',
    keyShift: 'Й',
    keySpecial: ''
  }, {
    code: 'KeyW',
    key: 'ц',
    keyShift: 'Ц',
    keySpecial: ''
  }, {
    code: 'KeyE',
    key: 'у',
    keyShift: 'У',
    keySpecial: ''
  }, {
    code: 'KeyR',
    key: 'к',
    keyShift: 'К',
    keySpecial: ''
  }, {
    code: 'KeyT',
    key: 'е',
    keyShift: 'Е',
    keySpecial: ''
  }, {
    code: 'KeyY',
    key: 'н',
    keyShift: 'Н',
    keySpecial: ''
  }, {
    code: 'KeyU',
    key: 'г',
    keyShift: 'Г',
    keySpecial: ''
  }, {
    code: 'KeyI',
    key: 'ш',
    keyShift: 'Ш',
    keySpecial: ''
  }, {
    code: 'KeyO',
    key: 'щ',
    keyShift: 'Щ',
    keySpecial: ''
  }, {
    code: 'KeyP',
    key: 'з',
    keyShift: 'З',
    keySpecial: ''
  }, {
    code: 'BracketLeft',
    key: 'х',
    keyShift: 'Х',
    keySpecial: ''
  }, {
    code: 'BracketRight',
    key: 'ъ',
    keyShift: 'Ъ',
    keySpecial: ''
  }, {
    code: 'Delete',
    key: 'Delete',
    keyShift: 'Delete',
    keySpecial: 'Delete'
  }], [{
    code: 'CapsLock',
    key: 'CapsLock',
    keyShift: 'CapsLock',
    keySpecial: 'CapsLock'
  }, {
    code: 'KeyA',
    key: 'ф',
    keyShift: 'Ф',
    keySpecial: ''
  }, {
    code: 'KeyS',
    key: 'ы',
    keyShift: 'Ы',
    keySpecial: ''
  }, {
    code: 'KeyD',
    key: 'в',
    keyShift: 'В',
    keySpecial: ''
  }, {
    code: 'KeyF',
    key: 'а',
    keyShift: 'А',
    keySpecial: ''
  }, {
    code: 'KeyG',
    key: 'п',
    keyShift: 'П',
    keySpecial: ''
  }, {
    code: 'KeyH',
    key: 'р',
    keyShift: 'Р',
    keySpecial: ''
  }, {
    code: 'KeyJ',
    key: 'о',
    keyShift: 'О',
    keySpecial: ''
  }, {
    code: 'KeyK',
    key: 'л',
    keyShift: 'Л',
    keySpecial: ''
  }, {
    code: 'KeyL',
    key: 'д',
    keyShift: 'Д',
    keySpecial: ''
  }, {
    code: 'Semicolon',
    key: 'ж',
    keyShift: 'Ж',
    keySpecial: ''
  }, {
    code: 'Quote',
    key: 'э',
    keyShift: 'Э',
    keySpecial: ''
  }, {
    code: 'Enter',
    key: 'Enter',
    keyShift: 'Enter',
    keySpecial: 'Enter'
  }], [{
    code: 'ShiftLeft',
    key: 'Shift',
    keyShift: 'Shift',
    keySpecial: 'ShiftLeft'
  }, {
    code: 'IntlBackslash',
    key: '\\',
    keyShift: '/',
    keySpecial: ''
  }, {
    code: 'KeyZ',
    key: 'я',
    keyShift: 'Я',
    keySpecial: ''
  }, {
    code: 'KeyX',
    key: 'ч',
    keyShift: 'Ч',
    keySpecial: ''
  }, {
    code: 'KeyC',
    key: 'с',
    keyShift: 'С',
    keySpecial: ''
  }, {
    code: 'KeyV',
    key: 'м',
    keyShift: 'М',
    keySpecial: ''
  }, {
    code: 'KeyB',
    key: 'и',
    keyShift: 'И',
    keySpecial: ''
  }, {
    code: 'KeyN',
    key: 'т',
    keyShift: 'Т',
    keySpecial: ''
  }, {
    code: 'KeyM',
    key: 'ь',
    keyShift: 'Ь',
    keySpecial: ''
  }, {
    code: 'Comma',
    key: 'б',
    keyShift: 'Б',
    keySpecial: ''
  }, {
    code: 'Period',
    key: 'ю',
    keyShift: 'Ю',
    keySpecial: ''
  }, {
    code: 'Slash',
    key: '.',
    keyShift: ',',
    keySpecial: ''
  }, {
    code: 'ArrowUp',
    key: '▲',
    keyShift: '▲',
    keySpecial: ''
  }, {
    code: 'ShiftRight',
    key: 'Shift',
    keyShift: 'Shift',
    keySpecial: 'ShiftRight'
  }], [{
    code: 'ControlLeft',
    key: 'Ctrl',
    keyShift: 'Ctrl',
    keySpecial: 'CtrlLeft'
  }, {
    code: 'MetaLeft',
    key: 'Win',
    keyShift: 'Win',
    keySpecial: 'Win'
  }, {
    code: 'AltLeft',
    key: 'Alt',
    keyShift: 'Alt',
    keySpecial: 'AltLeft'
  }, {
    code: 'Space',
    key: ' ',
    keyShift: ' ',
    keySpecial: 'Space'
  }, {
    code: 'AltRight',
    key: 'Alt',
    keyShift: 'Alt',
    keySpecial: 'AltRight'
  }, {
    code: 'ControlRight',
    key: 'Ctrl',
    keyShift: 'Ctrl',
    keySpecial: 'CtrlRight'
  }, {
    code: 'Language',
    key: 'RU',
    keyShift: 'RU',
    keySpecial: 'Language'
  }, {
    code: 'ArrowLeft',
    key: '◄',
    keyShift: '◄',
    keySpecial: ''
  }, {
    code: 'ArrowDown',
    key: '▼',
    keyShift: '▼',
    keySpecial: ''
  }, {
    code: 'ArrowRight',
    key: '►',
    keyShift: '►',
    keySpecial: ''
  }]]
};


/***/ }),

/***/ "./src/js/events/event-listeners.js":
/*!******************************************!*\
  !*** ./src/js/events/event-listeners.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/localstorage-constants */ "./src/js/constants/localstorage-constants.js");
/* harmony import */ var _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/class-names-constants */ "./src/js/constants/class-names-constants.js");
/* harmony import */ var _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/key-special-constants */ "./src/js/constants/key-special-constants.js");
/* harmony import */ var _constants_id_names_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/id-names-constants */ "./src/js/constants/id-names-constants.js");
/* harmony import */ var _constants_keyboard_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/keyboard-languages */ "./src/js/constants/keyboard-languages.js");
/* harmony import */ var _constants_attributes_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/attributes-constants */ "./src/js/constants/attributes-constants.js");






var eventListeners = {
  unpressShift: function unpressShift() {
    document.querySelectorAll(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL_UNSHIFT)).forEach(function (symbol) {
      symbol.classList.remove(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE);
    });
    document.querySelectorAll(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL_SHIFT)).forEach(function (symbol) {
      symbol.classList.add(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE);
    });
  },
  pressShift: function pressShift() {
    document.querySelectorAll(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL_UNSHIFT)).forEach(function (symbol) {
      symbol.classList.add(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE);
    });
    document.querySelectorAll(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYMBOL_SHIFT)).forEach(function (symbol) {
      symbol.classList.remove(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE);
    });
  },
  changeText: function changeText(e) {
    var pozitionRemoved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var numberRemoved = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var pastedSymbol = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var deltaPozition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    e.preventDefault();
    var textarea = document.querySelector("#".concat(_constants_id_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].TEXTAREA));
    var pozition = textarea.selectionStart;
    var text = document.querySelector("#".concat(_constants_id_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].TEXTAREA)).value.split('');
    text.splice(textarea.selectionStart + pozitionRemoved, numberRemoved, pastedSymbol);
    textarea.value = text.join('');
    pozition += deltaPozition;
    textarea.selectionStart = pozition;
    textarea.selectionEnd = pozition;
  },
  changeLanguage: function changeLanguage(e) {
    e.preventDefault();
    localStorage.setItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].LANGUAGE, _constants_keyboard_languages__WEBPACK_IMPORTED_MODULE_4__["default"][localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].LANGUAGE)]);
    document.querySelector(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].KEYBOARD)).remove();
    window.onload();
  },
  doSpecialKey: function doSpecialKey(e) {
    switch (e.key) {
      case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].BACKSPACE:
        {
          eventListeners.changeText(e, -1, 1, '', -1);
          break;
        }

      case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].DELETE:
        {
          eventListeners.changeText(e, 0, 1, '', 0);
          break;
        }

      case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].TAB:
        {
          eventListeners.changeText(e, 0, 0, '\t', 1);
          break;
        }

      case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].ENTER:
        {
          eventListeners.changeText(e, 0, 0, '\n', 1);
          break;
        }

      case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].SHIFT:
        if (localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED) === 'false') {
          eventListeners.pressShift();
        } else {
          eventListeners.unpressShift();
        }

        break;

      case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].ALT:
        e.preventDefault();

        if (e.ctrlKey) {
          eventListeners.changeLanguage(e);
        }

        break;

      default:
        break;
    }
  },
  // button events
  buttonKeyDown: function buttonKeyDown(e) {
    var target = document.querySelector(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON, "[").concat(_constants_attributes_constants__WEBPACK_IMPORTED_MODULE_5__["default"].DATA_CODE, " = ").concat(e.code, "]"));
    var key = '';

    if (!target) {
      return;
    }

    target.childNodes.forEach(function (ch) {
      if (!ch.classList.contains(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE)) {
        key = ch.textContent;
      }
    });

    if (e.code !== _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAPSLOCK) {
      target.classList.add(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].PRESSED);
    }

    var textarea = document.querySelector("#".concat(_constants_id_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].TEXTAREA));

    if (!target.classList.contains(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON_SPECIAL)) {
      textarea.blur();
      eventListeners.changeText(e, 0, 0, key, 1);
    } else {
      eventListeners.doSpecialKey(e);
    }
  },
  buttonKeyUp: function buttonKeyUp(e) {
    var target = document.querySelector(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON, "[").concat(_constants_attributes_constants__WEBPACK_IMPORTED_MODULE_5__["default"].DATA_CODE, " = ").concat(e.code, "]"));

    if (!target) {
      return;
    }

    if (e.code !== _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAPSLOCK) {
      target.classList.remove(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].PRESSED);
    }

    if (target.classList.contains(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON_SPECIAL)) {
      switch (e.key) {
        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].SHIFT:
          if (localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED) === 'true') {
            eventListeners.pressShift();
          } else {
            eventListeners.unpressShift();
          }

          break;

        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAPSLOCK:
          if (localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED) === 'false') {
            eventListeners.pressShift();
            localStorage.setItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED, 'true');
          } else {
            eventListeners.unpressShift();
            localStorage.setItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED, 'false');
          }

          document.querySelector(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON_CAPSLOCK)).classList.toggle(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].PRESSED);
          break;

        default:
          break;
      }
    }
  },
  // mouse events..
  mouseKeyUp: function mouseKeyUp(e) {
    e.preventDefault();
    var target = e.currentTarget;
    var key = '';

    if (!target) {
      return;
    }

    target.childNodes.forEach(function (ch) {
      if (!ch.classList.contains(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE)) {
        key = ch.textContent;
      }
    });

    if (target.getAttribute(_constants_attributes_constants__WEBPACK_IMPORTED_MODULE_5__["default"].DATA_CODE) !== _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAPSLOCK) {
      target.classList.remove(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].PRESSED);
    }

    if (target.classList.contains(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON_SPECIAL)) {
      switch (key) {
        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].SHIFT:
          if (localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED) !== 'false') {
            eventListeners.pressShift();
          } else {
            eventListeners.unpressShift();
          }

          break;

        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAPSLOCK:
          if (localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED) === 'false') {
            eventListeners.pressShift();
            localStorage.setItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED, 'true');
          } else {
            eventListeners.unpressShift();
            localStorage.setItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED, 'false');
          }

          break;

        default:
          break;
      }
    }
  },
  mouseKeyOut: function mouseKeyOut(e) {
    var target = e.currentTarget;

    if (!target) {
      return;
    }

    if (target.getAttribute(_constants_attributes_constants__WEBPACK_IMPORTED_MODULE_5__["default"].DATA_CODE) !== _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAPSLOCK) {
      target.classList.remove(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].PRESSED);
    }
  },
  mouseKeyDown: function mouseKeyDown(e) {
    e.preventDefault();
    var target = e.currentTarget;
    var key = '';

    if (!target) {
      return;
    }

    target.childNodes.forEach(function (ch) {
      if (!ch.classList.contains(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE)) {
        key = ch.textContent;
      }
    });

    if (target.getAttribute(_constants_attributes_constants__WEBPACK_IMPORTED_MODULE_5__["default"].DATA_CODE) !== _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CAPSLOCK) {
      target.classList.add(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].PRESSED);
    } else {
      target.classList.toggle(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].PRESSED);
    }

    if (!target.classList.contains(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON_SPECIAL)) {
      eventListeners.changeText(e, 0, 0, key, 1);
    } else {
      switch (key) {
        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].BACKSPACE:
          {
            eventListeners.changeText(e, -1, 1, '', -1);
            break;
          }

        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].TAB:
          {
            eventListeners.changeText(e, 0, 0, '\t', 1);
            break;
          }

        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].DELETE:
          {
            eventListeners.changeText(e, 0, 1, '', 0);
            break;
          }

        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].ENTER:
          {
            eventListeners.changeText(e, 0, 0, '\n', 1);
            break;
          }

        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].SHIFT:
          if (localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_0__["default"].CAPSLOCKPRESSED) === 'false') {
            eventListeners.pressShift();
          } else {
            eventListeners.unpressShift();
          }

          break;

        case _constants_key_special_constants__WEBPACK_IMPORTED_MODULE_2__["default"].ALT:
          if (e.shiftKey) {
            eventListeners.changeLanguage(e);
            document.querySelectorAll(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON)).forEach(function (btn) {
              return btn.addEventListener('mousedown', eventListeners.mouseKeyDown);
            });
            document.querySelectorAll(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON)).forEach(function (btn) {
              return btn.addEventListener('mouseup', eventListeners.mouseKeyUp);
            });
            document.querySelectorAll(".".concat(_constants_class_names_constants__WEBPACK_IMPORTED_MODULE_1__["default"].BUTTON)).forEach(function (btn) {
              return btn.addEventListener('mouseout', eventListeners.mouseKeyOut);
            });
          }

          break;

        default:
          break;
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (eventListeners);

/***/ }),

/***/ "./src/js/helpers/utils.js":
/*!*********************************!*\
  !*** ./src/js/helpers/utils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDOMElement; });
function createDOMElement(type) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var elem = document.createElement(type);
  properties.forEach(function (property) {
    elem[property.name] = property.value;
  });
  attributes.forEach(function (attribute) {
    elem.setAttribute(attribute.name, attribute.value);
  });
  return elem;
}

/***/ }),

/***/ "./src/js/keyboard/keyboard-elements.js":
/*!**********************************************!*\
  !*** ./src/js/keyboard/keyboard-elements.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ "./src/js/helpers/utils.js");
/* harmony import */ var _constants_attributes_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/attributes-constants */ "./src/js/constants/attributes-constants.js");
/* harmony import */ var _constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/localstorage-constants */ "./src/js/constants/localstorage-constants.js");
/* harmony import */ var _constants_id_names_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/id-names-constants */ "./src/js/constants/id-names-constants.js");
/* harmony import */ var _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/class-names-constants */ "./src/js/constants/class-names-constants.js");
/* harmony import */ var _constants_string_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/string-constants */ "./src/js/constants/string-constants.js");
/* harmony import */ var _components_Key__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Key */ "./src/js/components/Key.js");
/* harmony import */ var _data_Data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/Data */ "./src/js/data/Data.js");








var keyboardElements = {
  renderWrapper: function renderWrapper() {
    return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', [{
      name: 'className',
      value: _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_4__["default"].WRAPPER
    }]);
  },
  renderTitle: function renderTitle() {
    return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', [{
      name: 'className',
      value: _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_4__["default"].TITLE
    }, {
      name: 'innerHTML',
      value: _constants_string_constants__WEBPACK_IMPORTED_MODULE_5__["default"].TITLE
    }]);
  },
  renderTextarea: function renderTextarea() {
    return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('textarea', [{
      name: 'id',
      value: _constants_id_names_constants__WEBPACK_IMPORTED_MODULE_3__["default"].TEXTAREA
    }], [{
      name: _constants_attributes_constants__WEBPACK_IMPORTED_MODULE_1__["default"].ROWS,
      value: '15'
    }]);
  },
  renderInstruction: function renderInstruction() {
    return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', [{
      name: 'className',
      value: _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_4__["default"].INSTRUCTION
    }, {
      name: 'innerHTML',
      value: _constants_string_constants__WEBPACK_IMPORTED_MODULE_5__["default"].INSTRUCTION
    }]);
  },
  // Keyboard render
  renderRows: function renderRows(dataKeyboard) {
    if (!localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_2__["default"].LANGUAGE)) {
      localStorage.setItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_2__["default"].LANGUAGE, 'eng');
    }

    var dataKeys = dataKeyboard[localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_2__["default"].LANGUAGE)];
    var rows = [];
    dataKeys.forEach(function (dataRow) {
      var row = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('section', [{
        name: 'className',
        value: _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_4__["default"].ROW
      }]);
      dataRow.forEach(function (dataKey) {
        var key = new _components_Key__WEBPACK_IMPORTED_MODULE_6__["default"](dataKey);
        var button = key.generateKey();
        row.append(button);
      });
      rows.push(row);
    });
    return rows;
  },
  renderKeyBoard: function renderKeyBoard() {
    var keyboard = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('section', [{
      name: 'className',
      value: _constants_class_names_constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEYBOARD
    }]);
    var rows = keyboardElements.renderRows(_data_Data__WEBPACK_IMPORTED_MODULE_7__["default"]);
    rows.forEach(function (row) {
      keyboard.append(row);
    });
    return keyboard;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (keyboardElements);

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map