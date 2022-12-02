<?php
//$idProducto = $_POST['idProducto'];
$hostname='localhost';
$database='bdweb'; 
$username='root';
$password='';
$port='3306';

try {
    $con = mysqli_connect($hostname,$username,$password,$database) or die("No se pudo conectar al localhost");
}catch(PDOException $e) {
    echo "Error en la conexion a la BD";
    echo $e->getMessage();
    exit();
}

try {
    $consulta ="select * from producto where Id_Producto=1";
    $registro = mysqli_query($con,$consulta) or die("Problemas en el select");
    $resultado = mysqli_fetch_all($registro, MYSQLI_ASSOC);
    mysqli_close($con);
} catch (\Throwable $th) {
    echo "Error en la consulta a BD";
    echo $e->getMessage();
}


echo json_encode($resultado);
?>