function tabuada(){
    var numero = document.getElementById('numero')
    var tabela = document.getElementById('tabela')
    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        var num = Number(numero.value)
        tabela.innerHTML = ''
    for(i = 0; i <= 10; i++){
        var item = document.createElement('option')
        item.text = `${num} X ${i} = ${num*i}`
        item.value = `tab${i}`
        tabela.appendChild(item)
    }
}
}