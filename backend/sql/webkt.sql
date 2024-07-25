-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: db
-- Thời gian đã tạo: Th7 25, 2024 lúc 02:36 PM
-- Phiên bản máy phục vụ: 8.0.38
-- Phiên bản PHP: 8.0.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `webkt`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_article`
--

CREATE TABLE `api_article` (
  `id` bigint NOT NULL,
  `title` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `content` longtext NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `seo_meta_title` varchar(100) NOT NULL,
  `seo_meta_keywords` varchar(100) NOT NULL,
  `seo_meta_description` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `category_id` bigint NOT NULL,
  `status_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `address` longtext NOT NULL DEFAULT (_utf8mb3''),
  `area` varchar(100) NOT NULL,
  `completed_year` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_article`
--

INSERT INTO `api_article` (`id`, `title`, `slug`, `content`, `image`, `seo_meta_title`, `seo_meta_keywords`, `seo_meta_description`, `created_at`, `updated_at`, `category_id`, `status_id`, `user_id`, `address`, `area`, `completed_year`) VALUES
(28, 'Opla Apartment', 'opla-apartment', '<p class=\"ql-align-center\">Tên dự án: Opla Apartment</p><p class=\"ql-align-center\">Thiết kế và thi công: W2D Studio</p><p class=\"ql-align-center\">Diện tích:&nbsp;94m2</p><p class=\"ql-align-center\">Hoàn thành: 03/2024</p><p class=\"ql-align-center\">Địa điểm:&nbsp;<span style=\"color: rgb(34, 34, 34);\">Park Hill Premium - Hà Nội</span></p><p class=\"ql-align-center\">Photo: Nguyễn Thái Thạch</p>', 'images/1.jpg', 'OPLA APARTMENT', 'OPLA APARTMENT', 'OPLA APARTMENT', '2024-07-25 08:49:49.847077', '2024-07-25 13:26:53.818817', 1, 1, 1, 'Park Hill Premium - Ha Noi', '94', 2024),
(29, 'MS Duplex', 'ms-duplex', '<p class=\"ql-align-center\">Tên dự án: MS Duplex</p><p class=\"ql-align-center\">Thiết kế và thi công: W2D Studio</p><p class=\"ql-align-center\">Diện tích: 700m2 nội thất - 200m2 sân vườn</p><p class=\"ql-align-center\">Hoàn thành: 07/2023</p><p class=\"ql-align-center\">Địa điểm: T-Place -&nbsp;Hà Nội</p><p class=\"ql-align-center\">Photo: Nguyễn Thái Thạch</p>', 'images/1_mkaaHcH.jpg', 'MS Duplex', 'MS Duplex', 'MS Duplex', '2024-07-25 08:51:44.783035', '2024-07-25 11:24:39.458289', 1, 1, 1, 'T-Place Ha Noi', '700m2 noi that - 200m2 san vuon', 2024);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_article_images`
--

CREATE TABLE `api_article_images` (
  `id` bigint NOT NULL,
  `article_id` bigint NOT NULL,
  `image_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_article_images`
--

INSERT INTO `api_article_images` (`id`, `article_id`, `image_id`) VALUES
(14, 28, 14),
(15, 28, 15),
(16, 28, 16),
(17, 28, 17),
(18, 29, 18),
(19, 29, 19),
(20, 29, 20),
(21, 29, 21),
(22, 29, 22);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_category`
--

CREATE TABLE `api_category` (
  `id` bigint NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `seo_meta_title` varchar(100) NOT NULL,
  `seo_meta_keywords` varchar(100) NOT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_category`
--

INSERT INTO `api_category` (`id`, `name`, `slug`, `description`, `seo_meta_title`, `seo_meta_keywords`, `image`) VALUES
(1, 'Project', 'project', 'Project', 'Project', 'Project', 'Project');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_contactmessage`
--

CREATE TABLE `api_contactmessage` (
  `id` bigint NOT NULL,
  `title` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `content` longtext NOT NULL,
  `send_date` datetime(6) NOT NULL,
  `is_seen` tinyint(1) NOT NULL,
  `is_reply` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_contactmessage`
--

INSERT INTO `api_contactmessage` (`id`, `title`, `name`, `phone`, `email`, `content`, `send_date`, `is_seen`, `is_reply`) VALUES
(1, 'Contact Us', 'CHAU DANG HUY', '0763671496', 'admin@gmail.com', 'aaaaa', '2024-07-25 12:09:39.494727', 0, 0),
(2, 'Contact Us', 'CHAU DANG HUY', '0763671496', 'admin@gmail.com', 'aasgge', '2024-07-25 12:51:59.642336', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_image`
--

CREATE TABLE `api_image` (
  `id` bigint NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_image`
--

INSERT INTO `api_image` (`id`, `image`, `created_at`) VALUES
(4, 'images/night_sand.jpg', '2024-07-24 16:20:34.698295'),
(5, 'images/picasso-.jpg', '2024-07-24 16:20:34.702296'),
(6, 'images/picasso-2.jpg', '2024-07-24 16:20:34.706295'),
(7, 'images/picasso-2.jpg', '2024-07-25 05:35:02.852243'),
(8, 'images/picasso-3.jpg', '2024-07-25 05:35:02.856622'),
(9, 'images/picasso-2_HZAQ6To.jpg', '2024-07-25 05:35:57.150226'),
(10, 'images/picasso-3_aaEsReU.jpg', '2024-07-25 05:35:57.153226'),
(14, 'images/4.jpg', '2024-07-25 08:49:49.872180'),
(15, 'images/5.jpg', '2024-07-25 08:49:49.880068'),
(16, 'images/6.jpg', '2024-07-25 08:49:49.885070'),
(17, 'images/7.jpg', '2024-07-25 08:49:49.891070'),
(18, 'images/1_rnRcdj8.jpg', '2024-07-25 08:51:44.787595'),
(19, 'images/2_fQbzJJe.jpg', '2024-07-25 08:51:44.793597'),
(20, 'images/3_pLW5XnR.jpg', '2024-07-25 08:51:44.799600'),
(21, 'images/4_gQclVOT.jpg', '2024-07-25 08:51:44.805788'),
(22, 'images/5_7XDkZEC.jpg', '2024-07-25 08:51:44.810789');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_page`
--

CREATE TABLE `api_page` (
  `id` bigint NOT NULL,
  `title` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `seo_meta_title` varchar(100) NOT NULL,
  `seo_meta_description` varchar(100) NOT NULL,
  `seo_meta_keywords` varchar(100) NOT NULL,
  `is_visibility` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `content` longtext NOT NULL DEFAULT (_utf8mb3'2')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_page`
--

INSERT INTO `api_page` (`id`, `title`, `slug`, `image`, `seo_meta_title`, `seo_meta_description`, `seo_meta_keywords`, `is_visibility`, `created_at`, `updated_at`, `content`) VALUES
(1, 'Home', 'home', 'images/logo_twK9Cdn.png', 'Homepage', 'Homepage', 'Homepage', 1, '2024-07-25 06:02:22.893458', '2024-07-25 08:39:33.098957', 'test'),
(2, 'Project', 'project', 'images/logo_PGfb9yM.png', 'Project', 'Project', 'Project', 1, '2024-07-25 08:04:06.701694', '2024-07-25 08:40:32.618686', 'test'),
(3, 'About us', 'about-us', 'images/logo_m4sxiL2.png', 'Welcome to W2D Studio!', 'Welcome to W2D Studio!', 'Welcome to W2D Studio!', 1, '2024-07-25 08:05:49.353903', '2024-07-25 08:21:32.405658', 'hello');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_permission`
--

CREATE TABLE `api_permission` (
  `id` bigint NOT NULL,
  `name` varchar(100) NOT NULL,
  `guard_name` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_role`
--

CREATE TABLE `api_role` (
  `id` bigint NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `created_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_role`
--

INSERT INTO `api_role` (`id`, `name`, `slug`, `created_at`) VALUES
(1, 'admin', 'admin', '2024-07-23 13:42:40.320614');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_rolehaspermission`
--

CREATE TABLE `api_rolehaspermission` (
  `id` bigint NOT NULL,
  `permission_id` bigint NOT NULL,
  `role_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_setting`
--

CREATE TABLE `api_setting` (
  `id` bigint NOT NULL,
  `site_timezone` varchar(100) NOT NULL,
  `site_logo` varchar(100) DEFAULT NULL,
  `site_favicon` varchar(100) DEFAULT NULL,
  `site_name` varchar(100) NOT NULL,
  `site_description` longtext NOT NULL,
  `site_keywords` longtext NOT NULL,
  `site_meta_title` varchar(100) NOT NULL,
  `site_meta_description` varchar(100) NOT NULL,
  `site_meta_keywords` varchar(100) NOT NULL,
  `site_meta_author` varchar(100) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_address` varchar(100) NOT NULL,
  `company_phone` varchar(100) NOT NULL,
  `company_email` varchar(100) NOT NULL,
  `company_logo` varchar(100) DEFAULT NULL,
  `email_setting_driver` longtext NOT NULL,
  `email_setting_host` varchar(100) NOT NULL,
  `email_setting_port` varchar(100) NOT NULL,
  `email_setting_encryption` varchar(100) NOT NULL,
  `email_setting_username` varchar(100) NOT NULL,
  `email_setting_password` varchar(100) NOT NULL,
  `seo_setting_title` varchar(100) NOT NULL,
  `seo_setting_description` varchar(100) NOT NULL,
  `seo_setting_keywords` varchar(100) NOT NULL,
  `seo_setting_author` varchar(100) NOT NULL,
  `seo_setting_image` varchar(100) DEFAULT NULL,
  `google_analytics_id` varchar(100) NOT NULL,
  `google_analytics_script` longtext NOT NULL,
  `google_analytics_enable` tinyint(1) NOT NULL,
  `recaptcha_key` varchar(100) NOT NULL,
  `recaptcha_secret` varchar(100) NOT NULL,
  `recaptcha_enable` tinyint(1) NOT NULL,
  `social_facebook` varchar(100) NOT NULL,
  `social_twitter` varchar(100) NOT NULL,
  `social_instagram` varchar(100) NOT NULL,
  `social_youtube` varchar(100) NOT NULL,
  `social_linkedin` varchar(100) NOT NULL,
  `social_pinterest` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_setting`
--

INSERT INTO `api_setting` (`id`, `site_timezone`, `site_logo`, `site_favicon`, `site_name`, `site_description`, `site_keywords`, `site_meta_title`, `site_meta_description`, `site_meta_keywords`, `site_meta_author`, `company_name`, `company_address`, `company_phone`, `company_email`, `company_logo`, `email_setting_driver`, `email_setting_host`, `email_setting_port`, `email_setting_encryption`, `email_setting_username`, `email_setting_password`, `seo_setting_title`, `seo_setting_description`, `seo_setting_keywords`, `seo_setting_author`, `seo_setting_image`, `google_analytics_id`, `google_analytics_script`, `google_analytics_enable`, `recaptcha_key`, `recaptcha_secret`, `recaptcha_enable`, `social_facebook`, `social_twitter`, `social_instagram`, `social_youtube`, `social_linkedin`, `social_pinterest`, `created_at`, `updated_at`) VALUES
(1, 'UTC+7', 'images/logo.png', 'images/favicon.png', 'W2D Studio', 'Design agency', 'Design, Home, Thiet ke', 'Design agency in VN', 'Design agency', 'Design, Home, Thiet ke', 'Design, Home, Thiet ke', 'W2Studio', 'Le Capitole - 27 Thái Thịnh - Đống Đa - Hà Nội', '0986.208.387', 'info@w2studio.vn', 'images/logo_EKJCYo2.png', 'smtp', 'smtp.mailtrap.io', '25', 'tls', 'tester', '123', 'design agency', 'design agency', 'design agency', 'design agency', 'images/logo_jKCxu7V.png', 'GA-123', '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\r\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\r\n \r\n  ga(\'create\', \'UA-xxxxxx-1\', \'auto\');\r\n  ga(\'send\', \'pageview\');', 1, '123', '123', 1, 'www.facebook.com/w2studio', 'twitter.com/w2studio', 'instagram.com/w2studio', 'youtube.com/w2studio', 'linkedin.com/w2studio', 'pinterest.com/w2studio', '2024-07-25 07:41:44.497949', '2024-07-25 12:51:32.815603');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_sliderimage`
--

CREATE TABLE `api_sliderimage` (
  `id` bigint NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `uploaded_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_sliderimage`
--

INSERT INTO `api_sliderimage` (`id`, `image`, `uploaded_at`) VALUES
(2, 'images/slide_s35.jpg', '2024-07-25 09:35:09.050481'),
(3, 'images/slide_s37.jpg', '2024-07-25 09:35:09.055505'),
(4, 'images/slide_s38.jpg', '2024-07-25 09:35:09.060313'),
(5, 'images/slide_s39.jpg', '2024-07-25 09:35:09.064313');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_status`
--

CREATE TABLE `api_status` (
  `id` bigint NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_status`
--

INSERT INTO `api_status` (`id`, `name`, `slug`) VALUES
(1, 'completed', 'completed'),
(2, 'Coming Soon', 'coming-soon');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_token`
--

CREATE TABLE `api_token` (
  `id` bigint NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `expires_at` datetime(6) NOT NULL,
  `is_used` tinyint(1) NOT NULL,
  `user_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_token`
--

INSERT INTO `api_token` (`id`, `token`, `created_at`, `expires_at`, `is_used`, `user_id`) VALUES
(2, '', '2024-07-24 04:52:49.143791', '2024-07-24 04:52:49.143791', 0, 1),
(3, 'dfcfaa2a-4425-4d33-82dd-9658ce1fa8a7', '2024-07-24 04:54:34.738729', '2024-07-24 04:54:34.738729', 0, 1),
(4, 'd48a5ff6-375c-4696-8d4f-3b116ef3467f', '2024-07-24 05:42:05.540216', '2024-07-24 05:42:05.540216', 0, 1),
(5, 'a4ffa3f1-13ab-487a-8104-891e76ba68d7', '2024-07-24 13:19:07.621908', '2024-07-25 13:19:07.619907', 0, 1),
(6, '5a2f7eb3-a965-47ec-a0d8-a725920c7e4f', '2024-07-25 05:33:11.408888', '2024-07-26 05:33:11.406890', 0, 1),
(7, 'a1f0aa3b-2286-4f6a-b38a-1e488264a383', '2024-07-25 12:27:51.687897', '2024-07-26 12:27:51.684892', 0, 1),
(8, 'b0dfbd15-ad2e-4915-a35b-e883312a1f3c', '2024-07-25 12:30:28.449278', '2024-07-26 12:30:28.446281', 0, 1),
(9, 'f8b6602f-868e-4b00-86e6-7569ac93654d', '2024-07-25 12:30:38.966792', '2024-07-26 12:30:38.964791', 0, 1),
(10, '2f1e7a25-2763-40db-a8ab-3a9ecb382ccc', '2024-07-25 12:30:44.866850', '2024-07-26 12:30:44.863852', 0, 1),
(11, 'f7fd90be-d644-4069-bf64-cdf24478abcc', '2024-07-25 12:31:25.145103', '2024-07-26 12:31:25.143098', 0, 1),
(12, '8e3f1bc8-ca0c-42fe-8917-29b9a098e701', '2024-07-25 12:53:27.085347', '2024-07-26 12:53:27.082349', 0, 1),
(13, 'e0906c78-2c8d-4e94-917a-5f52ea7a4d72', '2024-07-25 12:55:05.742317', '2024-07-26 12:55:05.739292', 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `api_user`
--

CREATE TABLE `api_user` (
  `id` bigint NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `role_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `api_user`
--

INSERT INTO `api_user` (`id`, `name`, `email`, `phone`, `avatar`, `password`, `created_at`, `role_id`) VALUES
(1, 'admin', 'admin@gmail.com', '84123456789', 'avatar.png', 'pbkdf2_sha256$720000$i9gkKmP(D=-ZV138A0!_Jd4avy81U7b82*#7hp+O!dO*i/Nm_PiLgR.$LdYkQD0ZOgDnPzbDAia3IyqwTBfk/oSaOsUDEVx9+U4=', '2024-07-23 14:32:19.876549', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add category', 7, 'add_category'),
(26, 'Can change category', 7, 'change_category'),
(27, 'Can delete category', 7, 'delete_category'),
(28, 'Can view category', 7, 'view_category'),
(29, 'Can add contact message', 8, 'add_contactmessage'),
(30, 'Can change contact message', 8, 'change_contactmessage'),
(31, 'Can delete contact message', 8, 'delete_contactmessage'),
(32, 'Can view contact message', 8, 'view_contactmessage'),
(33, 'Can add page', 9, 'add_page'),
(34, 'Can change page', 9, 'change_page'),
(35, 'Can delete page', 9, 'delete_page'),
(36, 'Can view page', 9, 'view_page'),
(37, 'Can add permission', 10, 'add_permission'),
(38, 'Can change permission', 10, 'change_permission'),
(39, 'Can delete permission', 10, 'delete_permission'),
(40, 'Can view permission', 10, 'view_permission'),
(41, 'Can add role', 11, 'add_role'),
(42, 'Can change role', 11, 'change_role'),
(43, 'Can delete role', 11, 'delete_role'),
(44, 'Can view role', 11, 'view_role'),
(45, 'Can add setting', 12, 'add_setting'),
(46, 'Can change setting', 12, 'change_setting'),
(47, 'Can delete setting', 12, 'delete_setting'),
(48, 'Can view setting', 12, 'view_setting'),
(49, 'Can add status', 13, 'add_status'),
(50, 'Can change status', 13, 'change_status'),
(51, 'Can delete status', 13, 'delete_status'),
(52, 'Can view status', 13, 'view_status'),
(53, 'Can add role has permission', 14, 'add_rolehaspermission'),
(54, 'Can change role has permission', 14, 'change_rolehaspermission'),
(55, 'Can delete role has permission', 14, 'delete_rolehaspermission'),
(56, 'Can view role has permission', 14, 'view_rolehaspermission'),
(57, 'Can add user', 15, 'add_user'),
(58, 'Can change user', 15, 'change_user'),
(59, 'Can delete user', 15, 'delete_user'),
(60, 'Can view user', 15, 'view_user'),
(61, 'Can add article', 16, 'add_article'),
(62, 'Can change article', 16, 'change_article'),
(63, 'Can delete article', 16, 'delete_article'),
(64, 'Can view article', 16, 'view_article'),
(65, 'Can add blacklisted token', 17, 'add_blacklistedtoken'),
(66, 'Can change blacklisted token', 17, 'change_blacklistedtoken'),
(67, 'Can delete blacklisted token', 17, 'delete_blacklistedtoken'),
(68, 'Can view blacklisted token', 17, 'view_blacklistedtoken'),
(69, 'Can add outstanding token', 18, 'add_outstandingtoken'),
(70, 'Can change outstanding token', 18, 'change_outstandingtoken'),
(71, 'Can delete outstanding token', 18, 'delete_outstandingtoken'),
(72, 'Can view outstanding token', 18, 'view_outstandingtoken'),
(73, 'Can add token', 19, 'add_token'),
(74, 'Can change token', 19, 'change_token'),
(75, 'Can delete token', 19, 'delete_token'),
(76, 'Can view token', 19, 'view_token'),
(77, 'Can add image', 20, 'add_image'),
(78, 'Can change image', 20, 'change_image'),
(79, 'Can delete image', 20, 'delete_image'),
(80, 'Can view image', 20, 'view_image'),
(81, 'Can add slider image', 21, 'add_sliderimage'),
(82, 'Can change slider image', 21, 'change_sliderimage'),
(83, 'Can delete slider image', 21, 'delete_sliderimage'),
(84, 'Can view slider image', 21, 'view_sliderimage');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$720000$qNWwkLQhhcf41gbYxu6xFp$uIolX7Xg6t8Ei88lldc7fOKmIwqZA6mZQjFYNqBFRFQ=', '2024-07-24 13:57:17.403443', 1, 'phapsuit', '', '', 'phapsuit@gmail.com', 1, 1, '2024-07-20 14:19:25.360095');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL
) ;

--
-- Đang đổ dữ liệu cho bảng `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2024-07-23 13:42:40.321613', '1', 'admin', 1, '[{\"added\": {}}]', 11, 1),
(2, '2024-07-24 13:57:41.584866', '2', 'Coming Soon', 1, '[{\"added\": {}}]', 13, 1),
(3, '2024-07-24 13:58:08.456206', '1', 'Project', 1, '[{\"added\": {}}]', 7, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(16, 'api', 'article'),
(7, 'api', 'category'),
(8, 'api', 'contactmessage'),
(20, 'api', 'image'),
(9, 'api', 'page'),
(10, 'api', 'permission'),
(11, 'api', 'role'),
(14, 'api', 'rolehaspermission'),
(12, 'api', 'setting'),
(21, 'api', 'sliderimage'),
(13, 'api', 'status'),
(19, 'api', 'token'),
(15, 'api', 'user'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session'),
(17, 'token_blacklist', 'blacklistedtoken'),
(18, 'token_blacklist', 'outstandingtoken');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-07-20 03:39:59.603463'),
(2, 'auth', '0001_initial', '2024-07-20 03:40:00.153852'),
(3, 'admin', '0001_initial', '2024-07-20 03:40:00.288917'),
(4, 'admin', '0002_logentry_remove_auto_add', '2024-07-20 03:40:00.296913'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2024-07-20 03:40:00.303913'),
(6, 'api', '0001_initial', '2024-07-20 03:40:00.911070'),
(7, 'contenttypes', '0002_remove_content_type_name', '2024-07-20 03:40:00.984531'),
(8, 'auth', '0002_alter_permission_name_max_length', '2024-07-20 03:40:01.042851'),
(9, 'auth', '0003_alter_user_email_max_length', '2024-07-20 03:40:01.062511'),
(10, 'auth', '0004_alter_user_username_opts', '2024-07-20 03:40:01.069510'),
(11, 'auth', '0005_alter_user_last_login_null', '2024-07-20 03:40:01.117675'),
(12, 'auth', '0006_require_contenttypes_0002', '2024-07-20 03:40:01.121793'),
(13, 'auth', '0007_alter_validators_add_error_messages', '2024-07-20 03:40:01.129959'),
(14, 'auth', '0008_alter_user_username_max_length', '2024-07-20 03:40:01.190918'),
(15, 'auth', '0009_alter_user_last_name_max_length', '2024-07-20 03:40:01.258448'),
(16, 'auth', '0010_alter_group_name_max_length', '2024-07-20 03:40:01.276025'),
(17, 'auth', '0011_update_proxy_permissions', '2024-07-20 03:40:01.291145'),
(18, 'auth', '0012_alter_user_first_name_max_length', '2024-07-20 03:40:01.379483'),
(19, 'sessions', '0001_initial', '2024-07-20 03:40:01.415483'),
(20, 'api', '0002_api', '2024-07-20 03:43:14.592722'),
(21, 'token_blacklist', '0001_initial', '2024-07-20 14:20:24.717335'),
(22, 'token_blacklist', '0002_outstandingtoken_jti_hex', '2024-07-20 14:20:24.741383'),
(23, 'token_blacklist', '0003_auto_20171017_2007', '2024-07-20 14:20:24.757383'),
(24, 'token_blacklist', '0004_auto_20171017_2013', '2024-07-20 14:20:24.837131'),
(25, 'token_blacklist', '0005_remove_outstandingtoken_jti', '2024-07-20 14:20:24.901573'),
(26, 'token_blacklist', '0006_auto_20171017_2113', '2024-07-20 14:20:24.931142'),
(27, 'token_blacklist', '0007_auto_20171017_2214', '2024-07-20 14:20:25.100446'),
(28, 'token_blacklist', '0008_migrate_to_bigautofield', '2024-07-20 14:20:25.312520'),
(29, 'token_blacklist', '0010_fix_migrate_to_bigautofield', '2024-07-20 14:20:25.323882'),
(30, 'token_blacklist', '0011_linearizes_history', '2024-07-20 14:20:25.327882'),
(31, 'token_blacklist', '0012_alter_outstandingtoken_user', '2024-07-20 14:20:25.338883'),
(32, 'api', '0003_token', '2024-07-23 12:25:55.025818'),
(33, 'api', '0004_alter_user_password', '2024-07-23 13:37:26.388207'),
(34, 'api', '0005_alter_token_created_at_alter_token_expires_at_and_more', '2024-07-24 04:52:02.724870'),
(35, 'api', '0006_alter_token_expires_at', '2024-07-24 09:58:04.174367'),
(36, 'api', '0007_image_alter_article_image_remove_article_images_and_more', '2024-07-24 14:43:48.553422'),
(37, 'api', '0008_alter_article_images', '2024-07-24 15:48:49.454485'),
(38, 'api', '0009_alter_category_image_alter_page_image_and_more', '2024-07-25 05:57:54.767393'),
(39, 'api', '0010_alter_setting_company_logo_and_more', '2024-07-25 07:42:49.003841'),
(40, 'api', '0011_page_content', '2024-07-25 08:10:14.329771'),
(41, 'api', '0012_sliderimage', '2024-07-25 09:34:53.940278'),
(42, 'api', '0013_article_address_article_area_article_completed_year', '2024-07-25 11:19:52.388427');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('25oeiefezg5hcvxt9nl7htub9pjgsedv', '.eJxVjMsOwiAQRf-FtSHAMGVw6d5vIDylaiAp7cr479qkC93ec859Mee3tbpt5MXNiZ2ZZKffLfj4yG0H6e7brfPY27rMge8KP-jg157y83K4fwfVj_qtA9IkVMFECaMRpAsIn0uQUASg0QSedFQo44QEIigdA6hswVhLhQR7fwDMJjbs:1sWFkV:PwhoS7NrNJ-PejdmeyofZ34D44gzccLf84OFsrTX-1I', '2024-08-06 13:40:15.358913'),
('co1tvf4hnotarxragtvc0tve12v6poot', '.eJxVjMsOwiAQRf-FtSHAMGVw6d5vIDylaiAp7cr479qkC93ec859Mee3tbpt5MXNiZ2ZZKffLfj4yG0H6e7brfPY27rMge8KP-jg157y83K4fwfVj_qtA9IkVMFECaMRpAsIn0uQUASg0QSedFQo44QEIigdA6hswVhLhQR7fwDMJjbs:1sWcUX:_MjGukwzuOq2idy6qVxCZQw8crPUt54Unt_6KWV1C-A', '2024-08-07 13:57:17.411429');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `token_blacklist_blacklistedtoken`
--

CREATE TABLE `token_blacklist_blacklistedtoken` (
  `id` bigint NOT NULL,
  `blacklisted_at` datetime(6) NOT NULL,
  `token_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `token_blacklist_blacklistedtoken`
--

INSERT INTO `token_blacklist_blacklistedtoken` (`id`, `blacklisted_at`, `token_id`) VALUES
(1, '2024-07-20 14:32:01.304775', 1),
(2, '2024-07-20 15:31:26.706094', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `token_blacklist_outstandingtoken`
--

CREATE TABLE `token_blacklist_outstandingtoken` (
  `id` bigint NOT NULL,
  `token` longtext NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) NOT NULL,
  `user_id` int DEFAULT NULL,
  `jti` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `token_blacklist_outstandingtoken`
--

INSERT INTO `token_blacklist_outstandingtoken` (`id`, `token`, `created_at`, `expires_at`, `user_id`, `jti`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTU3MjA4OSwiaWF0IjoxNzIxNDg1Njg5LCJqdGkiOiI3NDM1NDcyYjMzZjg0YmI4OTIxNGVhNTMwZTliYjgwOSIsInVzZXJfaWQiOjF9.v52yVP9RNC149gyEqBwKIHNY2hvlSnQZcCOz7RJv55A', '2024-07-20 14:28:09.340563', '2024-07-21 14:28:09.000000', 1, '7435472b33f84bb89214ea530e9bb809'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTU3NDMyMywiaWF0IjoxNzIxNDg3OTIzLCJqdGkiOiI3NjY0NzkxMGY5OWQ0ZjUwOTg0ZTRhZjVmMGQwOGI3YyIsInVzZXJfaWQiOjF9.SskULCGrFwQYvhJLRCsS23QuW8QEj7FUA3oGJ7G3bRU', '2024-07-20 15:05:23.413983', '2024-07-21 15:05:23.000000', 1, '76647910f99d4f50984e4af5f0d08b7c'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTU3NTYxNCwiaWF0IjoxNzIxNDg5MjE0LCJqdGkiOiI3MGMxNzNmMjk3YTc0YjVjYmMwYWRjMTIxYTgxMjZjMCIsInVzZXJfaWQiOjF9.LdYgS2Hw6DCSP47icLZg_kn2qKmL5Ba_dbIZNN2coJc', '2024-07-20 15:26:54.767742', '2024-07-21 15:26:54.000000', 1, '70c173f297a74b5cbc0adc121a8126c0'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTU3NTg0NSwiaWF0IjoxNzIxNDg5NDQ1LCJqdGkiOiJlYWJkMzE4MzgxOWU0ZGM4OGViMzU5NGM4MGQ0ZGViMyIsInVzZXJfaWQiOjF9.nwVmugRR_rHUtEf75aCVlSLNWtDcvphbobbovW884So', '2024-07-20 15:30:45.869201', '2024-07-21 15:30:45.000000', 1, 'eabd3183819e4dc88eb3594c80d4deb3');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `api_article`
--
ALTER TABLE `api_article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_article_category_id_71ca3d7d_fk_api_category_id` (`category_id`),
  ADD KEY `api_article_status_id_c331f08a_fk_api_status_id` (`status_id`),
  ADD KEY `api_article_user_id_2e146b0d_fk_api_user_id` (`user_id`),
  ADD KEY `api_article_slug_a1957baa` (`slug`);

--
-- Chỉ mục cho bảng `api_article_images`
--
ALTER TABLE `api_article_images`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `api_article_images_article_id_image_id_93e32903_uniq` (`article_id`,`image_id`),
  ADD KEY `api_article_images_image_id_2db7b589_fk_api_image_id` (`image_id`);

--
-- Chỉ mục cho bảng `api_category`
--
ALTER TABLE `api_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_category_slug_b6a34ca6` (`slug`);

--
-- Chỉ mục cho bảng `api_contactmessage`
--
ALTER TABLE `api_contactmessage`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `api_image`
--
ALTER TABLE `api_image`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `api_page`
--
ALTER TABLE `api_page`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_page_slug_a77b4e96` (`slug`);

--
-- Chỉ mục cho bảng `api_permission`
--
ALTER TABLE `api_permission`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `api_role`
--
ALTER TABLE `api_role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_role_slug_7f14f579` (`slug`);

--
-- Chỉ mục cho bảng `api_rolehaspermission`
--
ALTER TABLE `api_rolehaspermission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_rolehaspermissio_permission_id_a7781437_fk_api_permi` (`permission_id`),
  ADD KEY `api_rolehaspermission_role_id_f5962872_fk_api_role_id` (`role_id`);

--
-- Chỉ mục cho bảng `api_setting`
--
ALTER TABLE `api_setting`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `api_sliderimage`
--
ALTER TABLE `api_sliderimage`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `api_status`
--
ALTER TABLE `api_status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_status_slug_84569298` (`slug`);

--
-- Chỉ mục cho bảng `api_token`
--
ALTER TABLE `api_token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_token_user_id_b646d2e7_fk_api_user_id` (`user_id`);

--
-- Chỉ mục cho bảng `api_user`
--
ALTER TABLE `api_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_user_role_id_0b60389b_fk_api_role_id` (`role_id`);

--
-- Chỉ mục cho bảng `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Chỉ mục cho bảng `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Chỉ mục cho bảng `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Chỉ mục cho bảng `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Chỉ mục cho bảng `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Chỉ mục cho bảng `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Chỉ mục cho bảng `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Chỉ mục cho bảng `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Chỉ mục cho bảng `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token_id` (`token_id`);

--
-- Chỉ mục cho bảng `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq` (`jti`),
  ADD KEY `token_blacklist_outs_user_id_83bc629a_fk_auth_user` (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `api_article`
--
ALTER TABLE `api_article`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `api_article_images`
--
ALTER TABLE `api_article_images`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `api_category`
--
ALTER TABLE `api_category`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `api_contactmessage`
--
ALTER TABLE `api_contactmessage`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `api_image`
--
ALTER TABLE `api_image`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `api_page`
--
ALTER TABLE `api_page`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `api_permission`
--
ALTER TABLE `api_permission`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `api_role`
--
ALTER TABLE `api_role`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `api_rolehaspermission`
--
ALTER TABLE `api_rolehaspermission`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `api_setting`
--
ALTER TABLE `api_setting`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `api_sliderimage`
--
ALTER TABLE `api_sliderimage`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `api_status`
--
ALTER TABLE `api_status`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `api_token`
--
ALTER TABLE `api_token`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `api_user`
--
ALTER TABLE `api_user`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT cho bảng `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT cho bảng `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `api_article`
--
ALTER TABLE `api_article`
  ADD CONSTRAINT `api_article_category_id_71ca3d7d_fk_api_category_id` FOREIGN KEY (`category_id`) REFERENCES `api_category` (`id`),
  ADD CONSTRAINT `api_article_status_id_c331f08a_fk_api_status_id` FOREIGN KEY (`status_id`) REFERENCES `api_status` (`id`),
  ADD CONSTRAINT `api_article_user_id_2e146b0d_fk_api_user_id` FOREIGN KEY (`user_id`) REFERENCES `api_user` (`id`);

--
-- Các ràng buộc cho bảng `api_article_images`
--
ALTER TABLE `api_article_images`
  ADD CONSTRAINT `api_article_images_article_id_25dcce80_fk_api_article_id` FOREIGN KEY (`article_id`) REFERENCES `api_article` (`id`),
  ADD CONSTRAINT `api_article_images_image_id_2db7b589_fk_api_image_id` FOREIGN KEY (`image_id`) REFERENCES `api_image` (`id`);

--
-- Các ràng buộc cho bảng `api_rolehaspermission`
--
ALTER TABLE `api_rolehaspermission`
  ADD CONSTRAINT `api_rolehaspermissio_permission_id_a7781437_fk_api_permi` FOREIGN KEY (`permission_id`) REFERENCES `api_permission` (`id`),
  ADD CONSTRAINT `api_rolehaspermission_role_id_f5962872_fk_api_role_id` FOREIGN KEY (`role_id`) REFERENCES `api_role` (`id`);

--
-- Các ràng buộc cho bảng `api_token`
--
ALTER TABLE `api_token`
  ADD CONSTRAINT `api_token_user_id_b646d2e7_fk_api_user_id` FOREIGN KEY (`user_id`) REFERENCES `api_user` (`id`);

--
-- Các ràng buộc cho bảng `api_user`
--
ALTER TABLE `api_user`
  ADD CONSTRAINT `api_user_role_id_0b60389b_fk_api_role_id` FOREIGN KEY (`role_id`) REFERENCES `api_role` (`id`);

--
-- Các ràng buộc cho bảng `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Các ràng buộc cho bảng `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Các ràng buộc cho bảng `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Các ràng buộc cho bảng `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Các ràng buộc cho bảng `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Các ràng buộc cho bảng `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  ADD CONSTRAINT `token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk` FOREIGN KEY (`token_id`) REFERENCES `token_blacklist_outstandingtoken` (`id`);

--
-- Các ràng buộc cho bảng `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  ADD CONSTRAINT `token_blacklist_outs_user_id_83bc629a_fk_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
