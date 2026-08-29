// === Inkfluence AI — Lightweight Analytics ===
// Tracks: page views, outbound clicks, form submissions
// Storage: localStorage (per-browser, zero cost)
// Dashboard: admin.html

(function() {
  'use strict';

  var STORE_KEY = 'inkfluence_analytics';
  var SESSION_KEY = 'inkfluence_session';

  // ── Helpers ──
  function getData() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || { views: [], clicks: [], forms: [] };
    } catch(e) {
      return { views: [], clicks: [], forms: [] };
    }
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(data));
    } catch(e) {
      // Storage full — trim oldest entries
      data.views = data.views.slice(-500);
      data.clicks = data.clicks.slice(-500);
      data.forms = data.forms.slice(-500);
      localStorage.setItem(STORE_KEY, JSON.stringify(data));
    }
  }

  function getSessionId() {
    var sid = sessionStorage.getItem(SESSION_KEY);
    if (!sid) {
      sid = 's_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
      sessionStorage.setItem(SESSION_KEY, sid);
    }
    return sid;
  }

  function getPage() {
    var path = window.location.pathname;
    var file = path.split('/').pop() || 'index.html';
    return file;
  }

  function getTime() {
    return new Date().toISOString();
  }

  // ── Track Page View ──
  function trackView() {
    var data = getData();
    data.views.push({
      page: getPage(),
      time: getTime(),
      session: getSessionId(),
      referrer: document.referrer || 'direct',
      ua: navigator.userAgent.substring(0, 80)
    });
    saveData(data);
  }

  // ── Track Outbound Click ──
  function trackClick(label, url) {
    var data = getData();
    data.clicks.push({
      page: getPage(),
      label: label,
      url: url,
      time: getTime(),
      session: getSessionId()
    });
    saveData(data);
  }

  // ── Track Form Submission ──
  function trackForm(formName) {
    var data = getData();
    data.forms.push({
      page: getPage(),
      form: formName,
      time: getTime(),
      session: getSessionId()
    });
    saveData(data);
  }

  // ── Auto-Attach Click Listeners ──
  function initClickTracking() {
    document.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;

      var href = link.getAttribute('href') || '';
      var text = (link.textContent || '').trim().substring(0, 60);

      // Track outbound links (external or special)
      if (href.indexOf('http') === 0 && href.indexOf(window.location.hostname) === -1) {
        trackClick(text, href);
      }
      // Track tool directory links
      if (link.classList.contains('tool-link')) {
        trackClick('tool: ' + text, href);
      }
      // Track Gumroad links
      if (href.indexOf('gumroad.com') !== -1) {
        trackClick('gumroad: ' + text, href);
      }
    });
  }

  // ── Auto-Attach Form Listeners ──
  function initFormTracking() {
    document.addEventListener('submit', function(e) {
      var form = e.target;
      var name = form.getAttribute('data-analytics-name')
        || form.closest('section')?.id
        || form.closest('.capture-form') ? 'capture' : 'unknown';
      trackForm(name);
    });

    // Also track buttons that look like form submit but use onsubmit="return false"
    document.querySelectorAll('.capture-form button[type="submit"]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        trackForm('capture');
      });
    });
  }

  // ── Initialize ──
  trackView();
  initClickTracking();
  initFormTracking();

  // Expose for manual tracking
  window.InkAnalytics = {
    trackClick: trackClick,
    trackForm: trackForm,
    getData: getData,
    clearData: function() {
      localStorage.removeItem(STORE_KEY);
    }
  };

})();
