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

const createImageUrl = (url, derictory, format) => derictory + url + format;

export {getRandomInteger, createUniqueInteger, createImageUrl};
