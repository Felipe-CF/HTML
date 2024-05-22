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


const deuses = [
    ["aModal", "aImg", "aTxt", "arsenal-art.png", "aFechar"], 
    ["vModal", "vImg", "vTxt", "valkarya-art.png", "vFechar"],
    ["tModal", "tImg", "tTxt", "thwor-art.png", "tFechar"],
    ["ahModal", "ahImg", "ahTxt", "aharadak-art.png", "ahFechar"]

]

function cliqueModal(id, img){
     let deus = deuses[id]
    const janelaModal = document.getElementById(deus[0]);
    const txtModal = document.getElementById(deus[2]);
    const imgModal = document.getElementById(deus[1])
    const btnFechar = document.getElementById(deus[4]);
    
    imgModal.src=deus[3];
    imgModal.alt=img.alt

    janelaModal.classList.remove('escondeJanelaModal');
    janelaModal.classList.add('mostraJanelaModal');
    
    btnFechar.onclick=function(){
        janelaModal.classList.remove('mostraJanelaModal');
        janelaModal.classList.add('escondeJanelaModal');
    }
}


function divindade(){
    var nome = prompt("Qual o nome da divindade?");
    var deuses = document.getElementById("novosdeuses");
    deuses = deuses.getElementsByTagName("a");
    deuses.click();

}