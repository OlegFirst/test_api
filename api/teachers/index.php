<?php
	// Headers
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	include_once '../../common/Database.php';
	include_once '../../models/Teachers.php';
	
	// Connection to Database
	$dataBase = new Database;	
	$dataBase->connect();
	
	// Create model instance
	$model = new Teachers($dataBase);
	$result = $model->read();
	
	$matrix = array();
			
	if ($result && $result->num_rows > 0) {				
		while($row = $result->fetch_assoc()) {
			array_push($matrix, $row);
		}
	}
	
	echo json_encode($matrix);
?>