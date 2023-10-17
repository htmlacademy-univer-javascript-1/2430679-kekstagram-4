import {getRandomInteger, createUniqueInteger, createImageUrl} from './utils.js';
import {createRandomComments} from './data-comments.js';

const DESCRIPTIONS = [
  'Что-то на богатом',
  'Мне этот мир абсолютно понятен',
  'Позитивная энергия',
  'Спокойно, Маша, я Дубровский',
  'Природы мистическая красота',
  'На радио волнах',
  'Я знаю точно: невозможное возможно',
  'Творческая жилка',
  'Меме',
  'Ноу дескрипшион',
];

const PHOTOS_COUNT = 25;

const COMMENTS = {
  MIN: 0,
  MAX: 30
};

const LIKES = {
  MIN: 15,
  MAX: 200
};

const imageId = createUniqueInteger(1, PHOTOS_COUNT);
const imageUrl = createUniqueInteger(1, PHOTOS_COUNT);

const createImage = () => ({
  id: imageId(),
  url: createImageUrl(imageUrl(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: createRandomComments(getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)),
});

export {createImage, PHOTOS_COUNT};
