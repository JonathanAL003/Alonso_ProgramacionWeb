<?php
        $idP=$_POST['idProducto'];
        $NombreProducto=$_POST['nombreproducto'];
        $categoria=$_POST['categoria'];
        $descripcion=$_POST['descripcion'];
        $precio=$_POST['precio'];
        $valoracion=$_POST['valoracion'];
        printf("Valoracion: %s", $valoracion);
        $ingredientes=$_POST['ingredientes'];
        $costo=$_POST['costo'];
        $minutos=$_POST['minutos'];

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
            $consultaSql= 
            "INSERT INTO producto(
                                Id_Producto,
                                Nombre, 
                                Categoria, 
                                Descripcion, 
                                Precio, 
                                Valoracion, 
                                Ingredientes, 
                                Costo,
                                Minutos
                                ) 
            values('$idP','$NombreProducto', '$categoria', '$descripcion', '$precio', '$valoracion', '$ingredientes','$costo','$minutos')";
            $consulta = $con -> prepare($consultaSql);
            $consulta -> execute();
            $consulta->closeCursor();
            
            } catch(PDOException $e) {
                echo "Error de consulta a la base de datos";
                echo $e->getMessage();
            }   


// $obj = json_decode($_POST["json"], false);

// try{
//     $con = new PDO('mysql:host=localhost;dbname=bdweb', 'root', '');
// } catch(PDOException $e){
//     echo $e->getMessage();
//     exit();
// } 

// $sql = "INSERT INTO producto (Id_Producto, Nombre, Categoria, Descripcion, Precio, Valoracion, Ingredientes,Costo,Minutos) VALUES (\"$obj->Id_Producto\", \"$obj->Nombre\", \"$obj->Categoria\", \"$obj->Descripcion\", \"$obj->Precio\", \"$obj->Valoracion\",\"$obj->Ingredientes\", \"$obj->Costo\",\"$obj->Minutos\)";
    
// $consultaA = $con -> prepare($sql);
// $consultaA -> execute();
// $resultado = $consultaA->fetch(PDO::FETCH_ASSOC);
// $consultaA -> closeCursor();

// $resultadoJSON = json_encode($resultado);
// echo $sql;

?>
