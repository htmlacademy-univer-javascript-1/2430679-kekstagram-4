import {isEscapeKey} from './utils.js';
import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {pristine, resetField} from './validetion.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const pictureUploadInput = form.querySelector('.img-upload__input');
const closeButton = form.querySelector('.img-upload__cancel');
const pictureOverlay = form.querySelector('.img-upload__overlay');
const picturePreview = document.querySelector('.img-upload__preview img');
const submitButton = form.querySelector('.img-upload__submit');

const closeForm =() => {
  body.classList.remove('modal-open');
  pictureOverlay.classList.add('hidden');
  closeButton.removeEventListener('click', closeForm);
  document.removeEventListener('keydown', closeFormByEscape);
  pictureUploadInput.value = '';
  pristine.reset();
};

function closeFormByEscape(evt) { //всплытие
  if(isEscapeKey(evt)) {
    const activeElement = document.activeElement.attributes.type;
    if (typeof(activeElement) !== 'undefined' && activeElement.value === 'text'){
      evt.stopPropagation();
    }
    else {
      closeForm();
    }
  }
}

pictureUploadInput.addEventListener('change', () => {
  pictureOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.querySelector('.effect-level__slider').parentNode.classList.add('hidden');
  document.querySelector('.scale__control--value').value = '100%';
  picturePreview.removeAttribute('style');
  closeButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', closeFormByEscape);
});

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    submitButton.disabled = true;
    await sendData(new FormData(form))
      .then(() => {
        showSuccessMessage();
        resetField();
      })
      .catch(() => showErrorMessage());
    submitButton.disabled = false;
    closeForm();
  }
});