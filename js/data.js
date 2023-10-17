import {createImage, PHOTOS_COUNT} from './data-images.js';

const createArray = () => Array.from({length: PHOTOS_COUNT}, createImage);

export {createArray};
