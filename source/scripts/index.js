import { handleResize } from '../vendor/swiper';
import { shownSwiper } from '../scripts/showswiper';


// Вызываем handleResize при загрузке страницы

shownSwiper();
handleResize();

window.addEventListener('resize', shownSwiper);

// Добавляем обработчик события resize
window.addEventListener('resize', handleResize);
