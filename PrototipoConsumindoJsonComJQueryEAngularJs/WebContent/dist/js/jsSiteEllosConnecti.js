$(document).ready(function(){
            $("#divMenu").load("menu.html");
            $("#buttonInstitucioanl").click(function(){
                $("#divDinamic").load("institucional/institucional.html");
            });
            $("#buttonDinamic").click(function(){
                $("#divDinamic").html("<h1>NOVO TEXTO</h1>");
            });
            $("#buttonDinamic2").click(function(){
                $("#divDinamic").load("conteudo.html");
            });
            
        });