// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    nav.classList.remove('active');
    burger.classList.remove('active');
  });
});

// Form Submission
document.getElementById('enrollForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for enrolling! Sultana will contact you shortly.');
  this.reset();
});

// Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = entry.target.classList.contains('delay-1') ? '0.3s' :
                                          entry.target.classList.contains('delay-2') ? '0.6s' :
                                          entry.target.classList.contains('delay-3') ? '0.9s' : '0s';
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'none';
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-slide-up, .animate-slide-left, .animate-fade-in, .animate-pop, .animate-pop-card, .animate-bounce-in, .animate-float, .contact h2, .contact .info-item, .contact .social-links').forEach(el => {
  observer.observe(el);
});