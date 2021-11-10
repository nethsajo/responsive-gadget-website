const menuIcon = document.querySelector('#hamburger-icon');
const icon = document.querySelector('#icon');
const menu = document.querySelector('#menus');
const navItem = document.querySelectorAll('#nav__item');
const preload = document.querySelector('#preload');

window.addEventListener('DOMContentLoaded', () => {
  menuIcon.addEventListener('click', () => {
    if (icon.classList.contains('bx-menu')) {
      icon.classList.remove('bx-menu');
      icon.classList.add('bx-x');
      menu.classList.add('active');
    } else {
      icon.classList.add('bx-menu');
      icon.classList.remove('bx-x');
      menu.classList.remove('active');
    }
  });

  const linkPressed = () => {
    menu.classList.remove('active');
    icon.classList.add('bx-menu');
    icon.classList.remove('bx-x');
  };

  navItem.forEach((item) => item.addEventListener('click', linkPressed));

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 320) {
      icon.classList.add('bx-sm');
      icon.classList.remove('bx-md');
    } else {
      icon.classList.add('bx-md');
      icon.classList.remove('bx-sm');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    if (menu.className.includes('active')) {
      menu.classList.remove('active');
      icon.classList.add('bx-menu');
      icon.classList.remove('bx-x');
    }
  }
});

window.addEventListener('scroll', () => {
  const scrollTop = document.querySelector('#scrollTop');
  if (this.scrollY >= 560) {
    scrollTop.classList.add('show-scrollTop');
  } else {
    scrollTop.classList.remove('show-scrollTop');
  }
});

window.addEventListener('load', () => {
  setTimeout(() => {
    preload.style.display = 'none';
  }, 500);
});

//Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 1500,
  delay: 300,
});

sr.reveal('.hero__text-container, .news__heading-text', { origin: 'left' });
sr.reveal('.hero__image-container, .news__heading-image', { origin: 'right' });
sr.reveal('.review-details-container, .news-details', {
  origin: 'bottom',
  interval: 300,
});
sr.reveal('.deals-details-container', {
  origin: 'right',
  interval: 300,
  delay: 500,
});
sr.reveal('.contact__form-wrapper button', { origin: 'bottom' });
