const btnGetRegistro = document.querySelector(".btnGetRegistro");
const formulario = document.querySelector(".formulario");

btnGetRegistro.addEventListener("click", async () => {
  respuesta = await fetch("./getRegistroBD.php");
  data = await respuesta.json();
  console.log(data);
  document.querySelector("#idProducto").value = data.IDProducto;
  document.querySelector("#nombreproducto").value = data.Nombre;
  document.querySelector("#categoria").value = data.Categoria;
  document.querySelector("#descripcion").value = data.Descripcion;
  document.querySelector("#precio").value = data.Precio;
  document.querySelector("#rutaimagen").value = data.Imagen;
  document.querySelector("#input-1").value = data.Valoracion;
  document.querySelector("#ingredientes").value = data.Ingredientes;
  document.querySelector("#costo").value = data.Costo;
  document.querySelector("#rangeval").value = data.Minutos;
});