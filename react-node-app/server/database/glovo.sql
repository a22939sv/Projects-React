-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-03-2023 a las 10:38:54
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `glovo`
--
CREATE DATABASE IF NOT EXISTS `glovo` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE `glovo`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurant`
--

CREATE TABLE `restaurant` (
  `id` int(11) NOT NULL,
  `name` varchar(75) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `category` varchar(75) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `star` int(1) DEFAULT NULL,
  `img` text COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `restaurant`
--

INSERT INTO `restaurant` (`id`, `name`, `category`, `star`, `img`) VALUES
(1, 'McDonald\'s', 'Americana', 3, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/x5curfadsolebipl5iyh'),
(2, 'Dia', 'Supermercado', 5, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/ly8eyexldlgqntcb0uyt'),
(3, 'Burger King', 'Americana', 3, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/ie0obr3ckjemazfybypz'),
(4, 'Telepizza', 'Pizza', 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/redheyfvhbgvedsdbmkb'),
(5, 'Starbucks', 'Desayuno', 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/rol78tegsyjdf3yjcjma'),
(6, 'Dunkin', 'Desayuno', 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/wap0jg2pkxnl5v0nj75b'),
(7, 'King Doner Kebab', 'Árabe', 3, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/cqpw59aux0wmftouz1dc'),
(8, 'Taco Bell', 'Mexicana', 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/rxbvf1ntbypud38z0dmy'),
(9, 'Papa Johns', 'Pizza', 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/gvzgrpc77bgmmqd1lbcf'),
(10, 'Goiko', 'Americana', 3, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/gdifyfyb3yhp8akmf5pv');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
