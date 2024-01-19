-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2024 at 12:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quotation_generalize`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `quotation_id` int(11) DEFAULT NULL,
  `note_text` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notes_data`
--

CREATE TABLE `notes_data` (
  `notes_id` int(200) NOT NULL,
  `notes_text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes_data`
--

INSERT INTO `notes_data` (`notes_id`, `notes_text`) VALUES
(1, 'SMM Ad Budget :-\nAds budget will be decided by client, suggested ad budget 15000/-'),
(2, 'Payment will be 100% in advance and is expected till 3rd of every month.'),
(3, 'Payment/plan can be stopped/changed by informing one month in advance if not satisfied with the services.'),
(4, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(5, 'Required details like credentials and other details are needed to share timely.'),
(6, 'Telephonic or short meetings required weekly, and a monthly meeting time (1hr) is required to review the reports and for discussing future plannings/strategies.'),
(7, 'Estimated time for keywords ranking on the first page : -\n\n\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n');

-- --------------------------------------------------------

--
-- Table structure for table `quotations_data`
--

CREATE TABLE `quotations_data` (
  `quotation_id` int(11) NOT NULL,
  `quotation_name` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quotations_data`
--

INSERT INTO `quotations_data` (`quotation_id`, `quotation_name`, `created_date`) VALUES
(1, 'umer it solution', '2024-01-15 23:45:51'),
(2, 'mahesh kuldeep it solution', '2024-01-15 23:45:51'),
(3, 'umerer', '2024-01-15 23:45:51'),
(4, 'jsss', '2024-01-15 23:45:51'),
(5, 'shridam ', '2024-01-15 23:45:51'),
(6, 'devji', '2024-01-15 23:45:51'),
(7, 'kkk', '2024-01-15 23:45:51'),
(8, 'rrc', '2024-01-15 23:45:51'),
(9, 'google ', '2024-01-15 23:45:51'),
(10, 'microsoft', '2024-01-15 23:45:51'),
(11, 'adobe', '2024-01-15 23:45:51'),
(12, 'css', '2024-01-15 23:45:51'),
(13, 'css', '2024-01-15 23:45:51'),
(14, 'css', '2024-01-15 23:45:51'),
(15, 'test', '2024-01-15 23:45:51'),
(16, 'test6', '2024-01-15 23:45:51'),
(17, 'test6', '2024-01-15 23:45:51'),
(18, 'test6', '2024-01-15 23:45:51'),
(19, 'test5', '2024-01-15 23:45:51'),
(20, 'trr', '2024-01-15 23:45:51'),
(21, 'sdgsdfg', '2024-01-15 23:45:51'),
(22, 'doa guru', '2024-01-15 23:45:51'),
(23, 'joy it solution', '2024-01-15 23:45:51'),
(24, 'JSSS', '2024-01-15 23:45:51'),
(25, 'woj ', '2024-01-15 23:45:51'),
(26, 'dev', '2024-01-15 23:45:51'),
(27, 'Anas Interprise', '2024-01-15 23:45:51'),
(28, 'umertest', '2024-01-15 23:45:51'),
(29, 'jsss', '2024-01-15 23:45:51'),
(30, 'Mahesh Kuldeep It solution', '2024-01-15 23:45:51'),
(31, 'TCS', '2024-01-15 23:45:51'),
(32, 'TTTTTT', '2024-01-15 23:45:51'),
(39, 'jabalpur hospital', '2024-01-15 23:45:51'),
(46, 'mohit', '2024-01-15 23:45:51'),
(51, 'eee', '2024-01-15 23:45:51'),
(56, 'r', '2024-01-15 23:45:51'),
(57, '44', '2024-01-15 23:45:51'),
(58, 'rer', '2024-01-15 23:45:51'),
(63, 'ewe', '2024-01-15 23:45:51'),
(64, 'ewe', '2024-01-15 23:45:51'),
(65, 'ewe', '2024-01-15 23:45:51'),
(66, 'ewe', '2024-01-15 23:45:51'),
(67, 'ewe', '2024-01-15 23:45:51'),
(79, 'mohit', '2024-01-15 23:45:51'),
(81, 'Demo quotation', '2024-01-15 23:45:51'),
(83, 'kfjd', '2024-01-15 23:45:51'),
(84, 'fedf', '2024-01-15 23:45:51'),
(85, 'rgrftg', '2024-01-15 23:45:51'),
(86, 'tytuy', '2024-01-15 23:45:51'),
(87, 'umerer', '2024-01-15 23:45:51'),
(89, 'ujh', '2024-01-15 23:45:51'),
(90, 'tht', '2024-01-15 23:45:51'),
(91, 'WHO', '2024-01-15 23:45:51'),
(92, 'Wipro', '2024-01-15 23:45:51'),
(93, 'Other service', '2024-01-15 23:45:51'),
(94, 'umer it solution', '2024-01-15 23:45:51'),
(96, 'Institution Video Plalist platform', '2024-01-15 23:45:51'),
(98, 'pccc', '2024-01-15 23:45:51'),
(102, 'rtrt', '2024-01-15 23:45:51'),
(103, 'rtrt', '2024-01-15 23:45:51'),
(104, 'fertertf', '2024-01-15 23:45:51'),
(105, 'juyhuyh', '2024-01-15 23:45:51'),
(106, 'deploy', '2024-01-15 23:45:51'),
(107, 'deploy test ', '2024-01-15 23:45:51'),
(108, 'rtest', '2024-01-15 23:45:51'),
(109, 'rtest', '2024-01-15 23:45:51'),
(110, 'rtest', '2024-01-15 23:45:51'),
(111, 'rtest', '2024-01-15 23:45:51'),
(112, 'woj', '2024-01-15 23:45:51'),
(115, 'deploy test it solutiuon', '2024-01-15 23:45:51'),
(116, 'ghgjhgg', '2024-01-15 23:45:51'),
(117, 'tfg', '2024-01-15 23:45:51'),
(118, 'cpanel', '2024-01-15 23:45:51'),
(119, 'saaas', '2024-01-15 23:45:51'),
(120, 'test', '2024-01-15 23:45:51'),
(121, 'quotation generalize ', '2024-01-15 23:45:51'),
(122, 'test generlise', '2024-01-15 23:45:51'),
(123, 'dell ', '2024-01-16 00:04:03'),
(124, 'Header ', '2024-01-18 10:28:32'),
(125, 'jsss', '2024-01-18 13:10:09'),
(126, 'TCS', '2024-01-18 13:15:56'),
(127, 'jssss', '2024-01-19 09:20:07');

-- --------------------------------------------------------

--
-- Table structure for table `quotation_header_footer`
--

CREATE TABLE `quotation_header_footer` (
  `id` int(11) NOT NULL,
  `header_img` varchar(255) NOT NULL,
  `footer_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quotation_header_footer`
--

INSERT INTO `quotation_header_footer` (`id`, `header_img`, `footer_img`) VALUES
(1, 'http://localhost:9000/uploads/header_img-17054448422175.png', 'http://localhost:9000/uploads/footer_img-17054448422186.png'),
(2, 'http://localhost:9000/uploads/header_img-1705445034612Untitled design.jpg', 'http://localhost:9000/uploads/footer_img-1705445034762blog5.jpg'),
(3, 'http://localhost:9000/uploads/header_img-1705461982534Header.png', 'http://localhost:9000/uploads/footer_img-1705461982543Fotterqgms.png'),
(4, 'http://localhost:9000/uploads/header_img-17054622191695.png', 'http://localhost:9000/uploads/footer_img-17054622191696.png'),
(5, 'http://localhost:9000/uploads/header_img-1705462262747header1.png', 'http://localhost:9000/uploads/footer_img-1705462262749last.png'),
(6, 'http://localhost:9000/uploads/header_img-17055705871405.png', 'http://localhost:9000/uploads/footer_img-17055705871416.png');

-- --------------------------------------------------------

--
-- Table structure for table `quotation_images`
--

CREATE TABLE `quotation_images` (
  `image_id` int(11) NOT NULL,
  `quotation_id` int(11) NOT NULL,
  `image_type` varchar(50) NOT NULL,
  `file_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quotation_images`
--

INSERT INTO `quotation_images` (`image_id`, `quotation_id`, `image_type`, `file_path`) VALUES
(1, 91, 'header', 'uploads\\image-1705089867217.png'),
(2, 92, 'footer', 'uploads\\1705091184298-janjyoti_logo.png'),
(3, 94, 'header', 'uploads\\1705091409627-janjyoti_logo.png'),
(4, 96, 'footer', 'uploads\\1705095139327-header1.png'),
(6, 112, 'footer', 'uploads\\1705095383784-header1.png'),
(13, 85, 'footer', 'http://localhost:9000/uploads/image-1705107688103blog5.jpg'),
(25, 119, 'header', 'http://localhost:9000/uploads/image-17052003568365.png'),
(26, 119, 'footer', 'http://localhost:9000/uploads/image-17052003732996.png'),
(33, 123, 'header', 'http://localhost:9000/uploads/file-17053660346945.png');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(200) NOT NULL,
  `service_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`) VALUES
(1, 'Social Media Marketing (SMM)'),
(2, 'Social Media Optimization (SMO)'),
(3, 'Search Engine Optimization (SEO)'),
(4, 'Website Design & Development'),
(5, 'Software Development'),
(6, 'Graphic & Logo Designing'),
(7, 'Video Editing'),
(8, 'Mobile Application Development (Android & IOS)'),
(9, 'Bulk WhatsApp'),
(10, 'YouTube Optimization'),
(11, 'Google My Business Assist'),
(12, 'Google Reviews'),
(13, 'Leads Generation'),
(14, 'Facebook Paid Ads'),
(15, 'Google PPC Ads'),
(16, 'Content Writing'),
(17, 'Data Science & Engineering'),
(18, 'Cloud Computing'),
(19, 'Staffing');

-- --------------------------------------------------------

--
-- Table structure for table `services_data`
--

CREATE TABLE `services_data` (
  `service_id` int(11) NOT NULL,
  `quotation_id` int(11) DEFAULT NULL,
  `quotation_name` varchar(255) NOT NULL,
  `service_type` varchar(255) NOT NULL,
  `service_description` text NOT NULL,
  `actual_price` decimal(10,2) DEFAULT NULL,
  `offer_price` decimal(10,2) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `subscription_frequency` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quotation_id` (`quotation_id`);

--
-- Indexes for table `notes_data`
--
ALTER TABLE `notes_data`
  ADD PRIMARY KEY (`notes_id`);

--
-- Indexes for table `quotations_data`
--
ALTER TABLE `quotations_data`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `quotation_header_footer`
--
ALTER TABLE `quotation_header_footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quotation_images`
--
ALTER TABLE `quotation_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `quotation_id` (`quotation_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `services_data`
--
ALTER TABLE `services_data`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `quotation_id` (`quotation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `notes_data`
--
ALTER TABLE `notes_data`
  MODIFY `notes_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `quotations_data`
--
ALTER TABLE `quotations_data`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `quotation_header_footer`
--
ALTER TABLE `quotation_header_footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `quotation_images`
--
ALTER TABLE `quotation_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `services_data`
--
ALTER TABLE `services_data`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=228;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);

--
-- Constraints for table `quotation_images`
--
ALTER TABLE `quotation_images`
  ADD CONSTRAINT `quotation_images_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);

--
-- Constraints for table `services_data`
--
ALTER TABLE `services_data`
  ADD CONSTRAINT `services_data_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
