let menuToggle = document.querySelector('.menu-toggle');
let menuCloseToggle = document.querySelector('.menu-close-text');

let menuOpen = false;

menuToggle.addEventListener('click', function(e) {

    if (e.target.classList.contains('menu-close-text') || e.target.classList.contains('menu-open')) {
        return;
    }

    menuToggle.classList.add('menu-open');
    menuToggle.classList.remove('hover-cursor');

    if (e.target.classList.contains('menu-open')) {
        e.preventDefault();
    }
});

menuCloseToggle.addEventListener('click', function(e) {

    menuToggle.classList.remove('menu-open');
    menuToggle.classList.add('hover-cursor');

    e.preventDefault();
});