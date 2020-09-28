@@include('animOnScroll.js');

const trigger = document.querySelector('.hero__trigger');
const vacancyBtn = document.querySelector('.hero__button');

trigger.addEventListener('click', () => {
  const about = document.querySelector('.about');
  about.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

vacancyBtn.addEventListener('click', (e) => {
  e.preventDefault
  const vacancies = document.querySelector('.vacancies');
  vacancies.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const vacancies = document.querySelectorAll('.vacancies__item');

vacancies.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});






















