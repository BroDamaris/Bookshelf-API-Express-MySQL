-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2024 at 06:53 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookshelf`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `summary` text DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `pageCount` int(11) DEFAULT NULL,
  `readPage` int(11) DEFAULT NULL,
  `finished` tinyint(1) DEFAULT NULL,
  `reading` tinyint(1) DEFAULT NULL,
  `insertedAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `year`, `author`, `summary`, `publisher`, `pageCount`, `readPage`, `finished`, `reading`, `insertedAt`, `updatedAt`) VALUES
('kjw3slTldap9QAbqr07oj', 'Buku Dasar Aplikasi', 2023, 'Damaris', 'Buku ini membahas dasar-dasar pemrograman.', 'Penerbit Teknologi', 300, 300, 1, 0, '2024-11-13 09:09:19', '2024-11-13 09:09:19'),
('mW2rYMvoxWylXjCNdimO_', 'Buku Dasar Aplikasi', 2023, 'Damaris', 'Buku ini membahas dasar-dasar pemrograman.', 'Penerbit Teknologi', 300, 300, 1, 0, '2024-11-13 09:09:19', '2024-11-13 09:09:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
