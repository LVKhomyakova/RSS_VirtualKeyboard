import localStorageConstants from '../constants/localstorage-constants';
import classNamesConstants from '../constants/class-names-constants';
import keySpecialConstants from '../constants/key-special-constants';
import idNamesConstants from '../constants/id-names-constants';
import nextKeyboardLanguage from '../constants/keyboard-languages';
import attributes from '../constants/attributes-constants';

const eventListeners = {
  unpressShift() {
    document.querySelectorAll(`.${classNamesConstants.SYMBOL_UNSHIFT}`).forEach((symbol) => {
      symbol.classList.remove(classNamesConstants.HIDE);
    });
    document.querySelectorAll(`.${classNamesConstants.SYMBOL_SHIFT}`).forEach((symbol) => {
      symbol.classList.add(classNamesConstants.HIDE);
    });
  },
  pressShift() {
    document.querySelectorAll(`.${classNamesConstants.SYMBOL_UNSHIFT}`).forEach((symbol) => {
      symbol.classList.add(classNamesConstants.HIDE);
    });
    document.querySelectorAll(`.${classNamesConstants.SYMBOL_SHIFT}`).forEach((symbol) => {
      symbol.classList.remove(classNamesConstants.HIDE);
    });
  },
  changeText(e, pozitionRemoved = 0, numberRemoved = 0, pastedSymbol = '', deltaPozition = 0) {
    e.preventDefault();
    const textarea = document.querySelector(`#${idNamesConstants.TEXTAREA}`);
    let pozition = textarea.selectionStart;
    const text = document.querySelector(`#${idNamesConstants.TEXTAREA}`).value.split('');
    text.splice(textarea.selectionStart + pozitionRemoved, numberRemoved, pastedSymbol);
    textarea.value = text.join('');
    pozition += deltaPozition;
    textarea.selectionStart = pozition;
    textarea.selectionEnd = pozition;
  },
  changeLanguage(e) {
    e.preventDefault();
    localStorage.setItem(localStorageConstants.LANGUAGE,
      nextKeyboardLanguage[localStorage.getItem(localStorageConstants.LANGUAGE)]);
    document.querySelector(`.${classNamesConstants.KEYBOARD}`).remove();
    window.onload();
  },
  doSpecialKey(e) {
    switch (e.key) {
      case keySpecialConstants.BACKSPACE: {
        eventListeners.changeText(e, -1, 1, '', -1);
        break;
      }
      case keySpecialConstants.DELETE: {
        eventListeners.changeText(e, 0, 1, '', 0);
        break;
      }
      case keySpecialConstants.TAB: {
        eventListeners.changeText(e, 0, 0, '\t', 1);
        break;
      }
      case keySpecialConstants.ENTER: {
        eventListeners.changeText(e, 0, 0, '\n', 1);
        break;
      }
      case keySpecialConstants.SHIFT:
        if (localStorage.getItem(localStorageConstants.CAPSLOCKPRESSED) === 'false') {
          eventListeners.pressShift();
        } else {
          eventListeners.unpressShift();
        }
        break;
      case keySpecialConstants.ALT:
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
  buttonKeyDown(e) {
    const target = document.querySelector(`.${classNamesConstants.BUTTON}[${attributes.DATA_CODE} = ${e.code}]`);
    let key = '';
    if (!target) {
      return;
    }
    target.childNodes.forEach((ch) => {
      if (!ch.classList.contains(classNamesConstants.HIDE)) {
        key = ch.textContent;
      }
    });
    if (e.code !== keySpecialConstants.CAPSLOCK) {
      target.classList.add(classNamesConstants.PRESSED);
    }
    const textarea = document.querySelector(`#${idNamesConstants.TEXTAREA}`);
    if (!target.classList.contains(classNamesConstants.BUTTON_SPECIAL)) {
      textarea.blur();
      eventListeners.changeText(e, 0, 0, key, 1);
    } else {
      eventListeners.doSpecialKey(e);
    }
  },
  buttonKeyUp(e) {
    const target = document.querySelector(`.${classNamesConstants.BUTTON}[${attributes.DATA_CODE} = ${e.code}]`);
    if (!target) {
      return;
    }
    if (e.code !== keySpecialConstants.CAPSLOCK) {
      target.classList.remove(classNamesConstants.PRESSED);
    }
    if (target.classList.contains(classNamesConstants.BUTTON_SPECIAL)) {
      switch (e.key) {
        case keySpecialConstants.SHIFT:
          if (localStorage.getItem(localStorageConstants.CAPSLOCKPRESSED) === 'true') {
            eventListeners.pressShift();
          } else {
            eventListeners.unpressShift();
          }
          break;
        case keySpecialConstants.CAPSLOCK:
          if (localStorage.getItem(localStorageConstants.CAPSLOCKPRESSED) === 'false') {
            eventListeners.pressShift();
            localStorage.setItem(localStorageConstants.CAPSLOCKPRESSED, 'true');
          } else {
            eventListeners.unpressShift();
            localStorage.setItem(localStorageConstants.CAPSLOCKPRESSED, 'false');
          }
          document.querySelector(`.${classNamesConstants.BUTTON_CAPSLOCK}`).classList.toggle(classNamesConstants.PRESSED);
          break;
        default:
          break;
      }
    }
  },
  // mouse events..
  mouseKeyUp(e) {
    e.preventDefault();
    const target = e.currentTarget;
    let key = '';
    if (!target) {
      return;
    }
    target.childNodes.forEach((ch) => {
      if (!ch.classList.contains(classNamesConstants.HIDE)) {
        key = ch.textContent;
      }
    });
    if (target.getAttribute(attributes.DATA_CODE) !== keySpecialConstants.CAPSLOCK) {
      target.classList.remove(classNamesConstants.PRESSED);
    }
    if (target.classList.contains(classNamesConstants.BUTTON_SPECIAL)) {
      switch (key) {
        case keySpecialConstants.SHIFT:
          if (localStorage.getItem(localStorageConstants.CAPSLOCKPRESSED) !== 'false') {
            eventListeners.pressShift();
          } else {
            eventListeners.unpressShift();
          }
          break;
        case keySpecialConstants.CAPSLOCK:
          if (localStorage.getItem(localStorageConstants.CAPSLOCKPRESSED) === 'false') {
            eventListeners.pressShift();
            localStorage.setItem(localStorageConstants.CAPSLOCKPRESSED, 'true');
          } else {
            eventListeners.unpressShift();
            localStorage.setItem(localStorageConstants.CAPSLOCKPRESSED, 'false');
          }
          break;
        default:
          break;
      }
    }
  },
  mouseKeyOut(e) {
    const target = e.currentTarget;
    if (!target) {
      return;
    }
    if (target.getAttribute(attributes.DATA_CODE) !== keySpecialConstants.CAPSLOCK) {
      target.classList.remove(classNamesConstants.PRESSED);
    }
  },
  mouseKeyDown(e) {
    e.preventDefault();
    const target = e.currentTarget;
    let key = '';
    if (!target) {
      return;
    }
    target.childNodes.forEach((ch) => {
      if (!ch.classList.contains(classNamesConstants.HIDE)) {
        key = ch.textContent;
      }
    });

    if (target.getAttribute(attributes.DATA_CODE) !== keySpecialConstants.CAPSLOCK) {
      target.classList.add(classNamesConstants.PRESSED);
    } else {
      target.classList.toggle(classNamesConstants.PRESSED);
    }

    if (!target.classList.contains(classNamesConstants.BUTTON_SPECIAL)) {
      eventListeners.changeText(e, 0, 0, key, 1);
    } else {
      switch (key) {
        case keySpecialConstants.BACKSPACE: {
          eventListeners.changeText(e, -1, 1, '', -1);
          break;
        }
        case keySpecialConstants.TAB: {
          eventListeners.changeText(e, 0, 0, '\t', 1);
          break;
        }
        case keySpecialConstants.DELETE: {
          eventListeners.changeText(e, 0, 1, '', 0);
          break;
        }
        case keySpecialConstants.ENTER: {
          eventListeners.changeText(e, 0, 0, '\n', 1);
          break;
        }
        case keySpecialConstants.SHIFT:
          if (localStorage.getItem(localStorageConstants.CAPSLOCKPRESSED) === 'false') {
            eventListeners.pressShift();
          } else {
            eventListeners.unpressShift();
          }
          break;
        case keySpecialConstants.ALT:
          if (e.shiftKey) {
            eventListeners.changeLanguage(e);
            document.querySelectorAll(`.${classNamesConstants.BUTTON}`).forEach((btn) => btn.addEventListener('mousedown', eventListeners.mouseKeyDown));
            document.querySelectorAll(`.${classNamesConstants.BUTTON}`).forEach((btn) => btn.addEventListener('mouseup', eventListeners.mouseKeyUp));
            document.querySelectorAll(`.${classNamesConstants.BUTTON}`).forEach((btn) => btn.addEventListener('mouseout', eventListeners.mouseKeyOut));
          }
          break;
        default:
          break;
      }
    }
  },
};
export default eventListeners;
