<?php
	class Schedule {
		// DB stuff
		private $dataBase;
		private $tableName = 'schedule';
		
		// Table properties
		public $id;
		public $day;
		public $subject;
		
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
	}
?>