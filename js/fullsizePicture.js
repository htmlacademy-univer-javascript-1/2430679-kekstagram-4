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

const closePicture = () => {
  body.classList.remove('modal-open');
  fullsizePicture.classList.add('hidden');
  document.removeEventListener('keydown', closeByEscape);
};

function closeByEscape() {//нужно всплытие
  if (isEscapeKey) {
    closePicture();
  }
}

const openComments = () => {
  const hiddenComments = fullsizePicture.querySelectorAll('.social__comment.hidden');
  let commentsNumber = COMMENTS_STEP;
  if (hiddenComments.length < COMMENTS_STEP) {
    commentsNumber = hiddenComments.length;
  }
  currentComments.textContent = Number(currentComments.textContent) + commentsNumber;
  for (let i = 0; i < commentsNumber; i++) {
    hiddenComments[i].classList.remove('hidden');
  }
  if (hiddenComments.length - commentsNumber === 0) {
    fullsizePicture.querySelector('.comments-loader').classList.add('hidden');
  }
};

const openPicture = ({url, description, likes, comments}) => {
  body.classList.add('modal-open');
  fullsizePicture.classList.remove('hidden');
  fullsizePicture.querySelector('.big-picture__img img').src = url;
  fullsizePicture.querySelector('.likes-count').textContent = likes;
  fullsizePicture.querySelector('.comments-count').textContent = comments.length;
  fillComments(comments);
  fullsizePicture.querySelector('.social__caption').textContent = description;
  fullsizePicture.querySelector('.comments-loader').classList.remove('hidden');
  currentComments.textContent = 0;
  openComments();
  loaderButton.addEventListener('click', openComments);
  closeButton.addEventListener('click', closePicture);
  document.addEventListener('keydown', closeByEscape);
};

export {openPicture};
