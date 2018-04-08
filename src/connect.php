<?php
  header('Content-type: text/html; charset=utf-8'); // 页面编码
  $con = mysql_connect('localhost', 'root', '765139'); // 连接数据 数据库地址 --> localhost 数据库用户名 --> root 数据库密码 --> 765139
  mysql_select_db('mkimq'); // 选择数据库 --> mkimq
  mysql_query('set names utf8'); // 设置数据库编码
 ?>
