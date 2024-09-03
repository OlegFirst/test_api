<?php
	// Headers
	header('Access-Control-Allow-Origin: *');
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
	
	var_dump($_SERVER['HTTP_CONTENT_TYPE']);
	
	// if (strtolower($_SERVER['CONTENT_TYPE']) === 'application/json') {
    // $request_body = file_get_contents('php://input');
    // $request_body = json_decode($request_body, true);
    // if (json_last_error() !== JSON_ERROR_NONE) {
        // echo "JSON error";
        // exit();
    // }

    // var_dump($request_body);
    // exit; 
// } else {
    // var_dump($_SERVER['CONTENT_TYPE']);
// }

return;
	
	
	
	
	
	
	
	
	
	$data = file_get_contents("php://input", true);
	$res = json_decode($data, true);
	
	var_dump($data);
	
	var_dump($res);
	
	$schedule->create($res);
	
	echo true;
?>