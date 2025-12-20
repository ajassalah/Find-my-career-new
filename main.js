console.log('FindMyCareer Redesign Loaded');

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');

  if (!toggle || !menu || !overlay || !closeBtn) {
    return;
  }

  const setState = (isOpen) => {
    menu.classList.toggle('is-open', isOpen);
    overlay.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    overlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('is-open');
    setState(!isOpen);
  });

  closeBtn.addEventListener('click', () => {
    setState(false);
  });

  overlay.addEventListener('click', () => {
    setState(false);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setState(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setState(false);
    }
  });
});
