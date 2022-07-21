const heroBtn = document.querySelector('.hero__btn'); // в hero секции Зарегистр
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// задаем классу overlay одно из св-в через js, чтобы экран не мелькал, как если через css задать
overlay.style.transitionDuration= '0.36s';
modal.style.transitionDuration= '0.36s';

// разварачиваем overlay по нажатию на кнопку heroBtn
heroBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_open');
  modal.classList.add('modal_open');
});

// сворачиваем overlay по нажатию на него самого
overlay.addEventListener('click', (event) => {
  const target = event.target;
  // target.closest('.modal__close') можем кликать по вложенной svg и ее path, потом поднимемся выше и у обертки-button будет .modal__close
  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay_open');
    modal.classList.remove('modal_open');
  }
});

// отправка данных с формы на сервер fetch()
const form = document.querySelector('form');
const modalTitle = document.querySelector('.modal__title');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  // собрали данные с формы и посместили их в один объект
  const data = {
    name: form.name.value,
    surname: form.surname.value,
    tel: form.tel.value,
  };

  fetch('https://api-form-order.herokuapp.com/api/order', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(data => {
      modalTitle.innerText = data.name + ', ваша заявка успешно отправлена, номер: ' + data.id;
    });

    form.remove(); // удалим форму

    // через удалим overlay и модальное окно
    setTimeout(() => {
      overlay.classList.remove('overlay_open');
      modal.classList.remove('modal_open');
    }, 3000);
})