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

  // Quote forms -> WhatsApp (hero + contact section)
  var whatsappNumber = '971558330586';
  function wireQuoteForm(formId, noteId) {
    var quoteForm = document.getElementById(formId);
    var quoteNote = noteId ? document.getElementById(noteId) : null;
    if (!quoteForm) return;
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(quoteForm);
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

      if (quoteNote) quoteNote.textContent = 'Opening WhatsApp…';
      quoteForm.reset();
    });
  }
  wireQuoteForm('heroQuoteForm', 'heroFormNote');
  wireQuoteForm('contactForm', 'formNote');
});
