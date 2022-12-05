<?php
    session_start();
    $user = $_POST['usuario'];
    $pasw = $_POST['password'];
    $loc = $_POST['ubic'];

    if (isset($_SESSION['usuario'])) 
    {
        printf("<b>RENAUDANDO SESION</b> <br><br>");
        printf("Bienvenido de nuevo ".$_SESSION['usuario']);
    } 
    else {
        $_SESSION['usuario'] = $user;
        printf("<b>NUEVA SESIÓN</b><br><br>");
        printf("Bienvenido: %s", $user);
        printf("<br><br>Ubicacion: %s", $loc);
    }
?>