<?php
	include_once 'Database.php';

	class DatabaseLongConnection extends Database{
		public function execute($query) {
			$result = $this->connection->query($query);
			
			return $result;
		}
		
		public function connectionClose() {
			$this->connection->close();
		}
	}
?>