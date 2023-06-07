<?php

    require './app-db.php';
    $_post = json_decode(file_get_contents('php://input'),true);
    
    $title = $_post['title'];
    $description = $_post['description'];
    date_default_timezone_set('Europe/Madrid');
    $date = date("Y-m-d");
    
    $stmt = $conn->prepare("INSERT INTO tasks (title_task, description_task, date_task) VALUES (:title_task, :description_task, :date_task)");
	$stmt->bindParam(':title_task', $title);
    $stmt->bindParam(':description_task', $description);
    $stmt->bindParam(':date_task', $date);
	
	if($stmt->execute()){
	    $message = 'success';
    	$data = array('message' => $message, 'title' => $title, 'description' => $description, 'date' => $date);
        echo json_encode($data);
	}else{
	    $message = 'error';
	    $data = array('message' => $message);
        echo json_encode($data);
	}
	
?>