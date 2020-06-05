$(document).ready(function(){

    //utilizado no arquivo INDEX
    $("#nome").focus();

    $("#clicaaqui").click(function(){
        $("#info").text("Você digitou o seguinte nome: " + $("#nome").val() + " " + $("#sobrenome").val());
    });

    /*
    $("input").focusin(function(){
        $("#info").text("o foco está no campo nome!");
    });

    $("input").focusout(function(){
        $("#info").text("o foco saiu do campo nome!");
    });
    */
   /*

    //utilizado no arquivo SOMA

    $("#fazasoma").click(function(){
        var valora = $("#valora").val();
        var valorb = $("#valorb").val();
        var resultado = parseInt(valora) + parseInt(valorb);
        $("#resultado").text("O resultado da soma é: " + resultado);
    });
    */

    $("#calcular").click(function(){
        var valorA = $("#valora").val();
        var valorB = $("#valorb").val();
        var resultado;
        if ($("#operacao").val() == 1){
            var resultado = parseInt(valorA) + parseInt(valorB);
        } else if ($("#operacao").val() == 2){
            var resultado = parseInt(valorA) - parseInt(valorB);
        } else if ($("#operacao").val() == 3){
            var resultado = parseInt(valorA) * parseInt(valorB);
        } else {
            var resultado = parseInt(valorA) / parseInt(valorB);
        }
        $("#resultado").text("O resultado é: " + resultado);
    });

});