/* ============================================
   jazminamonteiro.com — script.js
   Navbar · Sticky CTA · Modal · Form → Webhook
   ============================================ */

(function () {
  'use strict';

  var WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/ii90EqqPaxlfzhF7czC1/webhook-trigger/c60e6642-9206-452e-a60e-0eb12a33f4a3';

  /* --- Navbar: scroll-aware background --- */
  var navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* --- Sticky CTA Bar (mobile only) --- */
  var stickyCta = document.getElementById('stickyCta');
  var heroSection = document.getElementById('hero');
  var registroSection = document.getElementById('registro');

  function updateStickyCta() {
    if (!stickyCta || !heroSection) return;

    var heroBottom = heroSection.getBoundingClientRect().bottom;
    var windowH = window.innerHeight;

    if (heroBottom < 0) {
      if (registroSection) {
        var registroTop = registroSection.getBoundingClientRect().top;
        if (registroTop < windowH * 0.75) {
          stickyCta.classList.remove('visible');
          stickyCta.classList.add('hidden');
          return;
        }
      }
      stickyCta.classList.add('visible');
      stickyCta.classList.remove('hidden');
      document.body.classList.add('has-sticky-cta');
    } else {
      stickyCta.classList.remove('visible');
      stickyCta.classList.add('hidden');
      document.body.classList.remove('has-sticky-cta');
    }
  }

  window.addEventListener('scroll', updateStickyCta, { passive: true });
  updateStickyCta();

  /* --- Modal --- */
  var modal = document.getElementById('modal');
  var modalClose = document.getElementById('modalClose');
  var modalFormWrap = document.getElementById('modalForm');
  var modalSuccess = document.getElementById('modalSuccess');

  function openModal() {
    if (!modal) return;
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    // Focus first input for accessibility
    var firstInput = modal.querySelector('input');
    if (firstInput) setTimeout(function () { firstInput.focus(); }, 400);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  // Open modal on any .cta-modal click
  document.querySelectorAll('.cta-modal').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  // Close modal — X button
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal — overlay click
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  // Close modal — Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* --- Registration Form → GHL Webhook --- */
  var form = document.getElementById('registroForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre = form.querySelector('[name="nombre"]');
      var email = form.querySelector('[name="email"]');
      var phone = form.querySelector('[name="phone"]');

      // Validation
      if (!nombre || !nombre.value.trim()) {
        showFieldError(nombre, 'Ingresa tu nombre');
        return;
      }
      if (!email || !isValidEmail(email.value.trim())) {
        showFieldError(email, 'Ingresa un email válido');
        return;
      }
      if (!phone || !phone.value.trim()) {
        showFieldError(phone, 'Ingresa tu teléfono');
        return;
      }

      clearErrors();

      var submitBtn = form.querySelector('.form-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }

      // POST to GHL webhook
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: nombre.value.trim(),
          email: email.value.trim(),
          phone: phone.value.trim()
        }).toString()
      })
        .then(function () { showFormSuccess(); })
        .catch(function () { showFormSuccess(); });
    });
  }

  function showFormSuccess() {
    if (modalFormWrap) modalFormWrap.style.display = 'none';
    if (modalSuccess) modalSuccess.style.display = 'block';

    setTimeout(function () {
      window.location.href = 'registro.html';
    }, 2500);
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function showFieldError(field, message) {
    if (!field) return;
    clearErrors();
    field.style.borderColor = '#e55';
    field.focus();

    var err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'font-size:12px;color:#e55;margin-top:4px;display:block;';
    err.textContent = message;
    field.parentNode.appendChild(err);
  }

  function clearErrors() {
    document.querySelectorAll('.field-error').forEach(function (el) {
      el.remove();
    });
    document.querySelectorAll('.form-group input').forEach(function (el) {
      el.style.borderColor = '';
    });
  }

  /* --- Smooth scroll (exclude modal triggers) --- */
  document.querySelectorAll('a[href^="#"]:not(.cta-modal)').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = navbar ? navbar.offsetHeight + 8 : 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* --- Urgency counter --- */
  var urgencyEl = document.getElementById('urgencyCount');
  if (urgencyEl) {
    var base = 847;
    var registered = parseInt(localStorage.getItem('jm_reg_count') || base, 10);
    urgencyEl.textContent = Math.min(registered, 999).toLocaleString();
  }

})();
