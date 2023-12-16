const COMMENTS_STEP = 5;

const fullsizePicture = document.querySelector('.big-picture');
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

export {fillComments, openComments};
