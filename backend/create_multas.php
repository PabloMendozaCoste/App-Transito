<?php
include "./config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$cedulaInfractor = $data['cedula_infractor'];
$placaVehiculo = $data['placa_vehiculo'];
$motivoMulta = $data['motivo_multa'];
$fotoEvidencia = $data['foto_evidencia'];
$comentario = $data['comentario'];
$notaVoz = $data['nota_voz'];
$latitud = $data['latitud'];
$longitud = $data['longitud'];
$fecha = $data['fecha'];
$hora = $data['hora'];

$q = mysqli_query($con, "INSERT INTO multas (cedula_infractor, placa_vehiculo, motivo_multa, foto_evidencia, comentario, nota_voz, latitud, longitud, fecha, hora) VALUES ('$cedulaInfractor', '$placaVehiculo', '$motivoMulta', '$fotoEvidencia', '$comentario', '$notaVoz', $latitud, $longitud, '$fecha', '$hora')");

if ($q) {
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
    $message['error'] = mysqli_error($con);
}
echo json_encode($message);
?>
