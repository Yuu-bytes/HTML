$(document).ready(function(){

    $("#titulo1").css("color","green");
    $("#titulo2").css("color","blue");

    $("#link1").click(function(){
        $("#titulo1").css("color","red").css("border","thin black solid");
        $("#titulo1").css("background-color","yellow");
    });
    $("#link2").click(function(){
        $("#titulo2").css("color","green").css("border","thin black solid");
        $("#titulo2").css("background-color","black");
    });

    $("#mudaT1").click(function(){
        $("#titulo1").text("Nova escrita do título 1");
    });
    $("#mudaT2").click(function(){
        $("#titulo2").text("Escrita alternativa do titulo 2");
    });
    $("#aplicahtml").click(function(){
        $("#par1").html("Texto em <b>negrito</b> e texto em <i>Itálico</i>");
    });
    $("#fadeout").click(function(){
        $("#titulo1").fadeOut(3000); //hide também esconde
    });
    $("#fadein").click(function(){
        $("#titulo1").fadeIn(2000); //show dai revela
    });
});