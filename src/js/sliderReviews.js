// import Swiper JS
import Swiper from '../swiper/swiper.bundle.min.js';
// import Swiper styles
import 'swiper/swiper-bundle.css';

const slider = document.querySelector('.swiper-container');

const mySwiper = new Swiper(slider, {
    direction: 'vertical',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
})
