<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js"></script>
</head>
<body onload=display_ct7();>
<?php
    if(isset($_COOKIE['ultimavisita'])){
        printf("Su ultima vista fue: %$",$_COOKIE['ultimaVisita']);

        $fechaHoy = date('Y/m/d H:i:S');
        $info = "Jonathan Alonso Lara #19100141,Instituto Tecnologico de Nuevo Laredo, Tamps, MX";
        setcookie("ultimaVisita",$fechaHoy,time() + (7 * 24 * 60));
        setcookie("info", $info);
    }
    else {
        printf("No se encontro cookie de ultima visita<br><br>");

        $fechaHoy = date('Y/m/d H:i:s');
        $siguienteSemana = time() + (7 * 24 * 60 * 60);
        $fechaExpira = date('Y/m/d H:i:s', $siguienteSemana);
        $info = "Jonathan Alonso Lara #19100141,Instituto Tecnologico de Nuevo Laredo, Tamps, MX";

        echo 'Fecha de Creacion de Cookie: ' .$fechaHoy.'<br>';
        echo 'Fecha de Vencimiento de Cookie: ' .$fechaExpira.'<br>';
        echo 'Informacion de cookie: ' .$info.'<br>';

        setcookie("ultimaVisita",$fechaHoy,time() + (7 * 24 * 60 * 60));
        setcookie("info", $info);
    }
?>
<div class="contenedor">
        <div id="encabezado" class="caja"><span id='ct7'></span></div>
</div>

</body>
</html>

