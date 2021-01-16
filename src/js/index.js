import './library/jquery.js';
import 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js';
import '../tuupola-jquery_lazyload/jquery-1.11.0.min.js';
import '../tuupola-jquery_lazyload/jquery.lazyload.min.js';
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'






$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function (res) {
  
        let temp = '';
        res.forEach((elm, i) => {
            
            let picture = JSON.parse(elm.picture);
          
            temp += `<li>
            <a href="./detail.html?id=${elm.id}">
            <img class="lazy" src="${picture[0].src}" alt="">
            <h3 class="title">${elm.h2}</h3>
            <p class="desc">${elm.title}</p>
            <p class="price">${elm.price}</p>
            </a>
                    </li>`;
        });
      
        $('.php-phone').append(temp);
// $(function () {
//     $("img.lazy").lazyload({
//         placeholder: "https://i1.mifile.cn/f/i/2014/cn/placeholder-80.png",
//         effect: "fadeIn"
//     });
// });

       
    }
});

// 轮播图效果
let mySwiper = new Swiper('.banner .swiper-container', { 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 30,
      effect: 'fade',
 });
let mSwiper = new Swiper('.lightsalelist .swiper-container', { 
    loop: true, 
   
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     
     
 });
