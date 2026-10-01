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

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero slideshow: auto-advances, pausable, keyboard-reachable dots
  var hero = document.getElementById('hero');
  if (hero) {
    var slides = hero.querySelectorAll('.slide'), texts = hero.querySelectorAll('.slide-text'),
        dots = hero.querySelectorAll('.dots button:not(.pp)'), pp = hero.querySelector('.pp'),
        cur = 0, timer = null;
    var show = function (n) {
      cur = (n + slides.length) % slides.length;
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.toggle('on', i === cur);
        texts[i].classList.toggle('on', i === cur);
        dots[i].setAttribute('aria-current', i === cur ? 'true' : 'false');
      }
    };
    var play = function () { stop(); timer = setInterval(function () { show(cur + 1); }, 6500); pp.textContent = 'Pause'; pp.setAttribute('aria-label', 'Pause slideshow'); };
    var stop = function () { if (timer) { clearInterval(timer); timer = null; } pp.textContent = 'Play'; pp.setAttribute('aria-label', 'Play slideshow'); };
    for (var d = 0; d < dots.length; d++) { (function (n) { dots[n].addEventListener('click', function () { show(n); }); })(d); }
    pp.addEventListener('click', function () { timer ? stop() : play(); });
    if (reduce) { stop(); } else { play(); }
  }

  // Our Work filter
  var chips = document.querySelectorAll('.chips button');
  if (chips.length) {
    for (var c = 0; c < chips.length; c++) {
      chips[c].addEventListener('click', function () {
        var f = this.getAttribute('data-f');
        for (var k = 0; k < chips.length; k++) { chips[k].setAttribute('aria-pressed', chips[k] === this ? 'true' : 'false'); }
        var items = document.querySelectorAll('.gallery .work[data-cat]');
        for (var j = 0; j < items.length; j++) { items[j].hidden = !(f === 'all' || items[j].getAttribute('data-cat') === f); }
      });
    }
  }

  // Scroll reveal (content is visible by default if IntersectionObserver is missing)
  var rv = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add('in'); }); }
})();