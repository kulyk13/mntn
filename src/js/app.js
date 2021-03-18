// import Swiper JS
import Swiper from 'swiper';

// import Swiper styles
import 'swiper/swiper-bundle.css';

// core version + navigation, pagination modules
import SwiperCore, {Pagination} from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

const swiper = new Swiper('.offer-swiper', {
    loop: true,
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 100,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
});

