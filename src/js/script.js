import "@fontsource/montserrat";          // по умолчанию 400
import "@fontsource/montserrat/700.css";  // если нужен bold
import '@fontsource/montserrat/300.css';  // Light
import '@fontsource/montserrat/400.css';  // Light





import "../sass/style.scss";


document.addEventListener('DOMContentLoaded', () => {
  const tabButtons  = document.querySelectorAll('.matches__button');       // кнопки табов
  const tabContents = document.querySelectorAll('.matches__content-item'); // содержимое табов

  // по умолчанию показываем только первый таб
  tabContents.forEach((content, idx) => {
    content.style.display = idx === 0 ? 'flex' : 'none';
  });

  tabButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      // Переключаем активную кнопку
      tabButtons.forEach(b => b.classList.remove('matches__button--active'));
      btn.classList.add('matches__button--active');

      // Скрываем все табы
      tabContents.forEach(c => (c.style.display = 'none'));

      // Показываем нужный таб по индексу кнопки
      tabContents[idx].style.display = 'flex';
    });
  });
});




  