import "@fontsource/montserrat";          // по умолчанию 400
import "@fontsource/montserrat/700.css";  // если нужен bold
import '@fontsource/montserrat/300.css';  // Light
import '@fontsource/montserrat/400.css';  // Light





import "../sass/style.scss";


// JS: переключаем .matches__button--active между кнопками
document.querySelectorAll('.matches__button').forEach(btn => {
    btn.addEventListener('click', () => {
      // убрать у всех
      document
        .querySelectorAll('.matches__button--active')
        .forEach(active => active.classList.remove('matches__button--active'));
      // добавить к тому, что кликнули
      btn.classList.add('matches__button--active');
  
      // здесь — логика переключения слайдера
      // e.g. if (btn.textContent === 'Matches') { showMatches(); } else { showBattles(); }
    });
  });
  