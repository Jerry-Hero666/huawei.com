import './library/jquery.js';



$(function () {

    // 输入验证
    $('.username').on('change',function(){

        $.ajax({
            type: "get",
            url: "../../interface/hasuser.php",
            data: {
                "username":$('.username').val()
            },
            dataType: "json",
            success: function (res) {
                if(res.msg=='√'){
                    $('.fill').html(res.msg).css("color","green")
                }else if(res.msg=='×'){
                    $('.fill').html(res.msg).css("color","red")
                }
               
            }
        });
    })





    // 登录验证
    $('.submit').on('click', function () {

        $.ajax({
            type: "get",
            url: "../../interface/login.php",
            data: {
                'username': $('.username').val(),
                'password': $('.password').val()
            },
            dataType: "html",
            success: function (res) {
                $('body').html(res)
            },
            
           
        });
    })
})