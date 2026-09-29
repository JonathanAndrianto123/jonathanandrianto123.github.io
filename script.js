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
const CV_FILE = 'cv_jonathan_andrianto.pdf';

if (downloadCvBtn) {
  downloadCvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(CV_FILE, '_blank');
  });
}

const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

if (contactForm) {
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

    const targetEmail = 'joeandrianto777@gmail.com';
    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    // Launch mail client
    window.location.href = mailtoUrl;

    // Show visual status feedback
    if (contactStatus) {
      contactStatus.style.display = 'block';
      contactStatus.className = 'contact-status success';
      contactStatus.innerHTML = `
        ✨ <b>Email client launching!</b><br />
        Sending to: <code>${targetEmail}</code>.<br />
        <small>If your mail app didn't open automatically, <a href="${mailtoUrl}" style="color: #60a5fa; text-decoration: underline;">click here to launch directly</a>.</small>
      `;
    }

    contactForm.reset();
  });
}
