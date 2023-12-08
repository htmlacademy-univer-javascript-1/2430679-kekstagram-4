const SCALE = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => scaleImage(Math.max(parseInt(scaleInput.value, 10) - SCALE.STEP, SCALE.MIN));

const onBiggerButtonClick = () => scaleImage(Math.min(parseInt(scaleInput.value, 10) + SCALE.STEP, SCALE.MAX));

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);
