import "@fontsource/montserrat";          // по умолчанию 400
import "@fontsource/montserrat/700.css";  // если нужен bold
import '@fontsource/montserrat/300.css';  // Light
import '@fontsource/montserrat/400.css';  // Light





import "../sass/style.scss";


document.addEventListener('DOMContentLoaded', () => {
  const buttons  = document.querySelectorAll('.matches__button');
  const contents = document.querySelectorAll('.matches__content-item');

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('matches__button--active'));
      btn.classList.add('matches__button--active');               // ← добавлено

      contents.forEach(c => c.style.display = 'none');            // ← добавлено: скрываем все блоки
      contents[idx].style.display = 'flex';                       // ← добавлено: показываем нужный
    });
  });
});


  