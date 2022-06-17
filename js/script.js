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
// ANIMAÇÃO COM SCROLL
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


// ===================================
// SCROLL SUAVE
// ===================================
const menu = document.querySelectorAll('.js-menu');

menu.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Uso o event para saber o nome do botão clicado
        const id = event.target.hash; // Ex: #faq

        // Crio uma NodeList usando o nome clicado como seletor
        const target = document.querySelectorAll(`[href^="${id}"]`);

        // Removo todos as classes actives de todos os menus
        menu.forEach((item) => {
            item.classList.remove('active')
        });

        // Uso apenas a NodeList criada para ativar a classe
        target.forEach((item) => {
            item.classList.add('active');
        });

    });
});


