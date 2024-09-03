<?php
	// Headers
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	include_once '../../config/Database.php';
	include_once '../../models/Schedule.php';
	
	echo 'GO';
	
	return;
	
	// Connection to Database
	$dataBase = new Database;	
	$dataBase->connect();
	
	// Create model instance
	$schedule = new Schedule($dataBase);
	$result = $schedule->read();
	
	$matrix = array();
			
	if ($result && $result->num_rows > 0) {				
		while($row = $result->fetch_assoc()) {
			array_push($matrix, $row);
		}
	}
	
	echo json_encode($matrix);
?>