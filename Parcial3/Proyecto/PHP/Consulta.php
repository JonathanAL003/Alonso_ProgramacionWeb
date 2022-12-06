<?php
//$id = $_POST['idProducto'];
$hostname='localhost';
$database='bdweb'; 
$username='root';
$password='';
$port='3306';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
}catch(PDOException $e) {
    echo "Error en la conexion a la BD";
    echo $e->getMessage();
    exit();
}

try {
    $id = $_GET['id'];
    $consultaSql ="SELECT Id_Producto,Nombre,Categoria,Descripcion,Precio,Valoracion,Ingredientes,Costo,Minutos FROM producto WHERE Id_Producto=$id";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
}catch (PDOException $e) {
    echo "Error en la consulta a BD";
    echo $e->getMessage();
}


echo json_encode($resultado);
?>