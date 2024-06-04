

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
    else if(id === 'cnpj-input'){
        var place = "XX.XXX.XXX/XXXX-XX"
    } 
    else if(id === 'email'){
        var place = "exemplo@email.com"
    } 
    else if(id === 'contato'){
        var place = "84 9XXXX-XXXX"
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

function mostrarCampos(value){

    if (value !== 'anonimo'){
        var elementos = document.querySelectorAll('.hidden')

        elementos.forEach(function(elemento){
            elemento.classList.remove('hidden');
            elemento.classList.add('visivel');
        });

    }

    else{
        var elementos = document.querySelectorAll('.visivel')
        elementos.forEach(function(elemento){
            elemento.classList.remove('visivel');
            elemento.classList.add('hidden');
        });

    }
    
}