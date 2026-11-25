// Mobile menu
const btn = document.querySelector('.menu-btn');
const links = document.getElementById('links');
btn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  })
);

// Highlight the nav link for the section on screen
const navLinks = [...links.querySelectorAll('a')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)
      );
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => s && observer.observe(s));

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
