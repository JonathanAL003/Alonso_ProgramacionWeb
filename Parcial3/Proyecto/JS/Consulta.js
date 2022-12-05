btnGetRegistro.addEventListener("click", async () => {
  var datosformulario = new FormData(document.getElementById("formulario_consulta"));
  let respuesta = await fetch("../PHP/Consulta.php", {
    method: 'POST',
    body: datosformulario
  })

  let data = await respuesta.json();
  console.log(data);
  document.getElementById("Id_Producto").value = data.Id_Producto;
  document.getElementById("Nombre").value = data.Nombre;
  document.getElementById("Categoria").value = data.Categoria;
  document.getElementById("Descripcion").value = data.Descripcion;
  document.getElementById("Precio").value = data.Precio;
  document.getElementById("Valoracion").value = data.Valoracion;
  document.getElementById("Ingredientes").value = data.Ingredientes;
  document.getElementById("Costo").value = data.Costo;
  document.getElementById("rangeval").value = data.Minutos;
});