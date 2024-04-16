(function () {
    const menu = document.querySelector('.header__menu-list');
    const closeButton = document.querySelector('.close-button');
    const burger = document.querySelector('.burger');
    
    burger.addEventListener('click', () => {
        menu.classList.add('active');
        closeButton.classList.add('active');
        burger.classList.add('hidden');
    })
    
    closeButton.addEventListener('click', () => {
        menu.classList.remove('active');
        closeButton.classList.remove('active');
        burger.classList.remove('hidden');
    })
}());