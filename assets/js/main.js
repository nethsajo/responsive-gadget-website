const menuIcon = document.getElementById('hamburger-icon');
const menu = document.getElementById('menus');

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
