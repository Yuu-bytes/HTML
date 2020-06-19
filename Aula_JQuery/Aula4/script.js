$(document).ready(function(){

    $("#abre").button();

    $("#minhajanela").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        height: 400,
        show: {
            effect: "shake",
            duration: 500
        },
        hide: {
            effect: "explode",
            duration: 500
        },
        buttons: {
            "Gravar": function(){
                $("#minhajanela").dialog("close");
            },
            "Cancelar": function(){
                $(this).dialog("close");
            }
        }
    });
    $("#abre").click(function(){    
        $("#minhajanela").dialog("open");
});

    $("#acordion").accordion();

});