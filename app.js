// NAV SCROLL
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// HAMBURGER
const ham = document.getElementById('ham');
const mob = document.getElementById('mob-menu');
ham.addEventListener('click', () => mob.classList.toggle('open'));
function closeMob() { mob.classList.remove('open'); }

// SPEED LINES
const sw = document.getElementById('speedwrap');
for (let i = 0; i < 8; i++) {
  const l = document.createElement('div');
  l.className = 'speed-line';
  l.style.cssText = `top:${10 + Math.random() * 80}%;width:${100 + Math.random() * 200}px;animation-delay:${Math.random() * 4}s;animation-duration:${2 + Math.random() * 2}s`;
  sw.appendChild(l);
}

// PARTICLES
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
resize();
window.addEventListener('resize', resize);
const pts = Array.from({length: 55}, () => ({
  x: Math.random() * canvas.width, y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.4, vx: (Math.random()-.5)*.4, vy: (Math.random()-.5)*.4,
  a: Math.random() * .4 + .1
}));
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pts.forEach(p => {
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(139,69,255,${p.a})`; ctx.fill();
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// SCROLL ANIMATION
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('[data-a],[data-a-stagger]').forEach(el => obs.observe(el));

// COUNTERS
let counted = false;
function animCount(el, target, suffix = '', dur = 2000) {
  let s = 0;
  const step = ts => {
    if (!s) s = ts;
    const p = Math.min((ts - s) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !counted) {
      counted = true;
      animCount(document.getElementById('cnt1'), 500, '+');
      animCount(document.getElementById('cnt2'), 40, '+');
      document.getElementById('cnt3').textContent = '90';
    }
  });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObs.observe(statsEl);

// HERO CAROUSEL
(function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.cdot');
  const carousel = document.getElementById('hero-carousel');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    slides[current].setAttribute('aria-hidden', 'true');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');

    current = (idx + slides.length) % slides.length;

    slides[current].classList.add('active');
    slides[current].setAttribute('aria-hidden', 'false');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');
  }

  function next() { goTo(current + 1); }

  function startTimer() { timer = setInterval(next, 4200); }
  function stopTimer()  { clearInterval(timer); }

  // Dots click
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopTimer(); goTo(i); startTimer(); });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);

  // Keyboard prev/next when focused inside carousel
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { stopTimer(); goTo(current - 1); startTimer(); }
    if (e.key === 'ArrowRight') { stopTimer(); goTo(current + 1); startTimer(); }
  });

  startTimer();
})();
