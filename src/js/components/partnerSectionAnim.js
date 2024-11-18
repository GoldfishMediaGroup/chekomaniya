import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function partnerSectionAnim() {
  gsap.registerPlugin(ScrollTrigger);

  const btn = document.querySelector('.partner__card-box-btn');
  const rotateText = document.querySelector('.partner__card-box-btn-text-box');

  btn.addEventListener('mouseenter', function () {
    gsap.to(rotateText, {
      rotation: '+=360',
      duration: 8,
      ease: 'linear',
      repeat: -1
    });
  });

  btn.addEventListener('mouseleave', function () {
    gsap.to(rotateText, {
      rotation: gsap.getProperty(rotateText, 'rotation'),
      duration: 0,
      overwrite: true
    });
  });
}

export default partnerSectionAnim;