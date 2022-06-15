function initMenuFixo() {
    window.addEventListener('scroll', () => {
        const menuFixo = document.querySelector('.JS-header-top-fixo');
    
        let rolagem = window.pageYOffset;
    
        if(rolagem >= 120) {
            menuFixo.classList.add('active');
        } else {
            menuFixo.classList.remove('active');
        }
    });
}

initMenuFixo();



