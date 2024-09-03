<?php
	// Headers
	// header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');	
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With	');
	
	include_once '../../../config/Database.php';
	include_once '../../../models/Schedule.php';
	
	// Connection to Database
	$dataBase = new Database;	
	$dataBase->connect();
	
	// Create model instance
	$schedule = new Schedule($dataBase);
	
	// Get raw data
	$data = file_get_contents("php://input", true);
	
	var_dump($data);
	
	$res = json_decode($data, true);
	
	echo json_encode('============');
	
	var_dump($res);
	
	
	echo json_encode('============');
	
	// echo $_SERVER["REQUEST_METHOD"];
	// echo json_encode('============');
	
	
	// if (isset($_POST)) {
		// $data = file_get_contents("php://input", true);
		// $res = json_decode($data, true);
		
		// print_r($res);
	// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	// $schedule->create();
	
	// $matrix = array();
			
	// if ($result && $result->num_rows > 0) {				
		// while($row = $result->fetch_assoc()) {
			// array_push($matrix, $row);
		// }
	// }
	
	// echo json_encode($matrix);
	// echo json_encode(true);
?>