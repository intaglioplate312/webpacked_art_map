# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.15)
# Database: chicago_public
# Generation Time: 2017-08-23 14:37:11 +0000
# ************************************************************
DROP DATABASE IF EXISTS chicago_public;
CREATE database chicago_public;
USE chicago_public;
# Dump of table api
# ------------------------------------------------------------
# Dump of table art
# ------------------------------------------------------------
DROP TABLE IF EXISTS `art`;
CREATE TABLE `art` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(250) DEFAULT 'untitled',
  `artist` varchar(250) DEFAULT 'unkown',
  `media` varchar(250) DEFAULT NULL,
  `description` mediumtext,
  `type` varchar(250) NOT NULL,
  `viewable` tinyint(1) NOT NULL DEFAULT '0',
  `path` varchar(250) DEFAULT NULL,
  `address` varchar(250) NOT NULL,
  `lat` float(10,6) DEFAULT NULL,
  `long` float(10,6) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);