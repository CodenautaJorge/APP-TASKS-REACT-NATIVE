<?php

$server = '';
$username = '';
$password = '';
$database = '';

try{
	//Almacenamos la conexión a la BDD:
	$conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);

}catch(PDOException $e){
	//Si obtiene un error acabamos con el proceso y mostramos el error:
	die('Connection failed: ' . $e->getMessage());
}

?>
