import { loadSwiper } from '../vendor/swwiperr';

loadSwiper();

// eslint-disable-next-line no-undef, prefer-const, no-unused-vars
let swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});
