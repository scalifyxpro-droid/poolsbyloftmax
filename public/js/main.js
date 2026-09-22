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

  // Hero slider
  var slides = document.querySelectorAll('.slide');
  var dotsWrap = document.getElementById('slideDots');
  var current = 0;
  slides.forEach(function (_, i) {
    var dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.textContent = i + 1;
    dot.addEventListener('click', function () { goToSlide(i); });
    dotsWrap.appendChild(dot);
  });
  var dots = dotsWrap.querySelectorAll('.dot');

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    goToSlide((current - 1 + slides.length) % slides.length);
  }

  var nextBtn = document.getElementById('slideNext');
  var prevBtn = document.getElementById('slidePrev');
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Counter animation
  var counters = [
    { el: document.getElementById('statYears'), target: 15 },
    { el: document.getElementById('statProjects'), target: 250 },
    { el: document.getElementById('statClients'), target: 200 },
    { el: document.getElementById('statAwards'), target: 5 }
  ];
  var counted = false;
  function animateCounters() {
    if (counted) return;
    var introSection = document.querySelector('.intro');
    var rect = introSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      counted = true;
      counters.forEach(function (c) {
        var start = 0;
        var duration = 1200;
        var startTime = null;
        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          c.el.textContent = Math.floor(progress * c.target);
          if (progress < 1) requestAnimationFrame(step);
          else c.el.textContent = c.target + '+';
        }
        requestAnimationFrame(step);
      });
    }
  }
  window.addEventListener('scroll', animateCounters);
  animateCounters();

  // Contact form (static placeholder submit)
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    note.textContent = 'Thank you! Your message has been received. We will get back to you shortly.';
    form.reset();
  });
});
