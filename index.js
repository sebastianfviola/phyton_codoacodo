//archivo javascript

function valida_envia(){
    //valido el nombre
    let x = document.forms["fvalida"]["nombre"].value;
if (x == "") {
  alert("Debe ingresar su nombre");
  return false;
}
let y = document.forms["fvalida"]["email"].value;
if (y == "") {
  alert("Debe ingresar su email");
  return false;
}

let z = document.forms["fvalida"]["message"].value;
if (z == "") {
  alert("Debe ingresar un mensaje");
  return false;
}
        
       	//el formulario se envia
           alert("Muchas gracias por enviar el formulario");
           document.fvalida.submit();

}


