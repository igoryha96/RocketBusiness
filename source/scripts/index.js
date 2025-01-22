import { handleResize } from '../vendor/swiper';
import { shownSwiper } from '../scripts/showswiper';


// Вызываем handleResize при загрузке страницы
handleResize();

// Добавляем обработчик события resize
window.addEventListener('resize', handleResize);
