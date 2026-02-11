// ===== MOBILE MENU =====
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    const isOpen = nav.classList.contains('active');
    burger.innerHTML = isOpen
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  });
}

// ===== ACCORDION =====
document.querySelectorAll('.accordion__header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const body = item.querySelector('.accordion__body');
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.accordion__item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion__body').style.maxHeight = null;
    });

    // Open clicked if wasn't active
    if (!isActive) {
      item.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// ===== CONTACT FORM =====
const form = document.querySelector('.contact__form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const entries = Object.fromEntries(data.entries());
    console.log('Form submitted:', entries);
    alert('Zprava byla odeslana. Dekujeme!');
    form.reset();
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    }
  });
});
