// ===== CURSOR =====
let mx = window.innerWidth / 2;
let my = window.innerHeight / 2;
let cx = mx;
let cy = my;
let prevCx = cx;
let prevCy = cy;
let lastEchoTime = 0;

const cursorEl = document.getElementById('cursor');

// Detect touch/coarse-pointer devices — disable custom cursor & spotlight on them
const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

if (isTouchDevice) {
  // Show the full coloured portrait on touch (spotlight never fires)
  const imgAltTouch = document.getElementById('img-alt');
  if (imgAltTouch) imgAltTouch.style.clipPath = 'circle(100% at 50% 50%)';
  if (cursorEl) cursorEl.style.display = 'none';
}

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});

function getSpotlightR() {
  const vw = window.innerWidth;
  if (vw >= 2560) return 200;
  if (vw >= 1440) return 150;
  if (vw >= 1024) return 130;
  if (vw >= 768) return 110;
  return 80;
}

let SPOTLIGHT_R = getSpotlightR();
window.addEventListener('resize', () => {
  SPOTLIGHT_R = getSpotlightR();
});

const PARALLAX = 18;
const GRID_STR = 8;

const imgAlt = document.getElementById('img-alt');
const grid = document.getElementById('grid');
const nameEl = document.getElementById('name');
const navEl = document.getElementById('nav');
const socials = document.getElementById('socials');
const tagline = document.getElementById('tagline');

const parallaxEls = [
  { el: nameEl, s: 1 },
  { el: navEl, s: 0.6 },
  { el: socials, s: 0.5 },
  { el: tagline, s: 0.4 },
];

function dist(ax, ay, bx, by) {
  return Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
}

function spawnEcho() {
  const e = document.createElement('div');
  e.className = 'echo';
  const s = SPOTLIGHT_R * 2;
  e.style.cssText = `width:${s}px;height:${s}px;left:${cx}px;top:${cy}px;`;
  document.body.appendChild(e);
  setTimeout(() => e.remove(), 750);
}

function loop() {
  // Skip expensive animations on touch devices
  if (isTouchDevice) return;

  cx += (mx - cx) * 0.1;
  cy += (my - cy) * 0.1;
  const speed = dist(cx, cy, prevCx, prevCy);
  prevCx = cx;
  prevCy = cy;

  if (cursorEl) {
    cursorEl.style.left = cx + 'px';
    cursorEl.style.top = cy + 'px';
  }

  if (imgAlt) {
    imgAlt.style.clipPath = `circle(${SPOTLIGHT_R}px at ${cx}px ${cy}px)`;
  }

  const now = Date.now();
  if (speed > 4 && now - lastEchoTime > 80) {
    spawnEcho();
    lastEchoTime = now;
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const nx = cx / vw - 0.5;
  const ny = cy / vh - 0.5;

  parallaxEls.forEach(({ el, s }) => {
    if (!el) return;
    el.style.transform = `translate(${-nx * PARALLAX * s}px,${-ny * PARALLAX * s}px)`;
  });

  if (grid) {
    grid.style.transform = `translate(${nx * GRID_STR}px,${ny * GRID_STR}px)`;
  }

  requestAnimationFrame(loop);
}

loop();

// ===== NAV — open about panel =====
const hero = document.getElementById('hero');
const aboutPanel = document.getElementById('about-panel');

function switchSection(id) {
  document.querySelectorAll('.about-section').forEach((s) => s.classList.remove('visible'));
  document.querySelectorAll('.subnav-btn').forEach((b) => b.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) target.classList.add('visible');

  const btn = document.querySelector(`.subnav-btn[data-target="${id}"]`);
  if (btn) btn.classList.add('active');

  const aboutContent = document.getElementById('about-content');
  if (aboutContent) aboutContent.scrollTop = 0;
}

function openAbout(section) {
  if (hero) hero.classList.add('slide-out');
  if (aboutPanel) aboutPanel.classList.add('active');
  if (section) switchSection(section);
}

function closeAbout() {
  if (hero) hero.classList.remove('slide-out');
  if (aboutPanel) aboutPanel.classList.remove('active');
}

const navAboutBtn = document.getElementById('nav-about-btn');
const navSkillsBtn = document.getElementById('nav-skills-btn');
const navResumeBtn = document.getElementById('nav-resume-btn');
const navProjectsBtn = document.getElementById('nav-projects-btn');
const navContactBtn = document.getElementById('nav-contact-btn');

if (navAboutBtn) navAboutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openAbout('sec-about');
});

if (navSkillsBtn) navSkillsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openAbout('sec-skills');
});

if (navResumeBtn) navResumeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openAbout('sec-resume');
});

if (navProjectsBtn) navProjectsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openAbout('sec-projects');
});

if (navContactBtn) navContactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openAbout('sec-contact');
});

const backBtn = document.getElementById('back-btn');
if (backBtn) backBtn.addEventListener('click', closeAbout);

// ===== Mobile nav (hamburger) =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

function setNavOpen(open) {
  if (!navEl) return;
  navEl.classList.toggle('open', open);
  if (navToggle) navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (navMenu) navMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
}

function toggleNav() {
  if (!navEl) return;
  setNavOpen(!navEl.classList.contains('open'));
}

// Close hamburger menu when resizing to desktop width
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) setNavOpen(false);
});

if (navToggle) {
  navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggleNav();
  });
}

document.querySelectorAll('.nav-menu-link').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const sec = a.getAttribute('data-open');
    setNavOpen(false);
    if (sec) openAbout(sec);
  });
});

document.addEventListener('click', (e) => {
  if (!navEl || !navEl.classList.contains('open')) return;
  const t = e.target;
  if (!(t instanceof Element)) return;
  if (!navEl.contains(t)) setNavOpen(false);
});

// ===== SUB-NAV =====
document.querySelectorAll('.subnav-btn').forEach((btn) => {
  btn.addEventListener('click', () => switchSection(btn.dataset.target));
});






document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setNavOpen(false);

});

// ===== Contact form (FormSubmit AJAX) =====
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');
const contactSubmit = document.getElementById('contact-submit');

function setFieldError(id, message) {
  const el = document.getElementById(id);
  if (!el) return;
  el.setAttribute('aria-invalid', message ? 'true' : 'false');
  const msg = document.querySelector(`.form-error[data-for="${id}"]`);
  if (msg) msg.textContent = message || '';
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '').trim());
}

function validateContactForm() {
  const name = /** @type {HTMLInputElement|null} */ (document.getElementById('contact-name'));
  const email = /** @type {HTMLInputElement|null} */ (document.getElementById('contact-email'));
  const message = /** @type {HTMLTextAreaElement|null} */ (document.getElementById('contact-message'));

  let ok = true;
  const nameVal = name?.value?.trim() || '';
  const emailVal = email?.value?.trim() || '';
  const messageVal = message?.value?.trim() || '';

  setFieldError('contact-name', '');
  setFieldError('contact-email', '');
  setFieldError('contact-message', '');

  if (!nameVal) {
    setFieldError('contact-name', 'Name is required.');
    ok = false;
  }
  if (!emailVal) {
    setFieldError('contact-email', 'Email is required.');
    ok = false;
  } else if (!isValidEmail(emailVal)) {
    setFieldError('contact-email', 'Please enter a valid email.');
    ok = false;
  }
  if (!messageVal) {
    setFieldError('contact-message', 'Message is required.');
    ok = false;
  }

  return ok;
}

const statusIcon = document.getElementById('status-icon');
const statusIconPath = document.getElementById('status-icon-path');
const statusText = document.getElementById('status-text');

const ICON_PATHS = {
  success: 'M20 6L9 17l-5-5',
  error: 'M18 6L6 18M6 6l12 12',
};

function setStatus(type, message) {
  if (!contactStatus) return;

  contactStatus.classList.remove('success', 'error', 'sending', 'show');

  if (type === 'sending') {
    if (statusIcon) statusIcon.style.display = 'none';
    if (statusText) statusText.textContent = message;
    contactStatus.classList.add('sending');
  } else if (type === 'success' || type === 'error') {
    if (statusIcon) statusIcon.style.display = 'block';
    if (statusIconPath) statusIconPath.setAttribute('d', ICON_PATHS[type]);
    if (statusText) statusText.textContent = message;
    contactStatus.classList.add(type);
  } else {
    if (statusIcon) statusIcon.style.display = 'none';
    if (statusText) statusText.textContent = message;
  }

  requestAnimationFrame(() => {
    contactStatus.classList.add('show');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus('', '');

    if (!validateContactForm()) {
      setStatus('error', 'Please fix the highlighted fields.');
      return;
    }

    try {
      if (contactSubmit) contactSubmit.setAttribute('disabled', 'true');
      setStatus('sending', 'Sending…');

      const formData = new FormData(contactForm);
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (!res.ok) throw new Error('Request failed');
      contactForm.reset();
      setStatus('success', 'Message sent successfully. Thank you!');
    } catch (err) {
      setStatus('error', 'Failed to send. Please email me directly instead.');
    } finally {
      if (contactSubmit) contactSubmit.removeAttribute('disabled');
    }
  });
}

// ===== Cursor hover effect on interactive elements =====
document.querySelectorAll('a, button, .project-card, .subnav-btn, .project-link, .modal-close').forEach((el) => {
  el.addEventListener('mouseenter', () => cursorEl?.classList.add('big'));
  el.addEventListener('mouseleave', () => cursorEl?.classList.remove('big'));
});
