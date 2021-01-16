<?php

    // 1. 连接数据库
    include('./library/conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $phone = $_REQUEST['phone'];


    // $insertSql = "insert into users (username,password,phone) values ('$username','$password','$phone')";
    
    // $res = $mysqli->query($insertSql);
    $sql = "select * from users where username='$username'";

    // 执行查询操作
    $res = $mysqli->query($sql);
    var_dump($res);

    if ($res->num_rows > 0) {
        //    echo '1';
    } else {
        // echo '0';
        $insertSql = "insert into users (username,password,phone) values ('$username','$password','$phone')";

       
        $res = $mysqli->query($insertSql);
        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="../src/html/login.html"</script>';

    }
$mysqli->close();
    // if($res->num_rows){
    //     echo '<script>alert("注册成功");</script>';
    //     echo '<script>location.href=""</script>';
    // };
?>