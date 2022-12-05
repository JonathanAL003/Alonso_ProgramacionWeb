// $(document).ready(function() {

//   document.getElementById("btnRegistrar").addEventListener("click",function(){

//     let idProducto = document.getElementById("idProducto").value;
//     var nombre = document.getElementById("nombreproducto").value;
//     var categoria = document.getElementById("categoria").value;
//     var descripcion = document.getElementById("descripcion").value;
//     var precio = document.getElementById("precio").value;
//     var ingredientes = document.getElementById("ingredientes").value;
//     var costo = document.getElementById("costo").value;
//     var valoracion = document.getElementById("valoracion").value;
//     var minutos = document.getElementById("minutos").value;
    
//     $.post("../PHP/Registrar.php",{var1:idProducto,var2:nombre,var3:categoria,var4:descripcion,var5:precio,var7:ingredientes,var8:costo,var9:valoracion,var10:minutos});
//     //,function(data){},'json');
    
//     limpiar();
//    });

//    function limpiar(){
//     $('#idProducto').val("");
//     $('#nombreproducto').val("");
//     $('#categoria').val("");
//     $('#descripcion').val("");
//     $('#precio').val("");
//     $('#valoracion').val("");
//     $('#ingredientes').val("");
//     $('#costo').val("");
//     $('#minutos').val("");
//   }
// });


window.onload = function() {
  //Agregar
  $('#btnRegistrar').click(function() {
    agregar();
});

function agregar() {
  idProducto = $('#idProducto').val();
  nombre = $('#nombreproducto').val();
  categoria = $('#categoria').val();
  descripcion = $('#descripcion').val();
  precio = $('#precio').val();
  ingredientes = $('#ingredientes').val();
  costo = $('#costo').val();
  valoracion = $('#valoracion').val();
  minutos = $('#minutos').val();

  if (($('#idProducto').val() || $('#nombreproducto').val() || $('#categoria').val() || $('#descripcion').val() || $('#precio').val() || $('#ingredientes').val() || $('#costo').val() || $('#valoracion').val() || $('#minutos').val()) != "") 
  {

    objjson = '{"Id_Producto":"' + idProducto + '", "Nombre":"' + nombre + '", "Categoria":"' + categoria + '", "Descripcion":"' + descripcion + '", "Precio":"' + precio + '", "Valoracion":"' + valoracion + '", "Ingredientes":"' + ingredientes + '", "Costo":"' + costo + '", "Minutos":"' + minutos + '"}';

    $.post('../PHP/Registrar.php', { json: objjson }, function(data) {
      console.log(data);
    });
  } else {
    //swal("Falta de rellenar campos");
  }
  }
}

