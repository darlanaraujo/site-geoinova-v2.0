// ===================================
// MENU FIXO
// ===================================

function initMenuFixo() {
    window.addEventListener('scroll', () => {
        const menuFixo = document.querySelector('.js-header-top-fixo');
    
        let rolagem = window.pageYOffset;
    
        if(rolagem >= 150) {
            menuFixo.classList.add('active');
        } else {
            menuFixo.classList.remove('active');
        }
    });
}

initMenuFixo();

// ===================================
// ANIMAÇÃO SEÇÃO QUEM SOMOS
// ===================================



