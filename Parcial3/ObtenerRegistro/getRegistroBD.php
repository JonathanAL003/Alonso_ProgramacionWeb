<?php
$registro["IDProducto"]= "0001";
$registro["Nombre"] = "Hamburguesa a la parilla";
$registro["Cetegoria"] = "A la parilla";
$registro["Descripcion"] = "Una deliciosa hamburguesa a nuestra parilal receta original";
$registro["Precio"] = "$65";
$registro["Imagen"] = "img\Parilla\Whopper.png";
$registro["Valoracion"] = "4.5";
$registro["Ingredientes"] = "Carne, Pan, Jitomate, Lechuga, Cebolla, Queso";
$registro["Costo"] = "$40";
$registro["Minutos"] = "15";

echo json_encode($registro);
?>