import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import 'animate.css';
import WOW from 'wow.js';
window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';
import scroll from '../utils/scroll';

import smoothScroll from '../components/smoothScroll';

import headerScroll from '../components/headerScroll';
import headerBurger from '../components/headerBurger';
import whatSectionAnim from '../components/whatSectionAnim';
import stagesSection from '../components/stagesSection';
import partnerSectionAnim from '../components/partnerSectionAnim';
import demoSectionAnim from '../components/demoSectionAnim';
import casesSectionAnim from '../components/casesSectionAnim';
import questionsAccordion from '../components/questionsAccordion';
import tarifSectionAnim from '../components/tarifSectionAnim';
import contactsSectionAnim from '../components/contactsSectionAnim';

export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    smoothScroll();
  } catch {}
  try {
    headerScroll();
  } catch {}
  try {
    headerBurger();
  } catch {}
  try {
    whatSectionAnim();
  } catch {}
  try {
    stagesSection();
  } catch {}
  try {
    partnerSectionAnim();
  } catch {}
  try {
    demoSectionAnim();
  } catch {}
  try {
    casesSectionAnim();
  } catch {}
  try {
    questionsAccordion();
  } catch {}
  try {
    tarifSectionAnim();
  } catch {}
  try {
    contactsSectionAnim();
  } catch {}
});
