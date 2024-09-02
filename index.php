<?php
	include_once './router/router.php';
	
	$routeList = include_once './router/routeList.php';
	
	execute($_SERVER['REQUEST_URI'], $routeList);
?>