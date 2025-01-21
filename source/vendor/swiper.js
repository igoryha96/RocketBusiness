function initSlider() {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    // on: {
    //   resize: function enableOnlyMobile(swiper) {
    //     // Disable the slider when the window width is less than or equal to 360
    //     if (window.innerWidth > 361) {
    //       swiper.disable();
    //     } else {
    //       swiper.enable()
    //     }
    //   },
    // }
  });
}

// innitSlider();

// export { swiper };


const mobSlider = function () {
  const width = innerWidth;
  if (361 > width) {
    console.log('Должно работать');
    initSlider();
  } else {
    console.log('Выкл');

  }
}

mobSlider();


export { mobSlider };
// export { innitSlider }
