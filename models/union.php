<?php
	class Union {
		// DB stuff
		private $dataBase;
		private $tableName = 'teacher_schedule';
		
		public function __construct($dataBase) {
			$this->dataBase = $dataBase;
		}
		
		// Get all records
		public function read() {
			$query = 'SELECT * FROM ' . $this->tableName;
			
			return $this->dataBase->execute($query);
		}
	}
?>