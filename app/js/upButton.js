(function () {
    const upButton = document.querySelector('.up-button');

    window.addEventListener('scroll', () => {    
        if (scrollY > 800) {
            upButton.classList.add('active');
        }
        if (scrollY < 800) {
            upButton.classList.remove('active');
        }
    })
    
    upButton.addEventListener('click', goTop)
    
    function goTop() {
        if (window.pageYOffset > 50) {
            window.scrollBy(0, -25);
            setTimeout(goTop, 0)
        }      
    }
}());

