<?php
	// Headers
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	include_once '../../config/Database.php';
	include_once '../../models/Test.php';
	
	// Connection to Database
	$dataBase = new Database;	
	$dataBase->connect();
	
	// TO DO:
	// if (error)
	
	// Create model instance
	$test = new Test($dataBase);
	$result = $test->read();
	
	$matrix = array();
			
	if ($result && $result->num_rows > 0) {				
		while($row = $result->fetch_assoc()) {
			array_push($matrix, $row);
		}
	}
	
	print_r($matrix);
	
	return;
	
	$count = $result->rowCount();
	
	if ($result->rowCount() > 0) {
		echo 'many';
	} else {
		echo 'No records found';
	}
?>