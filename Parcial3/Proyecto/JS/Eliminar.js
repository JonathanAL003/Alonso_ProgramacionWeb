$(document).ready(function() {
    document.querySelector("#btnEliminar").addEventListener("click",async() => {
    var id = prompt('Ingrese el Id del producto que desea eliminar', '0');
    var resultado = confirm("Esta seguro que desea eliminar los datos del producto con numero: "+id+" ?");
    if (resultado === true) {
    let respuesta = await fetch('../PHP/Eliminar.php?id='+id)
    let reg = await respuesta.text();
    alert("Datos modificados correctamente");
    console.log(reg);
    } 
    else { 
      window.alert('Operacion Cancelada');
    }
  });
});