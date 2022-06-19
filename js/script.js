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
// ATIVAÇÃO DO MENU COM CLICK
// ===================================
function initMenuClick(){
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
}
initMenuClick();

// ===================================
// ATIVAÇÃO DO MENU COM SCROLL
// ===================================
function initMenuScroll() {
    const menuFixo = document.querySelectorAll('.js-header-top-fixo .js-menu');
    const menu = document.querySelectorAll('.js-menu');
    const section = document.querySelectorAll('.js-section');
    
    section.forEach((item, index) => {
    
        window.addEventListener('scroll', () => {
            const itemTop = item.getBoundingClientRect().top.toFixed(2);
            const itemBottom = item.getBoundingClientRect().bottom.toFixed(2);
            const mediaTela = window.innerHeight * 0.3;
    
            
    
            if(itemTop <= mediaTela && itemBottom > mediaTela) {
                menu.forEach((item) => {
                    item.classList.remove('active');
                });
    
                menuFixo[index].classList.add('active');
            } else {
                menuFixo[index].classList.remove('active');
            }
        });
    });
}
initMenuScroll();

// ===================================
// SCROLL SUAVE
// ===================================
function initScrollSuave() {
    const menu = document.querySelectorAll('.js-menu[href^="#"]');

    menu.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            
            const href = item.getAttribute('href');
            const section = document.querySelector(href);
            const itemTop = section.offsetTop - 40;

            window.scrollTo({
                top: itemTop,
                behavior: 'smooth',
                
            });
        });
    });
}
initScrollSuave();

// ===================================
// BOTÃO TOP - SCROLL SUAVE
// ===================================
function initBtnTop() {
    const btnTopo = document.querySelector('.js-btn-topo');
    const body = document.querySelector('body');
    
    btnTopo.addEventListener('click', (event) => {
        event.preventDefault();
    
        const topo = body.offsetTop;
    
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    });
}
initBtnTop();

// ===================================
// BOTÃO SAIBA MAIS - SCROLL SUAVE
// ===================================
function initBtnSaibaMais() {
    const btnSaibaMais = document.querySelector('.js-btn-saiba-mais');
    const beneficios = document.querySelector('#beneficios');
    
    btnSaibaMais.addEventListener('click', (event) => {
        event.preventDefault();
    
        const topo = beneficios.offsetTop;
    
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        })
    
    });
}
initBtnSaibaMais();

// ===================================
// MODAL CONTATO
// ===================================
function initModalContato() {
    const btnContato = document.querySelector('.js-btn-contato');
    const modalContato = document.querySelector('.js-modal-contato');
    const btnModalFechar = document.querySelector('.js-btn-fechar');
    const btnConhecer = document.querySelector('.js-btn-conhecer');
    const listInput = document.querySelectorAll('.js-s11-input');

    btnContato.addEventListener('click', (event) => {
        event.preventDefault();
        modalContato.classList.add('active');
    });

    btnModalFechar.addEventListener('click', (event) => {
        event.preventDefault();
        modalContato.classList.remove('active');
    });

    btnConhecer.addEventListener('click', (event) => {
        event.preventDefault();
        const arrayLista = new Array();
        

        listInput.forEach((item) => {

            // console.log(item.value);

            if(item.value === '') {
                console.log('campo vazio!');
            } else {
                arrayLista.push(item.value);
            }

        });

        const lista = {
            nome: arrayLista[0],
            email: arrayLista[1],
            celular: arrayLista[2],
            empresa: arrayLista[3],
            cargo: arrayLista[4],
        }

        console.log(arrayLista);
        console.log(lista);

    });
}
initModalContato();

// ===================================
// ACCORDION FAQ
// ===================================
function initAccordion() {
    const perguntas = document.querySelectorAll('.js-s9-pergunta');
    
    perguntas.forEach((item) => {
        item.addEventListener('click', () => {
    
            item.nextElementSibling.classList.toggle('active');
            item.classList.toggle('active');
    
        });
    });
}
initAccordion();

// ===================================
// MOVE SATELITE
// ===================================
function initMoveSatelite() {
    const satelite = document.querySelector('.js-satelite');
    
    window.addEventListener('mousemove', (event) => {
        let X = -event.screenX / 10;
        let Y = -event.screenY / 10;
    
        satelite.style.transform = `translate(${X}px, ${Y}px)`;
    })
}
initMoveSatelite();
