import {Key} from './js/Key';
import {data} from './js/Data';

let capslockPressed = false;

window.onload  = function() { 
    
    let wrapper = renderWrapper();
    renderTextarea(wrapper);
    if(data){
        wrapper.append(renderKeyBoard());
    }
    //add listeners
    document.addEventListener('keydown', buttonKeyDown);
    document.addEventListener('keyup', buttonKeyUp);

    addListeners();
}

const renderWrapper = function () {
    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    document.body.append(wrapper);
    return wrapper;
}
//textarea rendering
const renderTextarea = function (wrapper) {
    let textarea = document.createElement('textarea');
    textarea.id = 'textarea';    
    wrapper.append(textarea);
}
//Keyboard rendering
const renderKeyBoard = function () {
    let keyboard = document.createElement('section');
    keyboard.className = 'keyboard';

    let rows = renderRows(data);
    rows.forEach( (row) => {
        keyboard.append(row);
    });
    return keyboard;
}

const renderRows = function(data) {
    let dataKeys = data[localStorage.getItem('language')];
    let rows = [];
    dataKeys.forEach( (dataRow) => { 
        let row = document.createElement('section');
        row.className = 'row';
        
        dataRow.forEach( (dataKey) => {
            let key = new Key(dataKey);
            let button = key.generateKey();
            row.append(button);
        });
        rows.push(row);
    });       
    return rows;
}

//keuboard events..
const buttonKeyDown = function(e){
    let target = document.querySelector(`.button[data-code = ${e.code}]`);
    let key = '';
    console.log(target);
    for(let ch of target.childNodes){
        if(!ch.classList.contains('hide')){
            key = ch.textContent;
        }
    }

    if(e.code !== 'CapsLock')
        target.classList.add('pressed');

    let textarea = document.querySelector('#textarea');
    if(!target.classList.contains('button_special')){
        textarea.value += key;
    } else{
        doSpecialKey(e);
    }
}
const doSpecialKey = function(e){
    let textarea = document.querySelector('#textarea');
    switch(e.key){
        case 'Backspace':
            textarea.value = textarea.value.slice(0,-1);
            break;
        case 'Tab':
            e.preventDefault();
            textarea.value += '\t';
            break;
        case 'Enter':
            textarea.value += '\n';
            break;
        case 'Shift':
            if(!capslockPressed)
                pressShift();
            else
                unpressShift();
            break;
        case 'Alt':
            e.preventDefault();
            break;
        default:
            break;
    }
}

const buttonKeyUp = function(e){
    let target = document.querySelector(`.button[data-code = ${e.code}]`);
    if(e.code !== 'CapsLock')
        target.classList.remove('pressed');
    if(target.classList.contains('button_special')){
        switch(e.key){
            case 'Shift':
            if(capslockPressed)
                pressShift();
            else
                unpressShift();
                break;
            case 'CapsLock':
                if(!capslockPressed){
                    pressShift();
                    capslockPressed = true;
                }else{
                    unpressShift();
                    capslockPressed = false;
                }
                document.querySelector('.button_capslock').classList.toggle('pressed');
                break;
            default:
                break;
        }
    }
}
const unpressShift = function(){
    document.querySelectorAll('.symbol_unshift').forEach( (symbol) => {
        symbol.classList.remove('hide');
    });
    document.querySelectorAll('.symbol_shift').forEach( (symbol) => {
        symbol.classList.add('hide');
    });
}
const pressShift = function(){
    document.querySelectorAll('.symbol_unshift').forEach( (symbol) => {
        symbol.classList.add('hide');
    });
    document.querySelectorAll('.symbol_shift').forEach( (symbol) => {
        symbol.classList.remove('hide');
    });
}


//mouse events..
const mouseKeyDown = function(e){
    e.preventDefault();
    let target = e.currentTarget;
    let key = '';
    for(let ch of target.childNodes){
        if(!ch.classList.contains('hide')){
            key = ch.textContent;
        }
    }
    if(target.getAttribute('data-code') !== 'CapsLock')
        target.classList.add('pressed');

    let textarea = document.querySelector('#textarea');
    if(!target.classList.contains('button_special')){
        textarea.value += key;
    } else{
        switch(key){
            case 'Backspace':
                textarea.value = textarea.value.slice(0,-1);
                break;
            case 'Tab':
                textarea.value += '\t';
                break;
            case 'Delete':
                let pozition = textarea.selectionStart;
                let text = textarea.value;
                let arr = text.split('');
                arr.splice(pozition,1);
                textarea.value = arr.join('');
                textarea.selectionStart = pozition;
                textarea.selectionEnd = pozition;
                break;
            case 'Enter':
                textarea.value += '\n';
                break;
            case 'Shift':
                    document.querySelectorAll('.symbol_unshift').forEach( (symbol) => {
                        symbol.classList.add('hide');
                    });
                    document.querySelectorAll('.symbol_shift').forEach( (symbol) => {
                        symbol.classList.remove('hide');
                    });
                break;
            case 'Alt':
                break;
            default:
                break;
        }
    }
}
const mouseKeyUp = function(e){
    e.preventDefault();
    let target = e.currentTarget;
    let key = '';
    for(let ch of target.childNodes){
        if(!ch.classList.contains('hide')){
            key = ch.textContent;
        }
    }

    if(target.getAttribute('data-code') !== 'CapsLock')
        target.classList.remove('pressed');

    if(target.classList.contains('button_special')){
        switch(key){
            case 'Shift':
                document.querySelectorAll('.symbol_unshift').forEach( (symbol) => {
                    symbol.classList.remove('hide');
                });
                document.querySelectorAll('.symbol_shift').forEach( (symbol) => {
                    symbol.classList.add('hide');
                });
                break;
            case 'CapsLock':
                document.querySelectorAll('.symbol_unshift').forEach( (symbol) => {
                    symbol.classList.toggle('hide');
                });
                document.querySelectorAll('.symbol_shift').forEach( (symbol) => {
                    symbol.classList.toggle('hide');
                });
                document.querySelector('.button_capslock').classList.toggle('pressed');
                    
                break;
            default:
                break;
        }
    }
}
//change Language
const changeLanguage = function(e){
    e.preventDefault();
    if(localStorage.getItem('language') === 'eng'){
        localStorage.setItem('language', 'ru');
    }
    else{
        localStorage.setItem('language', 'eng');
    }

    document.querySelector('.keyboard').remove();
    let wrapper = document.querySelector('.wrapper');
    if(data){
        wrapper.append(renderKeyBoard());
    }
    addListeners();
}
const addListeners = function(){
    document.querySelectorAll('.button').forEach( (btn) => btn.addEventListener('mousedown', mouseKeyDown));
    document.querySelectorAll('.button').forEach( (btn) => btn.addEventListener('mouseup', mouseKeyUp));

    document.querySelector('.button_language').addEventListener('click', changeLanguage);
}