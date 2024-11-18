import Lenis from '@studio-freight/lenis';

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  if(window.innerWidth > 768) {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  }
}
export default smoothScroll;
