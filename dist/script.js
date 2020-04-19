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
/* harmony import */ var _js_components_Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/Key */ "./src/js/components/Key.js");



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
}; // render wrapper


var renderWrapper = function renderWrapper() {
  var wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  document.body.append(wrapper);
  return wrapper;
}; // textarea rendering


var renderTextarea = function renderTextarea(wrapper) {
  var textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  textarea.setAttribute('rows', '15');
  wrapper.append(textarea);
}; // Keyboard rendering


var renderRows = function renderRows(dataKeyboard) {
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'eng');
  }

  var dataKeys = dataKeyboard[localStorage.getItem('language')];
  var rows = [];
  dataKeys.forEach(function (dataRow) {
    var row = document.createElement('section');
    row.className = 'row';
    dataRow.forEach(function (dataKey) {
      var key = new _js_components_Key__WEBPACK_IMPORTED_MODULE_1__["default"](dataKey);
      var button = key.generateKey();
      row.append(button);
    });
    rows.push(row);
  });
  return rows;
};

var renderKeyBoard = function renderKeyBoard() {
  var keyboard = document.createElement('section');
  keyboard.className = 'keyboard';
  var rows = renderRows(_js_data_Data__WEBPACK_IMPORTED_MODULE_0__["default"]);
  rows.forEach(function (row) {
    keyboard.append(row);
  });
  return keyboard;
}; //---------------------------------------------
// change Language


var changeLanguage = function changeLanguage(e) {
  e.preventDefault();

  if (localStorage.getItem('language') === 'eng') {
    localStorage.setItem('language', 'ru');
  } else {
    localStorage.setItem('language', 'eng');
  }

  document.querySelector('.keyboard').remove();
  window.onload();
}; // mouse events..


var mouseKeyUp = function mouseKeyUp(e) {
  e.preventDefault();
  var target = e.currentTarget;
  var key = '';
  if (!target) return;
  target.childNodes.forEach(function (ch) {
    if (!ch.classList.contains('hide')) {
      key = ch.textContent;
    }
  });
  if (target.getAttribute('data-code') !== 'CapsLock') target.classList.remove('pressed');

  if (target.classList.contains('button_special')) {
    switch (key) {
      case 'Shift':
        if (localStorage.getItem('capslockPressed') !== 'false') {
          pressShift();
        } else {
          unpressShift();
        }

        break;

      case 'CapsLock':
        if (localStorage.getItem('capslockPressed') === 'false') {
          pressShift();
          localStorage.setItem('capslockPressed', 'true');
        } else {
          unpressShift();
          localStorage.setItem('capslockPressed', 'false');
        }

        break;

      default:
        break;
    }
  }
};

var mouseKeyOut = function mouseKeyOut(e) {
  var target = e.currentTarget;
  if (!target) return;
  if (target.getAttribute('data-code') !== 'CapsLock') target.classList.remove('pressed');
};

var mouseKeyDown = function mouseKeyDown(e) {
  e.preventDefault();
  var target = e.currentTarget;
  var key = '';
  if (!target) return;
  target.childNodes.forEach(function (ch) {
    if (!ch.classList.contains('hide')) {
      key = ch.textContent;
    }
  });

  if (target.getAttribute('data-code') !== 'CapsLock') {
    target.classList.add('pressed');
  } else {
    target.classList.toggle('pressed');
  }

  var textarea = document.querySelector('#textarea');

  if (!target.classList.contains('button_special')) {
    var pozition = textarea.selectionStart;
    var text = textarea.value;
    var arr = text.split('');
    arr.splice(pozition, 0, key);
    textarea.value = arr.join('');
    pozition += 1;
    textarea.selectionStart = pozition;
    textarea.selectionEnd = pozition;
  } else {
    switch (key) {
      case 'Backspace':
        {
          var _pozition = textarea.selectionStart;
          var _text = textarea.value;

          var _arr = _text.split('');

          _arr.splice(_pozition - 1, 1);

          textarea.value = _arr.join('');
          _pozition -= 1;
          textarea.selectionStart = _pozition;
          textarea.selectionEnd = _pozition;
          break;
        }

      case 'Tab':
        {
          var _pozition2 = textarea.selectionStart;
          var _text2 = textarea.value;

          var _arr2 = _text2.split('');

          _arr2.splice(_pozition2, 0, '\t');

          textarea.value = _arr2.join('');
          _pozition2 += 1;
          textarea.selectionStart = _pozition2;
          textarea.selectionEnd = _pozition2;
          break;
        }

      case 'Delete':
        {
          var _pozition3 = textarea.selectionStart;
          var _text3 = textarea.value;

          var _arr3 = _text3.split('');

          _arr3.splice(_pozition3, 1);

          textarea.value = _arr3.join('');
          textarea.selectionStart = _pozition3;
          textarea.selectionEnd = _pozition3;
          break;
        }

      case 'Enter':
        {
          var _pozition4 = textarea.selectionStart;
          var _text4 = textarea.value;

          var _arr4 = _text4.split('');

          _arr4.splice(_pozition4, 0, '\n');

          textarea.value = _arr4.join('');
          _pozition4 += 1;
          textarea.selectionStart = _pozition4;
          textarea.selectionEnd = _pozition4;
          break;
        }

      case 'Shift':
        if (localStorage.getItem('capslockPressed') === 'false') {
          pressShift();
        } else {
          unpressShift();
        }

        break;

      case 'Alt':
        if (e.shiftKey) {
          changeLanguage(e);
          document.querySelectorAll('.button').forEach(function (btn) {
            return btn.addEventListener('mousedown', mouseKeyDown);
          });
          document.querySelectorAll('.button').forEach(function (btn) {
            return btn.addEventListener('mouseup', mouseKeyUp);
          });
          document.querySelectorAll('.button').forEach(function (btn) {
            return btn.addEventListener('mouseout', mouseKeyOut);
          });
        }

        break;

      default:
        break;
    }
  }
}; // keyboard events..


var doSpecialKey = function doSpecialKey(e) {
  var textarea = document.querySelector('#textarea');

  switch (e.key) {
    case 'Backspace':
      {
        e.preventDefault();
        var pozition = textarea.selectionStart;
        var text = textarea.value;
        var arr = text.split('');
        arr.splice(pozition - 1, 1);
        textarea.value = arr.join('');
        pozition -= 1;
        textarea.selectionStart = pozition;
        textarea.selectionEnd = pozition;
        break;
      }

    case 'Delete':
      {
        e.preventDefault();
        var _pozition5 = textarea.selectionStart;
        var _text5 = textarea.value;

        var _arr5 = _text5.split('');

        _arr5.splice(_pozition5, 1);

        textarea.value = _arr5.join('');
        textarea.selectionStart = _pozition5;
        textarea.selectionEnd = _pozition5;
        break;
      }

    case 'Tab':
      {
        e.preventDefault();
        var _pozition6 = textarea.selectionStart;
        var _text6 = textarea.value;

        var _arr6 = _text6.split('');

        _arr6.splice(_pozition6, 0, '\t');

        textarea.value = _arr6.join('');
        _pozition6 += 1;
        textarea.selectionStart = _pozition6;
        textarea.selectionEnd = _pozition6;
        break;
      }

    case 'Enter':
      {
        var _pozition7 = textarea.selectionStart;
        var _text7 = textarea.value;

        var _arr7 = _text7.split('');

        _arr7.splice(_pozition7, 0, '\n');

        textarea.value = _arr7.join('');
        _pozition7 += 1;
        textarea.selectionStart = _pozition7;
        textarea.selectionEnd = _pozition7;
        break;
      }

    case 'Shift':
      if (localStorage.getItem('capslockPressed') === 'false') {
        pressShift();
      } else {
        unpressShift();
      }

      break;

    case 'Alt':
      e.preventDefault();

      if (e.ctrlKey) {
        changeLanguage(e);
      }

      break;

    default:
      break;
  }
};

var buttonKeyDown = function buttonKeyDown(e) {
  var target = document.querySelector(".button[data-code = ".concat(e.code, "]"));
  var key = '';

  if (!target) {
    return;
  }

  target.childNodes.forEach(function (ch) {
    if (!ch.classList.contains('hide')) {
      key = ch.textContent;
    }
  });

  if (e.code !== 'CapsLock') {
    target.classList.add('pressed');
  }

  var textarea = document.querySelector('#textarea');

  if (!target.classList.contains('button_special')) {
    textarea.blur();
    var pozition = textarea.selectionStart;
    var text = textarea.value;
    var arr = text.split('');
    arr.splice(pozition, 0, key);
    textarea.value = arr.join('');
    pozition += 1;
    textarea.selectionStart = pozition;
    textarea.selectionEnd = pozition;
  } else {
    doSpecialKey(e);
  }
};

var buttonKeyUp = function buttonKeyUp(e) {
  var target = document.querySelector(".button[data-code = ".concat(e.code, "]"));

  if (!target) {
    return;
  }

  if (e.code !== 'CapsLock') target.classList.remove('pressed');

  if (target.classList.contains('button_special')) {
    switch (e.key) {
      case 'Shift':
        if (localStorage.getItem('capslockPressed') === 'true') pressShift();else unpressShift();
        break;

      case 'CapsLock':
        if (localStorage.getItem('capslockPressed') === 'false') {
          pressShift();
          localStorage.setItem('capslockPressed', 'true');
        } else {
          unpressShift();
          localStorage.setItem('capslockPressed', 'false');
        }

        document.querySelector('.button_capslock').classList.toggle('pressed');
        break;

      default:
        break;
    }
  }
};

var addListeners = function addListeners() {
  document.querySelectorAll('.button').forEach(function (btn) {
    return btn.addEventListener('mousedown', mouseKeyDown);
  });
  document.querySelectorAll('.button').forEach(function (btn) {
    return btn.addEventListener('mouseup', mouseKeyUp);
  });
  document.querySelectorAll('.button').forEach(function (btn) {
    return btn.addEventListener('mouseout', mouseKeyOut);
  });
};

window.onload = function () {
  localStorage.setItem('capslockPressed', 'false');

  if (!document.querySelector('.wrapper')) {
    var _wrapper = renderWrapper(); // render title


    var title = document.createElement('h1');
    title.innerHTML = 'Virtual Keyboard (by LVKhomyakova)';
    title.style.color = '#fff';

    _wrapper.append(title);

    renderTextarea(_wrapper); // render instruction

    var instruction = document.createElement('h2');
    instruction.innerHTML = 'Сhange language (for Windows): Ctrl + Alt or ENG/RU';
    instruction.style.color = '#ffffff';

    _wrapper.append(instruction);
  }

  var wrapper = document.querySelector('.wrapper');

  if (_js_data_Data__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    wrapper.append(renderKeyBoard());
  } // add listeners


  document.addEventListener('keydown', buttonKeyDown);
  document.addEventListener('keyup', buttonKeyUp);
  document.querySelector('.button_language').addEventListener('click', changeLanguage);
  addListeners();
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
  SYMBOL: 'symbol',
  SYMBOL_UNSHIFT: 'symbol_unshift',
  SYMBOL_SHIFT: 'symbol_shift',
  HIDE: 'hide'
};
/* harmony default export */ __webpack_exports__["default"] = (classNamesConstants);

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
  SPACE: 'Space'
};
/* harmony default export */ __webpack_exports__["default"] = (keySpecialConstants);

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