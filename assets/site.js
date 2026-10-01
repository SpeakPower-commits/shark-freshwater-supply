(function () {
  var NUM = '256756191226';
  function wa(msg) { return 'https://wa.me/' + NUM + '?text=' + encodeURIComponent(msg); }
  var links = document.querySelectorAll('[data-wa]');
  for (var i = 0; i < links.length; i++) { links[i].href = wa(links[i].getAttribute('data-wa')); links[i].target = '_blank'; links[i].rel = 'noopener'; }
  var b = document.querySelector('.menu-btn'), n = document.querySelector('nav');
  if (b && n) { b.addEventListener('click', function () { var o = n.classList.toggle('open'); b.setAttribute('aria-expanded', o); }); }
  var f = document.getElementById('enquiry');
  if (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(f);
      var m = 'Hello Shark, my name is ' + d.get('name') + '. I am in ' + d.get('place') + '. I need: ' + d.get('need') + '. ' + (d.get('note') || '') + ' (Phone: ' + d.get('phone') + ')';
      window.open(wa(m), '_blank');
      var s = document.getElementById('sent'); if (s) { s.hidden = false; }
    });
  }
})();