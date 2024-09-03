<?php
	// Headers
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');	
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With	');
	
	include_once '../../../common/Database.php';
	include_once '../../../models/Schedule.php';
	
	// Connection to Database
	$dataBase = new Database;	
	$dataBase->connect();
	
	// Create model instance
	$schedule = new Schedule($dataBase);
	
	// Get raw data
	$data = file_get_contents("php://input", true);
	$res = json_decode($data, true);
	
	var_dump($res);
	
	$schedule->create($res);
	
	echo true;
?>