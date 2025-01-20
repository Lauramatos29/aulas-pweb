function verificar(){
    var anoN = window.document.getElementById('anoNasc');
    var anoAt = new Date();
    var res = window.document.getElementById('res');

    if(anoN.value.length == 0 || Number(anoN.value)> anoAt.getFullYear()){
        window.alert('[Erro] Verifique os dados.')

    } else{
        var sex = document.getElementsByName('sexo')
        var genero = '';
        var ano1 = Number(anoN.value);
        var ano2 = anoAt.getFullYear();
        var idade = ano2-ano1;
    }

    if(sex[0].checked){
        genero = 'Masculino';

    } else if(sex[1].checked){
        genero = 'Feminino';
    }

    res.innerHTML = `O paciente é do sexo ${genero} e tem ${idade} anos.`
}