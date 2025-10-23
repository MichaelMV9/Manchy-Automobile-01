let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  showSlide(0);
  setInterval(nextSlide, 5000);
}

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const chatButton = document.querySelector('.chat-button');
const chatWidget = document.getElementById('chatWidget');
const chatClose = document.getElementById('chatClose');

if (chatButton) {
  chatButton.addEventListener('click', () => {
    chatWidget.classList.toggle('active');
  });
}

if (chatClose) {
  chatClose.addEventListener('click', () => {
    chatWidget.classList.remove('active');
  });
}

document.addEventListener('click', (e) => {
  if (chatWidget && chatWidget.classList.contains('active')) {
    if (!chatWidget.contains(e.target) && !chatButton.contains(e.target)) {
      chatWidget.classList.remove('active');
    }
  }
});
