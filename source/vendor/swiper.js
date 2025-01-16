// // your-script.js
// Асинхронное подключение
// async function loadSwiper() {
//   try {
//     const response = await fetch('https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     // Handle the loading and loading error
//   } catch (error) {
//     return;
//   }
//   // Assuming you load the swiper library directly into the global scope
//   // then you can initialize the swiper
//   const swiper = new Swiper('.swiper', {
//     spaceBetween: 16,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     mousewheel: true,
//     keyboard: true,
//     slidesPerView: 1,
//   });
// }

const swiper = new Swiper('.swiper', {

  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
  on: {
    resize: function enableOnlyMobile(swiper) {
      // Disable the slider when the window width is less than or equal to 360
      if (window.innerWidth > 360) {
        swiper.disable()
        swiper.el.classList.add('-non-slider')
      } else {
        swiper.enable()
        swiper.el.classList.remove('-non-slider')
      }
    },
  }
});

export { swiper };

// export { loadSwiper };
