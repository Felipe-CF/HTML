

function criarConta(){
    window.location.href = 'cadastro.html';
}

function removePlaceholder(id){
    var input = document.getElementById(id)
    input.removeAttribute('placeholder')

}

function addPlaceholder(id){
    var input = document.getElementById(id)
    if (id == 'nome'){
        var place = "Crie seu nome no DAMA"
    } 
    else if (id == 'senha'){
        var place = "Digite sua senha"
    } 
    else if (id == 'conf-senha'){
        var place = "Confirme sua senha"
    } 

    if (input && input.value == ''){
        input.setAttribute('placeholder', place);
    }

}


function visibilidadeSenha(id){
    const input = document.getElementById(id)

    if (input.type == 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}
