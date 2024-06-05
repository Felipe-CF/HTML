function visibilidadeSenha(id){
    const input = document.getElementById(id)

    if (input.type == 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

function confirmar(){
    var main = document.getElementById('main')
    
    main.classList.add('embassado')
}

function removePlaceholder(id){
    var input = document.getElementById(id)
    input.removeAttribute('placeholder')

}

function addPlaceholder(id){
    var input = document.getElementById(id)
    if (id == 'nome'){
        var place = "Nome de usuário no DAMA"
    } 
    else if (id == 'senha'){
        var place = "Digite sua senha"
    } 
   
    if (input && input.value == ''){
        input.setAttribute('placeholder', place);
    }
}
