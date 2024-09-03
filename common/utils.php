<?php
	include_once 'constants.php';

	function parseQuery() {
		parse_str($_SERVER['QUERY_STRING'], $queryElements);
		return $queryElements;
	}
	
	function validate($data) {
		$result = [];
		
		foreach($data as $key => $value) {			
			if (strlen($value) === 0) {
				array_push(
					$result,
					[
						'name' => $key,
						'message' => 'Can not be empty'
					]
				);
			}
		}
		
		return $result;
	}
	
	function getResponseFlag($isSuccess) {
		return $isSuccess ? ResponseFlags::SUCCESS : ResponseFlags::FAILURE;
	}
	
	/*
	* Using for validate form and store data the table
	*
	*	@vars: isSuccess as bool, validationErrors as array
	* @return: [
	*		'flag': 'success' | 'failure' | 'not_valid'
	*		'validationErrors': [ [ 'field1' =>  1message11 ], [ 'field2' =>  1message12 ], ... ]
	*	]
	*/
	function sendComplexResponse($isSuccess, $validationErrors = []) {
		$flag = ResponseFlags::SUCCESS;
		
		if (!$isSuccess) {
			if (count($validationErrors) === 0) {
				$flag = ResponseFlags::FAILURE;
			} else {
				$flag = ResponseFlags::NOT_VALIDE;
			}
		}
		
		$result = [
			'flag' => $flag,
			'validationErrors' => $validationErrors
		];
		
		echo json_encode($result);
	}
?>