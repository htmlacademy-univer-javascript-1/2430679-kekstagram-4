import {getData} from './data.js';
import {getRandomInteger, createUniqueInteger, createImageUrl} from './utils.js';
import {getComments} from './comments.js';

const data = getData();
const IMAGES_COUNT = data.IMAGES_COUNT;
const DESCRIPTIONS = data.DESCRIPTIONS;
const COMMENTS = data.COMMENTS;
const LIKES = data.LIKES;

const imageId = createUniqueInteger(1, IMAGES_COUNT);
const imageUrl = createUniqueInteger(1, IMAGES_COUNT);

const createImage = () => ({
  id: imageId(),
  url: createImageUrl(imageUrl(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: getComments(getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)),
});

const getImages = () => Array.from({length: IMAGES_COUNT}, createImage);

export {getImages};