function headerBurger() {
  const burger = document.querySelector('.header__burger');
  const navWrapper = document.querySelector('.header__nav-wrapper');
  const bannerMob = document.querySelector('.header__banner');
  const logo = document.querySelector('.header__logo-box');

  function openBurger() {
    document.body.style.overflow = 'hidden';
    burger.classList.add('isActive');
    navWrapper.classList.add('isActive');
    bannerMob.classList.add('isNoBg');
  }

  function closeBurger() {
    document.body.style.overflow = '';
    burger.classList.remove('isActive');
    navWrapper.classList.remove('isActive');
    bannerMob.classList.remove('isNoBg');
  }

  burger.addEventListener('click', () => {
    burger.classList.contains('isActive') ? closeBurger() : openBurger();
  });

  logo.addEventListener('click', () => {
    closeBurger();
  });

  navWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__nav-link')) {
      closeBurger();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeBurger();
    }
  });
}
export default headerBurger;
