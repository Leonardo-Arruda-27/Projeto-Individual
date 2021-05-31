function validarNome() {
    let usuario = idNome.value;

    if (usuario.length >= 3) {
      idNome.style.border = '2px solid #04d361'
    }
    else if (usuario == '') {
        idNome.style.border = '2px solid #999'
    }
    else {
        idNome.style.border = '2px solid #eb3e3e'
    }
}

function validarSenha(){
    let senha = idSenha.value;

    if(senha.length >= 5){
        idSenha.style.border = '2px solid #04d361'
    }else if(senha.length >= 3){
        idSenha.style.border = '2px solid #FFFF00'
    }else if(senha == ''){
        idSenha.style.border = '2px solid #999'
    }else{
        idSenha.style.border = '2px solid #eb3e3e'
    }
}

function validarResponsavel() {
    let responsavel = idResponsavel.value;
    
    if(responsavel.length > 3){
        idResponsavel.style.border = '2px solid #04d361'
    }else if(responsavel == ''){
        idResponsavel.style.border = '2px solid #999'
    }else{
        idResponsavel.style.border = '2px solid #eb3e3e'
    }
}

function validarEmail() {
    var email = idEmail.value;
    var validaArroba = email.indexOf('@');
    var validarPonto = email.indexOf('.com');

    if(validaArroba > 0 && validarPonto > 0){
        idEmail.style.border = '2px solid #04d361'
    }else if(email == ''){
        idEmail.style.border = '2px solid #999'
    }else{
        idEmail.style.border = '2px solid #eb3e3e'
    }

}