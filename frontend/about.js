function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}



document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.accordion-toggle');

  toggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      btn.classList.toggle('active');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
