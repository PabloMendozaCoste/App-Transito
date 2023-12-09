<?php

header('Access-Control-Allow-Origin: http://localhost:8100');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-type');
header('Access-Control-Max-Age: 17280000');
header('Content-type: text/plain');


$con = mysqli_connect("localhost", "root", "", "transito") or die("No se pudo conectar a la base de datos");
?>
