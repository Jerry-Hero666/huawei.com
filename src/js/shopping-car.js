import './library/jquery.js';
import {
    cookie
} from './library/cookie.js';

let shop = cookie.get('shop');
if (shop) {
    shop = JSON.parse(shop); // 有cookie的数据时才需要转换

    let idList = shop.map(elm => elm.id).join(); // 获得所有的id




    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: {
            idList
        },
        dataType: "json",

        success: function (res) {
            // console.log(shop[0].num);
            let temp = '';
            let temp1 = '';


            console.log(res);
            let tPrice = [];
            let sum = 0;
            shop.forEach(elm => {
                sum = 0


                tPrice.push(elm.price * elm.num)

                tPrice.forEach(el => {
                    // console.log(el);
                    sum += el


                });

            })






            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);

                let arr = shop.filter(val => val.id == elm.id);
                temp += `
                <li> 
                <input class="c" type="checkbox" checked name="" id="">
               <a class="l-img" href="javascript;">
                   <img src="${picture[0].src}"
                       alt="">
               </a>
               <a class="tit" href="javascript;">
                   ${elm.h2}
               </a>
               <span class="unit-price">${parseFloat(elm.price).toFixed(2)}</span>
               <div class="num clearfix">
                   <a class="pull-left reduce" >-</a>
                   <input class="pull-left h" type="text" value="${arr[0].num}">
                   <a class="pull-left plus" >+</a>
               </div>
               <span class="sum">${(elm.price*arr[0].num).toFixed(2)}</span>
               <i data-id="${elm.id}" class="glyphicon glyphicon-remove del"></i>



           </li> 
                `;


                temp1 = `
                    <div class="leftbox pull-left">
                    <a href="#">继续购物</a>
                    <span>|</span>
                    <p>
                        共
                        <span class="all-js"></span>
                        件商品，已选择
                        <span class="c-js"></span> 件
                    </p>
                </div>
                <div class="rightbox pull-right">
                     合计: <span class="sum-js">
                        ${sum}
                     </span>元
                    <input type="button" value="去结算">
                </div>
                    `;

            });
            $('.sc-js').append(temp);
            $('.settle').append(temp1);

            // 就绪事件
            $(function () {
                let allCheck = $('.sc-js').find('.c');
                // 选择改变数字的效果
                allCheck.on('click', function () {
                    let a = allCheck.length
                    let c = $('.sc-js').find('.c:checked').length;
                    $('.settle').find('.all-js').html(a);
                    $('.settle').find('.c-js').html(c);
                })



                // 全选
                $('#allcheck').on('click', function () {
                    allCheck.each((i, el) => {
                        el.checked = this.checked
                    })
                    //     let allSum=0;
                    //    let sum= $('.sc-js').find('.sum');
                    //    for(let i=0;i<sum.length;i++){
                    //       let a=parseInt(sum[i].innerHTML);
                    //        allSum+=a
                    //    }
                    //    console.log(allSum);
                    //     if(this.checked){

                    //     }

                    let check = $('.sc-js').find('.c:checked');
                    let sum = 0
                    for (let i = 0; i < check.length; i++) {

                        console.log(check[i]);
                        check[i].nextSibling

                        let sum1 = parseInt(check[i].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)
                        sum += sum1
                    }
                    $('.settle').find('.sum-js').html(sum)
                })

                // 选择商品影响全选按钮
                for (let i = 0; i < allCheck.length; i++) {
                    allCheck.on('click', function () {
                        let flag = true;
                        for (let k = 0; k < allCheck.length; k++) {
                            if (!allCheck[k].checked) {
                                flag = false;
                                break;
                            }
                            flag = true;
                        }
                        $('#allcheck').attr('checked', flag)

                    })
                }

                // 选择选中的元素
                allCheck.on('click', function () {
                    let check = $('.sc-js').find('.c:checked');
                    let sum = 0
                    for (let i = 0; i < check.length; i++) {

                        console.log(check[i]);
                        check[i].nextSibling

                        let sum1 = parseInt(check[i].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)
                        sum += sum1
                    }

                    $('.settle').find('.sum-js').html(sum)

                })


                // 加的效果
                $('.sc-js').find('.plus').on('click', function () {
                    let n = $(this).prev().val();
                    let num = parseInt(n) + 1;
                    let unitPrice;
                    let sum;
                    if (num == 0) {
                        return;
                    }

                    $(this).prev().val(num);

                    // 总价的更改
                    unitPrice = $(this).parent().prev().html();
                    sum = unitPrice * num
                    $(this).parent().next().html(sum);
                    let p = $('.sc-js').children('li').children('.sum');

                    let sum1 = 0;
                    for (let i = 0; i < p.length; i++) {
                        sum1 += parseInt(p[i].innerText)
                    }
                    $('.settle').find('.sum-js').html(sum1)

                })





                // 减的效果 
                $('.sc-js').find('.reduce').on('click', function () {
                    let n = $(this).next().val();
                    let num = parseInt(n) - 1;
                    if (num == 0) {
                        return;
                    }
                    $(this).next().val(num);

                    // 总价的更改
                    let unitPrice = $(this).parent().prev().html();
                    sum = unitPrice * num
                    $(this).parent().next().html(sum);
                    let p = $('.sc-js').children('li').children('.sum');
                    let sum1 = 0;
                    for (let i = 0; i < p.length; i++) {
                        sum1 += parseInt(p[i].innerText)
                    }
                    $('.settle').find('.sum-js').html(sum1)

                })


                // 输入的效果
                $('.sc-js').find('.h').on('change', function () {

                    let n = $(this).val();


                    if (isNaN(n)) {
                        alert('请输入一个正整数')
                        n = $(this).val('')

                    } else if (n % 1 != 0) {
                        let b = parseInt(n).toFixed(2)
                        n = $(this).val(b);

                    }
                    // 总价的更改
                    let unitPrice = $(this).parent().prev().html();
                    sum = unitPrice * n
                    $(this).parent().next().html(sum);
                    let p = $('.sc-js').children('li').children('.sum');
                    let sum1 = 0;
                    for (let i = 0; i < p.length; i++) {
                        sum1 += parseInt(p[i].innerText)
                    }
                    $('.settle').find('.sum-js').html(sum1)

                })

                // 删除的效果
                $('.sc-js').find('.del').on('click', function () {
                    let shop2 = shop.filter(el => el.id != $(this).attr('data-id'));

                    cookie.set('shop', JSON.stringify(shop2), 1);
                    location.reload();
                });

            })

        }
    });


}