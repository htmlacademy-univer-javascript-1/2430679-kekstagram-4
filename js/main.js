import {getPictures} from './pictures.js';
import {getData} from './api.js';
import './forms.js';
import './pictureFilters.js';

const loadPictures = async () => {
  try {
    getPictures(await getData());
  }
  catch (err){
    const alertMessage = document.querySelector('#alert').content;
    alertMessage.querySelector('.alert_message').textContent = err.message;
    document.body.append(alertMessage);
  }
};

loadPictures();
