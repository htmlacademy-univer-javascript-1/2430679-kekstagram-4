import {isEscapeKey} from './utils.js';
import {getData} from './data.js';

const COMMENTS_STEP = getData().COMMENTS_STEP;

const body = document.body;
const fullsizePicture = document.querySelector('.big-picture');
const closeButton = fullsizePicture.querySelector('#picture-cancel');
const loaderButton = fullsizePicture.querySelector('.comments-loader');
const currentComments = fullsizePicture.querySelector('.current-comments');
const commentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');

const createComment = ({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  commentElement.classList.add('hidden');
  return commentElement;
};

const fillComments = (comments) => {
  const commentsContainer = fullsizePicture.querySelector('.social__comments');
  const commentFragments = document.createDocumentFragment();
  comments.forEach((comment) => {
    commentFragments.append(createComment(comment));
  });
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentFragments);
};

const openComments = () => {
  const hiddenComments = fullsizePicture.querySelectorAll('.social__comment.hidden');
  const commentsNumber = hiddenComments.length < COMMENTS_STEP ? hiddenComments.length : COMMENTS_STEP;
  currentComments.textContent = Number(currentComments.textContent) + commentsNumber;
  for (let i = 0; i < commentsNumber; i++) {
    hiddenComments[i].classList.remove('hidden');
  }
  if (hiddenComments.length - commentsNumber === 0) {
    loaderButton.classList.add('hidden');
  }
};

const closePicture = () => {
  body.classList.remove('modal-open');
  fullsizePicture.classList.add('hidden');
  document.removeEventListener('keydown', closePictureByEscape);
  closeButton.removeEventListener('click', closePicture);
  loaderButton.removeEventListener('click', openComments);
};

function closePictureByEscape(evt) {//нужно всплытие
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
}

const getFullsizePicture = ({url, description, likes, comments}) => {
  fullsizePicture.classList.remove('hidden');
  fullsizePicture.querySelector('.big-picture__img img').src = url;
  fullsizePicture.querySelector('.likes-count').textContent = likes;
  fullsizePicture.querySelector('.comments-count').textContent = comments.length;
  fullsizePicture.querySelector('.social__caption').textContent = description;
};

const openPicture = (picture) => {
  body.classList.add('modal-open');
  getFullsizePicture(picture);
  fillComments(picture.comments);
  currentComments.textContent = 0;
  loaderButton.classList.remove('hidden');
  openComments();
  loaderButton.addEventListener('click', openComments);
  closeButton.addEventListener('click', closePicture);
  document.addEventListener('keydown', closePictureByEscape);
};

export {openPicture};
