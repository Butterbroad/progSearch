'use strict';

const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains("anim-no-hide")) {
                    animItem.classList.remove('active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

;

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






















