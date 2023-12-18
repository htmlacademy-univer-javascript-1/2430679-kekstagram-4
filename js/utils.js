const DELAY = 500;

const getRandomInteger = (numb1, numb2) => {
  const lower = Math.ceil(Math.min(numb1, numb2));
  const upper = Math.floor(Math.max(numb1, numb2));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementsArray = (array, count) => {
  const randomIndexList = [];
  const max = Math.min(count, array.length);
  while (randomIndexList.length < max) {
    const index = getRandomInteger(0, array.length - 1);
    if (!randomIndexList.includes(index)) {
      randomIndexList.push(index);
    }
  }
  return randomIndexList.map((index) => array[index]);
};

const getUrl = (url, derictory, format) => derictory + url + format;

const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example


function debounce (callback, timeoutDelay = DELAY) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export {getRandomElementsArray, getUrl, isEscapeKey, debounce};
