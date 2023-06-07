<?php

    require './app-db.php';
    
    $_post = json_decode(file_get_contents('php://input'),true);
    $tasks = array();
    $stmt = $conn->prepare("SELECT * FROM tasks ORDER BY id DESC");         
    if($stmt->execute()){
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($tasks, $row);
        }

        $message = 'success';
	    $data = array('message' => $message, 'tasks' => $tasks);
        echo json_encode($data);
    }else{
        $message = 'error';
	    $data = array('message' => $message);
        echo json_encode($data);
    }

?>