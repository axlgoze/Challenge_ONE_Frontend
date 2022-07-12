//Haz tú validación en javascript acá
// var nombre=document.getElementById("name");
// var email=document.getElementById("mail");
// var asunto=document.getElementById("text");

var entrada = document.getElementById("mensagem");
var boton = document.querySelector("enviaForm");

function verificando(){
        if(entrada.value== ""){
                alert("Te falta llenar un campo: Todos los campos son requeridos");
                // alert(nombre.value);
        }else{
                alert("Mensaje enviado: "+ entrada.value)
        }
}