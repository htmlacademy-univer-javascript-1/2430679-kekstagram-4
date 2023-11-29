import {isEscapeKey} from './utils.js';
import {getData} from './data.js';
import {resetScale} from './scale.js';
import {resetEffect, initEffect} from './effect.js';

const MAX_HASHTAGS_COUNT = getData().MAX_HASHTAGS_COUNT;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const errorText = {
  INVALID_COUNT: `Допустимо не более ${MAX_HASHTAGS_COUNT} хеэш-тегов`,
  NOT_INIQUE: 'Хэш-теги должны быть уникальными',
  INVALID_PATTERN: 'Некорректный хэш-тег',
};

const body = document.body;
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const openForm = () => {
  initEffect();
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', closeFormByEscape);
};

const closeForm = () => {
  form.reset();
  resetScale();
  resetEffect();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeFormByEscape);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const normalizeTags = (tagString) => tagString.trim().split('').filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAGS_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

function closeFormByEscape(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeForm();
  }
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

pristine.addValidator(hashtagField, hasValidTags, errorText.INVALID_PATTERN, 1, true);
pristine.addValidator(hashtagField, hasUniqueTags, errorText.NOT_INIQUE, 2, true);
pristine.addValidator(hashtagField, hasValidCount, errorText.INVALID_COUNT, 3, true);

fileField.addEventListener('change', openForm);
closeButton.addEventListener('click', closeForm);
form.addEventListener('submit', onFormSubmit);
