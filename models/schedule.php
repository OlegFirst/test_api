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
		
		// Get all subjects
		public function create() {			
			$query = "INSERT INTO schedule (id, day, subject) VALUES (NULL, 'one', 'two')";
			
			
			// $query = 'INSERT INTO ' . $this->tableName . 
				// " (id, day', 'subject')". " VALUES (NULL, 'one', 'two')";
				
			// $sql = "INSERT INTO common_small_agreement (game_id, small_agreement_id) 
				// VALUES ('$obj->gameId', '$obj->cardId')";
			
			// TO DO: Check error
			
			return $this->dataBase->execute($query);
		}
	}
?>