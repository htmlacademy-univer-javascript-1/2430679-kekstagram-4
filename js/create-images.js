import {getDescriptions, getPhotosCount, getComments, getLikes} from './data.js';
import {getRandomInteger, createUniqueInteger, createImageUrl} from './utils.js';
import {createRandomComments} from './create-comments.js';

const DESCRIPTIONS = getDescriptions();
const PHOTOS_COUNT = getPhotosCount();
const COMMENTS = getComments();
const LIKES = getLikes();

const imageId = createUniqueInteger(1, PHOTOS_COUNT);
const imageUrl = createUniqueInteger(1, PHOTOS_COUNT);

const createImage = () => ({
  id: imageId(),
  url: createImageUrl(imageUrl(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: createRandomComments(getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)),
});

const createArray = () => Array.from({length: PHOTOS_COUNT}, createImage);

export {createArray};
