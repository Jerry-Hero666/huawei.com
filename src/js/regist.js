import './library/jquery.js';

$(function () {

    $('.submithh').css('background', 'gray')


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
                    $('.fill').html('×').css("color", "red").attr('data-flag', 'false');

                }
            }
        })
    });

    // 用户名
    let reg1 = /^[a-zA-Z]\w{5,16}$/;
    $('.username').on('change', function () {
        if (reg1.test(this.value)) {
            $('.fill').html('√').css("color", "green").attr('data-flag', 'true')


        } else if (this.value == '') {
            alert('用户名不能为空')

            return false;
        } else {
            $('.fill').html('×').css("color", "red").attr('data-flag', 'false')
            alert('请重新输入，用户名开头必须是字母并且大于等于6位')

            return false;
        }
        check();

    })


    // 手机号
    let reg5 = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    $('.phone').on('blur', function () {
        if (reg5.test(this.value)) {
            $('.fillphone').html('√').css("color", "green").attr('data-flag', 'true')


        } else if (this.value == '') {
            alert('手机号不能为空')
            $('.fillphone').html('×').css("color", "red").attr('data-flag', 'false')
            check();
            return false;
        } else {
            alert('请输入正确的手机号')
            $('.fillphone').html('×').css("color", "red").attr('data-flag', 'false')
            check();
            return false;
        }
        check();

    })

    // 密码
    let reg2 = /^\d{6}$/
    // let reg2 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    $('.password').on('change', function () {
        if (reg2.test(this.value)) {
            $('.fillp1').html('√').css("color", "green").attr('data-flag', 'true')

        } else if (this.value == '') {
            alert('密码不能为空')
            check();
            return false;
        } else {
            $('.fillp1').html('×').css("color", "red").attr('data-flag', 'false')
            alert('请重新输入密码，必须最少6位， 包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符')
            check();
            return false;
        }
        check();

    })

    //确认密码
    $('.password2').on('change', function () {
        if ($('.password').val() == this.value && reg2.test(this.value)) {
            $('.fillp2').html('√').css("color", "green").attr('data-flag', 'true')


        } else {
            alert('两次密码输入不一致，请重新输入')
            $('.fillp2').html('×').css("color", "red").attr('data-flag', 'false')
            check();
            return false;
        }
        check();

    })





    // 提交表单
    $('.submithh').on('click', function () {

        $.ajax({
            type: "get",
            url: "../../interface/reg.php",
            data: {
                'username': $('.username').val(),
                'password': $('.password').val()
            },
            dataType: 'html',
            success: function (res) {

            }
        });
    })




    function check() {
        let span = $('.c')
        let count = 0
        for (let i = 0; i < span.length; i++) {
            if ($(span[i]).attr('data-flag') == 'true') {
                count++
            }
        }
        if (count === 4) {
            $('.submithh').attr('disabled', false).css('background', '#ff6700')
        } else {
            $('.submithh').attr('disabled', true).css('background', 'gray')
        }



    };




    // $('.submithh:disabled').css('background','gray')
    // $('.submithh').css('background','#ff6700')
    // console.log($('.submithh:disabled'));


})