import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function casesSectionAnim() {
  gsap.registerPlugin(ScrollTrigger);

  const container = document.querySelector('.cases'); // Родительский элемент, содержащий кнопки

  container.addEventListener('mouseenter', function (event) {
    if (event.target.classList.contains('cases__item')) {
      const rotateText = event.target.querySelector('.cases__btn-text-box');
      gsap.to(rotateText, {
        rotation: '+=360',
        duration: 8,
        ease: 'linear',
        repeat: -1
      });
    }
  }, true);
  
  container.addEventListener('mouseleave', function (event) {
    if (event.target.classList.contains('cases__item')) {
      const rotateText = event.target.querySelector('.cases__btn-text-box');
      gsap.to(rotateText, {
        rotation: gsap.getProperty(rotateText, 'rotation'),
        duration: 0,
        overwrite: true
      });
    }
  }, true);
}

export default casesSectionAnim;