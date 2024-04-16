(function () {
    const serveceButtons = document.querySelectorAll('.servise__button');
    const washPrice = document.querySelector('.wash_priece');
    const outwearPrice = document.querySelector('.outwear_priece');
    const clothesPrice = document.querySelector('.clothes_priece');
    const shoesPrice = document.querySelector('.shoes_priece');
    const pursesPrice = document.querySelector('.purses_prise');
    const homePrice = document.querySelector('.home_priece');
    const childrenPrice = document.querySelector('.children_priece');
    
    const closeStars = document.querySelectorAll('.close_slide');
    const swipers = document.querySelectorAll('.service__swiper');    
    
    serveceButtons.forEach(serveceButton => {
        serveceButton.addEventListener('click', function (){
            if(serveceButton.classList.contains('clothes__service')) {            
                clothesPrice.classList.add('active')
            } else if(serveceButton.classList.contains('shoes__service')) {            
                shoesPrice.classList.add('active');
            } else if(serveceButton.classList.contains('wash__service')) {            
                washPrice.classList.add('active');
            } else if(serveceButton.classList.contains('outwear__service')) {            
                outwearPrice.classList.add('active');
            } else if(serveceButton.classList.contains('purses__service')) {            
                pursesPrice.classList.add('active');
            } else if(serveceButton.classList.contains('home__service')) {            
                homePrice.classList.add('active');
            } else {
                childrenPrice.classList.add('active');
            }
        })
    }); 
    for (let i = 0; i < swipers.length; i++) {
        const swiper = swipers[i];    
        const closeStars = swiper.querySelectorAll('.close_slide');    
        closeStars.forEach(closeStar => {
            closeStar.addEventListener('click', () => swiper.classList.remove('active'));       
        
        })
    }
}());





