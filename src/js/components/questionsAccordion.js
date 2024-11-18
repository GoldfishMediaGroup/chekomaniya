function questionsAccordion() {
  const items = document.querySelectorAll('.questions__accordion-item');

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const itemActive = document.querySelector('.questions__accordion-item.isActive');


      const accordionItemBody = item.querySelector('.questions__accordion-item-body');
      if (itemActive && itemActive !== item) {
        itemActive.classList.toggle('isActive');
        itemActive.querySelector('.questions__accordion-item-body').style.maxHeight = 0;
      }
      item.classList.toggle('isActive');
      if (item.classList.contains('isActive')) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

  window.addEventListener('resize', () => {
    const activeItem = document.querySelector('.questions__accordion-item.isActive');
    if (activeItem) {
      const activeItemBody = activeItem.querySelector('.questions__accordion-item-body');
      activeItemBody.style.maxHeight = activeItemBody.scrollHeight + 'px';
    }
  });
}

export default questionsAccordion;

