btnGetRegistro.addEventListener("click", async () => {
  var datosformulario = new FormData(document.getElementById("formulario"));
  let respuesta = await fetch("./Consulta.php", {
    method: 'POST',
    body: datosformulario
  })

  let data = await respuesta.json();
  console.log(data);
  document.getElementById("idProducto").value = data.Id_Producto;
  document.getElementById("nombreproducto").value = data.Nombre;
  document.getElementById("categoria").value = data.Categoria;
  document.getElementById("descripcion").value = data.Descripcion;
  document.getElementById("precio").value = data.Precio;
  document.getElementById("input-1").value = data.Valoracion;
  document.getElementById("ingredientes").value = data.Ingredientes;
  document.getElementById("costo").value = data.Costo;
  document.getElementById("rangeval").value = data.Minutos;
});


  //document.querySelector("#rutaimagen").value = data.Imagen;