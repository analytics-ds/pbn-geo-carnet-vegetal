const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('#mobile-nav');
const disclosures = [...document.querySelectorAll('.mega-menu')];
function closeTopics() { disclosures.forEach(menu => { menu.open = false; }); }
function closeMobile() {
  if (!toggle || !mobile) return;
  toggle.setAttribute('aria-expanded', 'false');
  mobile.hidden = true;
  closeTopics();
}
if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    mobile.hidden = open;
    if (open) closeTopics();
  });
  mobile.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobile));
  matchMedia('(min-width: 1051px)').addEventListener('change', closeMobile);
}
disclosures.forEach(menu => {
  menu.addEventListener('toggle', () => {
    if (menu.open) disclosures.forEach(other => { if (other !== menu) other.open = false; });
  });
  menu.addEventListener('focusout', event => {
    if (event.relatedTarget && !menu.contains(event.relatedTarget)) menu.open = false;
  });
});
document.addEventListener('click', event => {
  disclosures.forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const open = disclosures.find(menu => menu.open);
  if (open) { open.open = false; open.querySelector('summary').focus(); }
  else if (toggle && toggle.getAttribute('aria-expanded') === 'true') { closeMobile(); toggle.focus(); }
});

document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('.topic-track');
  const buttons = [...carousel.querySelectorAll('[data-direction]')];
  const line = carousel.querySelector('.carousel-line span');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    buttons[0].disabled = track.scrollLeft < 2;
    buttons[1].disabled = track.scrollLeft >= max - 2;
    const ratio = Math.min(1, track.clientWidth / track.scrollWidth);
    line.style.width = `${ratio * 100}%`;
    line.style.transform = `translateX(${max > 0 ? track.scrollLeft / max * (1 - ratio) / ratio * 100 : 0}%)`;
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const card = track.querySelector('.topic-card');
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({ left: Number(button.dataset.direction) * (card.offsetWidth + gap), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }));
  track.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(track);
  update();
});
