const elementos = document.querySelectorAll('[data-anima]'); // contem os article animados
const animacaoClass='animacao';

function animaScroll() {
    const topoPaginaNaJanela = window.scrollY + ((window.innerHeight * 3) / 4);

    elementos.forEach(function(elemento) {
        const retangulo = elemento.getBoundingClientRect(); // 
        const secaoAtual = elemento.closest('section'); // Encontra a seção pai do elemento
        const secaoTopo = secaoAtual.getBoundingClientRect().top + window.scrollY; // Posição superior da seção

        // Verifica se o elemento está dentro da seção atual e se está dentro da área visível da janela
        if (topoPaginaNaJanela > retangulo.top && secaoTopo <= topoPaginaNaJanela) {
            elemento.classList.add(animacaoClass); // Adiciona a animação
        } else {
            elemento.classList.remove(animacaoClass); // Remove a animação
        }
    });
}


if(elementos.length){ // se existir elementos para animar
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}