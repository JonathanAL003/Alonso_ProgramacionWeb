$(document).ready(function() {
    document.querySelector("#btnSubirImagen").addEventListener("click",async() => {
    var datosformulario = new FormData(MiForm);
    let respuesta = await fetch('../PHP/RegistrarImagen.php', {
      method: 'POST',
      body: datosformulario
    })
    let reg = await respuesta.text();
    alert("Imagen subida  correctamente");
    idProducto3.Value="";
});
});