<?php
	class Test {
		// DB stuff
		private $dataBase;
		private $tableName = 'teachers';
		
		// Table properties
		public $id;
		public $first_name;
		public $last_name;
		
		public function __construct($dataBase) {
			$this->dataBase = $dataBase;
		}
		
		// Get records
		public function read() {
			$query = 'SELECT * FROM ' . $this->tableName;
			
			return $this->dataBase->execute($query);
		}
	}
?>