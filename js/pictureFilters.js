const SCALE = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');
const sliderValue = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.effect-level__slider');
const effectItems = document.querySelectorAll('.effects__item');
let currentEffect = '';

const scaleImage = (value) => {
  picturePreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => scaleImage(Math.max(parseInt(scaleInput.value, 10) - SCALE.STEP, SCALE.MIN));

const onBiggerButtonClick = () => scaleImage(Math.min(parseInt(scaleInput.value, 10) + SCALE.STEP, SCALE.MAX));

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

noUiSlider.create(sliderContainer, {
  connect: 'lower',
  start: 1,
  step: 0.1,
  range: {'min': 0, 'max': 1},
});

sliderContainer.noUiSlider.on('update', () => {
  sliderValue.value = sliderContainer.noUiSlider.get();
  picturePreview.style.filter = `${currentEffect.split(' ')[0]}(${sliderValue.value}${currentEffect.split(' ')[1]})`;
});

const changeEffect = (effect, start, step, min, max) => {
  sliderContainer.parentNode.classList.remove('hidden');
  currentEffect = effect;
  sliderContainer.noUiSlider.updateOptions({
    start: start,
    step: step,
    range: {'min': min, 'max': max},
  });
};

effectItems.forEach((effect) => {
  const effectValue = effect.querySelector('input').value;
  switch (effectValue) {
    case 'none':
      effect.addEventListener('click', () => {
        sliderContainer.parentNode.classList.add('hidden');
        picturePreview.style.filter = 'none';
      });
      break;
    case 'chrome':
      effect.addEventListener('click', () => {
        changeEffect('grayscale ', 1, 0.1, 0, 1);
      });
      break;
    case 'sepia':
      effect.addEventListener('click', () => {
        changeEffect('sepia ', 1, 0.1, 0, 1);
      });
      break;
    case 'marvin':
      effect.addEventListener('click', () => {
        changeEffect('invert %', 100, 1, 0, 100);
      });
      break;
    case 'phobos':
      effect.addEventListener('click', () => {
        changeEffect('blur px', 3, 0.1, 0, 3);
      });
      break;
    case 'heat':
      effect.addEventListener('click', () => {
        changeEffect('brightness ', 3, 0.1, 1, 3);
      });
      break;
  }
});
