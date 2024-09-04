<?php
	// Headers
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With	');
	
	include_once '../../../common/DatabaseLongConnection.php';
	include_once '../../../common/utils.php';
	include_once '../../../models/Union.php';
	include_once '../../../models/Schedule.php';
	
	// Connection to Database
	$dataBase = new DatabaseLongConnection;	
	$dataBase->connect();
	
	// Create model instance
	$union = new Union($dataBase);
	$schedule = new Schedule($dataBase);
	
	// Get raw data	
	$queryElements = parseQuery();
	
	// Validate data
	$validationErrors = validate($queryElements);	
	if (count($validationErrors) > 0) {
		sendComplexResponse(false, $validationErrors);
		return;
	}
	
	// Find 'scheduleId'
	$result = $schedule->findId($queryElements['day']);	
	$matrix = array();			
	if ($result && $result->num_rows > 0) {				
		while($row = $result->fetch_assoc()) {
			array_push($matrix, $row);
		}
	} else {
		$dataBase->connectionClose();
		sendComplexResponse(false);
		return;
	}	
	$scheduleId = $matrix[0]['id'];
	
	// Create new record in Union
	$isSuccess = $union->create($scheduleId, $queryElements['teacherId']);
	
	$dataBase->connectionClose();
	
	sendComplexResponse($isSuccess);
?>