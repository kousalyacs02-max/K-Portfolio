// Mobile menu
const nav = document.getElementById('nav'), menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Highlight the current section in the nav
const links = [...nav.querySelectorAll('a')];
const secs = links.map(a => document.querySelector(a.getAttribute('href')));
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
secs.forEach(s => s && spy.observe(s));

// Gentle reveal for the hobby photos only
const rv = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); }
}), { threshold: .2 });
document.querySelectorAll('.hobbies figure').forEach(f => { f.classList.add('rv'); rv.observe(f); });

// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();
