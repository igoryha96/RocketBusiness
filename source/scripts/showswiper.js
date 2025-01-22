let swiper = document.querySelector('.swiper');
let swiperWrap = document.querySelector('.swiper-wrapper');
let swiperSlide = document.querySelectorAll('.swiper-slide');

let shownSwiper = function () {
  if (window.innerWidth > 360) {
    swiper.classList.remove('swiper');
    swiperWrap.classList.remove('swiper-wrapper');

    swiperSlide.forEach((element) => {
      element.classList.remove('swiper-slide');
      element.classList.add('myswiper__slide');
    });

    // console.log('удалил классы');

  } else {
    swiper.classList.add('swiper');
    swiper.classList.remove('myswiper');
    swiperWrap.classList.add('swiper-wrapper');
    swiperWrap.classList.remove('myswiper__wrapper');

    swiperSlide.forEach((element) => {
      element.classList.add('swiper-slide');
      element.classList.remove('myswiper__slide');
    });

    // console.log('добавил классы');
  }
};

shownSwiper();

window.addEventListener('resize', shownSwiper);
