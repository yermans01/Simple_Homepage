const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu_pages');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('show');
    menuIcon.classList.toggle('active');
});