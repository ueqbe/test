// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Alert for email link
document.querySelector('a[href^="mailto:"]').addEventListener('click', function (e) {
  e.preventDefault();
  alert('Thank you for your interest! Please send your email to rajasekar@example.com.');
});


