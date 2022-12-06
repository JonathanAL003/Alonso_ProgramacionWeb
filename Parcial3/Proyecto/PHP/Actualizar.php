<?php
$Id_Producto2 = $_POST['Id_Producto2'];
$Nombre2 = $_POST['Nombre2'];
$Categoria2 = $_POST['Categoria2'];
$Descripcion2 = $_POST['Descripcion2'];
$Precio2 = $_POST['Precio2'];
$Valoracion2 = $_POST['Valoracion2'];
$Ingredientes2 = $_POST['Ingredientes2'];
$Costo2 = $_POST['Costo2'];
$Minutos2 = $_POST['Minutos2'];

$hostname='localhost';
$database='bdweb'; 
$username='root';
$password='';
$port='3306';

$con = mysqli_connect($hostname,$username,$password,$database) or die("no se pudo conectar a local host");
$consulta = "UPDATE producto SET
                    Nombre = '$Nombre2', 
                    Categoria = '$Categoria2', 
                    Descripcion = '$Descripcion2', 
                    Precio = '$Valoracion2', 
                    Valoracion = '$Valoracion2', 
                    Ingredientes = '$Ingredientes2', 
                    Costo = '$Costo2', 
                    Minutos = '$Minutos2' 
                WHERE Id_Producto=$Id_Producto2";
$registros = mysqli_query($con,$consulta) or die ("Problemas con la BD");

echo ("Actualizacion Correcta");
?>
