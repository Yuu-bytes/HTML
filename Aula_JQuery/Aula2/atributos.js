$(document).ready(function(){

    $("#tamanho").click(function(){
        $("#imagem").attr("width","800");
        $("#imagem").attr("height","600");
    })
    $("#original").click(function(){
        $("#imagem").attr("width","default");
        $("#imagem").attr("height","default");
    })

    $("#mudaimg").click(function(){
        $("#imagem").attr("src","https://i.picsum.photos/id/400/640/480.jpg");
        $("#imagem").attr("title","Planta");

    })
});