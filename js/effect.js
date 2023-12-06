const effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [effect.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [effect.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

const effectToSliderOptions = {
  [effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const newImageElement = document.querySelector('.img-upload');
const image = newImageElement.querySelector('.img-upload__preview img');
const effects = newImageElement.querySelector('.effects');
const slider = newImageElement.querySelector('.effect-level__slider');
const sliderContainer = newImageElement.querySelector('.img-upload__effect-level');
const effectLevel = newImageElement.querySelector('.effect-level__value');

let chosenEffect = effect.DEFAULT;

const isDefault = () => chosenEffect === effect.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    image.style.filter = null;
    return;
  }
  const {value} = effectLevel;
  const {style, unit} = effectToFilter[chosenEffect];
  image.style.filter = `${style}(${value}${unit})`;
};

const openSlider = () => sliderContainer.classList.remove('hidden');

const closeSlider = () => sliderContainer.classList.add('hidden');

const onSliderUpdate = () => {
  effectLevel.value = slider.noUiSlider.get();
  setImageStyle();
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(slider, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  slider.noUiSlider.on('update', onSliderUpdate);
  closeSlider();
};

const updateSlider = ({ min, max, step }) => {
  slider.noUiSlider.updateOptions({
    range: {min, max},
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    closeSlider();
  } else {
    updateSlider(effectToSliderOptions[chosenEffect]);
    openSlider();
  }
};

const setEffect = (result) => {
  chosenEffect = result;
  setSlider();
  setImageStyle();
};

const onEffectsChange = (evt) => setEffect(evt.target.value);

const resetEffect = () => setEffect(effect.DEFAULT);

const initEffect = () => {
  createSlider(effectToSliderOptions[chosenEffect]);
  effects.addEventListener('change', onEffectsChange);
};

export {resetEffect, initEffect};
