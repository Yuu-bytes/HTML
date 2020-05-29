$(document).ready(function(){

    $("#adiciona1").click(function(){
        $("#paragrafo").removeClass();
        $("#paragrafo").addClass("meuparagrafo");
    });

    $("#adiciona2").click(function(){
        $("#paragrafo").removeClass();
        $("#paragrafo").addClass("meuparagrafo2");
    });

    $("#remove").click(function(){
        $("#paragrafo").removeClass();
    });
});