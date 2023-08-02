  function toggleMenu() {
    const menuSidebar = document.getElementById('menuSidebar');
    const content = document.querySelector('.content');

    menuSidebar.classList.toggle('menu-open');
    content.classList.toggle('menu-open');
  }