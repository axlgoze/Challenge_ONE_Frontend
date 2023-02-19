var asunto = document.getElementById("text");
var boton = document.querySelector("enviaForm");
var correo = document.getElementById("mail");
var cuerpo = document.getElementById("mensagem")


function verificando(){
        // console.log(correo.value)
        if(cuerpo.value== ""){
                alert("Te falta llenar un campo: Todos los campos son requeridos");
                // alert(nombre.value);
        }else{
                // alert("Mensaje enviado: "+ entrada.value)
                enviar = 'mailto:' + correo.value + '?subject='
                + asunto.value + '&body=' + cuerpo.value;
                window.location.href = enviar;
        }
}