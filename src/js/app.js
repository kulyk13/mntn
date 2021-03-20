// import Swiper JS
import Swiper from 'swiper';

// import Swiper styles
import 'swiper/swiper-bundle.css';

// core version + navigation, pagination modules
import SwiperCore, {Pagination} from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

const slides = ['Start', '01', '02', '03']

const swiper = new Swiper('.offer-slider', {
  direction: 'vertical',
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (slides[index++]) + '</span>';
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false,
    snapOnRelease: true,
    dragSize: 60,
  }, 
});