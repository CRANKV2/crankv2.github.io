<script>
  function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuContainer = document.querySelector('.menu-container');

    if (menu.classList.contains('expanded')) {
      menu.classList.remove('expanded');
      menuContainer.classList.remove('slide-in');
    } else {
      menu.classList.add('expanded');
      menuContainer.classList.add('slide-in');
    }
  }
</script>