var scrollPosition = window.scrollY;
var logoContainer = document.getElementsByClassName('js-logo');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        logoContainer.classList.add('c-logo--scrolled');
    } else {
        logoContainer.classList.remove('c-logo--scrolled');
    }

});
