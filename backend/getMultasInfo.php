<?php
include "./config.php";
$consulta = "SELECT latitud, longitud, cedula_infractor, placa_vehiculo FROM multas";
$resultado = $conn->query($consulta);

if ($resultado) {
    // Procesa los resultados
    foreach ($resultado as $fila) {
        $latitud = $fila['latitud'];
        $longitud = $fila['longitud'];
        $cedulaInfractor = $fila['cedula_infractor'];
        $placaVehiculo = $fila['placa_vehiculo'];

        // Puedes hacer algo con estos datos, como mostrarlos en la interfaz de usuario
        echo "Latitud: $latitud, Longitud: $longitud, Cédula del Infractor: $cedulaInfractor, Placa del Vehículo: $placaVehiculo";
    }
} else {
    echo "Error en la consulta: " . $conn->errorInfo()[2];
}
?>