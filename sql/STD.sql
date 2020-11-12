/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : STD

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 12/11/2020 21:32:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for specialty
-- ----------------------------
DROP TABLE IF EXISTS `specialty`;
CREATE TABLE `specialty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of specialty
-- ----------------------------
BEGIN;
INSERT INTO `specialty` VALUES (1, '计算机科学与技术');
INSERT INTO `specialty` VALUES (2, '应用数学');
INSERT INTO `specialty` VALUES (3, '商务英语');
INSERT INTO `specialty` VALUES (4, '地理学');
COMMIT;

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `sno` varchar(11) NOT NULL,
  `sname` varchar(255) NOT NULL,
  `ssex` varchar(255) NOT NULL,
  `sclass` varchar(255) NOT NULL,
  `sdept_id` int(255) NOT NULL,
  `spwd` int(11) NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of students
-- ----------------------------
BEGIN;
INSERT INTO `students` VALUES ('082201', '张三', '男', '09877', 1, 3);
INSERT INTO `students` VALUES ('082202', '李四', '男', '090923', 1, 1);
INSERT INTO `students` VALUES ('082211', '小额', '女', '24224', 2, 31);
INSERT INTO `students` VALUES ('082239', '小明', '女', '090922', 4, 1);
INSERT INTO `students` VALUES ('082241', '小李', '男', '090922', 3, 422);
INSERT INTO `students` VALUES ('082242', '小军', '男', '070809', 4, 1);
INSERT INTO `students` VALUES ('082246', '小啊', '男', '23424', 3, 331);
INSERT INTO `students` VALUES ('082247', '小吧', '男', '23434', 1, 331);
INSERT INTO `students` VALUES ('082248', '小你', '男', '23444', 3, 3551);
INSERT INTO `students` VALUES ('082249', '小看', '女', '23224', 1, 31);
INSERT INTO `students` VALUES ('082250', '小了', '女', '23424', 2, 31);
INSERT INTO `students` VALUES ('082251', '小额', '女', '24224', 2, 31);
INSERT INTO `students` VALUES ('082257', '小啊', '男', '23424', 3, 331);
INSERT INTO `students` VALUES ('082258', '小吧', '男', '23434', 1, 331);
INSERT INTO `students` VALUES ('082259', '小你', '男', '23444', 3, 3551);
INSERT INTO `students` VALUES ('082289', '小看', '女', '23224', 1, 31);
INSERT INTO `students` VALUES ('082290', '小了', '女', '23424', 2, 31);
INSERT INTO `students` VALUES ('082789', '小票', '男', '23424', 2, 31);
INSERT INTO `students` VALUES ('082909', '小票', '男', '23424', 2, 31);
INSERT INTO `students` VALUES ('123', '张先生', '男', '3891', 3, 399);
INSERT INTO `students` VALUES ('2212', 'sdfsf', '男', '32423', 1, 223);
INSERT INTO `students` VALUES ('236432', '小李', '女', '3123', 3, 123);
INSERT INTO `students` VALUES ('239021', '小心', '男', '24235', 2, 33);
INSERT INTO `students` VALUES ('24234', 'zzz', '男', '333', 2, 32);
INSERT INTO `students` VALUES ('3232', 'sdf', '男', '235235', 1, 32);
INSERT INTO `students` VALUES ('334123', 'feree', '女', '3411', 2, 223);
INSERT INTO `students` VALUES ('453646', 'xiaopaaa', '男', '7633', 2, 44);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
