// import Swiper JS
import Swiper from 'swiper';

// import Swiper styles
import 'swiper/swiper-bundle.css';

// core version + navigation, pagination modules
import SwiperCore, {Pagination} from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

const swiper = new Swiper('.offer-slider', {
    loop: true,
    slidesPerView: 1,
    direction: 'vertical',
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 25,
    },
    renderCustom: function (swiper, current, total) {
      return current + ' of ' + total;
    }
});

