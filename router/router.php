<?php
	// include_once 'routeList.php';
	
	 function execute($url, $routeList) {
		 var_dump($url);
		 
		 var_dump($routeList);
		 
		 $uri = parse_url($url);
		 $path = $uri['path'];
		 
		 if (array_key_exists($path, $routeList) === false) {
			 return;
		 }
		 
		 $cb = $routeList[$path];
		 $cb();
	 }
?>