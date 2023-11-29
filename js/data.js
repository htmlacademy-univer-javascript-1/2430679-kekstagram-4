const getData = () => {
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

  const COMMENTS = {
    MIN: 0,
    MAX: 30
  };

  const LIKES = {
    MIN: 15,
    MAX: 200
  };

  const AVATARS_NUMBER = {
    MIN: 1,
    MAX: 6
  };

  const IMAGES_COUNT = 25;

  const COMMENTS_STEP = 5;

  const MAX_HASHTAGS_COUNT = 5;

  const SCALE = {
    MIN: 25,
    MAX: 100
  };

  const SCALE_STEP = 25;

  const DEFAULT_SCALE = 100;

  return {DESCRIPTIONS, NAMES, MESSAGES, COMMENTS, LIKES, AVATARS_NUMBER, IMAGES_COUNT,
    COMMENTS_STEP, MAX_HASHTAGS_COUNT, SCALE, SCALE_STEP, DEFAULT_SCALE};
};

export {getData};
