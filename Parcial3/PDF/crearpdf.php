<?php
require('./FPDF/fpdf.php');

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];

$pdf = new FPDF();
$pdf->SetMargins(17, 17, 17);
$pdf->AddPage();


$pdf->SetFont('Arial','',10);
$pdf->SetTextColor(39,39,51);
$pdf->Cell(13,7,'Nombre:');
$pdf->Cell(60,7,' '.$nombre);
$pdf->Ln(5);
$pdf->Cell(15,7,'Telefono:');
$pdf->Cell(60,7,' '.$telefono);



$pdf->Output();
?>