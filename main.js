var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  prevNextButtons: false,
pageDots: false
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
  
});

// Flickity options, defaults
var options = {
    prevNextButtons: false
  };
  
  
  


  // Menu responsivo

  mostrarMenu =() => {
    let menuMobile = document.querySelector(".menu2");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }
  };

  // Perfil

  perfil= () => alert("Estamos em manutenção!")
 
  // Criando Rolover da aba novidades

  const img = document.querySelector("#img1");

  img.addEventListener("mouseover", function() {
    this.src='./IMG/gost1.png'
  });

  const imge = document.querySelector("#img1");

  img.addEventListener("mouseout", function() {
    this.src='./IMG/foto1.png'
  });

  const img2 = document.querySelector("#img2");
  img2.addEventListener("mouseover", function() {
    this.src='./IMG/gost2.png'
  });

  const imge2 = document.querySelector("#img2");
  img2.addEventListener("mouseout", function() {
    this.src='./IMG/foto2.png'
  });

  const img3 = document.querySelector("#img3");

  img3.addEventListener("mouseover", function() {
    this.src='./IMG/gost3.png'
  });

  const imge3 = document.querySelector("#img3");

  img3.addEventListener("mouseout", function() {
    this.src='./IMG/foto3.png'
  });

  const img4 = document.querySelector("#img4");

  img4.addEventListener("mouseover", function() {
    this.src='./IMG/gost4.png'
  });

  const imge4 = document.querySelector("#img4");

  img4.addEventListener("mouseout", function() {
    this.src='./IMG/foto4.png'
  });

