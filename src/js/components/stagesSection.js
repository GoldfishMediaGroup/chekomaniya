import { gsap, ScrollTrigger } from 'gsap/all';
window.$ = window.jQuery = require('jquery');

function stagesSection() {
  gsap.registerPlugin(ScrollTrigger);

  function stagesSectionAnim() {
    const section = document.querySelector('.stages__inner-box--desktop .stages__inner-wrapper');
    const progressBarrHeight = section.querySelector('.stages__progress-bar-height');
    const items = section.querySelectorAll('.stages__stage-box');
    const rows = section.querySelectorAll('.stages__stages-row');
    const row1 = section.querySelector('.stages__stages-row--one');
    const row2 = section.querySelector('.stages__stages-row--two');
    const row3 = section.querySelector('.stages__stages-row--three');

    // свг первый ряд

    const svgOneRowOne = row1.querySelector('.stages__svg-wrapper--2 .stages__svg-box--orange svg');
    const svgOneRowOnePath = svgOneRowOne.querySelector('path');
    const svgOneRowOneCircles = svgOneRowOne.querySelectorAll('circle');
    const svgOneRowOnePathLength = svgOneRowOnePath.getTotalLength();

    const svgOneRowTwo = row1.querySelector('.stages__svg-wrapper--3 .stages__svg-box--orange svg');
    const svgOneRowTwoPath = svgOneRowTwo.querySelector('path');
    const svgOneRowTwoCircles = svgOneRowTwo.querySelectorAll('circle');
    const svgOneRowTwoPathLength = svgOneRowTwoPath.getTotalLength();

    const svgOneRowThree = row1.querySelector('.stages__svg-wrapper--4 .stages__svg-box--orange svg');
    const svgOneRowThreePath = svgOneRowThree.querySelector('path');
    const svgOneRowThreeCircles = svgOneRowThree.querySelectorAll('circle');
    const svgOneRowThreePathLength = svgOneRowThreePath.getTotalLength();

    // свг второй ряд

    const svgTwoRowOne = row2.querySelector('.stages__svg-wrapper--1 .stages__svg-box--orange svg');
    const svgTwoRowOnePath = svgTwoRowOne.querySelector('.stages__svg-path');
    const svgTwoRowOneRect = svgTwoRowOne.querySelector('.stages__svg-rect');
    const svgTwoRowOnePathLength = svgTwoRowOnePath.getTotalLength();

    const svgTwoRowTwo = row2.querySelector('.stages__svg-wrapper--2 .stages__svg-box--orange svg');
    const svgTwoRowTwoPath = svgTwoRowTwo.querySelector('path');
    const svgTwoRowTwoCircles = svgTwoRowTwo.querySelectorAll('circle');
    const svgTwoRowTwoPathLength = svgTwoRowTwoPath.getTotalLength();

    const svgTwoRowThree = row2.querySelector('.stages__svg-wrapper--3 .stages__svg-box--orange svg');
    const svgTwoRowThreePath = svgTwoRowThree.querySelector('path');
    const svgTwoRowThreeCircles = svgTwoRowThree.querySelectorAll('circle');
    const svgTwoRowThreePathLength = svgTwoRowThreePath.getTotalLength();

    const svgTwoRowFour = row2.querySelector('.stages__svg-wrapper--4 .stages__svg-box--orange svg');
    const svgTwoRowFourPath = svgTwoRowFour.querySelector('path');
    const svgTwoRowFourCircles = svgTwoRowFour.querySelectorAll('circle');
    const svgTwoRowFourPathLength = svgTwoRowFourPath.getTotalLength();

    // свг третий ряд

    const svgThreeRowOne = row3.querySelector('.stages__svg-wrapper--1 .stages__svg-box--orange svg');
    const svgThreeRowOnePath = svgThreeRowOne.querySelector('.stages__svg-path');
    const svgThreeRowOneRect = svgThreeRowOne.querySelector('.stages__svg-rect');
    const svgThreeRowOnePathLength = svgThreeRowOnePath.getTotalLength();

    const svgThreeRowTwo = row3.querySelector('.stages__svg-wrapper--2 .stages__svg-box--orange svg');
    const svgThreeRowTwoPath = svgThreeRowTwo.querySelector('path');
    const svgThreeRowTwoCircles = svgThreeRowTwo.querySelectorAll('circle');
    const svgThreeRowTwoPathLength = svgThreeRowTwoPath.getTotalLength();

    const svgThreeRowThree = row3.querySelector('.stages__svg-wrapper--3 .stages__svg-box--orange svg');
    const svgThreeRowThreePath = svgThreeRowThree.querySelector('path');
    const svgThreeRowThreeCircles = svgThreeRowThree.querySelectorAll('circle');
    const svgThreeRowThreePathLength = svgThreeRowThreePath.getTotalLength();

    const svgThreeRowFour = row3.querySelector('.stages__svg-wrapper--4 .stages__svg-box--orange svg');
    const svgThreeRowFourPath = svgThreeRowFour.querySelector('path');
    const svgThreeRowFourCircles = svgThreeRowFour.querySelectorAll('circle');
    const svgThreeRowFourPathLength = svgThreeRowFourPath.getTotalLength();

    const startNum = document.querySelector('.stages__progress-bar-start-num');

    const slideCount = rows.length; // количество слайдов

    rows.forEach((row, index) => {
      if (index === 0) {
        // Для текущего слайда устанавливаем opacity: 1, чтобы показать
        gsap.set(row, { opacity: 1,  scale: 1, y: 0});
      } else {
        // Для всех остальных слайдов устанавливаем opacity: 0, чтобы скрыть
        gsap.set(row, { opacity: 0,   scale: 0.8, y: '80%'});
      }
    });

    let main = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top',
        end: '+=4500',
        scrub: true,
        pin: true,
        pinSpacer: true,
        invalidateOnRefresh: true,
        anticipatePin: 0,
        pinType: 'fixed',
        immediatelyRender: true
      }
    });

    let mainTwo = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top',
        end: '+=4500',
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 0,
        immediatelyRender: true
      }
    });

    main.to(progressBarrHeight, {
      height: '100%',
      ease: 'none'
    });

    // Обновление цифры слайдов в зависимости от прокрутки
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top',
        end: '+=4500',
        scrub: true,
        immediatelyRender: true,
        onUpdate: (self) => {
          // Прогресс будет от 0 до 1, умножаем на количество слайдов для получения текущего слайда
          let progress = self.progress * slideCount + 0.3;

          // Проверяем, если прогресс слишком маленький (около 0), показываем 01
          let currentSlide = progress <= 0 ? 1 : progress >= 3 ? 3 : Math.ceil(progress);

          // Обновляем текст, выводя его как двухзначное число
          startNum.textContent = currentSlide.toString().padStart(2, '0');
          // rows.forEach((row, index) => {
          //   if (index === currentSlide - 1) {
          //     gsap.to(row, { opacity: 1, duration: 1.3, scale: 1,  });
          //   } else {
          //     gsap.to(row, { opacity: 0, duration: 1.3, scale: 0.8,  });
          //   }
          // });
        }
      }
    });

    // Настройка начального состояния линии
    // первый ряд

    svgOneRowOnePath.style.strokeDasharray = svgOneRowOnePathLength;
    svgOneRowOnePath.style.strokeDashoffset = svgOneRowOnePathLength;

    svgOneRowTwoPath.style.strokeDasharray = svgOneRowTwoPathLength;
    svgOneRowTwoPath.style.strokeDashoffset = svgOneRowTwoPathLength;

    svgOneRowThreePath.style.strokeDasharray = svgOneRowThreePathLength;
    svgOneRowThreePath.style.strokeDashoffset = svgOneRowThreePathLength;
    // второй ряд
    svgTwoRowOnePath.style.strokeDasharray = svgTwoRowOnePathLength;
    svgTwoRowOnePath.style.strokeDashoffset = svgTwoRowOnePathLength;

    svgTwoRowTwoPath.style.strokeDasharray = svgTwoRowTwoPathLength;
    svgTwoRowTwoPath.style.strokeDashoffset = svgTwoRowTwoPathLength;

    svgTwoRowThreePath.style.strokeDasharray = svgTwoRowThreePathLength;
    svgTwoRowThreePath.style.strokeDashoffset = svgTwoRowThreePathLength;

    svgTwoRowFourPath.style.strokeDasharray = svgTwoRowFourPathLength;
    svgTwoRowFourPath.style.strokeDashoffset = svgTwoRowFourPathLength;

    // второй ряд

    svgThreeRowOnePath.style.strokeDasharray = svgThreeRowOnePathLength;
    svgThreeRowOnePath.style.strokeDashoffset = svgThreeRowOnePathLength;

    svgThreeRowTwoPath.style.strokeDasharray = svgThreeRowTwoPathLength;
    svgThreeRowTwoPath.style.strokeDashoffset = svgThreeRowTwoPathLength;

    svgThreeRowThreePath.style.strokeDasharray = svgThreeRowThreePathLength;
    svgThreeRowThreePath.style.strokeDashoffset = svgThreeRowThreePathLength;

    svgThreeRowFourPath.style.strokeDasharray = svgThreeRowFourPathLength;
    svgThreeRowFourPath.style.strokeDashoffset = svgThreeRowFourPathLength;

    // Анимация с использованием GSAP
    mainTwo

      // первый ряд
      .to(items[0].querySelector('.stages__stage-num-box'), {
        duration: 0.3,
        backgroundColor: '#f6b611'
      })

      .to(svgOneRowOneCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgOneRowOnePath, { duration: 1.5, strokeDashoffset: 0, ease: 'power2.out' })

      .to(svgOneRowOneCircles[1], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(items[1].querySelector('.stages__stage-num-box'), {
        duration: 0.5,
        backgroundColor: '#f6b611'
      })

      .to(svgOneRowTwoCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgOneRowTwoPath, { duration: 3, strokeDashoffset: 0, ease: 'power2.out' })

      .to(svgOneRowTwoCircles[1], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(items[2].querySelector('.stages__stage-num-box'), {
        duration: 0.5,
        backgroundColor: '#f6b611'
      })

      .to(svgOneRowThreeCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgOneRowThreePath, { duration: 3, strokeDashoffset: 0, ease: 'power2.out' })

      .to(row1, { opacity: 0, duration: 5, scale: 0.8, y: '80%' })
      .to(row2, { opacity: 1, duration: 5, scale: 1, y: 0 }, '-=5s')

      // второй ряд

      .to(svgTwoRowOnePath, { duration: 1.5, strokeDashoffset: 0, ease: 'power2.out' })
      .to(svgTwoRowOneRect, { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(items[3].querySelector('.stages__stage-num-box'), {
        duration: 0.5,
        backgroundColor: '#f6b611'
      })

      .to(svgTwoRowTwoCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgTwoRowTwoPath, { duration: 3, strokeDashoffset: 0, ease: 'power2.out' })

      .to(svgTwoRowTwoCircles[1], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(items[4].querySelector('.stages__stage-num-box'), {
        duration: 0.5,
        backgroundColor: '#f6b611'
      })

      .to(svgTwoRowThreeCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgTwoRowThreePath, { duration: 3, strokeDashoffset: 0, ease: 'power2.out' })

      .to(svgTwoRowThreeCircles[1], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(items[5].querySelector('.stages__stage-num-box'), {
        duration: 0.5,
        backgroundColor: '#f6b611'
      })

      .to(svgTwoRowFourCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgTwoRowFourPath, { duration: 3, strokeDashoffset: 0, ease: 'power2.out' })

      .to(row2, { opacity: 0, duration: 5,  scale: 0.8, y: '80%' })
      .to(row3, { opacity: 1, duration: 5, scale: 1, y: 0 }, '-=5s')

      // третий ряд

      .to(svgThreeRowOnePath, { duration: 1.5, strokeDashoffset: 0, ease: 'power2.out' })
      .to(svgThreeRowOneRect, { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(items[6].querySelector('.stages__stage-num-box'), {
        duration: 0.5,
        backgroundColor: '#f6b611'
      })

      .to(svgThreeRowTwoCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgThreeRowTwoPath, { duration: 3, strokeDashoffset: 0, ease: 'power2.out' })

      .to(svgThreeRowTwoCircles[1], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(items[7].querySelector('.stages__stage-num-box'), {
        duration: 0.5,
        backgroundColor: '#f6b611'
      })

      .to(svgThreeRowThreeCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgThreeRowThreePath, { duration: 3, strokeDashoffset: 0, ease: 'power2.out' })

      .to(svgThreeRowThreeCircles[1], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(items[8].querySelector('.stages__stage-num-box'), {
        duration: 0.5,
        backgroundColor: '#f6b611'
      })

      .to(svgThreeRowFourCircles[0], { duration: 0.5, opacity: 1, scale: 1.05, transformOrigin: 'center' })

      .to(svgThreeRowFourPath, { duration: 3, strokeDashoffset: 0, ease: 'power2.out' });
  }

  function stagesSectionMobShowMore() {
    const section = document.querySelector('.stages__inner-box--mob .stages__inner-wrapper');
    const column2 = section.querySelector('.stages__stages-column--two');
    const column3 = section.querySelector('.stages__stages-column--three');

    const $showMoreBtn = $('.stages__show-more-btn');
    const $column2 = $('.stages__stages-column--two');
    const $column3 = $('.stages__stages-column--three');

    $showMoreBtn.on('click', function () {
      if (!$showMoreBtn.hasClass('secondColumn')) {
        $showMoreBtn.addClass('secondColumn');
        $column2.slideDown();
      } else {
        $showMoreBtn.hide();
        $column3.slideDown();
      }
    });
  }

  stagesSectionAnim();
  stagesSectionMobShowMore();
}

export default stagesSection;
