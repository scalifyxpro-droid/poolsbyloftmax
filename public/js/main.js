document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var sideNav = document.getElementById('sideNav');
  navToggle.addEventListener('click', function () {
    sideNav.classList.toggle('open');
  });
  sideNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      sideNav.classList.remove('open');
    });
  });

  // Contact form (static placeholder submit)
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    note.textContent = 'Thank you! Your message has been received. We will get back to you shortly.';
    form.reset();
  });
});
