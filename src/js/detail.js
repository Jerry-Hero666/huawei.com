import './library/jquery.js';
import {
    cookie
} from './library/cookie.js';


let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function (res) {
        let picture = JSON.parse(res.picture);


        let temp = `
        <h2>${res.h2}</h2>
        <p>
            <span>${res.span}</span>
            ${res.title}
        </p>
        <p>小米自营</p>
        <p>${res.price}</p>`;
        let temp1 = `
        <div class="swiper-slide"
                            style="background-image:url(${picture[1].src})">
                        </div>
                        <div class="swiper-slide"
                            style="background-image:url(${picture[1].src})">
                        </div>
        
        `;
        // let temp2 = `
        // <a class="addItem pull-left" href="./shopping-car.html?id=${res.id}">加入购物车</a>



        // `;
        $('.php-detail').append(temp);
        $('.php-img').append(temp1);
        // $('.purchase-btn').prepend(temp2)
        let num = 0;
        $('.addItem').on('click', function () {
            num++
            addItem(res.id, res.price, num)
        });
    }
});

console.log(cookie);

function addItem(id, price, num) {
    console.log(cookie);
    //   在cookie中存的是JSON
    let shop = cookie.get('shop'); // 获得cookie数据

    let product = {
        id,
        price,
        num

    };

    if (shop) { // 判断购物车是否有数据
        shop = JSON.parse(shop); // 将字符串转换为数组

        if (shop.some(elm => elm.id == id)) {
            // 修改数量
            shop.forEach(el => {
                el.id == id ? el.num = num : null;
            });
        } else {
            shop.push(product);
        }

        // 判断购物车中是否存在该商品

    } else {
        shop = []; // 初始没有数据  初始化一个空数组
        shop.push(product); //将第一个商品添加到数组
      
        console.log(shop)
    }

    cookie.set('shop', JSON.stringify(shop), 1);
}