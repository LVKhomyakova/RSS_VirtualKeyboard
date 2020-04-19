import attributes from '../constants/attributes-constants';
import classNamesConstants from '../constants/class-names-constants';
import keySpecialConstants from '../constants/key-special-constants';
import createDOMElement from '../helpers/utils';

class Key {
  constructor({
    code, key, keyShift, keySpecial,
  }) {
    this.code = code;
    this.key = key;
    this.keyShift = keyShift;
    this.keySpecial = keySpecial;
  }

  generateKey() {
    let template = '';
    const button = createDOMElement('div', [{
      name: 'className', value: classNamesConstants.BUTTON,
    }], [{
      name: attributes.DATA_CODE, value: this.code,
    }]);

    if (this.keySpecial) {
      button.classList.add(`button_${this.keySpecial.toLowerCase()}`, classNamesConstants.BUTTON_SPECIAL);
    } else {
      button.classList.add(classNamesConstants.BUTTON_KEY);
    }
    if (this.keySpecial === keySpecialConstants.SPACE) {
      button.classList.remove(classNamesConstants.BUTTON_SPECIAL);
    }

    template += `<span class="${classNamesConstants.SYMBOL} ${classNamesConstants.SYMBOL_UNSHIFT}">${this.key}</span>`
              + `<span class="${classNamesConstants.SYMBOL} ${classNamesConstants.SYMBOL_SHIFT} ${classNamesConstants.HIDE}">${this.keyShift}</span>`;
    button.innerHTML = template;
    return button;
  }
}
export { Key as default };
