$(document).ready(function() {
  document.querySelector("#btnGetRegistro").addEventListener("click",async() => {
    var id=prompt('Ingrese el id del producto: ', '1');
    let respuesta = await fetch('../PHP/ConsultaImagen.php?id='+ id)
    let reg =await respuesta.json();
    console.log(reg)
  });
});