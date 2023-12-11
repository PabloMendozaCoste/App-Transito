<?php
include "./config.php";

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(200);
    exit();
}

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


$q = mysqli_query($con, "INSERT INTO multas (cedula_infractor, placa_vehiculo, motivo_multa, foto_evidencia, comentario, nota_voz, latitud, longitud, fecha) VALUES ('$cedulaInfractor', '$placaVehiculo', '$motivoMulta', '$fotoEvidencia', '$comentario', '$notaVoz', $latitud, $longitud, '$fecha')");

if ($q) {
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
    $message['error'] = mysqli_error($con);

    $message['query'] = "INSERT INTO multas (cedula_infractor, placa_vehiculo, motivo_multa, foto_evidencia, comentario, nota_voz, latitud, longitud, fecha) VALUES ('$cedulaInfractor', '$placaVehiculo', '$motivoMulta', '$fotoEvidencia', '$comentario', '$notaVoz', $latitud, $longitud, '$fecha')";
}
echo json_encode($message);
?>
