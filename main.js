const IMAGE_PATHS = {
  image: ['./img/gost1.png', './img/foto1.png'],
  image2: ['./img/gost2.png', './img/foto2.png'],
  image3: ['./img/gost3.png', './img/foto3.png'],
  image4: ['./img/gost4.png', './img/foto4.png'],
};

const firstImage = 0;
const secondImage = 1;

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

// Responsive Menu

const showMenu = () => {
  const menuMobile = document.querySelector('.menu2');

  if (menuMobile && menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open');
  }
};

// UserProfile

const userProfile = () => alert('Estamos em manutenção!');

// Creating Rollover from the news tab

const addEvents = (element, path) => {
  if (element) {
    element.addEventListener('mouseover', function () {
      this.src = IMAGE_PATHS[path][firstImage];
    });

    element.addEventListener('mouseout', function () {
      this.src = IMAGE_PATHS[path][secondImage];
    });
  }
};

const image = document.querySelector('#img1');
addEvents(image, 'image');

const image2 = document.querySelector('#img2');
addEvents(image2, 'image2');

const image3 = document.querySelector('#img3');
addEvents(image3, 'image3');

const image4 = document.querySelector('#img4');
addEvents(image4, 'image4');
