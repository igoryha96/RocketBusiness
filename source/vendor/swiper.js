let swiper; // Переменная для хранения экземпляра Swiper

function initSlider() {
  // Проверяем, если swiper уже инициализирован, не инициализируем его снова
  if (!swiper) {
    swiper = new Swiper('.swiper', {
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: false, // Делаем пагинацию кликабельной
      },
      mousewheel: true,
      keyboard: true,
      slidesPerView: 1,
    });
  }
}

function handleResize() {
  // Проверяем ширину экрана
  if (window.innerWidth < 361) {
    initSlider(); // Инициализируем слайдер, если ширина меньше 361
  } else {
    // Если ширина больше 361, уничтожаем слайдер, если он был инициализирован
    if (swiper) {
      swiper.destroy(); // Уничтожаем экземпляр Swiper
      swiper = null; // Сбрасываем переменную
    }
  }
}

// // Вызываем handleResize при загрузке страницы
// handleResize();

// // Добавляем обработчик события resize
// window.addEventListener('resize', handleResize);

export { handleResize };
