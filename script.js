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

// Email capture form (works on all pages — submits to Formsubmit, redirects to thankyou.html)
document.querySelectorAll('.capture-form').forEach(function(form) {
  form.addEventListener('submit', function(e) {
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = 'Sending...';
    // Let the form submit naturally — Formsubmit handles the redirect via _next parameter
  });
});
