const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

// Mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

function closeMobileNav() {
  mobileNav.style.display = 'none';
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden', 'true');
}

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.style.display === 'block';
  if (isOpen) {
    closeMobileNav();
  } else {
    mobileNav.style.display = 'block';
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
  }
});

mobileNav.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => closeMobileNav());
});

const downloadCvBtn = document.getElementById('downloadCvBtn');
const CV_FILE = 'cv.pdf';

downloadCvBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.open(CV_FILE, '_blank');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  const to = 'minelylitaay06@gmail.com';
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
