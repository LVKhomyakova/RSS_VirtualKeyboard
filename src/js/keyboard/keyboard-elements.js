import createDOMElement from '../helpers/utils';
import attributes from '../constants/attributes-constants';
import localStorageConstants from '../constants/localstorage-constants';
import idNamesConstants from '../constants/id-names-constants';
import classNamesConstants from '../constants/class-names-constants';
import stringConstants from '../constants/string-constants';
import Key from '../components/Key';
import data from '../data/Data';

const keyboardElements = {
  renderWrapper() {
    return createDOMElement('div', [{ name: 'className', value: classNamesConstants.WRAPPER }]);
  },
  renderTitle() {
    return createDOMElement('h1', [{ name: 'className', value: classNamesConstants.TITLE },
      { name: 'innerHTML', value: stringConstants.TITLE }]);
  },
  renderTextarea() {
    return createDOMElement('textarea', [{ name: 'id', value: idNamesConstants.TEXTAREA }],
      [{ name: attributes.ROWS, value: '15' }]);
  },
  renderInstruction() {
    return createDOMElement('h2', [{ name: 'className', value: classNamesConstants.INSTRUCTION },
      { name: 'innerHTML', value: stringConstants.INSTRUCTION }]);
  },
  // Keyboard render
  renderRows(dataKeyboard) {
    if (!localStorage.getItem(localStorageConstants.LANGUAGE)) {
      localStorage.setItem(localStorageConstants.LANGUAGE, 'eng');
    }
    const dataKeys = dataKeyboard[localStorage.getItem(localStorageConstants.LANGUAGE)];
    const rows = [];
    dataKeys.forEach((dataRow) => {
      const row = createDOMElement('section', [{ name: 'className', value: classNamesConstants.ROW }]);
      dataRow.forEach((dataKey) => {
        const key = new Key(dataKey);
        const button = key.generateKey();
        row.append(button);
      });
      rows.push(row);
    });
    return rows;
  },
  renderKeyBoard() {
    const keyboard = createDOMElement('section', [{ name: 'className', value: classNamesConstants.KEYBOARD }]);
    const rows = keyboardElements.renderRows(data);
    rows.forEach((row) => {
      keyboard.append(row);
    });
    return keyboard;
  },

};
export default keyboardElements;
