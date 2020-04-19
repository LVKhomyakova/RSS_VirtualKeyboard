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
    const button = document.createElement('div');
    button.className = 'button';
    button.setAttribute('data-code', this.code);
    if (this.keySpecial) {
      button.classList.add(`button_${this.keySpecial.toLowerCase()}`, 'button_special');
    } else {
      button.classList.add('button_key');
    }
    if (this.keySpecial === 'Space') button.classList.remove('button_special');

    template += `<span class="symbol symbol_unshift">${this.key}</span>`;
    template += `<span class="symbol symbol_shift hide">${this.keyShift}</span>`;
    button.innerHTML = template;
    return button;
  }
}
export { Key as default };
