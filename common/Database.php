<?php
	class Database {
		// Params
		protected $serverName = 'localhost';
		protected $userName = 'root';
		protected $password = '';
		protected $dataBaseName = 'server_api';
		
		// Connection instance
		protected $connection;
		
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