import data from './js/Data';
import Key from './js/Key';

const unpressShift = () => {
  document.querySelectorAll('.symbol_unshift').forEach((symbol) => {
    symbol.classList.remove('hide');
  });
  document.querySelectorAll('.symbol_shift').forEach((symbol) => {
    symbol.classList.add('hide');
  });
};
const pressShift = () => {
  document.querySelectorAll('.symbol_unshift').forEach((symbol) => {
    symbol.classList.add('hide');
  });
  document.querySelectorAll('.symbol_shift').forEach((symbol) => {
    symbol.classList.remove('hide');
  });
};

// render wrapper
const renderWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  document.body.append(wrapper);
  return wrapper;
};
// textarea rendering
const renderTextarea = (wrapper) => {
  const textarea = document.createElement('textarea');
  textarea.id = 'textarea';
  textarea.setAttribute('rows', '15');
  wrapper.append(textarea);
};
// Keyboard rendering
const renderRows = (dataKeyboard) => {
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'eng');
  }
  const dataKeys = dataKeyboard[localStorage.getItem('language')];
  const rows = [];
  dataKeys.forEach((dataRow) => {
    const row = document.createElement('section');
    row.className = 'row';

    dataRow.forEach((dataKey) => {
      const key = new Key(dataKey);
      const button = key.generateKey();
      row.append(button);
    });
    rows.push(row);
  });
  return rows;
};
const renderKeyBoard = () => {
  const keyboard = document.createElement('section');
  keyboard.className = 'keyboard';

  const rows = renderRows(data);
  rows.forEach((row) => {
    keyboard.append(row);
  });
  return keyboard;
};
//---------------------------------------------
// change Language
const changeLanguage = (e) => {
  e.preventDefault();
  if (localStorage.getItem('language') === 'eng') {
    localStorage.setItem('language', 'ru');
  } else {
    localStorage.setItem('language', 'eng');
  }
  document.querySelector('.keyboard').remove();
  window.onload();
};
// mouse events..
const mouseKeyUp = (e) => {
  e.preventDefault();
  const target = e.currentTarget;
  let key = '';
  if (!target) return;
  target.childNodes.forEach((ch) => {
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
const mouseKeyOut = (e) => {
  const target = e.currentTarget;
  if (!target) return;
  if (target.getAttribute('data-code') !== 'CapsLock') target.classList.remove('pressed');
};
const mouseKeyDown = (e) => {
  e.preventDefault();
  const target = e.currentTarget;
  let key = '';
  if (!target) return;
  target.childNodes.forEach((ch) => {
    if (!ch.classList.contains('hide')) {
      key = ch.textContent;
    }
  });

  if (target.getAttribute('data-code') !== 'CapsLock') {
    target.classList.add('pressed');
  } else {
    target.classList.toggle('pressed');
  }

  const textarea = document.querySelector('#textarea');
  if (!target.classList.contains('button_special')) {
    let pozition = textarea.selectionStart;
    const text = textarea.value;
    const arr = text.split('');
    arr.splice(pozition, 0, key);
    textarea.value = arr.join('');
    pozition += 1;
    textarea.selectionStart = pozition;
    textarea.selectionEnd = pozition;
  } else {
    switch (key) {
      case 'Backspace': {
        let pozition = textarea.selectionStart;
        const text = textarea.value;
        const arr = text.split('');
        arr.splice(pozition - 1, 1);
        textarea.value = arr.join('');
        pozition -= 1;
        textarea.selectionStart = pozition;
        textarea.selectionEnd = pozition;
        break;
      }
      case 'Tab': {
        let pozition = textarea.selectionStart;
        const text = textarea.value;
        const arr = text.split('');
        arr.splice(pozition, 0, '\t');
        textarea.value = arr.join('');
        pozition += 1;
        textarea.selectionStart = pozition;
        textarea.selectionEnd = pozition;
        break;
      }
      case 'Delete': {
        const pozition = textarea.selectionStart;
        const text = textarea.value;
        const arr = text.split('');
        arr.splice(pozition, 1);
        textarea.value = arr.join('');
        textarea.selectionStart = pozition;
        textarea.selectionEnd = pozition;
        break;
      }
      case 'Enter': {
        let pozition = textarea.selectionStart;
        const text = textarea.value;
        const arr = text.split('');
        arr.splice(pozition, 0, '\n');
        textarea.value = arr.join('');
        pozition += 1;
        textarea.selectionStart = pozition;
        textarea.selectionEnd = pozition;
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
          document.querySelectorAll('.button').forEach((btn) => btn.addEventListener('mousedown', mouseKeyDown));
          document.querySelectorAll('.button').forEach((btn) => btn.addEventListener('mouseup', mouseKeyUp));
          document.querySelectorAll('.button').forEach((btn) => btn.addEventListener('mouseout', mouseKeyOut));
        }
        break;
      default:
        break;
    }
  }
};
// keyboard events..
const doSpecialKey = (e) => {
  const textarea = document.querySelector('#textarea');
  switch (e.key) {
    case 'Backspace': {
      e.preventDefault();
      let pozition = textarea.selectionStart;
      const text = textarea.value;
      const arr = text.split('');
      arr.splice(pozition - 1, 1);
      textarea.value = arr.join('');
      pozition -= 1;
      textarea.selectionStart = pozition;
      textarea.selectionEnd = pozition;
      break;
    }
    case 'Delete': {
      e.preventDefault();
      const pozition = textarea.selectionStart;
      const text = textarea.value;
      const arr = text.split('');
      arr.splice(pozition, 1);
      textarea.value = arr.join('');
      textarea.selectionStart = pozition;
      textarea.selectionEnd = pozition;
      break;
    }
    case 'Tab': {
      e.preventDefault();
      let pozition = textarea.selectionStart;
      const text = textarea.value;
      const arr = text.split('');
      arr.splice(pozition, 0, '\t');
      textarea.value = arr.join('');
      pozition += 1;
      textarea.selectionStart = pozition;
      textarea.selectionEnd = pozition;
      break;
    }
    case 'Enter': {
      let pozition = textarea.selectionStart;
      const text = textarea.value;
      const arr = text.split('');
      arr.splice(pozition, 0, '\n');
      textarea.value = arr.join('');
      pozition += 1;
      textarea.selectionStart = pozition;
      textarea.selectionEnd = pozition;
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
const buttonKeyDown = (e) => {
  const target = document.querySelector(`.button[data-code = ${e.code}]`);
  let key = '';
  if (!target) return;
  target.childNodes.forEach((ch) => {
    if (!ch.classList.contains('hide')) {
      key = ch.textContent;
    }
  });
  if (e.code !== 'CapsLock') {
    target.classList.add('pressed');
  }

  const textarea = document.querySelector('#textarea');
  if (!target.classList.contains('button_special')) {
    textarea.blur();
    let pozition = textarea.selectionStart;
    const text = textarea.value;
    const arr = text.split('');
    arr.splice(pozition, 0, key);
    textarea.value = arr.join('');
    pozition += 1;
    textarea.selectionStart = pozition;
    textarea.selectionEnd = pozition;
  } else {
    doSpecialKey(e);
  }
};
const buttonKeyUp = (e) => {
  const target = document.querySelector(`.button[data-code = ${e.code}]`);
  if (!target) return;
  if (e.code !== 'CapsLock') target.classList.remove('pressed');
  if (target.classList.contains('button_special')) {
    switch (e.key) {
      case 'Shift':
        if (localStorage.getItem('capslockPressed') === 'true') pressShift();
        else unpressShift();
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

const addListeners = () => {
  document.querySelectorAll('.button').forEach((btn) => btn.addEventListener('mousedown', mouseKeyDown));
  document.querySelectorAll('.button').forEach((btn) => btn.addEventListener('mouseup', mouseKeyUp));
  document.querySelectorAll('.button').forEach((btn) => btn.addEventListener('mouseout', mouseKeyOut));
};

window.onload = () => {
  localStorage.setItem('capslockPressed', 'false');
  if (!document.querySelector('.wrapper')) {
    const wrapper = renderWrapper();
    // render title
    const title = document.createElement('h1');
    title.innerHTML = 'Virtual Keyboard (by LVKhomyakova)';
    title.style.color = '#fff';
    wrapper.append(title);
    renderTextarea(wrapper);
    // render instruction
    const instruction = document.createElement('h2');
    instruction.innerHTML = 'Сhange language (for Windows): Ctrl + Alt or ENG/RU';
    instruction.style.color = '#ffffff';
    wrapper.append(instruction);
  }
  const wrapper = document.querySelector('.wrapper');
  if (data) {
    wrapper.append(renderKeyBoard());
  }
  // add listeners
  document.addEventListener('keydown', buttonKeyDown);
  document.addEventListener('keyup', buttonKeyUp);
  document.querySelector('.button_language').addEventListener('click', changeLanguage);
  addListeners();
};
