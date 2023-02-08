const IMAGE_PATHS = {
  image: ['./img/gost1.png', './img/foto1.png'],
  image2: ['./img/gost2.png', './img/foto2.png'],
  image3: ['./img/gost3.png', './img/foto3.png'],
  image4: ['./img/gost4.png', './img/foto4.png'],
};

const firstImage = 0;
const secondImage = 1;

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

export { addEvents };
