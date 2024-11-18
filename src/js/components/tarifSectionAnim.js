import { gsap, ScrollTrigger } from 'gsap/all';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function tarifSectionAnim() {
  gsap.registerPlugin(ScrollTrigger);

  function tarifAnimDesk() {
    const sectionAnimDesk = document.querySelector('.tariffs__inner-box--desktop .tariffs__inner-wrapper');
    const slides = sectionAnimDesk.querySelectorAll('.tariffs__tariffs-slide');
    const progressBarHeight = sectionAnimDesk.querySelector('.tariffs__progress-bar-height');
    const currentSlideEl = sectionAnimDesk.querySelector('.tariffs__progress-bar-start-num');
    const totalSlidesEl = sectionAnimDesk.querySelector('.tariffs__progress-bar-end-num');

    const slideCount = slides.length;
    let currentSlide = 1;

    // Установим общее количество слайдов
    totalSlidesEl.textContent = String(slideCount).padStart(2, '0');

    slides.forEach((slide, index) => {
      if (index === 0) {
        gsap.to(slide, { opacity: 1, y: 0 });
      } else {
        gsap.to(slide, { opacity: 0, y: '200%' });
      }
    });

    // Таймлайн для прокрутки через слайды
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionAnimDesk,
        start: 'top top',
        end: `+=${slideCount * 700}`,
        scrub: true,
        pin: true,
        // snap: 1 / (slideCount - 1),
        invalidateOnRefresh: !0,
        onUpdate: (self) => {
          let progress = self.progress * slideCount;
          currentSlide = progress <= 0 ? 1 : Math.min(Math.ceil(progress), slideCount);

          currentSlideEl.textContent = currentSlide.toString().padStart(2, '0');

          progressBarHeight.style.height = `${self.progress * 100}%`;

          slides.forEach((slide, index) => {
            if (index === currentSlide - 1) {
              // Анимация появления текущего слайда снизу
              gsap.to(slide, { opacity: 1, background: '#f6b611', duration: 0.5, scale: 1, y: 0 });
            }
            // else if (index < currentSlide - 1) {
            //   // Анимация для предыдущих слайдов - небольшое поднятие вверх и уменьшение масштаба
            //   gsap.to(slide, { opacity: 0.5, duration: 0.8, scale: 0.9, y: '-10%' });
            // }
            else if (index === currentSlide - 2) {
              // Анимация для предыдущих слайдов - небольшое поднятие вверх и уменьшение масштаба
              gsap.to(slide, { opacity: 1, background: '#F8C84C', duration: 0.5, scale: 0.9, y: '-10%' });
            } else if (index < currentSlide - 2) {
              // Анимация для предыдущих слайдов - небольшое поднятие вверх и уменьшение масштаба
              gsap.to(slide, { opacity: 1, background: '#FADA88', duration: 0.5, scale: 0.8, y: '-20%' });
            } else {
              // Скрыть следующие слайды
              gsap.to(slide, { opacity: 0, background: '#f6b611', duration: 1, scale: 1, y: '100%' });
            }
          });
        }
      }
    });
  }

  function tarifSwiperMob() {
    const swiper = document.querySelector('.tariffs__inner-box--mob .tariffs__swiper');
    const slides = document.querySelectorAll('.tariffs__inner-box--mob .tariffs__tariffs-slide');
    const curSlide = document.querySelector('.tariffs__inner-box--mob .tariffs__progress-bar-start-num');
    const lastSlide = document.querySelector('.tariffs__inner-box--mob .tariffs__progress-bar-end-num');

    slides.forEach((item, index) => {
      item.setAttribute('data-num', index + 1);
    });

    const tarifSwiper = new Swiper(swiper, {
      slidesPerView: 1,
      spaceBetween: 40,
      speed: 800,

      centeredSlides: true,
      // initialSlide: 2,
      breakpoints: {
        768: {}
      },
      on: {
        init: (swiper) => {
          const slideCount = swiper.slides.length;
          const currentSlideIndex = swiper.activeIndex;

          // Устанавливаем начальный прогресс
          curSlide.textContent = `0${swiper.slides[currentSlideIndex].getAttribute('data-num')}`;
          lastSlide.textContent = `0${slideCount}`;

          // Инициализируем прогресс-бар
          updateProgressBar(currentSlideIndex, slideCount);
        },
        slideChange: function (swiper) {
          const currentSlideIndex = swiper.activeIndex;
          const slideCount = swiper.slides.length;

          curSlide.textContent = `0${swiper.slides[currentSlideIndex].getAttribute('data-num')}`;

          // Обновляем прогресс-бар
          updateProgressBar(currentSlideIndex, slideCount);
        }
      }
    });

    function updateProgressBar(currentIndex, totalSlides) {
      const progressBar = document.querySelector('.tariffs__inner-box--mob .tariffs__progress-bar-height');
      const progress = ((currentIndex + 1) / totalSlides) * 100; // Вычисляем прогресс в процентах
      progressBar.style.width = `${progress}%`;
    }
  }

  tarifAnimDesk();
  tarifSwiperMob();
}

export default tarifSectionAnim;
