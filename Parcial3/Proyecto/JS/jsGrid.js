$(document).ready(function(){
 
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost/Alonso_ProgramacionWeb/Parcial3/Proyecto/PHP/Grid.php",
        method: "GET",
        "headers": {
            "Accept": ""/""
        }
    };
 
    $.ajax(settings).done(function(response){
        console.log(response);
        let tabla = JSON.parse(response);
        console.log(tabla);
    


    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
 
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
 
        data: tabla,

        fields: [
            { name: "Id_Producto", type: "number", width: 30, validate: "required" },
            { name: "Nombre", type: "text", width: 100 },
            { name: "Categoria", type: "text", with:100},
            { name: "Descripcion", type: "text", with: 100 },
            { name: "Precio", type: "number", width: 50 },
            { name: "Imagen", type: "text", width: 100 },
            { name: "Valoracion", type: "number", width: 50 },
            { name: "Ingredientes", type: "text", width: 100 },
            { name: "Costo", type: "number", width: 50 },
            { name: "Minutos", type: "number", width: 50 },
            ]
        });
    });   
});