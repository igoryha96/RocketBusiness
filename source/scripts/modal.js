const form = document.querySelector('.modal-form');

const input = document.querySelector('.modal__name');
const inputNumber = document.querySelector('.modal__phone');
const errorMessage = document.querySelector('.modal__erorr');

// input.addEventListener('invalid', (event) => {
//   event.preventDefault();
// });
// inputNumber.addEventListener('invalid', (event) => {
//   event.preventDefault();
// });


input.addEventListener('keydown', () => {
  // Проверяем, пустое ли поле ввода
  if (input.value.trim() === '') {
    // Если пустое, скрываем класс ошибки и выводим сообщение
    errorMessage.classList.remove('modal__erorr--erorr');
  } else {
    // Если не пустое, можно выполнить отправку формы или другие действия
    errorMessage.classList.add('modal__erorr--erorr');
  }
});
