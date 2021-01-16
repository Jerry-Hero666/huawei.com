<?php
    include('./library/conn.php');

    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];

    // 在数据库中查找
    $sql="select * from users where username='$username' and password='$password'";

    // 执行查找函数
    $result=$mysqli->query($sql);
    
    $mysqli->close();

    if($result->num_rows>0){

        echo '<script>alert("登录成功");
        location.href="./index.html"</script>';
    }else{
        
        echo '<script>alert("登录失败,用户或密码不存在");
         location.href="./login.html"</script>';
     
    }
    ?>