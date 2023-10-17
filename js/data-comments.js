import {getRandomInteger, createUniqueInteger, createImageUrl} from './utils.js';

const NAMES = [
  'Богдан',
  'Мухтар',
  'Стася',
  'Мирон',
  'Фроня',
  'Виша',
  'Карли',
  'Олег',
  'Ханс',
  'Лулу',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createRandomComment = (generatorId, generatorUrl) => ({
  id: generatorId(),
  avatar: createImageUrl(generatorUrl(), 'img/avatar-', '.svg'),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
});

const AVATARS_COUNT = {
  MIN: 1,
  MAX: 6
};

const createRandomComments = (count) => {
  const result = [];
  const commentId = createUniqueInteger(1, count);
  for(let i = 0; i < count; i++) {
    const commentAvatar = createUniqueInteger(AVATARS_COUNT.MIN, AVATARS_COUNT.MAX);
    result.push(createRandomComment(commentId, commentAvatar));
  }
  return result;
};

export {createRandomComments};
