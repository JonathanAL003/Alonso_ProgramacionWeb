<?php
if(isset($_POST["submit"])){
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if($check !== false){
        $image = $_FILES['image']['tmp_name'];
        $imgContent = addslashes(file_get_contents($image));
        $idP=$_POST['var1'];

         //Credenciales Mysql
         $Host = 'localhost';
         $Username = 'root';
         $Password = '';
         $dbName = 'bdweb';
         
         //Crear conexion con la abse de datos
         $db = new mysqli($Host, $Username, $Password, $dbName);

        $insert = $db->query("UPDATE productos SET Imagen='$imgContent' WHERE Id_Producto=$idP");
        if($insert)
        {
            echo "File uploaded successfully.";
        }
        else
        {
            echo "File upload failed, please try again.";
        } 
    }else
    {
        echo "Please select an image file to upload.";
    }
}
?>