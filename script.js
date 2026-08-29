// === Inkfluence AI - Script ===

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Sticky nav - add background on scroll
var nav = document.querySelector('.nav');
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Tool directory filter
var filterBtns = document.querySelectorAll('.filter-btn');
var toolCards = document.querySelectorAll('.tool-card');

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Update active button
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');

    var filter = btn.getAttribute('data-filter');

    toolCards.forEach(function(card) {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Email capture form
var form = document.getElementById('capture-form');
var successMsg = document.getElementById('capture-success');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    var name = document.getElementById('first-name').value;
    var email = document.getElementById('email').value;
    var roleEl = document.getElementById('role');
    var role = roleEl ? roleEl.value : 'unknown';

    console.log('Form submitted:', { name: name, email: email, role: role });

    // Show success message
    form.style.display = 'none';
    successMsg.classList.remove('hidden');

    // TODO: Replace with real email provider integration
    // Example MailerLite: POST to your form action URL
    // Example Substack: redirect to your subscribe URL
  });
}
