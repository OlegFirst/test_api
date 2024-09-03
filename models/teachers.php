<?php
	class Teachers {
		// DB stuff
		private $dataBase;
		private $tableName = 'teachers';
		
		public function __construct($dataBase) {
			$this->dataBase = $dataBase;
		}
		
		// Get all records
		public function read() {
			$query = 'SELECT * FROM ' . $this->tableName;
			
			return $this->dataBase->execute($query);
		}
		
		// Create new record
		public function create($queryElements) {
			$firstName = $queryElements['firstName'];
			$lastName = $queryElements['lastName'];
			
			$query = "INSERT INTO " . $this->tableName . " (id, first_name, last_name) VALUES (NULL, '$firstName', '$lastName')";
			
			return $this->dataBase->execute($query);
		}
	}
?>