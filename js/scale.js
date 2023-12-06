import {getData} from './data.js';

const SCALE = getData().SCALE;
const SCALE_STEP = getData().SCALE_STEP;
const DEFAULT_SCALE = getData().DEFAULT_SCALE;

const newImageElement = document.querySelector('.img-upload');
const smallerButton = newImageElement.querySelector('.scale__control--smaller');
const biggerButton = newImageElement.querySelector('.scale__control--bigger');
const scaleInputElement = newImageElement.querySelector('.scale__control--value');
const image = newImageElement.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  image.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => scaleImage(Math.max(parseInt(scaleInputElement.value, 10) - SCALE_STEP, SCALE.MIN));

const onBiggerButtonClick = () => scaleImage(Math.min(parseInt(scaleInputElement.value, 10) + SCALE_STEP, SCALE.MAX));

const resetScale = () => scaleImage(DEFAULT_SCALE);

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export {resetScale};
