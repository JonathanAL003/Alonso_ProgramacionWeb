<?php
// include("Consulta.php");

//         $idP=$_POST['var1'];
//         $NombreProducto=$_POST['var2'];
//         $categoria=$_POST['var3'];
//         $descripcion=$_POST['var4'];
//         $precio=$_POST['var5'];
//         $valoracion=$_POST['var7'];
//         $ingredientes=$_POST['var8'];
//         $costo=$_POST['var9'];
//         $minutos=$_POST['var10'];


//         try {
//             $consultaSql= 
//             "INSERT INTO producto(
//                                 Id_Producto,
//                                 Nombre, 
//                                 Categoria, 
//                                 Descripcion, 
//                                 Precio, 
//                                 Valoracion, 
//                                 Ingredientes, 
//                                 Costo,
//                                 Minutos
//                                 ) 
//             values('$idP','$NombreProducto', '$categoria', '$descripcion', '$precio', '$valoracion', '$ingredientes','$costo'','$minutos')";
//             $consulta = $con -> prepare($consultaSql);
//             $consulta -> execute();
//             $consulta->closeCursor();
            
//             } catch(PDOException $e) {
//                 echo "Error de consulta a la base de datos";
//                 echo $e->getMessage();
//             }   


$obj = json_decode($_POST["json"], false);

try{
    $con = new PDO('mysql:host=localhost;dbname=bdweb', 'root', '');
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
} 

$sql = "INSERT INTO producto (Id_Producto, Nombre, Categoria, Descripcion, Precio, Valoracion, Ingredientes,Costo,Minutos) VALUES (\"$obj->Id_Producto\", \"$obj->Nombre\", \"$obj->Categoria\", \"$obj->Descripcion\", \"$obj->Precio\", \"$obj->Valoracion\",\"$obj->Ingredientes\", \"$obj->Costo\",\"$obj->Minutos\)";
    
$consultaA = $con -> prepare($sql);
$consultaA -> execute();
$resultado = $consultaA->fetch(PDO::FETCH_ASSOC);
$consultaA -> closeCursor();

$resultadoJSON = json_encode($resultado);
echo $sql;

?>
