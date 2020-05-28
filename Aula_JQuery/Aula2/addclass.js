$(document).ready(function(){

    $("#adiciona").click(function(){
        $("#paragrafo").addClass("meuparagrafo");
    });

    $("#remove").click(function(){
        $("#paragrafo").removeClass("meuparagrafo");
    });
});