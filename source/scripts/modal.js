const modalWindow = document.querySelector('.modal');
const content = document.querySelector('.content');
const form = document.querySelector('.modal-form');

const input = document.querySelector('.modal__name');
const inputNumber = document.querySelector('.modal__phone');
const errorMessage = document.querySelector('.modal__erorr');

const closeModal = document.querySelector('.modal__close');
const openButtons = document.querySelectorAll('.button');


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

closeModal.addEventListener('click', () => {
  modalWindow.classList.add('modal--close');
  content.classList.remove('content-none');
});

openButtons.forEach(button => {
  button.addEventListener('click', () => {
    content.classList.add('content-none');
    modalWindow.classList.remove('modal--close');
  });
});
