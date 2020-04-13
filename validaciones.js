$(document).ready(function(){

    document.getElementById("cedulaCP").addEventListener("keypress",verificarNumeros);
    document.getElementById("nombreCP").addEventListener("keypress",verificarLetras);
    document.getElementById("telefonoCP").addEventListener("keypress",verificarNumeros);


     function verificarLetras(e) {
 
       if(e.key.match(/[a-z\s]/i)===null) {
       e.preventDefault();
        }
    }


    function verificarNumeros(e) {
 
        // comprovamos con una expresion regular que el caracter pulsado sea
        // una letra, numero o un espacio
        if(e.key.match(/[0-9\s]/i)===null) {
 
            // Si la tecla pulsada no es la correcta, eliminado la pulsación
            e.preventDefault();
        }
    }

})