var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});

// Flickity options, defaults
var options = {
  prevNextButtons: false,
};

// Responsive Menu

const showMenu = () => {
  let menuMobile = document.querySelector(".menu2");

  if (menuMobile && menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
  } else {
    menuMobile.classList.add("open");
  }
};

// UserProfile

const userProfile = () => alert("Estamos em manutenção!");

// Creating Rollover from the news tab

const addEvents = (element, path1, path2) => {
  if (element) {
    element.addEventListener("mouseover", function () {
      this.src = path1;
    });

    element.addEventListener("mouseout", function () {
      this.src = path2;
    });
  }
};

const image = document.querySelector("#img1");

addEvents(image, "./IMG/gost1.png", "./IMG/foto1.png");

const image2 = document.querySelector("#img2");

addEvents(image2, "./IMG/gost2.png", "./IMG/foto2.png");

const image3 = document.querySelector("#img3");
addEvents(image3, "./IMG/gost3.png", "./IMG/foto3.png");

const image4 = document.querySelector("#img4");
addEvents(image4, "./IMG/gost4.png", "./IMG/foto4.png");
