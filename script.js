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

// Email capture form (works on all pages — submits to Formsubmit)
document.querySelectorAll('.capture-form').forEach(function(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(form);
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = 'Sending...';

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(function(response) {
      if (response.ok) {
        showSuccess(form);
      } else {
        response.json().then(function(data) {
          if (data.errors) {
            alert(data.errors.map(function(e) { return e.message; }).join(', '));
          }
          if (submitBtn) submitBtn.textContent = 'Send Me the Free Prompts';
        });
      }
    }).catch(function() {
      showSuccess(form);
    });
  });
});

function showSuccess(form) {
  form.style.display = 'none';
  var successMsg = document.getElementById('capture-success');
  if (successMsg) {
    successMsg.classList.remove('hidden');
  } else {
    var success = document.createElement('div');
    success.className = 'capture-success';
    success.innerHTML = '<div class="success-icon">\u2713</div><h3>You are in!</h3><p>Check your email for your free resources. If you do not see them in 2 minutes, check your spam folder.</p>';
    form.parentNode.insertBefore(success, form.nextSibling);
  }
}
