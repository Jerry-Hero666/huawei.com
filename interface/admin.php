<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="../src/js/library/jquery.js"></script>
    <script src="../src/js/library/cookie.js"></script>
    <script>
        $(function(){

            // 权限判断
            if(!(cookie.get('isLogined') && cookie.get('username') === 'admin')){
                // 不是管理员登陆则跳转到登陆页
                location.href="../src/html/login.html";
            }

            $('#user')[0].innerHTML = cookie.get('username');

            $('#loginout').on('click',function(){
                // 删除cookie数据 刷新页面
                cookie.remove('isLogined');
                cookie.remove('username');
                location.reload(); // 刷新页面
            });
        });
    </script>
</head>
<body>
    <div class="container">
        <div class="text-right h4"><span id="user"></span>,欢迎回来,<a id="loginout">退出登陆</a></div>
        <div class="h1 text-center">用户信息管理</div>
        <table class="table table-bordered table-hover text-center">
            <tr>
                <td>id</td>
                <td>username</td>
                <td>password</td>
                <td>email</td>
                <td>address</td>
                <td>phone</td>
                <td>sex</td>
                <td>more</td>
            </tr>
            <?php
                include('./interface/library/conn.php');  // 连接数据库
                $sql = "select * from users"; // 查询用户表
                $result = $mysqli->query($sql); // 执行查询
                $mysqli->close(); //关闭连接
                while($row = $result->fetch_assoc()){ // 遍历结果集获得一条数据
                    echo '<tr>';
                    echo "<td>$row[id]</td>";
                    echo "<td>$row[username]</td>";
                    echo "<td>$row[password]</td>";
                    echo "<td>$row[email]</td>";
                    echo "<td>$row[address]</td>";
                    echo "<td>$row[phone]</td>";
                    echo "<td>$row[sex]</td>";
                    echo "<td><a class='btn btn-info' href='./eg04.update.html?id=$row[id]&username=$row[username]'>修改</a><a href='./interface/removeuser.php?id=$row[id]' class='btn btn-danger'>删除</a></td>";
                    echo '</tr>';
                }

            ?>
        </table>
    </div>
</body>
</html>