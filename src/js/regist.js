import './library/jquery.js';

$(function () {

    let span = $('.c');
    let count = [];

    // 验证数据库中是否存在此用户名
    $('.username').on('change', function () {
        $.ajax({
            type: "get",
            url: "../../interface/hasuser.php",
            data: {
                "username": $('.username').val()
            },
            dataType: "json",
            success: function (res) {
                if (res.msg == '√') {
                    $('.fill').html('×').css("color", "red")
                }
            }
        });
    })

    // 用户名
    let reg1 = /^[a-zA-Z]\w{5,16}$/;
    $('.username').on('change', function () {
        if (reg1.test(this.value)) {
            $('.fill').html('√').css("color", "green")
        } else if (this.value == '') {
            alert('用户名不能为空')
            return false;
        } else {
            $('.fill').html('×').css("color", "red")
            alert('请重新输入，用户名开头必须是字母并且大于等于6位')
            return false;
        }
    })

    // 手机号
    let reg5 = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    $('.phone').on('change', function () {
        if (reg5.test(this.value)) {
            $('.fillphone').html('√').css("color", "green")

            // for (var i = 0; i < span.length; i++) {
            //     if (span[i].innerHTML == '√') {
            //         count.push(true)
            //     } else if (span[i].innerHTML == '×') {
            //         count.splice(i, 1)
            //     }

            //     if (count.length == 4) {

            //         $('.submithh').attr('disabled', false)
            //     } else {
            //         $('.submithh').attr('disabled',true)
            //     }
            // }
        } else if (this.value == '') {
            alert('手机号不能为空')
            return false;
        } else {
            $('.fillphone').html('×').css("color", "red")
            alert('请输入正确的手机号')
            return false;
        }
    })

    // 密码
    let reg2 = /^\d{6}$/
    // let reg2 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    $('.password').on('change', function () {
        if (reg2.test(this.value)) {
            $('.fillp1').html('√').css("color", "green")
        } else if (this.value == '') {
            alert('密码不能为空')
            return false;
        } else {
            $('.fillp1').html('×').css("color", "red")
            alert('请重新输入密码，必须最少6位， 包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符')
            return false;
        }
    })

     //确认密码
     $('.password2').on('change', function () {
        if ($('.password').val() == this.value && reg2.test(this.value)) {
            $('.fillp2').html('√').css("color", "green")
        } else {
            $('.fillp2').html('×').css("color", "red")
            alert('两次密码输入不一致，请重新输入')
            return false;
        }
        for (var i = 0; i < span.length; i++) {
            if (span[i].innerHTML == '√') {
                count.push(true)
            } else if (span[i].innerHTML == '×') {
                count.splice(i, 1)
            }

            if (count.length == 4) {

                $('.submithh').attr('disabled', false)
            } else {
                $('.submithh').attr('disabled',true)
            }
        }
    })


    // 提交表单
    $('.submithh').on('click',function(){
       
        $.ajax({
            type: "get",
            url: "../../interface/reg.php",
            data: {
                'username': $('.username').val(),
                'password': $('.password').val()
            },
            dataType:'html',
            success: function (res) {
               
            }
        });
    })
    

})