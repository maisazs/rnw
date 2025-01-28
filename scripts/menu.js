//menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const menuLinks = mobileMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('menu-hidden')) {
    mobileMenu.classList.remove('menu-hidden');
    mobileMenu.classList.add('menu-visible');
  } else {
    mobileMenu.classList.add('menu-hidden');
    mobileMenu.classList.remove('menu-visible');
  }
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.add('menu-hidden');
  mobileMenu.classList.remove('menu-visible');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('menu-hidden');
    mobileMenu.classList.remove('menu-visible');
  });
});