  $(document).ready(function() {
    document.querySelector("#btnGetRegistro").addEventListener("click",async() => {
      var id=prompt('Ingrese el id del producto: ', '1');
      let respuesta = await fetch('../PHP/Consulta.php?id='+ id)
      let reg =await respuesta.json();
      console.log(reg)
      Id_Producto.value = "";
      Nombre.value = "";
      Categoria.value = "";
      Descripcion.value = "";
      Precio.value = "";
      Valoracion.value = "";
      Ingredientes.value = "";
      Costo.value = "";
      Minutos.value = "";
      Id_Producto.value = reg.Id_Producto;
      Nombre.value = reg.Nombre
      Categoria.value = reg.Categoria;
      Descripcion.value = reg.Descripcion;
      Precio.value = reg.Precio;
      Valoracion.value = reg.Valoracion;
      Ingredientes.value = reg.Ingredientes;
      Costo.value = reg.Costo;
      Minutos.value = reg.Minutos;
    });
    });


// btnGetRegistro.addEventListener("click", async () => {
//   var datosformulario = new FormData(document.getElementById("formulario_consulta"));
//   let respuesta = await fetch("../PHP/Consulta.php", {
//     method: 'POST',
//     body: datosformulario
//   })

//   let data = await respuesta.json();
//   console.log(data);
//   document.getElementById("Id_Producto").value = data.Id_Producto;
//   document.getElementById("Nombre").value = data.Nombre;
//   document.getElementById("Categoria").value = data.Categoria;
//   document.getElementById("Descripcion").value = data.Descripcion;
//   document.getElementById("Precio").value = data.Precio;
//   document.getElementById("Valoracion").value = data.Valoracion;
//   document.getElementById("Ingredientes").value = data.Ingredientes;
//   document.getElementById("Costo").value = data.Costo;
//   document.getElementById("rangeval").value = data.Minutos;
// });