const menuFixo = document.querySelector('.JS-header-top-fixo');
const rolagem = window.innerHeight;

function menuTopo() {
    if(rolagem >= 120) {
        menuFixo.classList.add('active');
    } else {
        menuFixo.classList.remove('active');
    }
}

// window.addEventListener('scroll', menuTopo);



console.log(rolagem);