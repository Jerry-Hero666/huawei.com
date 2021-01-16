-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-01-11 14:52:46
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `用户名`
--

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT '编号',
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `gender` tinyint(1) NOT NULL COMMENT '性别',
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '地址',
  `phonenumber` bigint(20) NOT NULL COMMENT '电话号',
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '电子邮件'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `gender`, `address`, `phonenumber`, `email`) VALUES
(2, '李福尔', 'li123456', 1, '浙江省杭州市西湖', 18578787878, 'lifuer@168.cn'),
(3, '王阀倵', 'wang123456', 1, '甘肃省兰州市', 13898989898, 'wangfawu@168.cn'),
(4, '铁柱', 'tiezhu123456', 1, '辽宁省大连市', 18787878787, 'tiezhu@168.cn'),
(5, '李福尔', 'li123456', 1, '浙江省杭州市西湖', 18578787878, 'lifuer@168.cn'),
(6, '王阀倵', 'wang123456', 1, '甘肃省兰州市', 13898989898, 'wangfawu@168.cn'),
(7, '铁柱', 'tiezhu123456', 1, '辽宁省大连市', 18787878787, 'tiezhu@168.cn'),
(8, '王二麻子', 'ermazi123456', 1, '甘肃兰州', 13848484848, 'ermazi@163.cn'),
(9, '韦延舜', 'yanshunchusheng', 0, '甘肃省白银市', 14848484848, 'weiyanshun@168.cn'),
(10, '韦贱人', 'weijianren', 1, '甘肃省白银市', 13889898989, 'weijianren@168.cn');

--
-- 转储表的索引
--

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号', AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
