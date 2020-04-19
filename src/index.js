import data from './js/data/Data';
import keyboardElements from './js/keyboard/keyboard-elements';
import eventListeners from './js/events/event-listeners';
import classNamesConstants from './js/constants/class-names-constants';
import localStorageConstants from './js/constants/localstorage-constants';

window.onload = () => {
  localStorage.setItem(localStorageConstants.CAPSLOCKPRESSED, 'false');
  if (!document.querySelector(`.${classNamesConstants.WRAPPER}`)) {
    const wrapper = keyboardElements.renderWrapper();
    document.body.append(wrapper);
    wrapper.append(keyboardElements.renderTitle());
    wrapper.append(keyboardElements.renderTextarea());
    wrapper.append(keyboardElements.renderInstruction());
  }
  const wrapper = document.querySelector(`.${classNamesConstants.WRAPPER}`);
  if (data) {
    wrapper.append(keyboardElements.renderKeyBoard());
  }
  // add listeners
  document.addEventListener('keydown', eventListeners.buttonKeyDown);
  document.addEventListener('keyup', eventListeners.buttonKeyUp);
  document.querySelector(`.${classNamesConstants.BUTTON_LANGUAGE}`).addEventListener('click', eventListeners.changeLanguage);
  document.querySelectorAll(`.${classNamesConstants.BUTTON}`).forEach((btn) => btn.addEventListener('mousedown', eventListeners.mouseKeyDown));
  document.querySelectorAll(`.${classNamesConstants.BUTTON}`).forEach((btn) => btn.addEventListener('mouseup', eventListeners.mouseKeyUp));
  document.querySelectorAll(`.${classNamesConstants.BUTTON}`).forEach((btn) => btn.addEventListener('mouseout', eventListeners.mouseKeyOut));
};
