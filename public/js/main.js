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

  // Hero quote form -> WhatsApp
  var heroForm = document.getElementById('heroQuoteForm');
  var heroNote = document.getElementById('heroFormNote');
  var whatsappNumber = '971558330586';
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(heroForm);
      var name = (data.get('name') || '').trim();
      var whatsapp = (data.get('whatsapp') || '').trim();
      var service = (data.get('service') || '').trim();
      var message = (data.get('message') || '').trim();

      var lines = [
        'Hi Pools by Loftmax, I would like a quote.',
        'Name: ' + name,
        'WhatsApp: ' + whatsapp,
        'Service: ' + service,
      ];
      if (message) lines.push('Requirement: ' + message);

      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/' + whatsappNumber + '?text=' + text, '_blank');

      if (heroNote) heroNote.textContent = 'Opening WhatsApp…';
      heroForm.reset();
    });
  }
});
