<?php
$servidor = "localhost";
$basedatos = "bdweb";
$usuario = "root";
$password = "";
$id = $_GET['id'];
$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar con la BD");
$consulta = "DELETE FROM producto WHERE Id_Producto=$id";
$registros = mysqli_query($con,$consulta) or die ("Problemas con la BD");
echo ($id);
?>