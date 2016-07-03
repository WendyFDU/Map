-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.5.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bugs`
--

DROP TABLE IF EXISTS `bugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bugs` (
  `bug_id` int(11) NOT NULL AUTO_INCREMENT,
  `bug_time` date DEFAULT NULL,
  `bug_content` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`bug_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bugs`
--

LOCK TABLES `bugs` WRITE;
/*!40000 ALTER TABLE `bugs` DISABLE KEYS */;
/*!40000 ALTER TABLE `bugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `scene_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment_time` date DEFAULT NULL,
  `comment_score` int(11) DEFAULT NULL,
  `comment_type` varchar(20) DEFAULT NULL,
  `comment_content` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,1,'2016-11-12',2,'1','vvv'),(2,1,2,'2016-11-12',3,'1','vvv'),(3,2,1,'2016-11-12',4,'2','sdfsv'),(4,3,1,'2016-11-12',4,'2','hcsudshcus'),(5,4,2,'2016-11-12',3,'2','ww'),(6,5,1,'2016-11-12',2,'2','ds'),(7,6,1,'2016-07-01',4,'1','????'),(8,7,1,'2016-07-02',1,'1','kkkkk'),(9,8,1,'2016-07-02',2,'1','aaaaa'),(10,9,1,'2016-07-02',2,'1','bbbbb'),(12,10,3,'2016-07-02',3,'1','cccc'),(13,11,3,'2016-07-02',3,'1','cccc'),(14,12,3,'2016-07-02',3,'1','cccc'),(15,13,3,'2016-07-02',3,'1','cccc'),(16,14,3,'2016-07-02',3,'1','cccc'),(17,15,3,'2016-07-02',3,'1','cccc'),(18,16,3,'2016-07-02',3,'1','cccc'),(19,17,3,'2016-07-02',3,'1','cccc'),(20,1,5,'2016-07-02',2,'1','?????'),(21,14,5,'2016-07-02',2,'1','lllll');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pics`
--

DROP TABLE IF EXISTS `pics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pics` (
  `pic_id` int(11) NOT NULL AUTO_INCREMENT,
  `scene_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pic_url` varchar(140) DEFAULT NULL,
  `pic_info` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`pic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pics`
--

LOCK TABLES `pics` WRITE;
/*!40000 ALTER TABLE `pics` DISABLE KEYS */;
INSERT INTO `pics` VALUES (1,1,1,'img/adam.jpg',NULL),(2,1,2,'img/ben.png',NULL),(3,2,1,'img/adam.jpg',NULL),(4,3,2,'img/adam.jpg',NULL),(5,4,2,'img/adam.jpg',NULL),(6,5,3,'img/adam.jpg',NULL),(7,6,2,'img/adam.jpg',NULL),(8,7,2,'img/ben.png',NULL),(9,8,2,'img/ben.png',NULL),(10,9,2,'img/ben.png',NULL),(11,10,2,'img/ben.png',NULL),(12,11,2,'img/ben.png',NULL),(13,12,2,'img/ben.png',NULL),(14,13,2,'img/ben.png',NULL),(15,14,2,'img/ben.png',NULL),(16,15,2,'img/ben.png',NULL),(17,16,2,'img/ben.png',NULL),(18,17,2,'img/ben.png',NULL);
/*!40000 ALTER TABLE `pics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `scene_id` int(11) NOT NULL,
  `question_content` varchar(140) DEFAULT NULL,
  `a_content` varchar(140) DEFAULT NULL,
  `b_content` varchar(140) DEFAULT NULL,
  `c_content` varchar(140) DEFAULT NULL,
  `d_content` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scenes`
--

DROP TABLE IF EXISTS `scenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scenes` (
  `scene_id` int(11) NOT NULL AUTO_INCREMENT,
  `scene_name` varchar(20) DEFAULT NULL,
  `scene_visited` int(11) DEFAULT NULL,
  `scene_score` double DEFAULT NULL,
  `scene_favor` int(11) DEFAULT NULL,
  `scene_intro` varchar(140) DEFAULT NULL,
  `scene_wish` int(11) DEFAULT NULL,
  `scene_x` double DEFAULT NULL,
  `scene_y` double DEFAULT NULL,
  `scene_detail` varchar(300) DEFAULT NULL,
  `scene_score1` int(11) DEFAULT NULL,
  `scene_score2` int(11) DEFAULT NULL,
  `scene_score3` int(11) DEFAULT NULL,
  `scene_score4` int(11) DEFAULT NULL,
  `scene_score5` int(11) DEFAULT NULL,
  `scene_scoreall` int(11) DEFAULT NULL,
  `scene_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`scene_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scenes`
--

LOCK TABLES `scenes` WRITE;
/*!40000 ALTER TABLE `scenes` DISABLE KEYS */;
INSERT INTO `scenes` VALUES (1,'????',754,0.014150943396226415,78,'?????????AAAA?????, ??????????',233,121.405693,31.243922,'?????????AAAA?????, ???????????????????????????????????????????????????????????????',22,5,213,321,42,424,1),(2,'????',5441,4,423,'???????????????????????????????????????????????????',421,121.55862,31.237994,'???????????????????????????????????????????140.3?????????????????????????????????LUC?????????????????????????????????????10??????',32,333,176,889,556,2677,1),(3,'共青公园',2242,5,423,'上海共青森林公园位于上海东北角杨浦区，濒临黄浦江，是上海市区面积最大的以森林为主要特色的公园。',476,121.56092,31.340693,'上海共青森林公园位于上海东北角杨浦区，濒临黄浦江，是上海市区面积最大的以森林为主要特色的公园。上海共青国家森林公园是以森林为主要景观的特色公园，共种植200余种树木，总数达30多万株。公园分为南北两园，北园占地1631亩称为共青森林公园，南园占地239.6亩称为万竹园。',11,332,22,344,567,1586,1),(4,'??????',56,4,24,'????????????????????????????',24,121.431026,31.236751,'??????????????????????????????11?13?????????????????????????????????????????????????????????????????????????????',32,22,2,33,12,95,2),(5,'八号桥',54,5,222,'八号桥占地面积7000多平方米，总建筑面积12000平方米，曾是旧属法租界的一片旧厂房。',554,121.477544,31.216667,'八号桥占地面积7000多平方米，总建筑面积12000平方米，曾是旧属法租界的一片旧厂房，解放后成为上海汽车制动器厂旧工业厂房，2003年经过新的设计改造后注入时尚、创意的元素，成为了沪上时尚创意园区之一，有不少设计公司、创意团队入驻于此。八号桥占地面积7000多平方米，总建筑面积12000平方米，曾是旧属法租界的一片旧厂房，解放后成为上海汽车制动器厂旧工业厂房，2003年经过新的设计改造后注入时尚、创意的元素，成为了沪上时尚创意园区之一，有不少设计公司、创意团队入驻于此。',2,32,166,878,66,1245,2),(6,'上海玻璃博物馆',765,4,557,'v ????',826,121.478613,31.349537,'?????',44,56,466,775,444,2678,2),(7,'红坊',469,3,680,'chjbh',574,121.430571,31.204621,' jhbjbbjkn',4,55,577,575,467,1955,2),(8,'Fudan Park',258,1,585,'美丽的复旦公园',158,121.498538,31.260204,'1933老场坊是由宰牲场改造的一座别具特色的创意园区，这里还是热门电影《小时代》的取景地。整个建筑融汇了东西方特色，大楼空间布局奇特，东南西北4栋建筑围成的四方形厂区与中间一座...',57,157,578,1674,964,3675,2),(9,'1933老场房',3784,1,247,'如今的1933老场坊是上海时尚创意设计中心和全国工业旅游示范点。',837,121.391414,31.250204,'1933老场坊是由宰牲场改造的一座别具特色的创意园区，这里还是热门电影《小时代》的取景地。整个建筑融汇了东西方特色，大楼空间布局奇特，东南西北4栋建筑围成的四方形厂区与中间一座...',57,157,578,1674,964,3675,1),(10,'Studying Center',587,5,3478,'???1933?????????????????????????',43,121.495538,31.270204,'1933???????????????????????????????????????????????????????????????????4????????????????...',57,157,578,1674,964,3675,1),(11,'English Corner',775,4,27,'如今的1933老场坊是上海时尚创意设计中心和全国工业旅游示范点。',24,121.598538,31.267504,'1933老场坊是由宰牲场改造的一座别具特色的创意园区，这里还是热门电影《小时代》的取景地。整个建筑融汇了东西方特色，大楼空间布局奇特，东南西北4栋建筑围成的四方形厂区与中间一座...',57,157,578,1674,964,3675,1),(12,'1988年',75224,1,412,'如今的1933老场坊是上海时尚创意设计中心和全国工业旅游示范点。',343,120.498538,31.240204,'1933老场坊是由宰牲场改造的一座别具特色的创意园区，这里还是热门电影《小时代》的取景地。整个建筑融汇了东西方特色，大楼空间布局奇特，东南西北4栋建筑围成的四方形厂区与中间一座...',57,157,578,1674,964,3675,2),(13,'99年拉菲',24,2,247,'如今的1933老场坊是上海时尚创意设计中心和全国工业旅游示范点。',4374,121.458418,31.160204,'1933老场坊是由宰牲场改造的一座别具特色的创意园区，这里还是热门电影《小时代》的取景地。整个建筑融汇了东西方特色，大楼空间布局奇特，东南西北4栋建筑围成的四方形厂区与中间一座...',57,157,578,1674,964,3675,2),(14,'Hush???',240,0.001632208922742111,34,'???1933?????????????????????????',424,121.475538,31.270774,'1933???????????????????????????????????????????????????????????????????4????????????????...',57,158,578,1674,964,3676,2),(15,'五角场Hall',72,1,412,'如今的1933老场坊是上海时尚创意设计中心和全国工业旅游示范点。',5852,121.398538,31.160204,'1933老场坊是由宰牲场改造的一座别具特色的创意园区，这里还是热门电影《小时代》的取景地。整个建筑融汇了东西方特色，大楼空间布局奇特，东南西北4栋建筑围成的四方形厂区与中间一座...',57,157,578,1674,964,3675,1),(16,'real Star',42,5,44,'如今的1933老场坊是上海时尚创意设计中心和全国工业旅游示范点。',43,121.408538,31.265204,'1933老场坊是由宰牲场改造的一座别具特色的创意园区，这里还是热门电影《小时代》的取景地。整个建筑融汇了东西方特色，大楼空间布局奇特，东南西北4栋建筑围成的四方形厂区与中间一座...',57,157,578,1674,964,3675,1),(17,'1853老场房',3434,4,58,'如今的1933老场坊是上海时尚创意设计中心和全国工业旅游示范点。',424,121.495538,31.261204,'1933老场坊是由宰牲场改造的一座别具特色的创意园区，这里还是热门电影《小时代》的取景地。整个建筑融汇了东西方特色，大楼空间布局奇特，东南西北4栋建筑围成的四方形厂区与中间一座...',57,157,578,1674,964,3675,2);
/*!40000 ALTER TABLE `scenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `scene_id` int(11) NOT NULL,
  `tagbt_id` int(11) DEFAULT NULL,
  `tag_type` int(11) DEFAULT NULL,
  `tag_content` varchar(40) DEFAULT NULL,
  `tag_times` int(11) DEFAULT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (8,1,1,1,'??(??????)',1),(9,1,7,2,'?????',1),(10,1,3,1,'????',7),(11,1,2,1,'??',5),(12,1,12,3,'????????',1),(13,1,11,3,'??????',1),(14,2,2,1,'??',1),(15,2,1,1,'??(??????)',1),(16,2,14,3,'????',1),(17,6,1,1,'??(??????)',1),(18,6,2,1,'??',1),(19,6,10,3,'??????',1);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT NULL,
  `user_password` varchar(20) DEFAULT NULL,
  `user_face` varchar(80) DEFAULT NULL,
  `user_intro` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'a','pppppp','xx','yy'),(2,'b','vvvvvvvv','dd','ssss'),(3,'c','fffffff','dd','sss'),(4,'d','fffffff','ww','rrr'),(5,'li','aaaaaa','xxx','hello');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usrelation`
--

DROP TABLE IF EXISTS `usrelation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usrelation` (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `scene_id` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `favor` int(11) DEFAULT NULL,
  `visited` int(11) DEFAULT NULL,
  `wish` int(11) DEFAULT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usrelation`
--

LOCK TABLES `usrelation` WRITE;
/*!40000 ALTER TABLE `usrelation` DISABLE KEYS */;
INSERT INTO `usrelation` VALUES (1,1,1,1,0,1,0),(2,2,1,1,0,1,0),(3,3,1,3,1,0,1),(4,3,4,0,1,1,1),(5,3,5,0,1,1,1),(6,1,3,1,1,1,1),(7,1,2,4,0,1,1),(8,1,6,0,0,0,0),(9,1,4,0,0,0,0),(10,5,4,0,1,1,0),(11,5,2,0,1,0,0),(12,5,10,0,0,1,0),(13,5,1,2,0,0,0),(14,5,14,2,0,0,0);
/*!40000 ALTER TABLE `usrelation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-03 13:58:42
