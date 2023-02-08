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
