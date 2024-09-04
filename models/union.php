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
			$query = 'SELECT *
						FROM schedule
						LEFT JOIN teacher_schedule ON schedule.id=teacher_schedule.schedule_id
						LEFT JOIN teachers ON teacher_schedule.teacher_id=teachers.id';
			
			return $this->dataBase->execute($query);
		}
	}
?>