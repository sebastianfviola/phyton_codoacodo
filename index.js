//archivo javascript
//probando cambios desde VSC


function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }
    function valida_envia()
    if (document.fvalida.email.value.length==0)
    {
        alert("Tiene que escribir un email valido");
        document.fvalida.email.focus()
                return 0;
    }
        
        

       	//el formulario se envia
           alert("Muchas gracias por enviar el formulario");
           document.fvalida.submit();

}

