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

const image = document.querySelector("#img1");

if (image) {
  image.addEventListener("mouseover", function () {
    this.src = "./IMG/gost1.png";
  });

  image.addEventListener("mouseout", function () {
    this.src = "./IMG/foto1.png";
  });
}
const image2 = document.querySelector("#img2");

if (image2) {
  image2.addEventListener("mouseover", function () {
    this.src = "./IMG/gost2.png";
  });

  image2.addEventListener("mouseout", function () {
    this.src = "./IMG/foto2.png";
  });
}

const image3 = document.querySelector("#img3");

if (image3) {
  image3.addEventListener("mouseover", function () {
    this.src = "./IMG/gost3.png";
  });

  image3.addEventListener("mouseout", function () {
    this.src = "./IMG/foto3.png";
  });
}
const image4 = document.querySelector("#img4");

if (image4) {
  image4.addEventListener("mouseover", function () {
    this.src = "./IMG/gost4.png";
  });

  image4.addEventListener("mouseout", function () {
    this.src = "./IMG/foto4.png";
  });
}
