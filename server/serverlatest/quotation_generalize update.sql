-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2024 at 07:42 AM
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

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `quotation_id`, `note_text`) VALUES
(71, 129, 'SMM Ad Budget :-\nAds budget will be decided by client, suggested ad budget 15000/-'),
(72, 129, 'Payment/plan can be stopped/changed by informing one month in advance if not satisfied with the services.'),
(73, 129, 'Payment/plan can be stopped/changed by informing one month in advance if not satisfied with the services.'),
(74, 129, 'Estimated time for keywords ranking on the first page : -\n\n\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n'),
(75, 129, 'Required details like credentials and other details are needed to share timely.'),
(76, 129, 'Estimated time for keywords ranking on the first page : -\n\n\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n'),
(77, 129, 'Required details like credentials and other details are needed to share timely.'),
(81, 135, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(82, 135, 'dfdffd'),
(83, 135, '3r3'),
(84, 135, 'rere'),
(85, 140, 'Payment/plan can be stopped/changed by informing one month in advance if not satisfied with the services.'),
(86, 140, 'GST'),
(87, 141, 'SMM Ad Budget :-\nAds budget will be decided by client, suggested ad budget 15000/-'),
(89, 143, 'Payment will be 100% in advance and is expected till 3rd of every month.'),
(90, 143, 'ws'),
(91, 145, 'Payment will be 100% in advance and is expected till 3rd of every month.'),
(92, 145, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(93, 145, 'Estimated time for keywords ranking on the first page : -\n\n\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n'),
(94, 145, 'Suggested Ad Amount 20,000/-'),
(97, 194, 'Payment/plan can be stopped/changed by informing one month in advance if not satisfied with the services.'),
(98, 194, 'Required details like credentials and other details are needed to share timely.'),
(99, 194, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(126, 194, 'chai'),
(160, 230, 'Payment will be 100% in advance and is expected till 3rd of every month.'),
(161, 230, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(162, 230, 'Estimated time for keywords ranking on the first page : -\n\n\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n'),
(163, 230, 'Suggested Ad Amount 20,000/-'),
(164, 231, 'Payment will be 100% in advance and is expected till 3rdsdd of every month.'),
(165, 231, 'sadOne dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(166, 231, 'sdsdEstimated time for keywords ranking on the first page : -\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n'),
(167, 231, 'Susdggested Ad Amount 20,000/-\njhjdff'),
(168, 232, 'Payment/plan can be stopped/changed by informing one month in advance if not satisfied with the services.'),
(169, 232, 'GST');

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
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quotations_data`
--

INSERT INTO `quotations_data` (`quotation_id`, `quotation_name`, `created_date`, `user_id`) VALUES
(128, 'TCS', '2024-01-19 11:24:58', NULL),
(129, 'Dr Raj Mehta Khalsa College', '2024-01-19 12:21:02', NULL),
(130, 'jss', '2024-01-23 13:52:02', NULL),
(133, 'sanjay datt', '2024-02-06 11:26:09', 28),
(134, 'vishal mall', '2024-02-06 11:31:10', 28),
(135, 'aaa', '2024-02-13 11:08:26', 3),
(139, 'sd', '2024-02-09 11:44:09', 29),
(140, 'Janjyoti Eye Care Hospital testd', '2024-02-10 07:22:40', 30),
(141, 'qqqq', '2024-02-12 10:02:31', 32),
(143, 'another account ', '2024-02-12 11:13:03', 33),
(145, 'Bhavani', '2024-02-15 12:35:23', 30),
(194, 'mohan chaha', '2024-02-14 11:16:14', 3),
(230, 'Copy of Bhavanifgfgvgr', '2024-02-15 13:23:15', 30),
(231, 'Copy sdsd', '2024-02-15 13:24:39', 30),
(232, 'sdfdf', '2024-02-16 13:45:21', 30),
(233, 'sddsd', '2024-02-17 09:41:20', 3),
(234, 'sddsd', '2024-02-17 09:41:22', 3),
(235, 'sddsd', '2024-02-17 09:41:30', 3),
(236, 'sddsd', '2024-02-17 09:42:39', 3);

-- --------------------------------------------------------

--
-- Table structure for table `quotation_header_footer`
--

CREATE TABLE `quotation_header_footer` (
  `id` int(11) NOT NULL,
  `header_img` varchar(255) NOT NULL,
  `footer_img` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_name_account_name` varchar(255) NOT NULL,
  `company_name_account_ifsc` varchar(255) NOT NULL,
  `company_name_account_number` varchar(255) NOT NULL,
  `company_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quotation_header_footer`
--

INSERT INTO `quotation_header_footer` (`id`, `header_img`, `footer_img`, `user_id`, `company_name`, `company_name_account_name`, `company_name_account_ifsc`, `company_name_account_number`, `company_address`) VALUES
(21, 'http://localhost:9000/uploads/header_img-17075465650435.png', 'http://localhost:9000/uploads/footer_img-17075465650476.png', 29, 'Google Photo Updated', 'Photo', 'hsdg', '54457454', 'Califonia'),
(23, 'http://localhost:9000/uploads/header_img-1707550597365Doaguru_IT_Solution_Header.jpeg', 'http://localhost:9000/uploads/footer_img-1707550597369Doaguru_IT_Solution_Footer.png', 29, 'slkdmlsd', 'sdsd', 'dsdsds', 'dsdsd', 'sdd'),
(25, 'http://localhost:9000/uploads/header_img-17075557014012.png', 'http://localhost:9000/uploads/footer_img-1707555701405last.png', 30, 'Doaguru Infosystems', 'For Payment (with GST18%) : DOAGuru InfoSystems', 'SBIN0004677', '38666325192', '1815 Wright Town, Jabalpur, Madhya pradesh INDIA 482002'),
(26, 'http://localhost:9000/uploads/header_img-1707556809375Doaguru_IT_Solution_Header.jpeg', 'http://localhost:9000/uploads/footer_img-1707556809380Doaguru_IT_Solution_Footer.png', 30, 'Doaguru IT Solutions', 'For TDS Payment : DOAGuru IT Solutions', 'HDFC0000224', '50200074931981', '1815 Wright Town, Jabalpur, Madhya pradesh INDIA 482002'),
(27, 'http://localhost:9000/uploads/header_img-17075569634015.png', 'http://localhost:9000/uploads/footer_img-17075569634026.png', 3, 'Mohit Interprise', 'Mohit Sahu', 'IFSC854821', '963584525', 'Hanuman Taal Jabalpur');

-- --------------------------------------------------------

--
-- Table structure for table `registered_data`
--

CREATE TABLE `registered_data` (
  `user_id` int(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registered_data`
--

INSERT INTO `registered_data` (`user_id`, `user_name`, `email`, `password`) VALUES
(1, 'umer qureshi', 'umer@gmail.com', '$2b$10$0BFYnZEhIdiyuTgP69OdG.IZUfMycIzfLPcjK1UqodakkK55D0Agq'),
(2, 'UmerQurishe', 'UmerQurishe@gmail.com', '$2b$10$lexcX6QArDgwvTIjwgLKN.5AEE5futI6cq9gG7rrtYoYWiFm4Ys8G'),
(3, 'Mohit', 'mohit@gmail.com', '$2b$10$pGhXxmMoHu9t/Kyx.OcgueUEOHsj8D2l/GdrplfRmH97Upo3pOfvi'),
(4, 'kotari hospital ', 'kotarihospital@gmail.com', '$2b$10$EUC5UjvOhQJ517xPp2PAN.Tuo7FjmzF.iqR9TpA.bzkMcONcq2Nsi'),
(5, 'f', 'f@gmail.com', '$2b$10$.GI1Qf4drdlBoanFWQZhGe0A1UXadz9ea8YwNYKoRCDYwhrgfLi9e'),
(26, 'k', 'k@gmail.com', '$2b$10$5Ev9j4eglxe1bRq6wCID9OjuCnKbhxAi1h.264MzrvhEl26vcbfhC'),
(27, 'Janjyoti Hoapital ', 'janjyoti@gmail.com', '$2b$10$GtjkHXVI3mOfzk.V1VhrbuDxFQH6q6imzJZHSx3ZncshO3yDcNrK6'),
(28, 'kothari hospital ', 'kothari@gmail.com', '$2b$10$KvBtHwJKj.dCobj/s7DUkOOxIMZ.MK3wF.AB5oNLNEHwli7aqKBny'),
(29, 'Google', 'google@gmail.com', '$2b$10$MhWoNhCxpc9cUxNS9jXEJ.AUSy3Cr4JGZYoo6NWKl84WyT4XjArXO'),
(30, 'Doaguru Organization', 'doaguruinfosystems@gmail.com', '$2b$10$PoMIxE3G9wkJbJD58wsUIOhdU0x.3pfbhtq4mZsnD5biLSAC3RpG6'),
(31, 'a', 'a@gmail.com', '$2b$10$hKzCcpY6F8yWoqDfFAKGbejyhAymaINmuIRJg9ewrAIUfukcSaM5W'),
(32, 'q', 'q@gmail.com', '$2b$10$0Rd9dmPXYXJI2zRBQ4a8yu2vo1rP3KQEpx9ksMacdIG1hPLP6VyJa'),
(33, 't', 't@gmail.com', '$2b$10$kluCVW1U0p94mo6IqjjCxe29C/VK0cmAWoJDaIXiFIBulHS502/FO');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(200) NOT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`, `user_id`) VALUES
(1, 'Social Media Marketing (SMM)', 30),
(2, 'Social Media Optimization (SMO)', 30),
(3, 'Search Engine Optimization (SEO)', 30),
(4, 'Website Design & Developmenttt', 30),
(5, 'Software Development', 30),
(6, 'Graphic & Logo Designing', 30),
(7, 'Video Editing', 30),
(8, 'Mobile Application Development (Android & IOS)', 0),
(9, 'Bulk WhatsApp', 0),
(10, 'YouTube Optimization', 0),
(11, 'Google My Business Assist', 0),
(12, 'Google Reviews', 0),
(13, 'Leads Generation', 0),
(14, 'Facebook Paid Ads', 0),
(15, 'Google PPC Ads', 0),
(16, 'Content Writing', 30),
(17, 'Data Science & Engineering', 30),
(18, 'Cloud Computing', 30),
(19, 'Staffing', 30),
(20, 'Social Media Marketing (SMM)', 32),
(21, 'Search Engine Optimization (SEO)', 32),
(22, 'Website Design & Development', 32),
(27, 'Social Media Marketing (SMM)', 3);

-- --------------------------------------------------------

--
-- Table structure for table `services_data`
--

CREATE TABLE `services_data` (
  `service_id` int(11) NOT NULL,
  `quotation_id` int(11) DEFAULT NULL,
  `quotation_name` varchar(255) NOT NULL,
  `service_type` varchar(255) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `service_description` text NOT NULL,
  `actual_price` decimal(10,2) DEFAULT NULL,
  `offer_price` decimal(10,2) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `subscription_frequency` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services_data`
--

INSERT INTO `services_data` (`service_id`, `quotation_id`, `quotation_name`, `service_type`, `service_name`, `service_description`, `actual_price`, `offer_price`, `created_date`, `subscription_frequency`) VALUES
(246, 135, 'servicetype', 'Complimentary', 'Search Engine Optimization (SEO)', 'dfsdsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 3.00, 0.00, '2024-02-12 12:01:47', 'Yearly'),
(247, 135, 'servicetype', 'Paid', 'Leads Generation', 'saq', 5152.00, 515.00, '2024-02-07 10:43:25', 'Yearly'),
(253, 139, 'sd', 'Complimentary', 'Social Media Marketing (SMM)', 'sd', 500.00, 0.00, '2024-02-09 11:44:09', 'Yearly'),
(254, 140, 'Janjyoti Eye Care Hospital testd', 'Paid', 'Social Media Optimization (SMO)', 'fdf', 5000.00, 4000.00, '2024-02-10 07:22:40', 'Monthly'),
(257, 143, 'another account ', 'Complimentary', 'Search Engine Optimization (SEO)', 'asdddsd', 32.00, 0.00, '2024-02-12 11:13:12', 'Monthly'),
(259, 145, 'Bhavani', 'Paid', 'Search Engine Optimization (SEO)', 'For 17 keywords', 17000.00, 15300.00, '2024-02-15 12:35:23', 'Monthly'),
(260, 145, 'Bhavani', 'Paid', 'Social Media Optimization (SMO)', '15 posts (10 posts+5 video/reels) on any 4 social media platform', 10000.00, 9000.00, '2024-02-15 12:35:23', 'Monthly'),
(261, 145, 'Bhavani', 'Paid', 'Google My Business Assist', 'Upto 5 keywords and 100 reveiws', 5000.00, 4500.00, '2024-02-15 12:35:23', 'Monthly'),
(262, 145, 'Bhavani', 'Paid', 'Social Media Marketing (SMM)', '1 video +3 posts', 5000.00, 4500.00, '2024-02-15 12:35:23', 'Monthly'),
(263, 145, 'Bhavani', 'Paid', 'Google PPC Ads', 'Upto 7 keywords', 7000.00, 6300.00, '2024-02-15 12:35:23', 'Monthly'),
(264, 145, 'Bhavani', 'Paid', 'YouTube Optimization', 'One engaging creative', 5000.00, 4500.00, '2024-02-15 12:35:23', 'Monthly'),
(265, 145, 'Bhavani', 'Complimentary', 'Telecalling', 'Calling & 5 follow-ups', 5000.00, 0.00, '2024-02-15 12:35:23', 'Monthly'),
(266, 145, 'Bhavani', 'Complimentary', 'Complimentary', '* 1 extra premium video\n* 100 reviews on GMB page\n* Free bharatroofers.com subscription ', 5000.00, 0.00, '2024-02-15 12:35:23', 'Monthly'),
(267, 145, 'Bhavani', 'Paid', 'Website Maintenance', 'yearly website maintenance', 24000.00, 12000.00, '2024-02-15 12:35:23', 'Yearly'),
(268, 145, 'Bhavani', 'Paid', 'Website Design & Development', 'wordpress technology 12+ pages', 20000.00, 18000.00, '2024-02-15 12:35:23', 'One Time'),
(304, 194, 'mohan chaha', 'Complimentary', 'Search Engine Optimization (SEO)', 'dfsdsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 3.00, 0.00, '2024-02-14 11:16:14', 'Yearly'),
(305, 194, 'mohan chaha', 'Paid', 'Leads Generation', 'saq', 5152.00, 515.00, '2024-02-14 11:16:14', 'Yearly'),
(416, 230, 'Copy of Bhavanifgfgvgr', 'Paid', 'Search Engine Optimization (SEO)', 'For 17 keywords', 17000.00, 15300.00, '2024-02-15 13:23:15', 'Monthly'),
(417, 230, 'Copy of Bhavanifgfgvgr', 'Paid', 'Social Media Optimization (SMO)', '15 posts (10 posts+5 video/reels) on any 4 social media platform', 10000.00, 9000.00, '2024-02-15 13:23:15', 'Monthly'),
(418, 230, 'Copy of Bhavanifgfgvgr', 'Paid', 'Google My Business Assist', 'Upto 5 keywords and 100 reveiws', 5000.00, 4500.00, '2024-02-15 13:23:15', 'Monthly'),
(419, 230, 'Copy of Bhavanifgfgvgr', 'Paid', 'Social Media Marketing (SMM)', '1 video +3 posts', 5000.00, 4500.00, '2024-02-15 13:23:15', 'Monthly'),
(420, 230, 'Copy of Bhavanifgfgvgr', 'Paid', 'Google PPC Ads', 'Upto 7 keywords', 7000.00, 6300.00, '2024-02-15 13:23:15', 'Monthly'),
(421, 230, 'Copy of Bhavanifgfgvgr', 'Paid', 'YouTube Optimization', 'One engaging creative', 5000.00, 4500.00, '2024-02-15 13:23:15', 'Monthly'),
(422, 230, 'Copy of Bhavanifgfgvgr', 'Complimentary', 'Telecalling', 'Calling & 5 follow-ups', 5000.00, 0.00, '2024-02-15 13:23:15', 'Monthly'),
(423, 230, 'Copy of Bhavanifgfgvgr', 'Complimentary', 'Complimentary', '* 1 extra premium video\n* 100 reviews on GMB page\n* Free bharatroofers.com subscription ', 5000.00, 0.00, '2024-02-15 13:23:15', 'Monthly'),
(424, 230, 'Copy of Bhavanifgfgvgr', 'Paid', 'Website Maintenance', 'yearly website maintenance', 24000.00, 12000.00, '2024-02-15 13:23:15', 'Yearly'),
(425, 230, 'Copy of Bhavanifgfgvgr', 'Paid', 'Website Design & Development', 'wordpress technology 12+ pages', 20000.00, 18000.00, '2024-02-15 13:23:15', 'One Time'),
(426, 231, 'Copy sdsd', 'Paid', 'Search Engine Optimization (SEO)', 'For 17 keywords', 17000.00, 15300.00, '2024-02-15 13:24:39', 'Monthly'),
(427, 231, 'Copy sdsd', 'Paid', 'Social Media Optimization (SMO)', '15 posts (10 posts+5 video/reels) on any 4 social media platform', 10000.00, 9000.00, '2024-02-15 13:24:39', 'Monthly'),
(428, 231, 'Copy sdsd', 'Paid', 'Google My Business Assist', 'Upto 5 keywords and 100 reveiws', 5000.00, 4500.00, '2024-02-15 13:24:39', 'Monthly'),
(429, 231, 'Copy sdsd', 'Paid', 'Social Media Marketing (SMM)', '1 video +3 posts', 5000.00, 4500.00, '2024-02-15 13:24:39', 'Monthly'),
(430, 231, 'Copy sdsd', 'Paid', 'Google PPC Ads', 'Upto 7 keywords', 7000.00, 6300.00, '2024-02-15 13:24:39', 'Monthly'),
(431, 231, 'Copy sdsd', 'Paid', 'YouTube Optimization', 'One engaging creative', 5000.00, 4500.00, '2024-02-15 13:24:39', 'Monthly'),
(432, 231, 'Copy sdsd', 'Complimentary', 'Telecalling', 'Calling & 5 follow-ups', 5000.00, 0.00, '2024-02-15 13:24:39', 'Monthly'),
(433, 231, 'Copy sdsd', 'Complimentary', 'Complimentary', '* 1 extra premium video\n* 100 reviews on GMB page\n* Free bharatroofers.com subscription ', 5000.00, 0.00, '2024-02-15 13:24:39', 'Monthly'),
(434, 231, 'Copy sdsd', 'Paid', 'Website Maintenance', 'yearly website maintenance', 24000.00, 12000.00, '2024-02-15 13:24:39', 'Yearly'),
(435, 231, 'Copy sdsd', 'Paid', 'Website Design & Development', 'wordpress technology 12+ pages', 20000.00, 18000.00, '2024-02-15 13:24:39', 'One Time'),
(436, 232, 'sdfdf', 'Paid', 'Social Media Optimization (SMO)', 'fdf', 5000.00, 4000.00, '2024-02-16 13:45:24', 'Monthly'),
(437, 236, 'sddsd', 'Paid', 'eweewe', 'sdd', 786.00, 500.00, '2024-02-17 09:42:39', 'Yearly');

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
-- Indexes for table `registered_data`
--
ALTER TABLE `registered_data`
  ADD PRIMARY KEY (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;

--
-- AUTO_INCREMENT for table `notes_data`
--
ALTER TABLE `notes_data`
  MODIFY `notes_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `quotations_data`
--
ALTER TABLE `quotations_data`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=237;

--
-- AUTO_INCREMENT for table `quotation_header_footer`
--
ALTER TABLE `quotation_header_footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `registered_data`
--
ALTER TABLE `registered_data`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `services_data`
--
ALTER TABLE `services_data`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=438;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);

--
-- Constraints for table `services_data`
--
ALTER TABLE `services_data`
  ADD CONSTRAINT `services_data_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
