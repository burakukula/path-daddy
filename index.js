const svgpath = require('svgpath');

const textareaInput =  document.querySelector('.js-textarea-input');
const textareaOutput =  document.querySelector('.js-textarea-output');
const pathInput = document.querySelector('.js-path-input');
const pathOutput = document.querySelector('.js-path-output');
const scaleInput = document.querySelector('.js-scale');
const translateInputX = document.querySelector('.js-translate-x');
const translateInputY = document.querySelector('.js-translate-y');

const state = {
    x: 0,
    y: 0,
    scale: 1,
    path: '',
    round: 10
}

textareaInput.addEventListener('input', () => {
    state.path = textareaInput.value;
    updateEverything(state);
});

scaleInput.addEventListener('input', () => {
    state.scale = scaleInput.value;
    updateEverything(state);
});

translateInputX.addEventListener('input', () => {
    state.x = Number(translateInputX.value);
    updateEverything(state);
});

translateInputY.addEventListener('input', () => {
    state.y = Number(translateInputY.value);
    updateEverything(state);
});

const updateEverything = ({path, x, y, scale, round}) => {
    const transformed = svgpath(path)
        .scale(scale)
        .translate(x,y)
        .rel()
        .round(round)
        .toString()

    pathInput.setAttribute('d', path);
    pathOutput.setAttribute('d', transformed);
    textareaOutput.value = transformed;
};