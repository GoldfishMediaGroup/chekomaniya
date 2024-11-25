import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function contactsSectionAnim() {
  gsap.registerPlugin(ScrollTrigger);

  const btn = document.querySelector('.contacts__form-btn');
  const rotateText = document.querySelector('.contacts__form-btn-text-box');

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


  function setupFormListener(formSelector, submitButtonSelector) {
    const form = document.querySelector(formSelector);
    const submitButton = document.querySelector(submitButtonSelector);

    const formElements = form.querySelectorAll('input[data-required], textarea[data-required]');

    const formElementsParents = form.querySelectorAll('.input-group');

    function updateSubmitButtonState() {
      const isEmpty = Array.from(formElements).some((element) => {
        return element.value.trim() === '';
      });
      const formError = Array.from(formElementsParents).some((element) => {
        return element.classList.contains('_form-error');
      });

      if (isEmpty || formError ) {
        submitButton.setAttribute('disabled', 'disabled');
      } else {
        submitButton.removeAttribute('disabled');
      }
    }

    // form.addEventListener('submit', () => {
    //   submitButton.setAttribute('disabled', 'disabled')
    // })

    formElements.forEach((element) => {
      element.addEventListener('input', updateSubmitButtonState);
    });

    updateSubmitButtonState();
  }

  setupFormListener('.contacts__form-box', '.contacts__form-btn-box');


}

export default contactsSectionAnim;
