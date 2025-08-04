import "@fontsource/montserrat";          // по умолчанию 400
import "@fontsource/montserrat/700.css";  // если нужен bold
import '@fontsource/montserrat/300.css';  // Light
import '@fontsource/montserrat/400.css';  // Light
import '@fontsource/montserrat/500.css';  // Light
import '@fontsource/montserrat/600.css';  // Light





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

  // кнопки табов
  const tabs = document.querySelectorAll('.matches__button');
  // контейнеры с карточками для каждого таба
  const contents = document.querySelectorAll('.matches__content-item');
  // стрелки слайдера
  const leftBtn = document.querySelector('.matches__slider-left');
  const rightBtn = document.querySelector('.matches__slider-right');
  // индикаторы (точки) слайдера
  const pointers = document.querySelectorAll('.matches__pointer');

  // активный таб и номер слайда для каждого таба
  let activeTab = 0;
  const slideIndex = [0, 0]; // 0 — первые 4 карты, 1 — пятая карта

  // показать выбранный таб
  function showTab(index) {
    activeTab = index;
    // подсветка активной кнопки
    tabs.forEach((btn, i) => {
      btn.classList.toggle('matches__button--active', i === index);
    });
    // отображение нужного контейнера с карточками
    contents.forEach((content, i) => {
      content.style.display = (i === index) ? '' : 'none';
    });
    updateView();
  }

  // обновить отображение карточек и индикаторов слайдера
  function updateView() {
    const cards = contents[activeTab].querySelectorAll('.matches__card');
    const isFirstView = slideIndex[activeTab] === 0; // если 0 – показываем первые 4, иначе – только последнюю

    cards.forEach((card, i) => {
      const isLastCard = i === cards.length - 1;
      if (isLastCard) {
        // пятую карту показываем/скрываем через класс deactive
        card.classList.toggle('deactive', isFirstView);
      } else {
        // первые 4 карты показываем или скрываем через style.display
        card.style.display = isFirstView ? '' : 'none';
      }
    });

    // обновить индикаторы
    pointers.forEach((point, i) => {
      point.classList.toggle('active', i === slideIndex[activeTab]);
    });
  }

  // обработчики кликов по кнопкам табов
  tabs.forEach((btn, i) => {
    btn.addEventListener('click', () => showTab(i));
  });

  // обработчики стрелок слайдера
  leftBtn.addEventListener('click', () => {
    // показываем первую страницу (первые 4 карты)
    slideIndex[activeTab] = 0;
    updateView();
  });

  rightBtn.addEventListener('click', () => {
    // показываем вторую страницу (пятую карту)
    slideIndex[activeTab] = 1;
    updateView();
  });

  // инициализация: показать первый таб
  showTab(activeTab);






  