<?php
	class Schedule {
		// DB stuff
		private $dataBase;
		private $tableName = 'schedule';
		
		public function __construct($dataBase) {
			$this->dataBase = $dataBase;
		}
		
		// Get all records
		public function read() {
			$query = 'SELECT * FROM ' . $this->tableName;
			
			return $this->dataBase->execute($query);
		}
		
		// Get all subjects
		public function readSubjects() {
			$query = 'SELECT subject FROM ' . $this->tableName;
			
			return $this->dataBase->execute($query);
		}
		
		// Get 'id' by 'day'
		public function findId($day) {
			$query = 'SELECT id FROM ' . $this->tableName . " WHERE day='$day'";
			
			return $this->dataBase->execute($query);
		}
		
		// Create new record
		public function create($queryElements) {
			$day = $queryElements['day'];
			$subject = $queryElements['subject'];
			
			$query = "INSERT INTO " . $this->tableName . " (id, day, subject) VALUES (NULL, '$day', '$subject')";
			
			return $this->dataBase->execute($query);
		}
	}
?>