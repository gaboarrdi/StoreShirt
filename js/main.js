import { addEvents } from './addEvent.js';

const elem = document.querySelector('.main-carousel');
let flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
});

flkty = new Flickity('.main-carousel', {});

const options = {
  prevNextButtons: false,
};

// Creating Rollover from the news tab

const image = document.querySelector('#img1');
addEvents(image, 'image');

const image2 = document.querySelector('#img2');
addEvents(image2, 'image2');

const image3 = document.querySelector('#img3');
addEvents(image3, 'image3');

const image4 = document.querySelector('#img4');
addEvents(image4, 'image4');
