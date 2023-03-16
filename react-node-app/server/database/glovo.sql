-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2023 a las 20:55:06
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

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
-- Estructura de tabla para la tabla `linea_pedido`
--

CREATE TABLE `linea_pedido` (
  `id` int(11) NOT NULL,
  `idpedido` int(11) DEFAULT NULL,
  `idproducto` int(11) DEFAULT NULL,
  `cantidad` decimal(2,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `linea_pedido`
--

INSERT INTO `linea_pedido` (`id`, `idpedido`, `idproducto`, `cantidad`) VALUES
(1, 6, 3, '1'),
(2, 6, 2, '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id`, `name`) VALUES
(1, 'Menu Americana'),
(2, 'Menu Supermercado'),
(3, 'Menu Pizza'),
(4, 'Menu Desayuno'),
(5, 'Menu Árabe'),
(6, 'Menu Mexicana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `ID` int(11) NOT NULL,
  `IDUSUARIO` int(11) DEFAULT NULL,
  `FECHA` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`ID`, `IDUSUARIO`, `FECHA`) VALUES
(6, 1, '2023-03-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `name`, `description`, `price`, `img`) VALUES
(1, 'Happy Meal', 'Menu Infantil (Hamburguesa o Nuggets)', '4.20', 'https://res.cloudinary.com/glovoapp/w_250,h_250,c_fill,b_transparent,f_auto,q_auto,dpr_1.0/Products/roc7vp2bqfhnzbiv8grb'),
(2, 'Nuggets', 'Cubo de nuggets con 25 unidades', '11.85', 'https://res.cloudinary.com/glovoapp/w_250,h_250,c_fill,b_transparent,f_auto,q_auto,dpr_1.0/Products/ufaklisogwxgzhanes9d'),
(3, 'Patatas Fritas', 'Caja de patatas fritas grandes', '3.85', 'https://res.cloudinary.com/glovoapp/w_250,h_250,c_fill,b_transparent,f_auto,q_auto,dpr_1.0/Products/thobvxqqjbkxjc6jimcd'),
(4, 'Mocca Blanco', 'Café, intenso chocolate blanco, leche y hielo, recubierto con nata montada', '5.90', 'https://res.cloudinary.com/glovoapp/w_250,h_250,c_fill,b_transparent,f_auto,q_auto,dpr_1.0/Products/no6kajo7qbdqhud2jbxl'),
(5, 'Java Chip', 'Café, intenso chocolate, chips de chocolate, leche, hielo y chocolate', '5.90', 'https://res.cloudinary.com/glovoapp/w_250,h_250,c_fill,b_transparent,f_auto,q_auto,dpr_1.0/Products/ozqlmf0vzychtvbklkx4'),
(6, 'Cheesecake', 'Cheesecake de queso con mermelada de frambuesa', '5.40', 'https://res.cloudinary.com/glovoapp/w_250,h_250,c_fill,b_transparent,f_auto,q_auto,dpr_1.0/Products/gdje8pt452ymmsf26nwn'),
(7, 'Pizza Gluten', 'Con queso 100% Mozzarella, base de salsa de tomate.', '11.69', 'https://res.cloudinary.com/glovoapp/w_250,h_250,c_fill,b_transparent,f_auto,q_auto,dpr_1.0/Products/juq8ob7izilokuafa1yh');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_menu`
--

CREATE TABLE `producto_menu` (
  `idMenu` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `producto_menu`
--

INSERT INTO `producto_menu` (`idMenu`, `idProducto`) VALUES
(1, 1),
(1, 2),
(1, 3),
(3, 7),
(4, 4),
(4, 5),
(4, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurant`
--

CREATE TABLE `restaurant` (
  `id` int(11) NOT NULL,
  `name` varchar(75) DEFAULT NULL,
  `category` varchar(75) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `type` varchar(75) DEFAULT NULL,
  `credit_card` tinyint(1) DEFAULT NULL,
  `wifi` tinyint(1) DEFAULT NULL,
  `outdoor_seating` tinyint(1) DEFAULT NULL,
  `star` int(1) DEFAULT NULL,
  `img` text DEFAULT NULL,
  `idMenu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `restaurant`
--

INSERT INTO `restaurant` (`id`, `name`, `category`, `address`, `type`, `credit_card`, `wifi`, `outdoor_seating`, `star`, `img`, `idMenu`) VALUES
(1, 'McDonald\'s', 'Americana', 'C, Av. de San Juan de la Peña, 80, 50015 Zaragoza', 'Comida Rápida', 1, 1, 1, 3, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/x5curfadsolebipl5iyh', 1),
(2, 'Dia', 'Supermercado', 'Av. de Salvador Allende, 51, 50015 Zaragoza', 'Supermercado todo el día', 1, 0, 0, 5, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/ly8eyexldlgqntcb0uyt', 2),
(3, 'Burger King', 'Americana', 'C. de María Zambrano, 35, 50018 Zaragoza', 'Comida Rápida', 1, 0, 0, 3, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/ie0obr3ckjemazfybypz', 1),
(4, 'Telepizza', 'Pizza', 'C. de Gertrudis Gómez de Avellaneda, 53, 50018 Zaragoza', 'Comida y Cena', 1, 0, 1, 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/redheyfvhbgvedsdbmkb', 3),
(5, 'Starbucks', 'Desayuno', 'C. del Coso, 15, 50003 Zaragoza', 'Desayuno y Merienda', 1, 0, 0, 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/rol78tegsyjdf3yjcjma', 4),
(6, 'Dunkin', 'Desayuno', 'C. de María Zambrano, 35, Local 0.70, 50015 Zaragoza', 'Desayuno y Merienda', 1, 0, 0, 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/wap0jg2pkxnl5v0nj75b', 4),
(7, 'King Doner Kebab', 'Árabe', 'C. de María Zayas Sotomayor, 14, 50018 Zaragoza', 'Comida y Cena', 1, 0, 1, 3, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/cqpw59aux0wmftouz1dc', 5),
(8, 'Taco Bell', 'Mexicana', 'C. de María Zambrano, 35, 50018 Zaragoza', 'Comida y Cena', 1, 0, 0, 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/rxbvf1ntbypud38z0dmy', 6),
(9, 'Papa Johns', 'Pizza', 'P.º de Echegaray y C., 2, 50002 Zaragoza', 'Comida y Cena', 1, 1, 0, 4, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/gvzgrpc77bgmmqd1lbcf', 3),
(10, 'Goiko', 'Americana', 'C. de S. Miguel, 7, 50001 Zaragoza', 'Comida y Cena', 1, 1, 0, 3, 'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/gdifyfyb3yhp8akmf5pv', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(75) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `firstName`, `lastName`, `email`, `address`, `password`) VALUES
(1, 'Carlos', 'Crespo Cambra', 'a22939@svalero.com', 'C/Violeta Parra, 9', '123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `linea_pedido`
--
ALTER TABLE `linea_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_LINEA_PEDIDO_PEDIDO` (`idpedido`),
  ADD KEY `FK_LINEA_PEDIDO_PRODUCTO` (`idproducto`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_PEDIDO_USUARIO` (`IDUSUARIO`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto_menu`
--
ALTER TABLE `producto_menu`
  ADD PRIMARY KEY (`idMenu`,`idProducto`),
  ADD KEY `FK_PRODUCTO_MENU_PRODUCTO` (`idProducto`);

--
-- Indices de la tabla `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `linea_pedido`
--
ALTER TABLE `linea_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `linea_pedido`
--
ALTER TABLE `linea_pedido`
  ADD CONSTRAINT `FK_LINEA_PEDIDO_PEDIDO` FOREIGN KEY (`idpedido`) REFERENCES `pedido` (`ID`),
  ADD CONSTRAINT `FK_LINEA_PEDIDO_PRODUCTO` FOREIGN KEY (`idproducto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `FK_PEDIDO_USUARIO` FOREIGN KEY (`IDUSUARIO`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `producto_menu`
--
ALTER TABLE `producto_menu`
  ADD CONSTRAINT `FK_PRODUCTO_MENU_MENU` FOREIGN KEY (`idMenu`) REFERENCES `menu` (`id`),
  ADD CONSTRAINT `FK_PRODUCTO_MENU_PRODUCTO` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
