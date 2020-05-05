function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(fano.value)
        //var fsex = document.getElementsByTagName('radsex')
        //var genero = fsex[0].checked ? 'homem':'mulher'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'homem/crianca.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'homem/adolescente.jpg')

        } else if (idade < 50) {
            img.setAttribute('src', 'homem/adulto.jpg')

        } else {
            img.setAttribute('src', 'homem/idoso.jpg')

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa com ${idade} anos.`
        res.appendChild(img)
    }
}