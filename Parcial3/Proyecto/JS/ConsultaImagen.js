btnGetRegistro.addEventListener("click", async () => {
    var datosformulario = new FormData(document.getElementById("formulario_consulta"));
    let respuesta = await fetch("../PHP/ConsultaImagen.php", {
      method: 'POST',
      body: datosformulario
    })
  
    //document.querySelector("#Imagen").value = data.Imagen;

  });
  