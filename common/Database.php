<?php
	class Database {
		// Params
		private $serverName = 'localhost';
		private $userName = 'root';
		private $password = '';
		private $dataBaseName = 'server_api';
		
		// Connection instance
		private $connection;
		
		public function connect() {
			$this->connection = new mysqli(
				$this->serverName, $this->userName, $this->password, $this->dataBaseName
			);
					
			if (!$this->connection) {
				die("Connection failed: " . mysqli_connect_error());
			}
		}
		
		public function execute($query) {
			$result = $this->connection->query($query);
			
			$this->connection->close();
			
			return $result;
		}
	}
?>