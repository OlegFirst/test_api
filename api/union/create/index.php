<?php
	// Headers
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With	');
	
	include_once '../../../common/Database.php';
	include_once '../../../common/utils.php';
	include_once '../../../models/Union.php';
	
	// Connection to Database
	$dataBase = new Database;	
	$dataBase->connect();
	
	// Create model instance
	$model = new Union($dataBase);
	
	// Get raw data	
	$queryElements = parseQuery();
	
	// Validate data
	$validationErrors = validate($queryElements);
	
	print_r($queryElements);
	
	
	return;
	
	if (count($validationErrors) > 0) {
		sendComplexResponse(false, $validationErrors);
		return;
	}
	
	print_r($queryElements);

	$isSuccess = $model->create($queryElements);
	
	sendComplexResponse($isSuccess);
?>