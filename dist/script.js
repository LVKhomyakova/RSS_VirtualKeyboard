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
/* harmony import */ var _js_Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Key */ "./src/js/Key.js");
/* harmony import */ var _js_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Data */ "./src/js/Data.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var capslockPressed = false;

window.onload = function () {
  var wrapper = renderWrapper();
  renderTextarea(wrapper);

  if (_js_Data__WEBPACK_IMPORTED_MODULE_1__["data"]) {
    wrapper.append(renderKeyBoard());
  } //add listeners


  document.addEventListener('keydown', buttonKeyDown);
  document.addEventListener('keyup', buttonKeyUp);
  addListeners();
};

var renderWrapper = function renderWrapper() {
  var wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  document.body.append(wrapper);
  return wrapper;
}; //textarea rendering


var renderTextarea = function renderTextarea(wrapper) {
  var textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  wrapper.append(textarea);
}; //Keyboard rendering


var renderKeyBoard = function renderKeyBoard() {
  var keyboard = document.createElement('section');
  keyboard.className = 'keyboard';
  var rows = renderRows(_js_Data__WEBPACK_IMPORTED_MODULE_1__["data"]);
  rows.forEach(function (row) {
    keyboard.append(row);
  });
  return keyboard;
};

var renderRows = function renderRows(data) {
  var dataKeys = data[localStorage.getItem('language')];
  var rows = [];
  dataKeys.forEach(function (dataRow) {
    var row = document.createElement('section');
    row.className = 'row';
    dataRow.forEach(function (dataKey) {
      var key = new _js_Key__WEBPACK_IMPORTED_MODULE_0__["Key"](dataKey);
      var button = key.generateKey();
      row.append(button);
    });
    rows.push(row);
  });
  return rows;
}; //keuboard events..


var buttonKeyDown = function buttonKeyDown(e) {
  var target = document.querySelector(".button[data-code = ".concat(e.code, "]"));
  var key = '';
  console.log(target);

  var _iterator = _createForOfIteratorHelper(target.childNodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ch = _step.value;

      if (!ch.classList.contains('hide')) {
        key = ch.textContent;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (e.code !== 'CapsLock') target.classList.add('pressed');
  var textarea = document.querySelector('#textarea');

  if (!target.classList.contains('button_special')) {
    textarea.value += key;
  } else {
    doSpecialKey(e);
  }
};

var doSpecialKey = function doSpecialKey(e) {
  var textarea = document.querySelector('#textarea');

  switch (e.key) {
    case 'Backspace':
      textarea.value = textarea.value.slice(0, -1);
      break;

    case 'Tab':
      e.preventDefault();
      textarea.value += '\t';
      break;

    case 'Enter':
      textarea.value += '\n';
      break;

    case 'Shift':
      if (!capslockPressed) pressShift();else unpressShift();
      break;

    case 'Alt':
      e.preventDefault();
      break;

    default:
      break;
  }
};

var buttonKeyUp = function buttonKeyUp(e) {
  var target = document.querySelector(".button[data-code = ".concat(e.code, "]"));
  if (e.code !== 'CapsLock') target.classList.remove('pressed');

  if (target.classList.contains('button_special')) {
    switch (e.key) {
      case 'Shift':
        if (capslockPressed) pressShift();else unpressShift();
        break;

      case 'CapsLock':
        if (!capslockPressed) {
          pressShift();
          capslockPressed = true;
        } else {
          unpressShift();
          capslockPressed = false;
        }

        document.querySelector('.button_capslock').classList.toggle('pressed');
        break;

      default:
        break;
    }
  }
};

var unpressShift = function unpressShift() {
  document.querySelectorAll('.symbol_unshift').forEach(function (symbol) {
    symbol.classList.remove('hide');
  });
  document.querySelectorAll('.symbol_shift').forEach(function (symbol) {
    symbol.classList.add('hide');
  });
};

var pressShift = function pressShift() {
  document.querySelectorAll('.symbol_unshift').forEach(function (symbol) {
    symbol.classList.add('hide');
  });
  document.querySelectorAll('.symbol_shift').forEach(function (symbol) {
    symbol.classList.remove('hide');
  });
}; //mouse events..


var mouseKeyDown = function mouseKeyDown(e) {
  e.preventDefault();
  var target = e.currentTarget;
  var key = '';

  var _iterator2 = _createForOfIteratorHelper(target.childNodes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var ch = _step2.value;

      if (!ch.classList.contains('hide')) {
        key = ch.textContent;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if (target.getAttribute('data-code') !== 'CapsLock') target.classList.add('pressed');
  var textarea = document.querySelector('#textarea');

  if (!target.classList.contains('button_special')) {
    textarea.value += key;
  } else {
    switch (key) {
      case 'Backspace':
        textarea.value = textarea.value.slice(0, -1);
        break;

      case 'Tab':
        textarea.value += '\t';
        break;

      case 'Delete':
        var pozition = textarea.selectionStart;
        var text = textarea.value;
        var arr = text.split('');
        arr.splice(pozition, 1);
        textarea.value = arr.join('');
        textarea.selectionStart = pozition;
        textarea.selectionEnd = pozition;
        break;

      case 'Enter':
        textarea.value += '\n';
        break;

      case 'Shift':
        document.querySelectorAll('.symbol_unshift').forEach(function (symbol) {
          symbol.classList.add('hide');
        });
        document.querySelectorAll('.symbol_shift').forEach(function (symbol) {
          symbol.classList.remove('hide');
        });
        break;

      case 'Alt':
        break;

      default:
        break;
    }
  }
};

var mouseKeyUp = function mouseKeyUp(e) {
  e.preventDefault();
  var target = e.currentTarget;
  var key = '';

  var _iterator3 = _createForOfIteratorHelper(target.childNodes),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var ch = _step3.value;

      if (!ch.classList.contains('hide')) {
        key = ch.textContent;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if (target.getAttribute('data-code') !== 'CapsLock') target.classList.remove('pressed');

  if (target.classList.contains('button_special')) {
    switch (key) {
      case 'Shift':
        document.querySelectorAll('.symbol_unshift').forEach(function (symbol) {
          symbol.classList.remove('hide');
        });
        document.querySelectorAll('.symbol_shift').forEach(function (symbol) {
          symbol.classList.add('hide');
        });
        break;

      case 'CapsLock':
        document.querySelectorAll('.symbol_unshift').forEach(function (symbol) {
          symbol.classList.toggle('hide');
        });
        document.querySelectorAll('.symbol_shift').forEach(function (symbol) {
          symbol.classList.toggle('hide');
        });
        document.querySelector('.button_capslock').classList.toggle('pressed');
        break;

      default:
        break;
    }
  }
}; //change Language


var changeLanguage = function changeLanguage(e) {
  e.preventDefault();

  if (localStorage.getItem('language') === 'eng') {
    localStorage.setItem('language', 'ru');
  } else {
    localStorage.setItem('language', 'eng');
  }

  document.querySelector('.keyboard').remove();
  var wrapper = document.querySelector('.wrapper');

  if (_js_Data__WEBPACK_IMPORTED_MODULE_1__["data"]) {
    wrapper.append(renderKeyBoard());
  }

  addListeners();
};

var addListeners = function addListeners() {
  document.querySelectorAll('.button').forEach(function (btn) {
    return btn.addEventListener('mousedown', mouseKeyDown);
  });
  document.querySelectorAll('.button').forEach(function (btn) {
    return btn.addEventListener('mouseup', mouseKeyUp);
  });
  document.querySelector('.button_language').addEventListener('click', changeLanguage);
};

/***/ }),

/***/ "./src/js/Data.js":
/*!************************!*\
  !*** ./src/js/Data.js ***!
  \************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
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
    keyShift: 'ж',
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

/***/ "./src/js/Key.js":
/*!***********************!*\
  !*** ./src/js/Key.js ***!
  \***********************/
/*! exports provided: Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
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
      var button = document.createElement('div');
      button.className = "button";
      button.setAttribute('data-code', this.code);

      if (this.keySpecial) {
        button.classList.add("button_".concat(this.keySpecial.toLowerCase()), 'button_special');
      } else {
        button.classList.add("button_key");
      }

      if (this.keySpecial === 'Space') button.classList.remove('button_special');
      template += "<span class=\"symbol symbol_unshift\">".concat(this.key, "</span>");
      template += "<span class=\"symbol symbol_shift hide\">".concat(this.keyShift, "</span>");
      button.innerHTML = template;
      return button;
    }
  }]);

  return Key;
}();

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