/* прим фото (фун 6 - создать фото)
id - случ число 1-25 - генерация числа в промежутке (фун1) и проверка на появление ранее (фун2)
url - адрес фото 1-25 (не обяз совпадает с id) - (фун1), (фун2) и как-то соединить (фун3)
des - описание придумать мб любое - (фун1)
likes - случ число 15-200 - (фун1)
coms - мас об 0-30 (фун1): - создать массив комментов (фун5)
      id - любое число без повторов - (фун1), (фун2)
      avatar - адрес иконки 1-6 - (фун1), (фун2), (фун3)
      messsage - есть (рандом) - (фун1)
      name - имя придумать (рандом) - (фун1)
      создать коммент - (фун4)
*/

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

const imageId = createUniqueInteger(1, 25);
const imageUrl = createUniqueInteger(1, 25);

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
    const commentAvatar = createUniqueInteger(1, 6);
    result.push(createRandomComment(commentId, commentAvatar));
  }
  return result;
};

const createImage = () => ({
  id: imageId(),
  url: createImageUrl(imageUrl(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: createRandomComments(getRandomInteger(0, 30)),
});

const photos = Array.from( {length: 25}, createImage);
console.log(photos);
