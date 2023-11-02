import {getData} from './data.js';
import {getRandomInteger, createUniqueInteger, createImageUrl} from './utils.js';

const data = getData();
const NAMES = data.NAMES;
const MESSAGES = data.MESSAGES;
const AVATARS_NUMBER = data.AVATARS_NUMBER;

const createRandomComment = (generatorId, generatorUrl) => ({
  id: generatorId(),
  avatar: createImageUrl(generatorUrl(), 'img/avatar-', '.svg'),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
});

const getComments = (count) => {
  const result = [];
  const commentId = createUniqueInteger(1, count);
  for(let i = 0; i < count; i++) {
    const commentAvatar = createUniqueInteger(AVATARS_NUMBER.MIN, AVATARS_NUMBER.MAX);
    result.push(createRandomComment(commentId, commentAvatar));
  }
  return result;
};

export {getComments};