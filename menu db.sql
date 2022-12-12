-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2022 at 07:51 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pesanin`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorymenus`
--

CREATE TABLE `categorymenus` (
  `id` int(11) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorymenus`
--

INSERT INTO `categorymenus` (`id`, `category`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'food', 'ada', '2022-10-13 07:13:43', '2022-10-13 07:13:43'),
(2, 'drink', 'ada', '2022-10-13 07:13:50', '2022-10-13 07:13:50'),
(3, 'dessert', 'ada', '2022-10-13 07:13:56', '2022-10-13 07:13:56');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `nameMenu` varchar(150) NOT NULL,
  `image` varchar(255) NOT NULL,
  `category` varchar(150) NOT NULL,
  `description` varchar(255) NOT NULL,
  `rating` int(6) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `nameMenu`, `image`, `category`, `description`, `rating`, `price`, `discount`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) VALUES
(1, 'chicken kecap', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/c1.png?alt=media&token=7833205c-e542-4dc9-8411-1c087b03acdb', '1', 'most popular in jakarta', 5, '25000', '0', NULL, NULL, '2022-10-13 06:54:58', '2022-10-13 07:31:38'),
(2, 'ayam goren tepung', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/c4.png?alt=media&token=fb1f0edf-159e-4e9e-9323-43235714358e', '1', 'most popular in jakarta', 5, '18000', '0', NULL, NULL, '2022-10-13 06:56:55', '2022-10-13 07:32:53'),
(3, 'chicken otsuki', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/c6.png?alt=media&token=89b3452f-dbcd-4556-951c-1e47b61bb074', '1', 'most popular in jakarta', 5, '28000', '0', NULL, NULL, '2022-10-13 06:58:34', '2022-10-13 07:34:01'),
(4, 'meat stew', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/cu2.png?alt=media&token=73a6d741-d7ec-43dc-ad3b-4f14f1682ad3', '1', 'most popular in jakarta', 5, '20000', '0', NULL, NULL, '2022-10-13 07:00:46', '2022-10-13 07:34:58'),
(5, 'gulai ayam', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/cu4.png?alt=media&token=480cddd8-65ce-44d6-8d22-84035b96294c', '1', 'most popular in jakarta', 5, '35000', '0', NULL, NULL, '2022-10-13 07:02:53', '2022-10-13 07:35:59'),
(6, 'chicken potato', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/c7.png?alt=media&token=0de25a94-f753-4214-8c91-a07febd38b60', '1', 'most popular in jakarta', 5, '25000', '0', NULL, NULL, '2022-10-13 07:05:13', '2022-10-13 07:36:57'),
(7, 'gulai octopus', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/cu6.png?alt=media&token=6e875538-9ac1-4aec-a360-b752472b4c5a', '1', 'most popular in jakarta', 5, '32900', '0', NULL, NULL, '2022-10-13 07:07:24', '2022-10-13 07:37:56'),
(8, 'soyabean gulai', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/cu1.png?alt=media&token=31236054-a4ee-42d7-a1f2-708d977459f1', '1', 'most popular in jakarta', 5, '20000', '0', NULL, NULL, '2022-10-13 07:10:00', '2022-10-13 07:38:55'),
(9, 'red bull', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/d1.png?alt=media&token=b788212e-4387-4698-add1-3f01392071f4', '2', 'most popular in jakarta', 5, '11200', '0', NULL, NULL, '2022-10-13 07:11:32', '2022-10-13 07:40:11'),
(10, 'pepsi', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/d2.png?alt=media&token=64378f72-da90-4717-ae26-0745d128964b', '2', 'most popular in jakarta', 5, '21300', '0', NULL, NULL, '2022-10-13 07:14:14', '2022-10-13 07:40:50'),
(11, 'energy', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/d3.png?alt=media&token=52dc0168-4fe0-420e-a81c-7bd4edaa4031', '2', 'most popular in jakarta', 5, '10300', '0', NULL, NULL, '2022-10-13 07:41:40', '2022-10-13 07:41:40'),
(12, 'water blue', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/d4.png?alt=media&token=a11630f6-db1a-4883-8c98-fb95e2184c63', '2', 'most popular in jakarta', 5, '17800', '0', NULL, NULL, '2022-10-13 07:44:54', '2022-10-13 07:44:54'),
(13, 'sprite', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/d5.png?alt=media&token=dc12992a-3980-4b9b-a4d9-003997254ca0', '2', 'most popular in jakarta', 5, '17800', '0', NULL, NULL, '2022-10-13 07:47:10', '2022-10-13 07:47:10'),
(14, 'fanta', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/d6.png?alt=media&token=6dc104af-a1d5-4af2-a039-2c8b273e42e8', '2', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 07:47:51', '2022-10-13 07:47:51'),
(15, 'mango sago', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/d7.png?alt=media&token=119f3801-d10a-4199-a287-6dd4cf313e08', '2', 'most popular in jakarta', 5, '21000', '0', NULL, NULL, '2022-10-13 07:49:16', '2022-10-13 07:49:16'),
(16, 'fanta', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/d8.png?alt=media&token=74df6e20-19d2-428e-b677-ac1de4dba038', '2', 'most popular in jakarta', 5, '12000', '0', NULL, NULL, '2022-10-13 07:49:59', '2022-10-13 07:49:59'),
(17, 'strawberries', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f1.png?alt=media&token=55a23e5f-0359-4a1a-a593-6e421722a6e5', '3', 'most popular in jakarta', 5, '12000', '0', NULL, NULL, '2022-10-13 07:53:40', '2022-10-13 07:53:40'),
(18, 'watermelons', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f10.png?alt=media&token=c95a4a74-bc07-4441-a6a7-c3dd66110051', '3', 'most popular in jakarta', 5, '10000', '0', NULL, NULL, '2022-10-13 08:11:26', '2022-10-13 08:11:26'),
(19, 'pineapple', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f2.png?alt=media&token=4a68d1cf-408f-4948-b5d7-9bf4a053912e', '3', 'most popular in jakarta', 5, '12800', '0', NULL, NULL, '2022-10-13 08:12:29', '2022-10-13 08:12:29'),
(20, 'grape', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f3.png?alt=media&token=a914373f-23dd-4ae4-b578-1ac51a947864', '3', 'most popular in jakarta', 5, '8000', '0', NULL, NULL, '2022-10-13 08:13:47', '2022-10-13 08:13:47'),
(21, 'ice strawberry', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/i7.png?alt=media&token=c52ed066-024a-47d1-b4ee-e50faf3e28c4', '3', 'most popular in jakarta', 5, '24500', '0', NULL, NULL, '2022-10-13 08:17:04', '2022-10-13 08:17:04'),
(22, 'ice cream cone', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/i3.png?alt=media&token=53f97615-ca5b-4df4-b4f8-7c76ebb6da9e', '3', 'most popular in jakarta', 5, '18000', '0', NULL, NULL, '2022-10-13 08:22:30', '2022-10-13 08:22:30'),
(23, 'ice chococrunch', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/i1.png?alt=media&token=5bcd774f-1a55-47ef-8d68-8ca286e7f771', '3', 'most popular in jakarta', 5, '20000', '0', NULL, NULL, '2022-10-13 08:26:19', '2022-10-13 08:26:19'),
(25, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 08:53:18', '2022-10-13 08:53:18'),
(26, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:40:26', '2022-10-13 09:40:26'),
(27, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:40:26', '2022-10-13 09:40:26'),
(28, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:41:56', '2022-10-13 09:41:56'),
(29, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:41:56', '2022-10-13 09:41:56'),
(30, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:42:58', '2022-10-13 09:42:58'),
(31, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:42:58', '2022-10-13 09:42:58'),
(32, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:54:08', '2022-10-13 09:54:08'),
(33, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:54:08', '2022-10-13 09:54:08'),
(34, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:54:21', '2022-10-13 09:54:21'),
(35, 'banana', 'https://firebasestorage.googleapis.com/v0/b/restaurantapp-84be2.appspot.com/o/f9.png?alt=media&token=29920b87-195c-4587-8b98-091149f0b809', '3', 'most popular in jakarta', 5, '16700', '0', NULL, NULL, '2022-10-13 09:54:21', '2022-10-13 09:54:21');

-- --------------------------------------------------------

--
-- Table structure for table `merchants`
--

CREATE TABLE `merchants` (
  `id` int(11) NOT NULL,
  `merchant` varchar(150) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `owner` varchar(150) DEFAULT NULL,
  `contact` int(13) DEFAULT NULL,
  `join_date` datetime DEFAULT NULL,
  `link_qr` varchar(100) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderitems`
--

CREATE TABLE `orderitems` (
  `id` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `menuId` int(11) DEFAULT NULL,
  `qty` int(3) DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderitems`
--

INSERT INTO `orderitems` (`id`, `orderId`, `menuId`, `qty`, `amount`, `createdAt`, `updatedAt`) VALUES
(1, 3, 4, 1, NULL, '2022-10-17 05:14:00', '2022-10-17 05:14:00'),
(2, 3, 4, 1, NULL, '2022-10-17 05:14:00', '2022-10-17 05:14:00'),
(3, 3, 4, 1, NULL, '2022-10-17 06:34:52', '2022-10-17 06:34:52'),
(4, 3, 4, 1, NULL, '2022-10-17 06:34:52', '2022-10-17 06:34:52'),
(5, 3, 4, 1, NULL, '2022-10-17 06:36:47', '2022-10-17 06:36:47'),
(6, 3, 4, 1, NULL, '2022-10-17 06:36:47', '2022-10-17 06:36:47'),
(7, 3, 4, 1, '20000', '2022-10-17 07:13:34', '2022-10-17 07:13:34'),
(8, 3, 4, 1, NULL, '2022-10-17 08:20:57', '2022-10-17 08:20:57'),
(9, 3, 4, 1, NULL, '2022-10-17 08:20:57', '2022-10-17 08:20:57'),
(10, NULL, NULL, 1, NULL, '2022-10-17 08:24:19', '2022-10-17 08:24:19'),
(11, NULL, NULL, 1, NULL, '2022-10-17 08:24:19', '2022-10-17 08:24:19'),
(12, 3, 4, 1, NULL, '2022-10-17 08:24:57', '2022-10-17 08:24:57'),
(13, 3, 4, 1, NULL, '2022-10-17 08:24:57', '2022-10-17 08:24:57'),
(14, 3, 4, 1, NULL, '2022-10-17 08:52:05', '2022-10-17 08:52:05'),
(15, 3, 4, 1, NULL, '2022-10-17 08:52:05', '2022-10-17 08:52:05'),
(16, 2, 4, 4, '80000', '2022-10-18 04:18:47', '2022-10-18 04:18:47'),
(17, 2, 7, 10, '329000', '2022-10-18 04:18:58', '2022-10-18 04:18:58'),
(18, 3, 4, 1, '20000', '2022-10-19 07:57:50', '2022-10-19 07:57:50'),
(19, 3, 4, 1, '20000', '2022-10-19 07:57:50', '2022-10-19 07:57:50');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_date` datetime DEFAULT NULL,
  `order_type` enum('dine in','take away') NOT NULL,
  `table_no` int(11) DEFAULT NULL,
  `status` enum('new order','on proses','finish','payment') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_date`, `order_type`, `table_no`, `status`, `createdAt`, `updatedAt`) VALUES
(2, '2022-10-13 08:38:43', 'dine in', 1, NULL, '2022-10-13 08:38:57', '2022-10-13 08:38:57'),
(3, '2022-10-13 08:38:43', 'dine in', 1, NULL, '2022-10-13 08:54:10', '2022-10-13 08:54:10');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `bill_amount` decimal(10,0) DEFAULT NULL,
  `paid_amount` decimal(10,0) DEFAULT NULL,
  `bill_date` datetime DEFAULT NULL,
  `payment_type` enum('cash','non cash') DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `orderId`, `bill_amount`, `paid_amount`, `bill_date`, `payment_type`, `payment_date`, `createdAt`, `updatedAt`) VALUES
(1, 1, NULL, '20000', '2022-10-13 08:38:43', 'non cash', '2022-10-13 08:38:43', '2022-10-13 08:55:52', '2022-10-13 08:55:52'),
(2, 3, NULL, '20000', '2022-10-13 08:38:43', 'non cash', '2022-10-13 08:38:43', '2022-10-13 08:56:15', '2022-10-13 08:56:15'),
(3, 3, NULL, '20000', '2022-10-13 09:35:15', 'non cash', '2022-10-13 09:35:15', '2022-10-13 09:38:31', '2022-10-13 09:38:31'),
(4, 3, '20000', '20000', '2022-10-18 04:15:08', 'non cash', '2022-10-18 04:15:08', '2022-10-18 04:15:52', '2022-10-18 04:15:52'),
(5, 2, NULL, '20000', '2022-10-18 04:15:08', 'non cash', '2022-10-18 04:15:08', '2022-10-18 04:16:17', '2022-10-18 04:16:17'),
(6, 4, NULL, '20000', '2022-10-18 04:15:08', 'non cash', '2022-10-18 04:15:08', '2022-10-18 04:16:25', '2022-10-18 04:16:25'),
(7, 2, NULL, '20000', '2022-10-18 04:15:08', 'non cash', '2022-10-18 04:15:08', '2022-10-18 04:16:37', '2022-10-18 04:16:37'),
(8, 2, '409000', '20000', '2022-10-18 04:18:07', 'non cash', '2022-10-18 04:18:07', '2022-10-18 04:19:07', '2022-10-18 04:19:07');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220926085646-create-menu.js'),
('20220926124127-create-payment.js'),
('20220926124516-create-merchant.js'),
('20220926124940-create-user.js'),
('20220928061012-create-order.js'),
('20220928061204-create-order-item.js'),
('20221012041543-create-category-menu.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `full_name` varchar(150) DEFAULT NULL,
  `privilege` enum('operator','admin') DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorymenus`
--
ALTER TABLE `categorymenus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `merchants`
--
ALTER TABLE `merchants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorymenus`
--
ALTER TABLE `categorymenus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `merchants`
--
ALTER TABLE `merchants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
