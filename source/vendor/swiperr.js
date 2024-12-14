// // your-script.js
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
//   const swiper = new Swiper('.swiper-container', {
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     mousewheel: true,
//     keyboard: true,
//   });
// }

// // Call the function to load the library
// loadSwiper();

// export { loadSwiper };
