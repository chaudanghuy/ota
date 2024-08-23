-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: webkt
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api_article`
--

DROP TABLE IF EXISTS `api_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_article` (
  `id` bigint NOT NULL AUTO_INCREMENT,
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
  `completed_year` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_article_category_id_71ca3d7d_fk_api_category_id` (`category_id`),
  KEY `api_article_status_id_c331f08a_fk_api_status_id` (`status_id`),
  KEY `api_article_user_id_2e146b0d_fk_api_user_id` (`user_id`),
  KEY `api_article_slug_a1957baa` (`slug`),
  CONSTRAINT `api_article_category_id_71ca3d7d_fk_api_category_id` FOREIGN KEY (`category_id`) REFERENCES `api_category` (`id`),
  CONSTRAINT `api_article_status_id_c331f08a_fk_api_status_id` FOREIGN KEY (`status_id`) REFERENCES `api_status` (`id`),
  CONSTRAINT `api_article_user_id_2e146b0d_fk_api_user_id` FOREIGN KEY (`user_id`) REFERENCES `api_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_article`
--

LOCK TABLES `api_article` WRITE;
/*!40000 ALTER TABLE `api_article` DISABLE KEYS */;
INSERT INTO `api_article` VALUES (28,'Opla Apartment','opla-apartment','<p class=\"ql-align-center\">Tên dự án: Opla Apartment</p><p class=\"ql-align-center\">Thiết kế và thi công: W2D Studio</p><p class=\"ql-align-center\">Diện tích:&nbsp;94m2</p><p class=\"ql-align-center\">Hoàn thành: 03/2024</p><p class=\"ql-align-center\">Địa điểm:&nbsp;<span style=\"color: rgb(34, 34, 34);\">Park Hill Premium - Hà Nội</span></p><p class=\"ql-align-center\">Photo: Nguyễn Thái Thạch</p>','images/1.jpg','OPLA APARTMENT','OPLA APARTMENT','OPLA APARTMENT','2024-07-25 08:49:49.847077','2024-07-25 16:19:05.617747',1,1,1,'Park Hill Premium - Ha Noi','94',2024),(29,'MS Duplex','ms-duplex','<p class=\"ql-align-center\">Tên dự án: MS Duplex</p><p class=\"ql-align-center\">Thiết kế và thi công: W2D Studio</p><p class=\"ql-align-center\">Diện tích: 700m2 nội thất - 200m2 sân vườn</p><p class=\"ql-align-center\">Hoàn thành: 07/2023</p><p class=\"ql-align-center\">Địa điểm: T-Place -&nbsp;Hà Nội</p><p class=\"ql-align-center\">Photo: Nguyễn Thái Thạch</p>','images/1_P7ZoKAE.jpg','MS Duplex','MS Duplex','MS Duplex','2024-07-25 08:51:44.783035','2024-07-25 16:30:00.860278',1,1,1,'T-Place Ha Noi','700m2 noi that - 200m2 san vuon',2024),(30,'S Man Cave','s-man-cave','<p><span style=\"color: rgb(51, 51, 51);\">S Man Cave là nơi chốn của một người đàn ông độc thân, với gần như đầy đủ những thứ anh ta cần để tiếp đãi bạn bè/đối tác, làm việc, chơi game, sống một cuộc sống với mức hưởng thụ cao cấp.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Chân thành cảm ơn sự tin tưởng của gia chủ để chúng tôi được thực hiện trọn vẹn dự án tâm huyết này.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Chân thành cảm ơn các đối tác đồng hành cùng chúng tôi thực hiện dự án:</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Các anh em thợ nề, thạch cao, sơn bả, cơ khí,...</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Tủ bếp: Siematic / Đá bếp: Inalco / Thiết bị bếp: V-ZUG từ Phan Anh Luxury</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Sen vòi bếp, phòng tắm: CeaDesign, Gessi /&nbsp;Thiết bị phòng tắm: Antonio Lupi, Villeroy &amp; Boch</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Đèn hệ thống: Alis, Orbit, Occhio / Thiết kế ánh sáng từ Alis Lighting</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Điện thông minh / Công tắc ổ cắm: Jung từ Sebeno</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Thi công điện - nước - sưởi sàn: SMEP</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Lọc nước / Heatpump: Benlley</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Điều hòa / Thông gió: An Phú</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Sàn gỗ: BOEN</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Đồ gỗ liền tường: Xưởng mộc O2</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Cửa nhôm nội thất: Poly</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Cung cấp và thi công đá Neolith, Travertine Roman: StoneX</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Sofa: Baxter / Bàn trà: Molteni&amp;C / Armchair: De Padova / Giường, tủ đầu giường: B&amp;B Italia / Bàn ghế ăn: District Eight / Bàn làm việc: Audo Copenhagen / Ghế làm việc: Poltrona Frau</span></p><p><span style=\"color: rgb(51, 51, 51);\">- Đèn trang trí: Occhio, Audo Copenhagen, Moooi</span></p>','images/1_W3nhlyy.jpg','S Man Cave','S Man Cave','S Man Cave','2024-07-25 16:32:33.336755','2024-07-25 16:32:33.336870',1,1,1,'Hà Nội','92',2024),(31,'KA House','ka-house','','images/1_0mHybJG.jpg','KA House','KA House','KA House','2024-07-26 00:41:17.369314','2024-07-26 00:41:17.369372',1,2,1,'Hà Nội','700',2024),(32,'L House','l-house','','images/1_mWJz5uW.jpg','L House','L House','L House','2024-07-26 00:43:06.192852','2024-07-26 00:43:06.192967',1,2,1,'Vinhome Greenbay - Ha Noi','700',2024);
/*!40000 ALTER TABLE `api_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_article_images`
--

DROP TABLE IF EXISTS `api_article_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_article_images` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `article_id` bigint NOT NULL,
  `image_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `api_article_images_article_id_image_id_93e32903_uniq` (`article_id`,`image_id`),
  KEY `api_article_images_image_id_2db7b589_fk_api_image_id` (`image_id`),
  CONSTRAINT `api_article_images_article_id_25dcce80_fk_api_article_id` FOREIGN KEY (`article_id`) REFERENCES `api_article` (`id`),
  CONSTRAINT `api_article_images_image_id_2db7b589_fk_api_image_id` FOREIGN KEY (`image_id`) REFERENCES `api_image` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_article_images`
--

LOCK TABLES `api_article_images` WRITE;
/*!40000 ALTER TABLE `api_article_images` DISABLE KEYS */;
INSERT INTO `api_article_images` VALUES (23,28,23),(24,28,24),(25,28,25),(26,28,26),(27,28,27),(28,28,28),(29,28,29),(30,29,30),(31,29,31),(32,29,32),(33,29,33),(34,29,34),(35,30,35),(36,30,36),(37,30,37),(38,30,38),(39,31,39),(40,31,40),(41,31,41),(42,31,42),(43,31,43),(44,32,44),(45,32,45),(46,32,46),(47,32,47),(48,32,48);
/*!40000 ALTER TABLE `api_article_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_category`
--

DROP TABLE IF EXISTS `api_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `seo_meta_title` varchar(100) NOT NULL,
  `seo_meta_keywords` varchar(100) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_category_slug_b6a34ca6` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_category`
--

LOCK TABLES `api_category` WRITE;
/*!40000 ALTER TABLE `api_category` DISABLE KEYS */;
INSERT INTO `api_category` VALUES (1,'Project','project','Project','Project','Project','Project');
/*!40000 ALTER TABLE `api_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_contactmessage`
--

DROP TABLE IF EXISTS `api_contactmessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_contactmessage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `content` longtext NOT NULL,
  `send_date` datetime(6) NOT NULL,
  `is_seen` tinyint(1) NOT NULL,
  `is_reply` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_contactmessage`
--

LOCK TABLES `api_contactmessage` WRITE;
/*!40000 ALTER TABLE `api_contactmessage` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_contactmessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_image`
--

DROP TABLE IF EXISTS `api_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_image` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_image`
--

LOCK TABLES `api_image` WRITE;
/*!40000 ALTER TABLE `api_image` DISABLE KEYS */;
INSERT INTO `api_image` VALUES (4,'images/night_sand.jpg','2024-07-24 16:20:34.698295'),(5,'images/picasso-.jpg','2024-07-24 16:20:34.702296'),(6,'images/picasso-2.jpg','2024-07-24 16:20:34.706295'),(7,'images/picasso-2.jpg','2024-07-25 05:35:02.852243'),(8,'images/picasso-3.jpg','2024-07-25 05:35:02.856622'),(9,'images/picasso-2_HZAQ6To.jpg','2024-07-25 05:35:57.150226'),(10,'images/picasso-3_aaEsReU.jpg','2024-07-25 05:35:57.153226'),(23,'images/1_ZDYlccz.jpg','2024-07-25 16:29:38.742445'),(24,'images/2.jpg','2024-07-25 16:29:38.755278'),(25,'images/3.jpg','2024-07-25 16:29:38.763268'),(26,'images/4.jpg','2024-07-25 16:29:38.769824'),(27,'images/5.jpg','2024-07-25 16:29:38.777408'),(28,'images/6.jpg','2024-07-25 16:29:38.787787'),(29,'images/7.jpg','2024-07-25 16:29:38.794816'),(30,'images/1_30PNw7u.jpg','2024-07-25 16:30:14.700234'),(31,'images/2_noD4ogW.jpg','2024-07-25 16:30:14.719771'),(32,'images/3_tMMtYQc.jpg','2024-07-25 16:30:14.731865'),(33,'images/4_sGdZRNm.jpg','2024-07-25 16:30:14.746191'),(34,'images/5_TUHx4S3.jpg','2024-07-25 16:30:14.763819'),(35,'images/1_oEBiDPJ.jpg','2024-07-25 16:32:33.348082'),(36,'images/2_gBpsppX.jpg','2024-07-25 16:32:33.360830'),(37,'images/3_CiMjIUr.jpg','2024-07-25 16:32:33.369394'),(38,'images/4_go63ybc.jpg','2024-07-25 16:32:33.377906'),(39,'images/1_cbd2lwz.jpg','2024-07-26 00:41:17.383733'),(40,'images/2_2G5yCMW.jpg','2024-07-26 00:41:17.393237'),(41,'images/3_lMKZJTN.jpg','2024-07-26 00:41:17.399674'),(42,'images/4_hdAZhM8.jpg','2024-07-26 00:41:17.405723'),(43,'images/5_JJdw7Z5.jpg','2024-07-26 00:41:17.412387'),(44,'images/1_xNsR6AA.jpg','2024-07-26 00:43:06.202861'),(45,'images/2_Emuf53F.jpg','2024-07-26 00:43:06.212946'),(46,'images/3_QcLKhXX.jpg','2024-07-26 00:43:06.222814'),(47,'images/4_MkhULQ4.jpg','2024-07-26 00:43:06.230144'),(48,'images/5_fZL0R6P.jpg','2024-07-26 00:43:06.237676');
/*!40000 ALTER TABLE `api_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_page`
--

DROP TABLE IF EXISTS `api_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_page` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `seo_meta_title` varchar(100) NOT NULL,
  `seo_meta_description` varchar(100) NOT NULL,
  `seo_meta_keywords` varchar(100) NOT NULL,
  `is_visibility` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `content` longtext NOT NULL DEFAULT (_utf8mb3'2'),
  PRIMARY KEY (`id`),
  KEY `api_page_slug_a77b4e96` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_page`
--

LOCK TABLES `api_page` WRITE;
/*!40000 ALTER TABLE `api_page` DISABLE KEYS */;
INSERT INTO `api_page` VALUES (1,'Home','home','images/1_GWRCfFb.jpg','Homepage','Homepage','Homepage',1,'2024-07-25 06:02:22.893458','2024-07-25 16:36:14.743558','test'),(2,'Project','project','images/1_KLb87Hh.jpg','Project','Project','Project',1,'2024-07-25 08:04:06.701694','2024-07-25 16:40:37.962775','test'),(3,'About us','about-us','images/logo_s8aioGT.png','Welcome to W2D Studio!','Welcome to W2D Studio!','Welcome to W2D Studio!',1,'2024-07-25 08:05:49.353903','2024-07-25 16:40:44.708306','hello');
/*!40000 ALTER TABLE `api_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_permission`
--

DROP TABLE IF EXISTS `api_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_permission` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `guard_name` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_permission`
--

LOCK TABLES `api_permission` WRITE;
/*!40000 ALTER TABLE `api_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_role`
--

DROP TABLE IF EXISTS `api_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_role_slug_7f14f579` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_role`
--

LOCK TABLES `api_role` WRITE;
/*!40000 ALTER TABLE `api_role` DISABLE KEYS */;
INSERT INTO `api_role` VALUES (1,'admin','admin','2024-07-23 13:42:40.320614');
/*!40000 ALTER TABLE `api_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_rolehaspermission`
--

DROP TABLE IF EXISTS `api_rolehaspermission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_rolehaspermission` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `permission_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_rolehaspermissio_permission_id_a7781437_fk_api_permi` (`permission_id`),
  KEY `api_rolehaspermission_role_id_f5962872_fk_api_role_id` (`role_id`),
  CONSTRAINT `api_rolehaspermissio_permission_id_a7781437_fk_api_permi` FOREIGN KEY (`permission_id`) REFERENCES `api_permission` (`id`),
  CONSTRAINT `api_rolehaspermission_role_id_f5962872_fk_api_role_id` FOREIGN KEY (`role_id`) REFERENCES `api_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_rolehaspermission`
--

LOCK TABLES `api_rolehaspermission` WRITE;
/*!40000 ALTER TABLE `api_rolehaspermission` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_rolehaspermission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_setting`
--

DROP TABLE IF EXISTS `api_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_setting` (
  `id` bigint NOT NULL AUTO_INCREMENT,
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
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_setting`
--

LOCK TABLES `api_setting` WRITE;
/*!40000 ALTER TABLE `api_setting` DISABLE KEYS */;
INSERT INTO `api_setting` VALUES (1,'UTC+7','images/logo.png','images/logo_1ks2IXl.png','Demo Design Studio','Design agency','Design, Home, Thiet ke','Design agency in VN','Design agency','Design, Home, Thiet ke','Design, Home, Thiet ke',' Demo Studio','Le Capitole - 27 Thái Thịnh - Đống Đa - Hà Nội','088.888.888','info@demo.studio','images/logo_4pguDIK.png','smtp','smtp.mailtrap.io','25','tls','tester','123','design agency','design agency','design agency','design agency','images/logo_xzdsTSw.png','GA-123','(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\r\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\r\n \r\n  ga(\'create\', \'UA-xxxxxx-1\', \'auto\');\r\n  ga(\'send\', \'pageview\');',1,'123','123',1,'https://www.facebook.com/w2studio','https://twitter.com/w2studio','https://instagram.com/w2studio','https://youtube.com/w2studio','https://linkedin.com/w2studio','https://pinterest.com/w2studio','2024-07-25 07:41:44.497949','2024-07-25 16:41:48.892856');
/*!40000 ALTER TABLE `api_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_sliderimage`
--

DROP TABLE IF EXISTS `api_sliderimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_sliderimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `uploaded_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_sliderimage`
--

LOCK TABLES `api_sliderimage` WRITE;
/*!40000 ALTER TABLE `api_sliderimage` DISABLE KEYS */;
INSERT INTO `api_sliderimage` VALUES (6,'images/slide_s34.jpg','2024-07-25 16:18:05.293828'),(7,'images/slide_s35.jpg','2024-07-25 16:18:05.303282'),(8,'images/slide_s37.jpg','2024-07-25 16:18:05.308303'),(9,'images/slide_s38.jpg','2024-07-25 16:18:05.312609'),(10,'images/slide_s39.jpg','2024-07-25 16:18:05.319012');
/*!40000 ALTER TABLE `api_sliderimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_status`
--

DROP TABLE IF EXISTS `api_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_status` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_status_slug_84569298` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_status`
--

LOCK TABLES `api_status` WRITE;
/*!40000 ALTER TABLE `api_status` DISABLE KEYS */;
INSERT INTO `api_status` VALUES (1,'completed','completed'),(2,'Coming Soon','coming-soon');
/*!40000 ALTER TABLE `api_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_token`
--

DROP TABLE IF EXISTS `api_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `expires_at` datetime(6) NOT NULL,
  `is_used` tinyint(1) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_token_user_id_b646d2e7_fk_api_user_id` (`user_id`),
  CONSTRAINT `api_token_user_id_b646d2e7_fk_api_user_id` FOREIGN KEY (`user_id`) REFERENCES `api_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_token`
--

LOCK TABLES `api_token` WRITE;
/*!40000 ALTER TABLE `api_token` DISABLE KEYS */;
INSERT INTO `api_token` VALUES (2,'','2024-07-24 04:52:49.143791','2024-07-24 04:52:49.143791',0,1),(3,'dfcfaa2a-4425-4d33-82dd-9658ce1fa8a7','2024-07-24 04:54:34.738729','2024-07-24 04:54:34.738729',0,1),(4,'d48a5ff6-375c-4696-8d4f-3b116ef3467f','2024-07-24 05:42:05.540216','2024-07-24 05:42:05.540216',0,1),(5,'a4ffa3f1-13ab-487a-8104-891e76ba68d7','2024-07-24 13:19:07.621908','2024-07-25 13:19:07.619907',0,1),(6,'5a2f7eb3-a965-47ec-a0d8-a725920c7e4f','2024-07-25 05:33:11.408888','2024-07-26 05:33:11.406890',0,1),(7,'a1f0aa3b-2286-4f6a-b38a-1e488264a383','2024-07-25 12:27:51.687897','2024-07-26 12:27:51.684892',0,1),(8,'b0dfbd15-ad2e-4915-a35b-e883312a1f3c','2024-07-25 12:30:28.449278','2024-07-26 12:30:28.446281',0,1),(9,'f8b6602f-868e-4b00-86e6-7569ac93654d','2024-07-25 12:30:38.966792','2024-07-26 12:30:38.964791',0,1),(10,'2f1e7a25-2763-40db-a8ab-3a9ecb382ccc','2024-07-25 12:30:44.866850','2024-07-26 12:30:44.863852',0,1),(11,'f7fd90be-d644-4069-bf64-cdf24478abcc','2024-07-25 12:31:25.145103','2024-07-26 12:31:25.143098',0,1),(12,'8e3f1bc8-ca0c-42fe-8917-29b9a098e701','2024-07-25 12:53:27.085347','2024-07-26 12:53:27.082349',0,1),(13,'e0906c78-2c8d-4e94-917a-5f52ea7a4d72','2024-07-25 12:55:05.742317','2024-07-26 12:55:05.739292',0,1),(14,'03a48708-5e21-493a-a117-f25f2457723e','2024-07-25 16:14:17.989564','2024-07-26 16:14:17.979979',0,1),(15,'ae0624d6-83e5-4879-84c0-2071cfaab67a','2024-07-26 00:44:01.737654','2024-07-27 00:44:01.734741',0,1),(16,'f8e92f84-7211-4e47-b317-b293d5d1c19d','2024-07-26 01:04:00.853308','2024-07-27 01:04:00.850296',0,1);
/*!40000 ALTER TABLE `api_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_user`
--

DROP TABLE IF EXISTS `api_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_user_role_id_0b60389b_fk_api_role_id` (`role_id`),
  CONSTRAINT `api_user_role_id_0b60389b_fk_api_role_id` FOREIGN KEY (`role_id`) REFERENCES `api_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_user`
--

LOCK TABLES `api_user` WRITE;
/*!40000 ALTER TABLE `api_user` DISABLE KEYS */;
INSERT INTO `api_user` VALUES (1,'admin','admin@gmail.com','84123456789','avatar.png','pbkdf2_sha256$720000$i9gkKmP(D=-ZV138A0!_Jd4avy81U7b82*#7hp+O!dO*i/Nm_PiLgR.$LdYkQD0ZOgDnPzbDAia3IyqwTBfk/oSaOsUDEVx9+U4=','2024-07-23 14:32:19.876549',1);
/*!40000 ALTER TABLE `api_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add category',7,'add_category'),(26,'Can change category',7,'change_category'),(27,'Can delete category',7,'delete_category'),(28,'Can view category',7,'view_category'),(29,'Can add contact message',8,'add_contactmessage'),(30,'Can change contact message',8,'change_contactmessage'),(31,'Can delete contact message',8,'delete_contactmessage'),(32,'Can view contact message',8,'view_contactmessage'),(33,'Can add page',9,'add_page'),(34,'Can change page',9,'change_page'),(35,'Can delete page',9,'delete_page'),(36,'Can view page',9,'view_page'),(37,'Can add permission',10,'add_permission'),(38,'Can change permission',10,'change_permission'),(39,'Can delete permission',10,'delete_permission'),(40,'Can view permission',10,'view_permission'),(41,'Can add role',11,'add_role'),(42,'Can change role',11,'change_role'),(43,'Can delete role',11,'delete_role'),(44,'Can view role',11,'view_role'),(45,'Can add setting',12,'add_setting'),(46,'Can change setting',12,'change_setting'),(47,'Can delete setting',12,'delete_setting'),(48,'Can view setting',12,'view_setting'),(49,'Can add status',13,'add_status'),(50,'Can change status',13,'change_status'),(51,'Can delete status',13,'delete_status'),(52,'Can view status',13,'view_status'),(53,'Can add role has permission',14,'add_rolehaspermission'),(54,'Can change role has permission',14,'change_rolehaspermission'),(55,'Can delete role has permission',14,'delete_rolehaspermission'),(56,'Can view role has permission',14,'view_rolehaspermission'),(57,'Can add user',15,'add_user'),(58,'Can change user',15,'change_user'),(59,'Can delete user',15,'delete_user'),(60,'Can view user',15,'view_user'),(61,'Can add article',16,'add_article'),(62,'Can change article',16,'change_article'),(63,'Can delete article',16,'delete_article'),(64,'Can view article',16,'view_article'),(65,'Can add blacklisted token',17,'add_blacklistedtoken'),(66,'Can change blacklisted token',17,'change_blacklistedtoken'),(67,'Can delete blacklisted token',17,'delete_blacklistedtoken'),(68,'Can view blacklisted token',17,'view_blacklistedtoken'),(69,'Can add outstanding token',18,'add_outstandingtoken'),(70,'Can change outstanding token',18,'change_outstandingtoken'),(71,'Can delete outstanding token',18,'delete_outstandingtoken'),(72,'Can view outstanding token',18,'view_outstandingtoken'),(73,'Can add token',19,'add_token'),(74,'Can change token',19,'change_token'),(75,'Can delete token',19,'delete_token'),(76,'Can view token',19,'view_token'),(77,'Can add image',20,'add_image'),(78,'Can change image',20,'change_image'),(79,'Can delete image',20,'delete_image'),(80,'Can view image',20,'view_image'),(81,'Can add slider image',21,'add_sliderimage'),(82,'Can change slider image',21,'change_sliderimage'),(83,'Can delete slider image',21,'delete_sliderimage'),(84,'Can view slider image',21,'view_sliderimage');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$720000$qNWwkLQhhcf41gbYxu6xFp$uIolX7Xg6t8Ei88lldc7fOKmIwqZA6mZQjFYNqBFRFQ=','2024-07-24 13:57:17.403443',1,'phapsuit','','','phapsuit@gmail.com',1,1,'2024-07-20 14:19:25.360095');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2024-07-23 13:42:40.321613','1','admin',1,'[{\"added\": {}}]',11,1),(2,'2024-07-24 13:57:41.584866','2','Coming Soon',1,'[{\"added\": {}}]',13,1),(3,'2024-07-24 13:58:08.456206','1','Project',1,'[{\"added\": {}}]',7,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(16,'api','article'),(7,'api','category'),(8,'api','contactmessage'),(20,'api','image'),(9,'api','page'),(10,'api','permission'),(11,'api','role'),(14,'api','rolehaspermission'),(12,'api','setting'),(21,'api','sliderimage'),(13,'api','status'),(19,'api','token'),(15,'api','user'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session'),(17,'token_blacklist','blacklistedtoken'),(18,'token_blacklist','outstandingtoken');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-07-20 03:39:59.603463'),(2,'auth','0001_initial','2024-07-20 03:40:00.153852'),(3,'admin','0001_initial','2024-07-20 03:40:00.288917'),(4,'admin','0002_logentry_remove_auto_add','2024-07-20 03:40:00.296913'),(5,'admin','0003_logentry_add_action_flag_choices','2024-07-20 03:40:00.303913'),(6,'api','0001_initial','2024-07-20 03:40:00.911070'),(7,'contenttypes','0002_remove_content_type_name','2024-07-20 03:40:00.984531'),(8,'auth','0002_alter_permission_name_max_length','2024-07-20 03:40:01.042851'),(9,'auth','0003_alter_user_email_max_length','2024-07-20 03:40:01.062511'),(10,'auth','0004_alter_user_username_opts','2024-07-20 03:40:01.069510'),(11,'auth','0005_alter_user_last_login_null','2024-07-20 03:40:01.117675'),(12,'auth','0006_require_contenttypes_0002','2024-07-20 03:40:01.121793'),(13,'auth','0007_alter_validators_add_error_messages','2024-07-20 03:40:01.129959'),(14,'auth','0008_alter_user_username_max_length','2024-07-20 03:40:01.190918'),(15,'auth','0009_alter_user_last_name_max_length','2024-07-20 03:40:01.258448'),(16,'auth','0010_alter_group_name_max_length','2024-07-20 03:40:01.276025'),(17,'auth','0011_update_proxy_permissions','2024-07-20 03:40:01.291145'),(18,'auth','0012_alter_user_first_name_max_length','2024-07-20 03:40:01.379483'),(19,'sessions','0001_initial','2024-07-20 03:40:01.415483'),(20,'api','0002_api','2024-07-20 03:43:14.592722'),(21,'token_blacklist','0001_initial','2024-07-20 14:20:24.717335'),(22,'token_blacklist','0002_outstandingtoken_jti_hex','2024-07-20 14:20:24.741383'),(23,'token_blacklist','0003_auto_20171017_2007','2024-07-20 14:20:24.757383'),(24,'token_blacklist','0004_auto_20171017_2013','2024-07-20 14:20:24.837131'),(25,'token_blacklist','0005_remove_outstandingtoken_jti','2024-07-20 14:20:24.901573'),(26,'token_blacklist','0006_auto_20171017_2113','2024-07-20 14:20:24.931142'),(27,'token_blacklist','0007_auto_20171017_2214','2024-07-20 14:20:25.100446'),(28,'token_blacklist','0008_migrate_to_bigautofield','2024-07-20 14:20:25.312520'),(29,'token_blacklist','0010_fix_migrate_to_bigautofield','2024-07-20 14:20:25.323882'),(30,'token_blacklist','0011_linearizes_history','2024-07-20 14:20:25.327882'),(31,'token_blacklist','0012_alter_outstandingtoken_user','2024-07-20 14:20:25.338883'),(32,'api','0003_token','2024-07-23 12:25:55.025818'),(33,'api','0004_alter_user_password','2024-07-23 13:37:26.388207'),(34,'api','0005_alter_token_created_at_alter_token_expires_at_and_more','2024-07-24 04:52:02.724870'),(35,'api','0006_alter_token_expires_at','2024-07-24 09:58:04.174367'),(36,'api','0007_image_alter_article_image_remove_article_images_and_more','2024-07-24 14:43:48.553422'),(37,'api','0008_alter_article_images','2024-07-24 15:48:49.454485'),(38,'api','0009_alter_category_image_alter_page_image_and_more','2024-07-25 05:57:54.767393'),(39,'api','0010_alter_setting_company_logo_and_more','2024-07-25 07:42:49.003841'),(40,'api','0011_page_content','2024-07-25 08:10:14.329771'),(41,'api','0012_sliderimage','2024-07-25 09:34:53.940278'),(42,'api','0013_article_address_article_area_article_completed_year','2024-07-25 11:19:52.388427');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('25oeiefezg5hcvxt9nl7htub9pjgsedv','.eJxVjMsOwiAQRf-FtSHAMGVw6d5vIDylaiAp7cr479qkC93ec859Mee3tbpt5MXNiZ2ZZKffLfj4yG0H6e7brfPY27rMge8KP-jg157y83K4fwfVj_qtA9IkVMFECaMRpAsIn0uQUASg0QSedFQo44QEIigdA6hswVhLhQR7fwDMJjbs:1sWFkV:PwhoS7NrNJ-PejdmeyofZ34D44gzccLf84OFsrTX-1I','2024-08-06 13:40:15.358913'),('co1tvf4hnotarxragtvc0tve12v6poot','.eJxVjMsOwiAQRf-FtSHAMGVw6d5vIDylaiAp7cr479qkC93ec859Mee3tbpt5MXNiZ2ZZKffLfj4yG0H6e7brfPY27rMge8KP-jg157y83K4fwfVj_qtA9IkVMFECaMRpAsIn0uQUASg0QSedFQo44QEIigdA6hswVhLhQR7fwDMJjbs:1sWcUX:_MjGukwzuOq2idy6qVxCZQw8crPUt54Unt_6KWV1C-A','2024-08-07 13:57:17.411429');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_blacklistedtoken`
--

DROP TABLE IF EXISTS `token_blacklist_blacklistedtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_blacklist_blacklistedtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blacklisted_at` datetime(6) NOT NULL,
  `token_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_id` (`token_id`),
  CONSTRAINT `token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk` FOREIGN KEY (`token_id`) REFERENCES `token_blacklist_outstandingtoken` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_blacklistedtoken`
--

LOCK TABLES `token_blacklist_blacklistedtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` DISABLE KEYS */;
INSERT INTO `token_blacklist_blacklistedtoken` VALUES (1,'2024-07-20 14:32:01.304775',1),(2,'2024-07-20 15:31:26.706094',4);
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_outstandingtoken`
--

DROP TABLE IF EXISTS `token_blacklist_outstandingtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_blacklist_outstandingtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` longtext NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) NOT NULL,
  `user_id` int DEFAULT NULL,
  `jti` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq` (`jti`),
  KEY `token_blacklist_outs_user_id_83bc629a_fk_auth_user` (`user_id`),
  CONSTRAINT `token_blacklist_outs_user_id_83bc629a_fk_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_outstandingtoken`
--

LOCK TABLES `token_blacklist_outstandingtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` DISABLE KEYS */;
INSERT INTO `token_blacklist_outstandingtoken` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTU3MjA4OSwiaWF0IjoxNzIxNDg1Njg5LCJqdGkiOiI3NDM1NDcyYjMzZjg0YmI4OTIxNGVhNTMwZTliYjgwOSIsInVzZXJfaWQiOjF9.v52yVP9RNC149gyEqBwKIHNY2hvlSnQZcCOz7RJv55A','2024-07-20 14:28:09.340563','2024-07-21 14:28:09.000000',1,'7435472b33f84bb89214ea530e9bb809'),(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTU3NDMyMywiaWF0IjoxNzIxNDg3OTIzLCJqdGkiOiI3NjY0NzkxMGY5OWQ0ZjUwOTg0ZTRhZjVmMGQwOGI3YyIsInVzZXJfaWQiOjF9.SskULCGrFwQYvhJLRCsS23QuW8QEj7FUA3oGJ7G3bRU','2024-07-20 15:05:23.413983','2024-07-21 15:05:23.000000',1,'76647910f99d4f50984e4af5f0d08b7c'),(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTU3NTYxNCwiaWF0IjoxNzIxNDg5MjE0LCJqdGkiOiI3MGMxNzNmMjk3YTc0YjVjYmMwYWRjMTIxYTgxMjZjMCIsInVzZXJfaWQiOjF9.LdYgS2Hw6DCSP47icLZg_kn2qKmL5Ba_dbIZNN2coJc','2024-07-20 15:26:54.767742','2024-07-21 15:26:54.000000',1,'70c173f297a74b5cbc0adc121a8126c0'),(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMTU3NTg0NSwiaWF0IjoxNzIxNDg5NDQ1LCJqdGkiOiJlYWJkMzE4MzgxOWU0ZGM4OGViMzU5NGM4MGQ0ZGViMyIsInVzZXJfaWQiOjF9.nwVmugRR_rHUtEf75aCVlSLNWtDcvphbobbovW884So','2024-07-20 15:30:45.869201','2024-07-21 15:30:45.000000',1,'eabd3183819e4dc88eb3594c80d4deb3');
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-23 14:01:13
