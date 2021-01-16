<?php
    include('./library/conn.php');

    // header('Access-Control-Allow-Origin:*'); // 开启跨源数据访问

    // $_GET[]  $_POST[]  $_REQUEST[]  都是用于接收表单数据的
    $username = $_REQUEST['username'];

    $sql = "select * from users where username='$username'";

    $res = $mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        echo '{"username":"'.$username.'","has":true,"msg":"√"}';
    }else{
        echo '{"username":"'.$username.'","has":false,"msg":"×"}';
    }


?>