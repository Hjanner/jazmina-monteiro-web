/* ============================================
   jazminamonteiro.com — script.js
   Navbar · Sticky CTA · FAQ · Form
   ============================================ */

(function () {
  'use strict';

  /* --- Navbar: scroll-aware background --- */
  const navbar = document.getElementById('navbar');

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
  const stickyCta = document.getElementById('stickyCta');
  const heroSection = document.getElementById('hero');
  const registroSection = document.getElementById('registro');

  function updateStickyCta() {
    if (!stickyCta || !heroSection) return;

    const heroBottom = heroSection.getBoundingClientRect().bottom;
    const windowH = window.innerHeight;

    // Show after hero scrolls out of view
    if (heroBottom < 0) {
      // Hide if registro section is visible
      if (registroSection) {
        const registroTop = registroSection.getBoundingClientRect().top;
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

  /* --- FAQ Accordion --- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', function () {
      const isOpen = question.classList.contains('active');

      // Close all
      faqItems.forEach(function (other) {
        const otherQ = other.querySelector('.faq-question');
        const otherA = other.querySelector('.faq-answer');
        if (otherQ) otherQ.classList.remove('active');
        if (otherA) otherA.classList.remove('open');
      });

      // Open clicked (if was closed)
      if (!isOpen) {
        question.classList.add('active');
        answer.classList.add('open');
      }
    });
  });

  /* --- Registration Form --- */
  const form = document.getElementById('registroForm');
  const formCard = document.getElementById('formCard');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      const nombre = form.querySelector('[name="nombre"]');
      const email = form.querySelector('[name="email"]');
      const whatsapp = form.querySelector('[name="whatsapp"]');

      if (!nombre || !nombre.value.trim()) {
        showFieldError(nombre, 'Ingresa tu nombre');
        return;
      }
      if (!email || !isValidEmail(email.value.trim())) {
        showFieldError(email, 'Ingresa un email válido');
        return;
      }
      if (!whatsapp || !whatsapp.value.trim()) {
        showFieldError(whatsapp, 'Ingresa tu WhatsApp');
        return;
      }

      clearErrors();

      // Simulate submit (replace with real endpoint)
      const submitBtn = form.querySelector('.form-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }

      // Simulate network delay
      setTimeout(function () {
        if (formCard) formCard.style.display = 'none';
        if (formSuccess) formSuccess.classList.add('visible');

        // Redirect to registro.html after 2s
        setTimeout(function () {
          window.location.href = 'registro.html';
        }, 2000);
      }, 900);
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFieldError(field, message) {
    if (!field) return;
    clearErrors();
    field.style.borderColor = '#e55';
    field.focus();

    const err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'font-size:12px;color:#e55;margin-top:4px;display:block;';
    err.textContent = message;
    field.parentNode.appendChild(err);
  }

  function clearErrors() {
    document.querySelectorAll('.field-error').forEach(function (el) {
      el.remove();
    });
    document.querySelectorAll('.form-group input, .form-group select').forEach(function (el) {
      el.style.borderColor = '';
    });
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 8 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* --- Urgency counter (places remaining) --- */
  const urgencyEl = document.getElementById('urgencyCount');
  if (urgencyEl) {
    // Fake decreasing number for urgency (demo only)
    const base = 847;
    const registered = parseInt(localStorage.getItem('jm_reg_count') || base, 10);
    const display = Math.min(registered, 999);
    urgencyEl.textContent = display.toLocaleString();
  }

})();
