//archivo javascript

function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           //document.fvalida.nombre.focus()
           document.getElementById("nombre").focus();
           return 0;
    }

       	//el formulario se envia
           alert("Muchas gracias por enviar el formulario");
           document.fvalida.submit();

}