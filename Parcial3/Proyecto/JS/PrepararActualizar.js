$(document).ready(function() {
    document.querySelector("#btnPrepararDatos").addEventListener("click",async() => {
      var id=prompt('Ingrese el id del producto: ', '1');
      let respuesta = await fetch('../PHP/Consulta.php?id='+ id)
      let reg =await respuesta.json();
      console.log(reg)
      Id_Producto2.value = "";
      Nombre2.value = "";
      Categoria2.value = "";
      Descripcion2.value = "";
      Precio2.value = "";
      Valoracion2.value = "";
      Ingredientes2.value = "";
      Costo2.value = "";
      Minutos2.value = "";
      Id_Producto2.value = reg.Id_Producto;
      Nombre2.value = reg.Nombre;
      Categoria2.value = reg.Categoria;
      Descripcion2.value = reg.Descripcion;
      Precio2.value = reg.Precio;
      Valoracion2.value = reg.Valoracion;
      Ingredientes2.value = reg.Ingredientes;
      Costo2.value = reg.Costo;
      Minutos2.value = reg.Minutos;
    });
    });