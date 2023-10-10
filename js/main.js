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

const PHOTOS_COUNT = 25;
const COMMENTS_MAX = 30;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATARS_COUNT = 6;

const getRandomInteger = (numb1, numb2) => {
  const lower = Math.ceil(Math.min(numb1, numb2));
  const upper = Math.floor(Math.max(numb1, numb2));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createUniqueInteger = (numb1, numb2) => {
  const previousValues = [];
  return () => {
    let currentValue = getRandomInteger(numb1, numb2);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(numb1, numb2);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const imageId = createUniqueInteger(1, PHOTOS_COUNT);
const imageUrl = createUniqueInteger(1, PHOTOS_COUNT);

const createImageUrl = (url, derictory, format) => derictory + url + format;

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
    const commentAvatar = createUniqueInteger(1, AVATARS_COUNT);
    result.push(createRandomComment(commentId, commentAvatar));
  }
  return result;
};

const createImage = () => ({
  id: imageId(),
  url: createImageUrl(imageUrl(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: createRandomComments(getRandomInteger(0, COMMENTS_MAX)),
});

const photos = Array.from({length: PHOTOS_COUNT}, createImage);
