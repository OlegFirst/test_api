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
	
<<<<<<< HEAD
	// Get raw data	
	$queryElements = parseQuery();
	
	// Validate data
	$validationErrors = validate($queryElements);	
	if (count($validationErrors) > 0) {
		sendComplexResponse(false, $validationErrors);
		return;
	}

	$isSuccess = $model->create($queryElements);
=======
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
>>>>>>> 1260ddddc68aa699e5cc28c786a39603cf91d37d
	
	sendComplexResponse($isSuccess);
?>