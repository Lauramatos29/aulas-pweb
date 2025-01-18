function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora estamos funcionando, são: ${hora} horas`;
    if(hora >=0 && hora <12){
        //Bom dia 
        img.src="imagens/Dia.png" 
        document.body.style.background = 'rgba(7, 122, 126, 0.74)';
    }

    else if(hora >=12 && hora <18){
        //Boa tarde 
        img.src="imagens/Tarde.png" 
        document.body.style.background = 'rgba(187, 155, 7, 0.74)';
    }

    else{
        //Boa noite
        img.src="imagens/Noite.png" 
        document.body.style.background = 'rgba(90, 121, 243, 0.58)';
    }
}