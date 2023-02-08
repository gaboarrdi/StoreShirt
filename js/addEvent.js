const IMAGE_PATHS = {
  image: ['./IMG/gost1.png', './IMG/foto1.png'],
  image: ['./IMG/gost1.png', './IMG/foto1.png'],
  image2: ['./IMG/gost2.png', './IMG/foto2.png'],
  image3: ['./IMG/gost3.png', './IMG/foto3.png'],
  image4: ['./IMG/gost4.png', './IMG/foto4.png'],
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
