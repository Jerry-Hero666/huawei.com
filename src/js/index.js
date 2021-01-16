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

 // 倒计时
 $(function(){
   let future= new Date(2021, 2, 11, 0, 0, 0);
    setInterval(function() {
  let now = new Date(); // 获得当前时间

  let calculate = future - now; // 毫秒值
  let s = calculate / 1000; // 转换成秒
  let day = parseInt(s / 86400); // 换算成天
  let hour = parseInt(s % 86400 / 3600); // 计算小时
  let min = parseInt(s % 3600 / 60); // 计算分钟
  let sec = parseInt(s % 60); // 计算秒
      if(min<10){
        min='0'+min
      }
      if(sec<10){
        sec='0'+sec
      }
      if(day<10){
        day='0'+day
      }
  $('.hour-js').html(hour);
  $('.min-js').html(min);
  $('.sec-js').html(sec);
  $('.light-text').html('距离结束还有'+day+'天');
}, 1000);
 })
