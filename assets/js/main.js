const menuIcon = document.querySelector('#hamburger-icon');
const menu = document.querySelector('#menus');
const preload = document.querySelector('#preload');

window.addEventListener('DOMContentLoaded', () => {
  menuIcon.addEventListener('click', () => {
    if (menu.className.includes('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    if (menu.className.includes('active')) {
      menu.classList.remove('active');
    }
  }
});

window.addEventListener('load', () => {
  preload.style.display = 'none';
});
