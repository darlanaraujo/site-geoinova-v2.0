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
function initAnimaScroll() {
    const itensMove = document.querySelectorAll('.js-move');
    itensMove[0].classList.add('active');
    
    window.addEventListener('scroll', (event) => {
        itensMove.forEach((item, index) => {
    
            const distancia = item.getBoundingClientRect().top;
            const mediaTela = window.innerHeight * 0.9;
    
            if(index != 0) {
                if(distancia < mediaTela) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active')
                }
            }
        });
    });
}

initAnimaScroll();




