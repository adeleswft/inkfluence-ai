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

// Email capture form (works on all pages)
document.querySelectorAll('.capture-form').forEach(function(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data from any inputs inside the form
    var inputs = form.querySelectorAll('input');
    var name = '';
    var email = '';
    inputs.forEach(function(input) {
      if (input.type === 'email' || input.placeholder.indexOf('email') !== -1) email = input.value;
      else name = input.value;
    });
    var roleEl = document.getElementById('role');
    var role = roleEl ? roleEl.value : 'unknown';

    console.log('Form submitted:', { name: name, email: email, role: role });

    // Show success message — find the next sibling or nearby success element
    form.style.display = 'none';
    var successMsg = document.getElementById('capture-success');
    if (successMsg) {
      successMsg.classList.remove('hidden');
    } else {
      // For niche pages: create a success message inline
      var success = document.createElement('div');
      success.className = 'capture-success';
      success.innerHTML = '<div class="success-icon">\u2713</div><h3>You are in!</h3><p>Check your email for your free resources. If you do not see them in 2 minutes, check your spam folder.</p>';
      form.parentNode.insertBefore(success, form.nextSibling);
    }
  });
});
