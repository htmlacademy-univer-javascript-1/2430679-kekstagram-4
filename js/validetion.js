const MAX_SYMBOLS_COMMENT_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;
const ERROR_TEXT = {
  INVALID_LENGTH:`Длина комментария не должна превышать ${MAX_SYMBOLS_COMMENT_LENGTH} символов`,
  INVALID_COUNT: `Допустимо не более ${MAX_HASHTAGS_COUNT} хэш-тегов`,
  NOT_INIQUE: 'Хэш-теги должны быть уникальными',
  INVALID_PATTERN: 'Некорректный хэш-тег',
};

const hashtagRegExp = /^#[a-zа-яё0-9]{1,19}$/i;

const form = document.querySelector('.img-upload__form');
const commentField = form.querySelector('.text__description');
const hashtagsField = form.querySelector('.text__hashtags');

const resetField = () => {
  commentField.value = '';
  hashtagsField.value = '';
};


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload--invalid',
  successClass: 'img-upload--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const validateComment = (value) => value.length <= MAX_SYMBOLS_COMMENT_LENGTH;

const validateHashtagsCount = (value) => value.trim().split(' ').length <= MAX_HASHTAGS_COUNT;

const validateHashtags = (value) => value.trim() === '' ? true : value.trim().split(' ').every((hashtag) => hashtagRegExp.test(hashtag));

const validateHashtagsUniqueness  = (value) => {
  const hashtags = value.trim().split(' ');
  const tempArr = [];
  for (let i = 0; i < hashtags.length; i++){
    if(tempArr.includes(hashtags[i])){
      return false;
    }
    else {
      tempArr.push(hashtags[i]);
    }
  }
  return true;
};

pristine.addValidator(commentField, validateComment, ERROR_TEXT.INVALID_LENGTH);
pristine.addValidator(hashtagsField, validateHashtagsCount, ERROR_TEXT.INVALID_COUNT);
pristine.addValidator(hashtagsField, validateHashtags, ERROR_TEXT.INVALID_PATTERN);
pristine.addValidator(hashtagsField, validateHashtagsUniqueness, ERROR_TEXT.NOT_INIQUE);

export {pristine, resetField};
