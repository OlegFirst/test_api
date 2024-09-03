<?php
	// Headers
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With	');
	
	include_once '../../../common/Database.php';
	include_once '../../../common/utils.php';
	include_once '../../../models/Schedule.php';
	
	// Connection to Database
	$dataBase = new Database;	
	$dataBase->connect();
	
	// Create model instance
	$model = new Schedule($dataBase);
	
	// Get raw data	
	$queryElements = parseQuery();
	
	// Validate data
	$validationErrors = validate($queryElements);	
	if (count($validationErrors) > 0) {
		sendComplexResponse(false, $validationErrors);
		return;
	}

	$isSuccess = $model->create($queryElements);
	
	sendComplexResponse($isSuccess);
?>