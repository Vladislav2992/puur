(function () {
    const modal = document.querySelector('.modal__window');
    const modalForm = document.querySelector('.modal__form');
    const closeModalButtons = document.querySelectorAll('.modal__close');
    const getPromo = document.querySelector('#get_promo');
    
    
    function createModal(text) {
        modal.classList.add('active');
        const modalContent = modal.querySelector('.modal__inner');
        modalContent.innerHTML = text;
    }
    
    getPromo.addEventListener('click', (event) =>  {
        event.preventDefault();
        modalForm.classList.add('active')
    })
    
    
    closeModalButtons.forEach(closeModal => {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            modalForm.classList.remove('active');            
        })        
    })
    
    const submitButton = document.querySelector('.submit-button');
    
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
    
        createModal(`<h2>БЛАГОДАРИМ ЗА ПОДПИСКУ!</h2>
        <p>Мы ценим вашу доверие и уверены,
        что наши регулярные обновления
        и информация будут полезны для вас.</p>
        `)
    })
        
    const articleItems = document.querySelectorAll('.item')
    
    articleItems.forEach(item => {
        item.addEventListener('click', () => {
            let src = item.style.backgroundImage.slice(5);
            createModal(`<img src="${src}">`)
        })
    });
}());



