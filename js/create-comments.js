import {getNames, getMessages, getAvatarsNumber} from './data.js';
import {getRandomInteger, createUniqueInteger, createImageUrl} from './utils.js';

const NAMES = getNames();
const MESSAGES = getMessages();
const AVATARS_NUMBER = getAvatarsNumber();

const createRandomComment = (generatorId, generatorUrl) => ({
  id: generatorId(),
  avatar: createImageUrl(generatorUrl(), 'img/avatar-', '.svg'),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
});

const createRandomComments = (count) => {
  const result = [];
  const commentId = createUniqueInteger(1, count);
  for(let i = 0; i < count; i++) {
    const commentAvatar = createUniqueInteger(AVATARS_NUMBER.MIN, AVATARS_NUMBER.MAX);
    result.push(createRandomComment(commentId, commentAvatar));
  }
  return result;
};

export {createRandomComments};
