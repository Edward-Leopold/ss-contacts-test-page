document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burgerBtn = document.querySelector('.header__burger-button');

    if (burgerBtn && header) {
        burgerBtn.addEventListener('click', () => {
            header.classList.toggle('header_menu-open');
            document.body.classList.toggle('no-scroll');
        });
    }
});