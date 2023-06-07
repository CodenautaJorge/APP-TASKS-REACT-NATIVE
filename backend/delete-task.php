<?php

    require './app-db.php';
    
    $_post = json_decode(file_get_contents('php://input'),true);
    $id = $_post['id'];
    $stmt = $conn->prepare("DELETE FROM tasks WHERE id = :id");  
    $stmt->bindParam(':id', $id);       
    if($stmt->execute()){
        $message = 'success';
	    $data = array('message' => $message, 'id' => $id);
        echo json_encode($data);
    }else{
        $message = 'error';
	    $data = array('message' => $message);
        echo json_encode($data);
    }

?>