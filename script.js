(function () {
  /* ---------------------------------------------------------------
     EDIT HERE
     src:   path to your image or video. To make an image cycle on click,
            use a list: src: ['images/a.jpg', 'images/b.jpg', 'images/c.jpg']
            (only Hybrid Beings is set up like this).
            Click the left half of the image = previous, right half = next.
     type:  'image' or 'video'   (a Vimeo / YouTube link is recognised by itself, type doesn't matter)
     sound: false  (optional) every video can be clicked to turn its sound on / off.
            Add  sound: false  to a video to keep it silent. Works for your own
            video files and for Vimeo links. Only one video has sound at a time, and the sound
            switches off again when the video scrolls out of view.
     VIMEO / YOUTUBE: paste the normal link or the embed link as src, e.g.
            src: 'https://vimeo.com/123456789'
            src: 'https://www.youtube.com/watch?v=XXXXXXXXXXX'
            and set ar to the video's shape (16 / 9 for most videos).
            By default it plays silently on a loop with no controls (like your own videos).
            Add  controls: true  to show the normal player with sound instead.
     zoom:  4  (optional, for a list of images) the middle third of the image shows a magnifier; click it and the image
            zooms in 4 times inside its frame and follows the mouse; click again (or press Esc) to zoom out.
            Bigger number = more zoom. On a single image the whole image zooms.
            Ozadivka Village and Symbolic Family are set up like this.
     align: 'l' (left edge), 'c' (centre) or 'r' (right edge)
     desc:  text shown under the image (always visible). PLACEHOLDER is the placeholder text below.
            Put **two stars** around words to make them bold, e.g. 'A **photobook** about ...'
            and *one star* to make them cursive (italic), e.g. 'made with *Masha Sivers* in *Velp*'
     link:  (optional) a web address; the **bold** words in the description become a clickable link to it (opens in a new tab).
     ly:    (optional) vertical position of the label
     w:     width of the image/placeholder, in % of the page
     ar, bg: only used for the placeholder frame (ratio, colour)
     --------------------------------------------------------------- */
  /* placeholder text for the works: replace PLACEHOLDER in a work by your own text */
  var PLACEHOLDER = 'Placeholder text. A short description of this project goes here: what it is, when and why it was made, and what it is made of.';

  var WORK = [
    { label: 'Hybrid Beings, 2025', type: 'image', bg: '#000',
      src: ['images/hybrid beings/hybrid beings_1.jpg', 'images/hybrid beings/hybrid beings_2.jpg', 'images/hybrid beings/hybrid beings_3.jpg', 'images/hybrid beings/hybrid beings_4.jpg', 'images/hybrid beings/hybrid beings_5.jpg', 'images/hybrid beings/hybrid beings_6.jpg', 'images/hybrid beings/hybrid beings_7.jpg', 'images/hybrid beings/hybrid beings_8.jpg', 'images/hybrid beings/hybrid beings_9.jpg', 'images/hybrid beings/hybrid beings_10.jpg', 'images/hybrid beings/hybrid beings_11.jpg', 'images/hybrid beings/hybrid beings_12.jpg', 'images/hybrid beings/hybrid beings_13.jpg', 'images/hybrid beings/hybrid beings_14.jpg'],
      w: 53, ar: 477 / 318, align: 'l',
      desc: 'An **experimental bestiary** made from archival images sourced from the *Rijksmuseum*. By cropping and combining people, gods, animals, and objects from historical artworks, I create imaginary creatures that disrupt the original context of the images and blur the boundaries between different forms of life. The unbound format brings these unexpected combinations together in an open-ended collection.' },

    { label: 'Ozadivka Village, 2026', type: 'image', bg: '#c9c9c4',
      src: ['images/ozadivka/ozadivka_1.jpg', 'images/ozadivka/ozadivka_2.jpg', 'images/ozadivka/ozadivka_3.jpg', 'images/ozadivka/ozadivka_4.jpg'],
      w: 53, ar: 505 / 337, align: 'r', zoom: 4,
      desc: 'A **visual “time capsule” installation** that explores the gradual disappearance of Ukrainian villages as a result of the war and population outflow. Inspired by wallpaper depicting idealized, distant places—places people may never visit but enjoy looking at and dreaming about—this project reimagines wallpaper as a window into a vanishing rural landscape. Six wallpaper panels recreate my grandmother’s house and its surroundings, drawn entirely from my childhood memories. An accompanying six-page brochure complements the panels, linking each part of the space to personal memories and traces of a changing rural life.' },

    { label: 'The Circle, 2026', type: 'image', bg: '#000',
      src: 'images/the circle.gif',   /* <- the gif; put it in the "images" folder (a Vimeo link also still works here) */
      w: 50, ar: 1512 / 1150, align: 'c',
      link: 'https://vimeo.com/1244306973',
      desc: 'A **photo novel** about a young woman that wakes with a sense of certainty and acceptance that her body is preparing for something irreversible. Following an inherited ritual, she moves through intimate acts of cleansing, marking, waiting, and surrender. As the day unfolds, familiar places and routines gradually become increasingly uncanny.' },

    { label: 'No Longer Human, 2026', type: 'image', bg: '#c4c4c6',
      src: ['images/no longer human/no-longer-human-1.jpg', 'images/no longer human/no-longer-human-2.jpg', 'images/no longer human/no-longer-human-3.jpg', 'images/no longer human/no-longer-human-4.jpg', 'images/no longer human/no-longer-human-5.jpg','images/no longer human/no-longer-human-6.jpg', 'images/no longer human/no-longer-human-7.jpg', 'images/no longer human/no-longer-human-8.jpg', 'images/no longer human/no-longer-human-9.jpg', 'images/no longer human/no-longer-human-10.jpg', 'images/no longer human/no-longer-human-11.jpg', 'images/no longer human/no-longer-human-12.jpg', 'images/no longer human/no-longer-human-13.jpg'],
      w: 53, ar: 603 / 402, align: 'l',
      desc: 'A **photobook** following the plot of the *Osamu Dazai*’s novel *No Longer Human*. Through staged photography set in a single room, the book traces the gradual disintegration of a person who tries to be normal and find their place in society. It explores themes of disguise, alienation, addiction, violence, mental breakdown, and absence through the transformation of a single space’s surroundings.' },

    { label: 'Being Watched, 2025', type: 'video', bg: '#8a7f73', sound: true,
      src: 'https://vimeo.com/1244285320?share=copy&fl=sv&fe=ci',   /* <- paste the Vimeo link between the quotes, e.g. 'https://vimeo.com/123456789' */
      w: 50, ar: 580 / 326, align: 'c',
      link: 'https://vimeo.com/1244285320',
      desc: 'A **real-time video installation** that explores how people change their behavior when they realize they are being filmed. Based on a 12-hour recording of a school hallway, the video speeds up moments of inactivity and returns to normal speed whenever someone reacts to the camera. By highlighting these moments, the work explores the difference between being unaware that you are being watched and consciously adjusting your behavior in front of the camera. The green background features footage from publicly available surveillance cameras from around the world.' },

    { label: 'Symbolic Family, 2025', type: 'image', src: 'images/symbolic family/symbolic family-1.jpg', bg: '#e6e6e6',
      w: 53, ar: 945 / 430, align: 'l', ly: '48%', zoom: 4,
      desc: 'A **poster** created using screen printing, in which typographic symbols are used to depict family members. Based on research into the meaning and visual characteristics of each symbol, as well as personal associations, the asterisks "*" form the image of a playful little girl, the semicolon ":" symbolizes her nerdy brother, and the parentheses "{}" depict a loving mother hugging her children.' },

    { label: 'Box, 2026', type: 'image', bg: '#d4d4d0',
      src: ['images/box/box-1.jpg', 'images/box/box-2.jpg', 'images/box/box-3.jpg', 'images/box/box-4.jpg', 'images/box/box-5.jpg', 'images/box/box-6.jpg', 'images/box/box-7.jpg', 'images/box/box-8.jpg', 'images/box/box-9.jpg'],
      w: 53, ar: 3 / 2, align: 'l',
      desc: 'This **collaborative zine**, created together with *Masha Sivers*, was inspired by a visit to the museum of stones, crystals, and fossils in *Velp*. Interpreting the given word “box” as “boxing,” we imagined a fight between a genetically modified baby mammoth and a human in the Anthropocene. Using amateur photography, handmade props, and staged archaeological finds, we recreated a fictional story of this prehistoric encounter. Presented against a monochromatic photographic background reminiscent of museum display cases, the objects are accompanied by an archaeological scale, a legend, and a fictional excavation report that blurs the lines between scientific documentation and fictional history.' },

  ];

  /* turns a Vimeo / YouTube link into the embed address; returns null for anything else */
  function embedUrl(u, p) {
    var m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    if (m) {
      var h = u.match(/[?&\/]h=([0-9a-f]+)/i) || u.match(/vimeo\.com\/\d+\/([0-9a-f]{8,})/i);   /* unlisted videos */
      var q = [];
      if (h) q.push('h=' + h[1]);
      if (!p.controls) q.push('autoplay=1', 'muted=1', 'loop=1', 'autopause=0', 'controls=0');   /* silent loop */
      q.push('title=0', 'byline=0', 'portrait=0', 'transparent=0', 'dnt=1');   /* transparent=0: no see-through bars around the video */
      return 'https://player.vimeo.com/video/' + m[1] + '?' + q.join('&');
    }
    m = u.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/i);
    if (m) {
      var base = 'rel=0&modestbranding=1&playsinline=1';
      if (!p.controls) base += '&autoplay=1&mute=1&loop=1&controls=0&playlist=' + m[1];
      return 'https://www.youtube-nocookie.com/embed/' + m[1] + '?' + base;
    }
    return null;
  }

  /* random colour for a bubble: on load and on every click */
  function randomColor(el) {
    var h = Math.floor(Math.random() * 360);
    var l = 58 + Math.floor(Math.random() * 16);
    el.style.background = 'hsl(' + h + ' 100% ' + l + '%)';
  }

  var root = document.getElementById('work');
  var nameBtn = document.getElementById('name');
  var bio = document.getElementById('bio');
  var bubbles = [nameBtn];
  var tags = [];   /* the project names that stack at the top while scrolling */

  /* bio: closed at first, opens / closes (fade + slide) only when the name is clicked.
     The styles are set here so it works whatever else is in style.css. */
  var bioClip = bio.querySelector('.bio-clip');
  var bioText = bio.querySelector('.bio');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bioOpen = false;
  function paintBio(animate) {
    var t = (animate && !calm);
    bio.style.display = 'grid';
    bio.style.transition = t ? 'grid-template-rows .8s cubic-bezier(.4,0,.2,1)' : 'none';
    bio.style.gridTemplateRows = bioOpen ? '1fr' : '0fr';
    bioClip.style.minHeight = '0';
    bioClip.style.overflow = 'hidden';
    bioClip.style.transition = t ? (bioOpen ? 'opacity .8s ease .1s, visibility 0s' : 'opacity .6s ease, visibility 0s linear .8s') : 'none';
    bioClip.style.opacity = bioOpen ? '1' : '0';
    bioClip.style.visibility = bioOpen ? 'visible' : 'hidden';
    bioText.style.opacity = '1';
  }
  paintBio(false);
  nameBtn.addEventListener('click', function () {
    bioOpen = !bioOpen;
    paintBio(true);
    nameBtn.setAttribute('aria-expanded', String(bioOpen));
    randomColor(nameBtn);
  });

  /* make a Vimeo player exactly as tall as the video itself, so there are no bars above / below
     (asks Vimeo for the real size of the video; the "ar" of the work is used until then) */
  function fitVimeo(f) {
    withVimeoSDK(function () {
      var pl = new window.Vimeo.Player(f);
      Promise.all([pl.getVideoWidth(), pl.getVideoHeight()]).then(function (s) {
        if (s[0] > 0 && s[1] > 0) { f.style.aspectRatio = s[0] + ' / ' + s[1]; schedule(); }
      }).catch(function () {});
    });
  }

  /* ---- click a video to turn its sound on / off ---- */
  var sounds = [];
  var vimeoWaiting = null;
  function withVimeoSDK(cb) {
    if (window.Vimeo && window.Vimeo.Player) { cb(); return; }
    if (!vimeoWaiting) {
      vimeoWaiting = [];
      var s = document.createElement('script');
      s.src = 'https://player.vimeo.com/api/player.js';
      s.onload = function () { var q = vimeoWaiting; vimeoWaiting = null; q.forEach(function (f) { f(); }); };
      s.onerror = function () { vimeoWaiting = null; };
      document.head.appendChild(s);
    }
    vimeoWaiting.push(cb);
  }
  /* media: the video's frame, el: the <video> or <iframe>, vimeoFallback: address of Vimeo's normal player */
  function addSound(media, el, vimeoFallback) {
    var isVimeo = !!vimeoFallback;
    var hit = document.createElement('div');          /* invisible layer over the video that catches the click */
    hit.className = 'sound-hit';
    /* the layer styles are set here too, so it works even with an older style.css */
    hit.style.cssText = 'position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;cursor:var(--cursor-unmute, pointer)';
    hit.setAttribute('role', 'button');
    hit.tabIndex = 0;
    hit.setAttribute('aria-label', 'Turn sound on');
    media.appendChild(hit);

    var on = false, player = null, broken = false;
    function fallback() {
      /* Vimeo's player can't be switched from here: show Vimeo's normal player (with its own volume button) */
      if (broken) return;
      broken = true; on = false;
      hit.remove();
      el.src = vimeoFallback;
      el.style.pointerEvents = 'auto';
    }
    function verify() {                               /* did the sound really switch on? */
      if (!player) { fallback(); return; }
      var done = false;
      var t = setTimeout(function () { if (!done && on) fallback(); }, 2500);
      player.getMuted().then(function (m) { done = true; clearTimeout(t); if (m && on) fallback(); })
        .catch(function () { done = true; clearTimeout(t); if (on) fallback(); });
    }
    function apply() {
      if (broken) return;
      if (isVimeo) {
        if (!player) return;
        player.setMuted(!on).catch(function () {});
        if (on) { player.setVolume(1).catch(function () {}); player.play().catch(function () {}); }
      } else {
        el.muted = !on;
        if (on) { var pr = el.play(); if (pr && pr.catch) pr.catch(function () {}); }
      }
    }
    var api = {
      set: function (v) {
        if (broken) return;
        on = v;
        hit.style.cursor = v ? 'var(--cursor-mute, pointer)' : 'var(--cursor-unmute, pointer)';
        hit.classList.toggle('on', v);
        hit.setAttribute('aria-label', v ? 'Turn sound off' : 'Turn sound on');
        apply();
      }
    };
    function toggleSound() {
      if (broken) return;
      var v = !on;
      if (v) sounds.forEach(function (o) { if (o !== api) o.set(false); });   /* only one video with sound */
      api.set(v);
      if (v && isVimeo) verify();
    }
    hit.addEventListener('click', toggleSound);
    hit.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSound(); }
    });
    if (isVimeo) withVimeoSDK(function () { player = new window.Vimeo.Player(el); apply(); });
    if (window.IntersectionObserver) {                 /* scrolled out of view: sound off again */
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (on && e.intersectionRatio < 0.2) api.set(false); });
      }, { threshold: [0, 0.2] }).observe(media);
    }
    sounds.push(api);
  }

  WORK.forEach(function (p, i) {
    var item = document.createElement('section');
    item.className = 'item ' + (p.align || 'l');

    var list = Array.isArray(p.src) ? p.src : (p.src ? [p.src] : []);
    var counterEl = null;   /* "1/13" next to an image that can be clicked through */
    var box = document.createElement('div');
    box.className = 'box' + (list.length ? ' loaded' : '');
    box.style.setProperty('--w', p.w + '%');
    box.style.width = p.w + '%';   /* the image/video fills this width, height follows */

    var media = document.createElement('div');
    media.className = 'media';
    media.style.setProperty('--ar', p.ar);
    media.style.setProperty('--bg-ph', p.bg);
    if (p.ly) media.style.setProperty('--ly', p.ly);

    var embed = list.length ? embedUrl(list[0], p) : null;
    if (embed) {
      var f = document.createElement('iframe');
      f.src = embed; f.title = p.label; f.loading = 'lazy';
      f.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
      f.setAttribute('allowfullscreen', '');
      f.style.cssText = 'display:block;width:100%;border:0;aspect-ratio:' + p.ar;
      var vimeoSound = p.sound !== false && !p.controls && /player\.vimeo\.com/.test(embed);
      if (!p.controls && !vimeoSound) f.style.pointerEvents = 'none';   /* silent loop: nothing to click, no player controls on hover */
      media.appendChild(f);
      if (/player\.vimeo\.com/.test(embed)) fitVimeo(f);
      if (vimeoSound) addSound(media, f, embedUrl(list[0], { controls: true }) + '&autoplay=1&loop=1&autopause=0');
    } else if (list.length && p.type === 'video') {
      var v = document.createElement('video');
      v.src = list[0]; v.style.width = '100%'; v.style.height = 'auto';
      v.autoplay = true; v.muted = true; v.loop = true; v.playsInline = true;
      v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
      media.appendChild(v);
      if (p.sound !== false) addSound(media, v, null);
    } else if (list.length) {
      var im = document.createElement('img');
      box.classList.remove('loaded');     /* the frame (grey) keeps its size until the picture has loaded */
      function ready() { box.classList.add('loaded'); schedule(); }
      im.addEventListener('load', ready);
      im.addEventListener('error', ready);
      im.decoding = 'async';
      if (i > 0) im.loading = 'lazy';      /* pictures further down only load when you scroll near them */
      im.src = list[0]; im.alt = p.label; im.style.width = '100%'; im.style.height = 'auto';
      media.appendChild(im);
      if (list.length > 1 || p.zoom) {          /* click the image: next image (and / or zoom) */
        var n = 0, multi = list.length > 1;
        if (multi) {
          counterEl = document.createElement('span');
          counterEl.className = 'counter';
          counterEl.textContent = '1/' + list.length;
        }
        im.className = 'cycle';
        /* which part of the image is the mouse on: 'l' (previous), 'r' (next) or, with zoom, 'm' (zoom in) in the middle third */
        function zone(e) {
          var r = im.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
          if (!multi) return 'm';          /* a single image: the whole image zooms */
          if (p.zoom) return x < 1 / 3 ? 'l' : (x > 2 / 3 ? 'r' : 'm');
          return x < 0.5 ? 'l' : 'r';
        }
        /* only the next picture is loaded in advance (not all of them at once) */
        function preload(k) { if (multi) new Image().src = list[(k + list.length) % list.length]; }
        im.addEventListener('load', function once() { im.removeEventListener('load', once); preload(1); });
        function show(k) {
          n = (k + list.length) % list.length;
          im.src = list[n];
          counterEl.textContent = (n + 1) + '/' + list.length;
          preload(n + 1);
        }
        /* zoom (works with  zoom: 4  = 4 times bigger): the image grows inside its own frame and follows the mouse,
           so you can look at every corner. Click again (or press Esc) to zoom out. */
        var zoomed = false, level = typeof p.zoom === 'number' ? p.zoom : 3;
        function origin(e) {
          var r = im.getBoundingClientRect();
          var x = Math.min(100, Math.max(0, (e.clientX - r.left) / r.width * 100));
          var y = Math.min(100, Math.max(0, (e.clientY - r.top) / r.height * 100));
          im.style.transformOrigin = x + '% ' + y + '%';
        }
        function setZoom(on, e) {
          zoomed = on;
          if (on) { origin(e); media.style.overflow = 'hidden'; }
          im.style.transition = 'transform .45s cubic-bezier(.4,0,.2,1)';
          im.style.transform = on ? 'scale(' + level + ')' : 'scale(1)';
          im.classList.toggle('zoomed', on);
          im.classList.remove('go-zoom', 'go-left');
          if (!on) setTimeout(function () { if (!zoomed) media.style.overflow = ''; }, 460);
        }
        if (p.zoom) document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && zoomed) setZoom(false); });
        /* the cursor is an arrow pointing left / right, or a magnifier in the middle of a zoom image */
        im.addEventListener('mousemove', function (e) {
          if (zoomed) { origin(e); return; }
          var z = zone(e);
          im.classList.toggle('go-left', z === 'l');
          im.classList.toggle('go-zoom', z === 'm');
        });
        /* click on the left: previous image, right: next image, middle (zoom images): zoom in / out */
        im.addEventListener('click', function (e) {
          if (zoomed) { setZoom(false); return; }
          var z = zone(e);
          if (z === 'm') setZoom(true, e); else show(z === 'l' ? n - 1 : n + 1);
        });
      }
    } else {
      var note = document.createElement('span');
      note.className = 'note';
      note.textContent = p.type === 'video' ? 'video' : 'image';
      media.appendChild(note);
    }

    var btn = document.createElement('button');
    btn.className = 'bubble';
    btn.type = 'button';
    btn.textContent = p.label;
    var d = document.createElement('p');      /* the description: always shown under the image */
    d.className = 'desc';
    /* **bold** and *cursive* words in the description */
    String(p.desc || '').split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).forEach(function (part) {
      var m = part.match(/^\*\*([^*]+)\*\*$/), it = part.match(/^\*([^*]+)\*$/);
      if (m) { var b = document.createElement('strong'); b.textContent = m[1]; d.appendChild(b); }
      else if (it) { var e = document.createElement('em'); e.textContent = it[1]; d.appendChild(e); }
      else if (part) d.appendChild(document.createTextNode(part));
    });
    if (p.link) {                              /* the bold words (kind of work) become the clickable link */
      var lk = document.createElement('a');
      lk.className = 'desc-link';
      lk.href = p.link; lk.target = '_blank'; lk.rel = 'noopener';
      var first = d.querySelector('strong');
      if (first) { d.replaceChild(lk, first); lk.appendChild(first); }
      else { lk.textContent = 'Watch the video'; d.appendChild(lk); }
    }
    btn.addEventListener('click', function () {
      randomColor(btn);
      if (tag.stuck) goToProject(tag);        /* stacked at the top: go back to its project */
    });

    var anchor = document.createElement('span');   /* marks where the name naturally sits */
    anchor.className = 'anchor';
    var tag = { btn: btn, anchor: anchor, media: media, index: i, stuck: false, top: 0, h: 0 };
    tags.push(tag);

    bubbles.push(btn);
    media.appendChild(anchor);
    media.appendChild(btn);
    box.appendChild(media);
    if (counterEl) box.appendChild(counterEl);
    if (p.desc) box.appendChild(d);
    item.appendChild(box);
    root.appendChild(item);
  });

  /* ---- "Back to top": a bubble at the bottom centre of the screen; fades in once the first two projects are scrolled past ---- */
  var toTop = document.createElement('button');
  toTop.className = 'bubble to-top';
  toTop.type = 'button';
  toTop.textContent = 'Back to top';
  toTop.addEventListener('click', function () {
    randomColor(toTop);
    window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
  });
  document.body.appendChild(toTop);
  bubbles.push(toTop);
  function updateToTop() {
    var ref = tags[Math.min(1, tags.length - 1)];
    toTop.classList.toggle('show', !!ref && ref.media.getBoundingClientRect().bottom < 0);
  }

  /* ---- project names stack at the top of the screen while you scroll ----
     A name that reaches the top stays there. Names that would overlap sideways
     are put in rows below each other (first row at the top). */
  var ROW_GAP = 0;   /* space between stacked names (0 = they touch) */
  function stick(t, left, top) {
    var b = t.btn;
    if (!t.stuck) {
      b.style.transition = 'none';
      b.classList.add('stuck');
      b.style.left = left + 'px';
      b.style.top = top + 'px';
      void b.offsetWidth;
      b.style.transition = '';
      t.stuck = true;
    } else {
      b.style.left = left + 'px';
      b.style.top = top + 'px';
    }
  }
  function unstick(t) {
    if (!t.stuck) return;
    t.btn.classList.remove('stuck');
    t.btn.style.left = '';
    t.btn.style.top = '';
    t.stuck = false;
  }
  function stack() {
    updateToTop();
    var placed = [];
    tags.forEach(function (t) {
      var w = t.btn.offsetWidth, h = t.btn.offsetHeight;
      var a = t.anchor.getBoundingClientRect();
      var natural = a.top - h / 2, left = a.left, row = 0;
      while (placed.some(function (q) { return q.row === row && left < q.r && left + w > q.l; })) row++;
      var top = row * (h + ROW_GAP);
      if (natural < top) { t.top = top; t.h = h; stick(t, left, top); placed.push({ l: left, r: left + w, row: row }); }
      else unstick(t);
    });
  }
  /* click on a stacked name: scroll back to that project (just below the names stacked above it) */
  function goToProject(t) {
    var below = 0;
    tags.forEach(function (o) { if (o !== t && o.stuck && o.index < t.index) below = Math.max(below, o.top + o.h); });
    var y = t.media.getBoundingClientRect().top + window.pageYOffset - below - (below ? 8 : 0);
    window.scrollTo({ top: Math.max(0, y), behavior: calm ? 'auto' : 'smooth' });
  }
  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; stack(); });
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  if (window.ResizeObserver) new ResizeObserver(schedule).observe(document.body);
  stack();

  /* the descriptions start at the same x as the bio text: indent = width of the name bubble + gap */
  function setIndent() {
    var side = document.querySelector('.side'), intro = document.querySelector('.intro');
    if (!side || !intro) return;
    var px = side.getBoundingClientRect().left - intro.getBoundingClientRect().left;
    if (px > 0) document.documentElement.style.setProperty('--text-indent', px + 'px');
  }
  setIndent();
  window.addEventListener('resize', setIndent);
  window.addEventListener('load', setIndent);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setIndent);

  bubbles.forEach(randomColor);
})();