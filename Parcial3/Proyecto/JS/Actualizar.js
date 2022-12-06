$(document).ready(function() {
    document.querySelector("#btnActualizar").addEventListener("click",async() => {
    var resultado = confirm("Esta seguro de modificar los datos?");
    if (resultado === true) {
      var datosformulario = new FormData(formulario_actualizar);
    let respuesta = await fetch('../PHP/Actualizar.php', {
      method: 'POST',
      body: datosformulario
    })
    let reg = await respuesta.text();
    alert("Datos modificados correctamente");
    console.log(reg);
    Id_Producto2.value = "";
    Nombre2.value = "";
    Categoria2.value = "";
    Descripcion2.value = "";
    Precio2.value = "";
    Valoracion2.value = "";
    Ingredientes2.value = "";
    Costo2.value = "";
    Minutos2.value = "";
    } 
    else { 
      window.alert('Operacion Cancelada');
    }
});
});