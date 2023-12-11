-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2023 at 11:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `transito`
--

-- --------------------------------------------------------

--
-- Table structure for table `conductores`
--

CREATE TABLE `conductores` (
  `id` int(11) NOT NULL,
  `licencia` varchar(20) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `conductores`
--

INSERT INTO `conductores` (`id`, `licencia`, `nombre`, `apellido`, `fecha_nacimiento`, `direccion`, `telefono`, `foto`) VALUES
(1, '1234567890', 'Juan', 'Pérez', '1990-05-15', 'Calle 123, Ciudad', '809-123-4567', 'foto1.jpg'),
(2, '9876543210', 'María', 'Gómez', '1985-08-20', 'Avenida XYZ, Pueblo', '829-987-6543', 'foto2.jpg'),
(3, '5678901234', 'Carlos', 'Rodríguez', '1982-03-10', 'Calle ABC, Villa', '809-567-8901', 'foto3.jpg'),
(4, '0123456789', 'Laura', 'Hernández', '1995-11-25', 'Avenida 456, Poblado', '829-012-3456', 'foto4.jpg'),
(5, '3456789012', 'Pedro', 'Santos', '1988-07-12', 'Calle XYZ, Ciudad', '809-345-6789', 'foto5.jpg'),
(6, '7890123456', 'Ana', 'Martínez', '1992-01-30', 'Avenida 789, Villa', '829-789-0123', 'foto6.jpg'),
(7, '2345678901', 'José', 'Fernández', '1980-09-05', 'Calle DEF, Pueblo', '809-234-5678', 'foto7.jpg'),
(8, '8901234567', 'Sofía', 'García', '1998-04-18', 'Avenida 567, Ciudad', '829-890-1234', 'foto8.jpg'),
(9, '4567890123', 'Miguel', 'López', '1987-06-22', 'Calle GHI, Villa', '809-456-7890', 'foto9.jpg'),
(10, '6789012345', 'Isabel', 'Díaz', '1993-12-08', 'Avenida 678, Poblado', '829-678-9012', 'foto10.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `multas`
--

CREATE TABLE `multas` (
  `id` int(11) NOT NULL,
  `cedula_infractor` varchar(15) NOT NULL,
  `placa_vehiculo` varchar(10) DEFAULT NULL,
  `motivo_multa` varchar(255) NOT NULL,
  `foto_evidencia` varchar(255) DEFAULT NULL,
  `comentario` text DEFAULT NULL,
  `nota_voz` varchar(255) DEFAULT NULL,
  `latitud` decimal(10,6) NOT NULL,
  `longitud` decimal(10,6) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `multas`
--

INSERT INTO `multas` (`id`, `cedula_infractor`, `placa_vehiculo`, `motivo_multa`, `foto_evidencia`, `comentario`, `nota_voz`, `latitud`, `longitud`, `fecha`) VALUES
(1, '12345678901', 'ABC123', 'Sin licencia (ART 29)', 'ruta/foto1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'voz1.mp3', 18.735700, -70.162700, '2023-10-30'),
(2, '23456789012', 'XYZ456', 'Licencia vencida (ART 40-41)', 'ruta/foto2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'voz2.mp3', 19.480200, -70.669300, '2023-10-30'),
(3, '34567890123', 'DEF789', 'Sin matrícula (ART 27-3)', 'ruta/foto3.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'voz3.mp3', 18.417600, -69.924600, '2023-10-31'),
(4, '45678901234', 'GHI012', 'Sin casco (ART 135C)', 'ruta/foto4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'voz4.mp3', 19.766900, -70.517400, '2023-10-31'),
(5, '56789012345', 'JKL678', 'Obstrucción al tránsito (ART 88)', 'ruta/foto5.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'voz5.mp3', 19.059500, -70.151000, '2023-11-01'),
(6, '3456', '34567', 'sdfg', 'sfdgh', 'sdfgh', 'sdfg', 9999.999999, 9999.999999, '2023-12-10'),
(7, '3456', '2345678', 'Sin licencia', '', 'sdafgh', '', 3456.000000, 9999.999999, '2023-12-11'),
(8, '324789', '5657869', 'Sin licencia', '', 'Lorem ipsu', '', 9999.999999, 9999.999999, '2023-12-11');

-- --------------------------------------------------------

--
-- Table structure for table `tarifasmultas`
--

CREATE TABLE `tarifasmultas` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `monto` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tarifasmultas`
--

INSERT INTO `tarifasmultas` (`id`, `tipo`, `monto`) VALUES
(1, 'Sin licencia (ART 29)', 1000.00),
(2, 'Licencia vencida (ART 40-41)', 1000.00),
(3, 'Sin matrícula (ART 27-3)', 1000.00),
(4, 'Sin casco (ART 135C)', 1000.00),
(5, 'Obstrucción al tránsito (ART 88)', 1000.00),
(6, 'Viraje en u (ART 76-C)', 1000.00),
(7, 'Lanzar desperdicios en vías publicas (ART 130)', 1000.00),
(8, 'Niños menores en el asiento delantero (ART 106)', 1667.00),
(9, 'Uso del celular (ART 1 ley 143-01)', 1667.00),
(10, 'Luz roja (ART 96-B-1)', 1667.00),
(11, 'Sin cinturón (ART 161)', 1667.00);

-- --------------------------------------------------------

--
-- Table structure for table `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id` int(11) NOT NULL,
  `placa` varchar(10) NOT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `año` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehiculos`
--

INSERT INTO `vehiculos` (`id`, `placa`, `marca`, `modelo`, `color`, `año`) VALUES
(1, 'ABC123', 'Toyota', 'Corolla', 'Rojo', 2019),
(2, 'XYZ456', 'Honda', 'Civic', 'Azul', 2020),
(3, 'DEF789', 'Ford', 'Fiesta', 'Negro', 2018),
(4, 'GHI012', 'Chevrolet', 'Malibu', 'Blanco', 2021),
(5, 'JKL678', 'Nissan', 'Sentra', 'Gris', 2017);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conductores`
--
ALTER TABLE `conductores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `multas`
--
ALTER TABLE `multas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tarifasmultas`
--
ALTER TABLE `tarifasmultas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conductores`
--
ALTER TABLE `conductores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `multas`
--
ALTER TABLE `multas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tarifasmultas`
--
ALTER TABLE `tarifasmultas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
