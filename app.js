/* ============================================================
   جسم الإنسان — Human Anatomy   |   app.js
   لا يعتمد على أي مكتبة خارجية. كل البيانات من data.js
   ============================================================ */
(function () {
  'use strict';

  var $  = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var LS = 'anatomy.v1.';

  /* ---------------- الحالة ---------------- */
  var S = {
    lang: 'ar',
    theme: 'dark',
    view: 'home',          /* home | library | favorites */
    tab: 'info',           /* info | function | diseases */
    id: 'heart',
    back: false,           /* منظر خلفي؟ */
    zoom: 1,
    panX: 0, panY: 0,     /* إزاحة السحب بالبكسل (غير مقيسة بالتكبير) */
    labels: true,          /* طبقة أسماء الأجزاء فوق الصورة */
    fav: []
  };

  function load() {
    try {
      var l = localStorage.getItem(LS + 'lang');   if (l === 'ar' || l === 'en') S.lang = l;
      var t = localStorage.getItem(LS + 'theme');  if (t === 'dark' || t === 'light') S.theme = t;
      var f = JSON.parse(localStorage.getItem(LS + 'fav') || '[]');
      if (Object.prototype.toString.call(f) === '[object Array]') {
        S.fav = f.filter(function (x) { return !!ITEM_BY_ID[x]; });
      }
      var c = localStorage.getItem(LS + 'current'); if (c && ITEM_BY_ID[c]) S.id = c;
      var lb = localStorage.getItem(LS + 'labels'); if (lb === '0') S.labels = false;
    } catch (e) { /* localStorage قد يكون محجوباً — نتابع بالقيم الافتراضية */ }
  }
  function save(k, v) {
    try { localStorage.setItem(LS + k, typeof v === 'string' ? v : JSON.stringify(v)); } catch (e) {}
  }

  var T = function () { return I18N[S.lang]; };
  var L = function (o) { return o ? (o[S.lang] || o.ar || o.en || '') : ''; };
  var item = function () { return ITEM_BY_ID[S.id] || ITEMS[0]; };

  /* ============================================================
     تحميل الصور مع بديل أنيق عند غياب الملف
     ============================================================ */
  var imgCache = {};              /* src -> true/false  (موجود/غير موجود) */

  function probe(src, cb) {
    if (!src) { cb(false); return; }
    if (imgCache.hasOwnProperty(src)) { cb(imgCache[src]); return; }
    var im = new Image();
    im.onload  = function () { imgCache[src] = (im.naturalWidth > 0); cb(imgCache[src]); };
    im.onerror = function () { imgCache[src] = false; cb(false); };
    im.src = src;
  }

  /* يضع الصورة كخلفية لعنصر، وإن لم توجد يبقي صنف is-empty (شكل مؤقّت) */
  function bgImage(el, src) {
    if (!el) return;
    el.classList.add('is-empty');
    el.style.backgroundImage = '';
    probe(src, function (ok) {
      if (!ok) return;
      el.classList.remove('is-empty');
      el.style.backgroundImage = 'url("' + src + '")';
    });
  }

  /* ============================================================
     الشريط الجانبي — مستوى واحد: أقسام الجسم
     ------------------------------------------------------------
     الشريط يعرض بطاقات الأقسام من sections.js وحدها (نفس مصدر
     المكتبة ⇒ نفس الأقسام ونفس قسم «أخرى» الذي يلتقط أي عنصر غير
     مصنّف). الضغط على بطاقة قسم يفتح صفحة ذلك القسم في المنطقة
     الرئيسية — نفس صفحة المكتبة تماماً — فلا مستوى ثانياً مرصوصاً
     داخل العمود الضيّق. والعضو المفتوح في المسرح يُبرز بطاقة قسمه.
     ============================================================ */
  var NAV_I18N = {
    ar: { sections: 'أقسام الجسم', back: 'رجوع', count: function (n) { return n + ' عنصر'; } },
    en: { sections: 'Body sections', back: 'Back',  count: function (n) { return n + ' items'; } }
  };
  var NT = function () { return NAV_I18N[S.lang] || NAV_I18N.ar; };

  /* بقايا المستوى الثاني القديم في التخزين ⇒ تُمسح مرّة واحدة عند الإقلاع */
  try { localStorage.removeItem(LS + 'navsec'); } catch (e) {}

  /* قسم عنصرٍ ما — من نفس بناء المكتبة، فالعنصر غير المصنّف يقع في «أخرى» */
  function secOfItem(id) {
    var secs = libSections();
    for (var i = 0; i < secs.length; i++) {
      for (var j = 0; j < secs[i].items.length; j++) {
        if (secs[i].items[j].id === id) return secs[i];
      }
    }
    return null;
  }

  /* بطاقة قسم في الشريط: الاسمان + عدد العناصر */
  function navSecCard(sec, isCur) {
    var b = document.createElement('button');
    b.className = 'sys-sec' + (isCur ? ' is-active' : '');
    b.type = 'button';
    b.setAttribute('data-sec', sec.id);

    var tx = document.createElement('span');
    tx.className = 'sys-text';
    tx.appendChild(el('span', 'sys-name-ar', L(sec.name)));
    tx.appendChild(el('span', 'sys-name-en', S.lang === 'ar' ? sec.name.en : sec.name.ar));
    b.appendChild(tx);

    var c = el('span', 'sys-sec-count', String(sec.items.length));
    c.setAttribute('aria-label', NT().count(sec.items.length));
    b.appendChild(c);
    b.appendChild(icon('i-chev', 'sys-sec-chev'));

    b.addEventListener('click', function () { openSection(sec.id); });
    return b;
  }

  /* الشريط: بطاقات الأقسام ولا شيء غيرها */
  function renderSystems() {
    var box = $('#systemList');
    if (!box) return;
    box.innerHTML = '';
    box.setAttribute('aria-label', NT().sections);

    var cur = activeSecId();
    libSections().forEach(function (sec) {
      box.appendChild(navSecCard(sec, !!cur && cur === sec.id));
    });
  }

  /* 🔴 جوهر الطلب: الضغط على قسم — من الشريط أو من فهرس المكتبة —
     يفتح صفحة القسم نفسها في المنطقة الرئيسية الكبيرة. */
  function openSection(id) {
    /* بحث جارٍ ⇒ المكتبة تُرشَّح مسطّحة فلا تظهر صفحة القسم؛ نمسحه أولاً */
    var si = $('#search');
    if (si && si.value) {
      si.value = '';
      var sr = $('#searchResults'); if (sr) sr.hidden = true;
      renderSearch();
    }
    _libSec = id || null;
    libSecSave();
    if (S.view === 'library') { renderGrid(); syncHistory(false); }
    else                      { setView('library'); }
    markActiveSystem();
    scrollNavActive();
  }

  /* أي عضو يُفتح من أي مكان (بحث · مكتبة · رابط go · رابط عميق)
     يُبرز بطاقة قسمه في الشريط ويُظهرها. */
  function navToItem() {
    markActiveSystem();
    scrollNavActive();
  }

  /* القسم المُبرَز في الشريط: صفحة قسم مفتوحة في المكتبة ⇒ هي؛
     وإلا فقسم العضو المفتوح في المسرح. */
  function activeSecId() {
    if (S.view === 'library' && _libSec) return _libSec;
    var sec = secOfItem(S.id);
    return sec ? sec.id : null;
  }

  function markActiveSystem() {
    var id = activeSecId();
    $$('.sys-sec').forEach(function (e) {
      e.classList.toggle('is-active', !!id && e.getAttribute('data-sec') === id);
    });
  }

  /* إظهار بطاقة القسم النشط داخل الشريط وحده (عمودياً على الشاشة
     الكبيرة، أفقياً على الجوّال) — لا نحرّك الصفحة إطلاقاً */
  function scrollNavActive() {
    try {
      var box = $('#systemList');
      if (!box) return;
      var a = box.querySelector('.sys-sec.is-active');
      if (!a) return;
      var br = box.getBoundingClientRect(), ar = a.getBoundingClientRect();
      if (box.scrollWidth > box.clientWidth + 2) {
        if (ar.left < br.left + 2 || ar.right > br.right - 2)
          box.scrollLeft += (ar.left - br.left) - (br.width - ar.width) / 2;
      } else if (box.scrollHeight > box.clientHeight + 2) {
        if (ar.top < br.top + 2 || ar.bottom > br.bottom - 2)
          box.scrollTop += (ar.top - br.top) - (br.height - ar.height) / 2;
      }
    } catch (e) {}
  }

  /* ============================================================
     المسرح
     ============================================================ */
  function renderStage() {
    var it = item();
    var src = (S.back && it.imgBack) ? it.imgBack : it.img;

    var img = $('#stageImg');
    var ph  = $('#stagePlaceholder');

    img.classList.remove('is-shown');
    ph.hidden = false;
    $('#phText').textContent = T().imgSoon;
    $('#phFile').textContent = src ? src.replace(/^img\//, '') : '';

    probe(src, function (ok) {
      /* قد يكون المستخدم غيّر العضو أثناء الفحص */
      var cur = (S.back && item().imgBack) ? item().imgBack : item().img;
      if (cur !== src) return;
      if (ok) {
        img.src = src;
        img.alt = L(item().name);
        img.classList.add('is-shown');
        ph.hidden = true;
      } else {
        img.removeAttribute('src');
        img.classList.remove('is-shown');
        ph.hidden = false;
      }
      scheduleLabels();
    });

    var nm = $('#stageName'); if (nm) nm.textContent = L(it.name);

    var tag = $('#stageViewTag');
    probe(it.imgBack, function (ok) {
      if (item() !== it) return;
      /* وسم المنظر أُزيل من الواجهة — نبقي المنطق آمناً */
      if (tag) { tag.hidden = !ok; tag.textContent = S.back ? T().backView : T().frontView; }
      var rot = $('.tool[data-tool="rotate"]');
      if (rot) {
        rot.classList.toggle('is-on', S.back);
        rot.disabled = false;   /* يبقى فعّالاً ويُظهر رسالة إن لم يوجد منظر خلفي */
        rot.title = ok ? '' : T().noBackView;
      }
    });

    syncLabelTool();
    scheduleLabels();
    applyZoom();
  }

  /* ============================================================
     التكبير + السحب (Pan)
     ============================================================ */
  /* إزاحة عنصر عن جدّه المُموضَع (قيم تخطيط ⇒ لا تتأثر بالـtransform) */
  function offsetIn(node, root) {
    var x = 0, y = 0;
    while (node && node !== root) { x += node.offsetLeft; y += node.offsetTop; node = node.offsetParent; }
    return { x: x, y: y };
  }

  /* حدود الإزاحة المسموحة لكل محور — null إذا كانت الصورة أصغر من الإطار */
  function panLimits() {
    var st = $('#stage'), fig = $('#stageFigure'), img = $('#stageImg');
    if (!st || !fig || !img || !img.classList.contains('is-shown') || !img.offsetWidth) return null;
    var io = offsetIn(img, st), fo = offsetIn(fig, st);
    var Ox = fo.x + fig.offsetWidth / 2, Oy = fo.y + fig.offsetHeight / 2;  /* أصل التحويل */
    var z = S.zoom, W = img.offsetWidth, H = img.offsetHeight;
    var VW = st.clientWidth, VH = st.clientHeight;
    var Ax = Ox + (io.x - Ox) * z, Ay = Oy + (io.y - Oy) * z;   /* حافة الصورة بعد التكبير بلا إزاحة */
    return {
      x: (W * z > VW + 0.5) ? [VW - W * z - Ax, -Ax] : null,
      y: (H * z > VH + 0.5) ? [VH - H * z - Ay, -Ay] : null
    };
  }

  /* تُبقي الصورة مغطّية للمسرح: لا فراغ ولا ضياع خارج الإطار */
  function clampPan() {
    var r = panLimits();
    if (!r) { S.panX = 0; S.panY = 0; return false; }
    if (r.x) S.panX = Math.max(r.x[0], Math.min(r.x[1], S.panX)); else S.panX = 0;
    if (r.y) S.panY = Math.max(r.y[0], Math.min(r.y[1], S.panY)); else S.panY = 0;
    return !!(r.x || r.y);
  }

  function applyZoom() {
    var pannable = clampPan();
    $('#stageFigure').style.transform =
      'translate(' + S.panX.toFixed(1) + 'px, ' + S.panY.toFixed(1) + 'px) scale(' + S.zoom.toFixed(3) + ')';
    $('#stage').classList.toggle('can-pan', pannable && S.view === 'home');
  }

  /* --- منطق السحب --- */
  var _drag = null, _dragMoved = 0, _ptrType = 'mouse';

  function dragStart(x, y, target) {
    if (S.view !== 'home') return;
    if (target && target.closest && target.closest('.toolbar')) return;
    var r = panLimits();
    if (!r || (!r.x && !r.y)) return;
    hideTip();
    _drag = { x: x, y: y, px: S.panX, py: S.panY };
    _dragMoved = 0;
    $('#stage').classList.add('is-dragging');
  }
  function dragMove(x, y) {
    if (!_drag) return;
    var dx = x - _drag.x, dy = y - _drag.y;
    _dragMoved = Math.max(_dragMoved, Math.abs(dx) + Math.abs(dy));
    S.panX = _drag.px + dx;
    S.panY = _drag.py + dy;
    applyZoom();
  }
  function dragStop() {
    if (!_drag) return;
    _drag = null;
    $('#stage').classList.remove('is-dragging');
  }
  var isDragging = function () { return !!_drag; };
  var wasDragged = function () { return _dragMoved > 5; };

  /* ============================================================
     طبقة أسماء الأجزاء فوق الصورة
     ------------------------------------------------------------
     تعيش داخل #stageFigure (الحاوية المتحوّلة) ⇒ تتحرّك وتتكبّر
     مع الصورة عند الزوم. مقاسها يطابق صندوق الصورة المرسوم فعلاً
     (لا صندوق الحاوية) لأن الصورة تُحتوى بـ object-fit: contain.
     ============================================================ */
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var LBL = {
    PAD: 4,        /* المسافة بين أبعد نقطة وحافة النص (٪) */
    GAP: 0.8,      /* فراغ صغير بين النص وبداية الخط (٪)   */
    BEND: 6,       /* طول القطعة المائلة قرب النقطة (٪)     */
    ROW: 6,        /* أقل فراغ رأسي بين اسمين (px)          */
    L_MIN: 20, L_MAX: 34,   /* حدود حافة أسماء اليسار  */
    R_MIN: 66, R_MAX: 80    /* حدود حافة أسماء اليمين  */
  };

  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

  /* تسميات المنظر الحالي: الأمام من labels والخلف من labelsBack.
     بلا labelsBack ⇒ لا تسميات في الخلف (خير من إحداثيات في غير مكانها). */
  function labelsOf(it, back) {
    if (!it) return null;
    var b = (back === undefined) ? S.back : back;
    var a = b ? it.labelsBack : it.labels;
    return (Object.prototype.toString.call(a) === '[object Array]' && a.length) ? a : null;
  }

  /* زر «الأسماء» في شريط الأدوات */
  function syncLabelTool() {
    var b = $('#labelsTool');
    if (!b) return;
    var has = !!labelsOf(item());
    b.hidden   = !has;          /* بلا تسميات ⇒ يختفي بدل أن يظهر ميتاً */
    b.disabled = !has;
    b.classList.toggle('is-on', has && S.labels);
    b.title = has ? (S.labels ? T().labelsHide : T().labelsShow) : T().noLabels;
    b.setAttribute('aria-pressed', (has && S.labels) ? 'true' : 'false');
  }

  var _lblRaf = 0;
  function scheduleLabels() {
    if (_lblRaf) return;
    _lblRaf = requestAnimationFrame(function () {
      _lblRaf = 0;
      renderLabels();
    });
  }

  function renderLabels() {
    var layer = $('#labelLayer');
    if (!layer) return;
    hideTip();
    var list = labelsOf(item());
    var img  = $('#stageImg');

    /* تُخفى الطبقة: بلا بيانات · مطفأة · منظر خلفي · صورة غير معروضة */
    if (!list || !S.labels || S.view !== 'home' ||
        !img || !img.classList.contains('is-shown') ||
        !img.offsetWidth || !img.offsetHeight) {
      layer.hidden = true;
      layer.textContent = '';
      return;
    }

    var W = img.offsetWidth, H = img.offsetHeight;
    layer.style.left   = img.offsetLeft + 'px';
    layer.style.top    = img.offsetTop  + 'px';
    layer.style.width  = W + 'px';
    layer.style.height = H + 'px';
    /* حجم الخط يتبع مقاس الصورة المرسوم ⇒ يبقى مقروءاً على الجوّال بلا تكدّس */
    layer.style.fontSize = Math.max(9, Math.min(14, Math.round(W * 0.019 * 10) / 10)) + 'px';
    layer.textContent = '';
    layer.hidden = false;

    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'll-lines');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    layer.appendChild(svg);

    /* حافة النص لكل جهة: تُشتق من أبعد نقطة فيها ⇒ لا خط قصير مبتور */
    var xs = { left: [], right: [] };
    list.forEach(function (lb) {
      xs[(lb.side === 'right') ? 'right' : 'left'].push(+lb.x);
    });
    var edge = {
      left:  xs.left.length  ? clamp(Math.min.apply(null, xs.left)  - LBL.PAD, LBL.L_MIN, LBL.L_MAX) : LBL.L_MAX,
      right: xs.right.length ? clamp(Math.max.apply(null, xs.right) + LBL.PAD, LBL.R_MIN, LBL.R_MAX) : LBL.R_MIN
    };

    var rows = { left: [], right: [] };

    list.forEach(function (lb) {
      var side = (lb.side === 'right') ? 'right' : 'left';

      var dot = el('span', 'll-dot');
      dot.style.left = lb.x + '%';
      dot.style.top  = lb.y + '%';
      layer.appendChild(dot);

      var nm = el('div', 'll-name is-' + side, L(lb));
      if (side === 'left') {
        nm.style.right    = (100 - edge.left) + '%';
        nm.style.maxWidth = Math.max(edge.left - 1, 8) + '%';
      } else {
        nm.style.left     = edge.right + '%';
        nm.style.maxWidth = Math.max(99 - edge.right, 8) + '%';
      }
      layer.appendChild(nm);

      if (lb.go && ITEM_BY_ID[lb.go]) { dot.classList.add('can-go'); nm.classList.add('can-go'); }

      if (lb.desc || lb.go) {
        (function (lb, dot, nm, key) {
          var group = [dot, nm];
          [dot, nm].forEach(function (trg) {
            trg.addEventListener('pointerenter', function (ev) {
              if (ev.pointerType && ev.pointerType !== 'mouse') return;   /* اللمس ⇒ بالنقر */
              if (isDragging()) return;
              showTip(lb, trg, group, key);
            });
            trg.addEventListener('pointerleave', function (ev) {
              if (ev.pointerType && ev.pointerType !== 'mouse') return;
              hideTip();
            });
            trg.addEventListener('click', function (ev) {
              ev.stopPropagation();
              if (wasDragged()) return;                 /* كان سحباً لا نقرة */
              if (lb.go && ITEM_BY_ID[lb.go]) {
                /* ماوس: نقرة تفتح العضو مباشرة.
                   لمس: النقرة الأولى تُظهر النبذة، والثانية تفتح العضو. */
                if (_ptrType === 'mouse' || _tipKey === key) {
                  hideTip(); open(lb.go); setView('home'); return;
                }
                showTip(lb, trg, group, key);
                return;
              }
              if (_tipKey === key) hideTip();
              else showTip(lb, trg, group, key);
            });
          });
        })(lb, dot, nm, item().id + ':' + lb.en);
      } else {
        dot.style.cursor = 'default';
        nm.style.cursor  = 'default';
      }

      rows[side].push({ el: nm, lb: lb, want: (lb.y / 100) * H });
    });

    /* توزيع رأسي بلا تداخل وبلا خروج عن الإطار */
    ['left', 'right'].forEach(function (side) {
      var arr = rows[side];
      if (!arr.length) return;
      var i;
      for (i = 0; i < arr.length; i++) arr[i].h = arr[i].el.offsetHeight;
      arr.sort(function (a, b) { return a.want - b.want; });

      var bottom = 0;
      for (i = 0; i < arr.length; i++) {
        var t = arr[i].want - arr[i].h / 2;
        if (t < bottom) t = bottom;
        arr[i].top = t;
        bottom = t + arr[i].h + LBL.ROW;
      }
      var last = arr[arr.length - 1];
      if (last.top + last.h > H) {           /* فاض من الأسفل ⇒ ادفع للأعلى */
        var next = H;
        for (i = arr.length - 1; i >= 0; i--) {
          if (arr[i].top + arr[i].h > next) arr[i].top = next - arr[i].h;
          if (arr[i].top < 0) arr[i].top = 0;
          next = arr[i].top - LBL.ROW;
        }
      }

      var sgn = (side === 'left') ? 1 : -1;  /* اتجاه الخط من النص نحو النقطة */
      var e0  = (side === 'left') ? edge.left : edge.right;

      arr.forEach(function (o) {
        o.el.style.top = o.top + 'px';

        var cy = ((o.top + o.h / 2) / H) * 100;          /* منتصف الاسم بالنسبة المئوية */
        var dx = +o.lb.x, dy = +o.lb.y;
        var sx = e0 + sgn * LBL.GAP;                     /* بداية الخط عند حافة النص */
        var span = (dx - sx) * sgn;                      /* موجب = النقطة في الجهة المتوقّعة */
        var pts;
        if (span < 1.2) {                                /* النقطة تحت النص أو خلفه ⇒ خط مستقيم */
          pts = sx + ',' + cy + ' ' + dx + ',' + dy;
        } else {
          var elbow = dx - sgn * Math.min(LBL.BEND, span * 0.45);
          pts = sx + ',' + cy + ' ' + elbow + ',' + cy + ' ' + dx + ',' + dy;
        }
        var pl = document.createElementNS(SVG_NS, 'polyline');
        pl.setAttribute('points', pts);
        svg.appendChild(pl);
      });
    });
  }

  /* ============================================================
     بطاقة النبذة — تعيش في #stage (غير متحوّلة) لا في الحاوية
     المتحوّلة، فيبقى نصّها بحجمه الطبيعي مهما كبّرنا الصورة.
     ============================================================ */
  var _tipEl = null, _tipKey = null;

  function tipBox() {
    if (_tipEl) return _tipEl;
    var t = el('div', 'll-tip');
    t.id = 'labelTip';
    t.hidden = true;
    t.setAttribute('role', 'tooltip');
    t.appendChild(el('span', 'll-tip-arrow'));
    t.appendChild(el('p', 'll-tip-title'));
    t.appendChild(el('p', 'll-tip-desc'));
    t.appendChild(el('span', 'll-tip-go'));
    $('#stage').appendChild(t);
    _tipEl = t;
    return t;
  }

  function hideTip() {
    _tipKey = null;
    if (_tipEl) { _tipEl.classList.remove('is-shown'); _tipEl.hidden = true; }
    $$('.ll-dot.is-hot, .ll-name.is-hot').forEach(function (e) { e.classList.remove('is-hot'); });
  }

  function showTip(lb, anchor, group, key) {
    if (!lb || (!lb.desc && !lb.go)) return;
    var st = $('#stage');
    var t = tipBox();
    t.querySelector('.ll-tip-title').textContent = L(lb);
    var dsc = t.querySelector('.ll-tip-desc');
    dsc.textContent = lb.desc ? L(lb.desc) : '';
    dsc.hidden = !lb.desc;
    var go = t.querySelector('.ll-tip-go');
    var canGo = !!(lb.go && ITEM_BY_ID[lb.go]);
    go.hidden = !canGo;
    if (canGo) go.textContent = (_ptrType === 'mouse') ? T().openOrgan : T().openOrganTap;
    t.hidden = false;
    t.style.left = '0px'; t.style.top = '0px';

    var sb = st.getBoundingClientRect();
    var ab = anchor.getBoundingClientRect();
    var w = t.offsetWidth, h = t.offsetHeight;
    var M = 10, G = 12;

    /* أفقياً: توسيط على المرساة ثم حصر داخل المسرح */
    var cx   = ab.left + ab.width / 2 - sb.left;
    var left = Math.max(M, Math.min(cx - w / 2, sb.width - w - M));

    /* رأسياً: تحت المرساة، وإن ضاق المكان اقلبها فوقها */
    var below = true;
    var top = ab.bottom - sb.top + G;
    if (top + h > sb.height - M) {
      var up = ab.top - sb.top - G - h;
      if (up >= M) { top = up; below = false; }
      else         { top = Math.max(M, sb.height - h - M); }
    }

    t.style.left = Math.round(left) + 'px';
    t.style.top  = Math.round(top)  + 'px';

    var arw = t.querySelector('.ll-tip-arrow');
    arw.className = 'll-tip-arrow ' + (below ? 'is-below' : 'is-above');
    var inside = (cx >= left + 14 && cx <= left + w - 14);
    arw.hidden = !inside;
    if (inside) {
      arw.style.left = Math.round(cx - left - 5) + 'px';
      arw.style.top  = below ? '-6px' : (h - 5) + 'px';
    }

    void t.offsetWidth;
    t.classList.add('is-shown');
    _tipKey = key;
    $$('.ll-dot.is-hot, .ll-name.is-hot').forEach(function (e) { e.classList.remove('is-hot'); });
    group.forEach(function (e) { e.classList.add('is-hot'); });
  }

  /* ============================================================
     بانل المعلومات
     ============================================================ */
  function renderPanel() {
    var it = item();
    $('#panelTitle').textContent = L(it.name);
    $('#panelSub').textContent   = S.lang === 'ar' ? it.name.en : it.name.ar;

    var th = $('#panelThumb');
    bgImage(th, it.thumb);
    probe(it.thumb, function (ok) { if (!ok) bgImage(th, it.img); });

    var fav = S.fav.indexOf(it.id) !== -1;
    var fb = $('#favBtn');
    fb.classList.toggle('is-on', fav);
    fb.title = fav ? T().removeFav : T().addFav;

    $$('.tab').forEach(function (t) {
      t.classList.toggle('is-active', t.getAttribute('data-tab') === S.tab);
    });

    var body = $('#panelBody');
    body.innerHTML = '';
    if (S.tab === 'info')      body.appendChild(tabInfo(it));
    else if (S.tab === 'function') body.appendChild(tabFunction(it));
    else                       body.appendChild(tabDiseases(it));
    body.scrollTop = 0;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = text;
    return e;
  }
  function icon(id, cls) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('class', 'ic' + (cls ? ' ' + cls : ''));
    var u = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    u.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + id);
    u.setAttribute('href', '#' + id);
    s.appendChild(u);
    return s;
  }

  /* --- تبويب: معلومات --- */
  function tabInfo(it) {
    var f = document.createDocumentFragment();

    f.appendChild(el('p', 'p-text', L(it.desc)));

    /* الأجزاء الرئيسية */
    var sec = el('section');
    sec.appendChild(el('h3', 'p-section-title', T().mainParts));
    var block = el('div', 'parts-block');
    var pimg = el('div', 'parts-img');
    block.appendChild(pimg);
    var ul = el('ul', 'parts-list');
    it.parts.forEach(function (p, i) {
      var li = el('li');
      var d = el('span', 'dot');
      d.style.background = PART_COLORS[i % PART_COLORS.length];
      d.style.color = PART_COLORS[i % PART_COLORS.length];
      li.appendChild(d);
      li.appendChild(el('span', null, L(p)));
      ul.appendChild(li);
    });
    block.appendChild(ul);
    sec.appendChild(block);
    f.appendChild(sec);
    bgImage(pimg, it.thumb);
    probe(it.thumb, function (ok) { if (!ok) bgImage(pimg, it.img); });

    /* الحقائق */
    var facts = el('div', 'facts');
    facts.appendChild(fact('i-pin',   T().location, L(it.location)));
    facts.appendChild(fact('i-ruler', T().size,     L(it.size)));
    facts.appendChild(fact('i-grid',  T().function, L(it.short)));
    f.appendChild(facts);

    /* الأمراض تظهر في تبويبها وحده — لا تُكرَّر هنا (طلب أحمد) */
    return f;
  }

  function fact(ic, k, v) {
    var d = el('div', 'fact');
    d.appendChild(icon(ic));
    d.appendChild(el('span', 'fact-key', k));
    d.appendChild(el('span', 'fact-val', v));
    return d;
  }

  /* --- تبويب: الوظيفة --- */
  function tabFunction(it) {
    var f = document.createDocumentFragment();
    var sec = el('section');
    sec.appendChild(el('h3', 'p-section-title', T().function));
    sec.appendChild(el('p', 'p-text', L(it.func)));
    f.appendChild(sec);

    var facts = el('div', 'facts');
    facts.appendChild(fact('i-pin',   T().location, L(it.location)));
    facts.appendChild(fact('i-ruler', T().size,     L(it.size)));
    f.appendChild(facts);

    var sec2 = el('section');
    sec2.appendChild(el('h3', 'p-section-title', T().mainParts));
    var ul = el('ul', 'parts-list');
    it.parts.forEach(function (p, i) {
      var li = el('li');
      var d = el('span', 'dot');
      d.style.background = PART_COLORS[i % PART_COLORS.length];
      d.style.color = PART_COLORS[i % PART_COLORS.length];
      li.appendChild(d);
      li.appendChild(el('span', null, L(p)));
      ul.appendChild(li);
    });
    sec2.appendChild(ul);
    f.appendChild(sec2);
    return f;
  }

  /* --- تبويب: الأمراض --- */
  function tabDiseases(it) {
    var f = document.createDocumentFragment();
    f.appendChild(diseaseBlock(it, 99));
    var note = el('p', 'disclaimer', T().disclaimer);
    f.appendChild(note);
    return f;
  }

  function diseaseBlock(it, max) {
    var box = el('div', 'dis-block');
    var title = S.lang === 'ar'
      ? T().diseasesOf.replace('الأمراض', 'أمراض') + ' ' + L(it.name)
      : T().diseasesOf + ' ' + it.name.en;
    /* العربية: «أمراض القلب الشائعة» */
    if (S.lang === 'ar') title = 'أمراض ' + L(it.name) + ' الشائعة';
    else                 title = 'Common ' + it.name.en.toLowerCase() + ' conditions';
    box.appendChild(el('h3', 'dis-title', title));
    it.diseases.slice(0, max).forEach(function (d) {
      var r = el('div', 'dis-row');
      r.appendChild(icon('i-pulse'));

      /* 🔴 الربط العكسي: اسم المرض يصير رابطاً إن كانت له بطاقة في الموسوعة.
         المطابقة على name.ar دائماً (لا على اللغة المعروضة) ⇒ تعمل في ع و EN.
         وغير المطابق يبقى نصّاً ساكناً كما كان — وهو الغالب اليوم. */
      var nm  = el('span', 'dis-name', L(d.name));
      var did = disIdForName(d.name && d.name.ar);
      if (did) {
        nm.classList.add('can-go');
        nm.setAttribute('role', 'button');
        nm.setAttribute('tabindex', '0');
        nm.title = DX().openDisease;
        nm.addEventListener('click', function (ev) { ev.stopPropagation(); openDisease(did); });
        nm.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); openDisease(did); }
        });
      }
      r.appendChild(nm);

      r.appendChild(el('span', 'dis-desc', L(d.desc)));
      box.appendChild(r);
    });
    return box;
  }

  /* ============================================================
     المكتبة / المفضلة
     ============================================================ */
  /* --- المكتبة صفحتان لا أكورديون ---
     _libSec = null  ⇒  فهرس الأقسام (المستوى الأول).
     _libSec = 'id'  ⇒  صفحة ذلك القسم وحدها (المستوى الثاني).
     تُحفظ في localStorage تحت المفتاح libsec، فآخر قسم فُتح يبقى
     مفتوحاً بعد إعادة التحميل. (المفتاح القديم libsecs الخاص بالطيّ
     أُلغي ويُمسح إن وُجد.) */
  var _libSec = null;
  (function () {
    try {
      localStorage.removeItem(LS + 'libsecs');         /* بقايا الأكورديون القديم */
      var v = localStorage.getItem(LS + 'libsec');
      if (v) _libSec = String(v);
    } catch (e) { /* localStorage محجوب ⇒ نبدأ من فهرس الأقسام */ }
  })();
  function libSecSave() {
    try {
      if (_libSec) localStorage.setItem(LS + 'libsec', _libSec);
      else         localStorage.removeItem(LS + 'libsec');
    } catch (e) {}
  }

  /* --- بناء أقسام المكتبة من sections.js ---
     • معرّف في الخريطة وغير موجود في ITEMS ⇒ يُتجاهَل بهدوء.
     • قسم بلا عنصر واحد ⇒ لا يُعرض إطلاقاً.
     🔴 • عنصر في ITEMS لم تذكره الخريطة ⇒ يظهر في قسم «أخرى» ولا يختفي أبداً.
       (وإن غاب sections.js كلياً ظهرت كل العناصر تحت «أخرى» — لا صفحة فارغة.) */
  function libSections() {
    var map = (typeof LIB_SECTIONS !== 'undefined' &&
               Object.prototype.toString.call(LIB_SECTIONS) === '[object Array]') ? LIB_SECTIONS : [];
    var used = {}, out = [];
    map.forEach(function (sec) {
      if (!sec || Object.prototype.toString.call(sec.items) !== '[object Array]') return;
      var items = [];
      sec.items.forEach(function (id) {
        var it = ITEM_BY_ID[id];
        if (!it || used[id]) return;           /* غير موجود بعد، أو مكرّر بين قسمين */
        used[id] = 1;
        items.push(it);
      });
      if (items.length) out.push({ id: sec.id, name: sec.name || {}, items: items });
    });
    var rest = ITEMS.filter(function (it) { return !used[it.id]; });
    if (rest.length) {
      var o = (typeof LIB_OTHER !== 'undefined' && LIB_OTHER) ? LIB_OTHER : null;
      out.push({
        id:    (o && o.id)   || 'other',
        name:  (o && o.name) || { ar: 'أخرى', en: 'Other' },
        items: rest
      });
    }
    return out;
  }

  /* بطاقة عنصر واحد */
  function gcard(it) {
    var b = el('button', 'gcard');
    b.type = 'button';
    b.setAttribute('data-id', it.id);
    var im = el('div', 'gcard-img');
    b.appendChild(im);
    b.appendChild(el('div', 'gcard-ar', L(it.name)));
    b.appendChild(el('div', 'gcard-en', S.lang === 'ar' ? it.name.en : it.name.ar));
    b.appendChild(el('div', 'gcard-short', L(it.short)));
    b.addEventListener('click', function () { open(it.id); setView('home'); });
    bgImage(im, it.thumb);
    probe(it.thumb, function (ok) { if (!ok) bgImage(im, it.img); });
    return b;
  }

  /* بطاقة قسم في فهرس المكتبة — الاسمان + العدد + معاينة أول عنصر */
  function seccard(sec) {
    var b = el('button', 'seccard');
    b.type = 'button';
    b.setAttribute('data-sec', sec.id);

    var im = el('div', 'seccard-img');
    var c  = el('span', 'seccard-count', String(sec.items.length));
    c.setAttribute('aria-label', NT().count(sec.items.length));
    im.appendChild(c);
    b.appendChild(im);

    b.appendChild(el('div', 'seccard-ar', L(sec.name)));
    b.appendChild(el('div', 'seccard-en', S.lang === 'ar' ? sec.name.en : sec.name.ar));

    b.addEventListener('click', function () { libEnter(sec.id); });

    /* المعاينة: مصغّرة أول عنصر، وإن غابت فصورته الكاملة */
    var first = sec.items[0];
    if (first) {
      bgImage(im, first.thumb);
      probe(first.thumb, function (ok) { if (!ok) bgImage(im, first.img); });
    } else {
      im.classList.add('is-empty');
    }
    return b;
  }

  /* الدخول لقسم داخل المكتبة / الرجوع لفهرس الأقسام */
  function libEnter(id) {
    _libSec = id || null;
    libSecSave();
    renderGrid();
    markActiveSystem();
    syncHistory(false);
  }
  function libBack() { libEnter(null); }

  function renderGrid() {
    var wrap   = $('#gridView');
    var cards  = $('#gridCards');
    var secBox = $('#gridSecs');
    var head   = $('#libHead');
    var isFav  = (S.view === 'favorites');
    var si     = $('#search');
    var q      = (!isFav && si) ? si.value : '';
    var searching = !!norm(q);

    cards.innerHTML  = '';
    secBox.innerHTML = '';
    $('#gridTitle').textContent = isFav ? T().favorites : T().library;
    $('#gridTitle').hidden = false;
    head.hidden   = true;
    secBox.hidden = true;
    cards.hidden  = false;

    /* ---- مسطّح بلا أقسام: المفضلة، أو نتائج بحث داخل المكتبة ---- */
    if (isFav || searching) {
      var list = isFav
        ? S.fav.map(function (id) { return ITEM_BY_ID[id]; }).filter(Boolean)
        : searchItems(q);
      list.forEach(function (it) { cards.appendChild(gcard(it)); });
      $('#gridEmpty').hidden = list.length > 0;
      $('#gridEmpty').textContent = isFav ? T().emptyFav : T().noResults;
      wrap.scrollTop = 0;
      return;
    }

    /* ---- المكتبة: فهرس الأقسام أو صفحة قسم واحد ---- */
    var secs = libSections();
    var cur  = null;
    for (var i = 0; i < secs.length; i++) if (secs[i].id === _libSec) cur = secs[i];
    /* قسم محفوظ لم يعد موجوداً (تغيّرت الخريطة) ⇒ رجوع هادئ للفهرس */
    if (_libSec && !cur) { _libSec = null; libSecSave(); syncHistory(true); }

    if (cur) {
      /* المستوى الثاني: بطاقات عناصر هذا القسم وحده */
      $('#gridTitle').hidden = true;
      head.hidden = false;
      $('#libHeadAr').textContent    = L(cur.name);
      $('#libHeadEn').textContent    = S.lang === 'ar' ? cur.name.en : cur.name.ar;
      $('#libHeadCount').textContent = String(cur.items.length);
      $('#libHeadCount').setAttribute('aria-label', NT().count(cur.items.length));
      $('#libBackText').textContent  = T().library;
      $('#libBack').setAttribute('aria-label', NT().back + ' — ' + T().library);
      $('#libBack').title = NT().back;
      cur.items.forEach(function (it) { cards.appendChild(gcard(it)); });
      $('#gridEmpty').hidden = cur.items.length > 0;
      $('#gridEmpty').textContent = T().noResults;
    } else {
      /* المستوى الأول: بطاقات الأقسام ولا شيء غيرها */
      cards.hidden  = true;
      secBox.hidden = false;
      secs.forEach(function (sec) { secBox.appendChild(seccard(sec)); });
      $('#gridEmpty').hidden = secs.length > 0;
      $('#gridEmpty').textContent = T().noResults;
    }

    wrap.scrollTop = 0;
  }

  /* يُطفئ لوحات شاشة خارجة (الفهرس والبطاقة معاً) — بلا لمس الحالة
     (_disId/_rxId) لأنها ذاكرة الرجوع والتحديث F5 */
  function hideInner() {
    for (var i = 0; i < arguments.length; i++) {
      var e = $(arguments[i]); if (e) e.hidden = true;
    }
  }

  function setView(v) {
    /* بلا ملف أمراض ⇒ لا شاشة أمراض (رابط عميق قديم يرجع للرئيسية بهدوء) */
    if (v === 'diseases' && !hasDis()) v = 'home';
    if (v === 'drugs'    && !hasRx())  v = 'home';
    if (v === 'ref'      && !hasRef()) v = 'home';
    S.view = v;
    $$('.nav-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-view') === v);
    });
    var home = (v === 'home');
    var grid = (v === 'library' || v === 'favorites');
    var dis  = (v === 'diseases');
    var rxv  = (v === 'drugs');
    var rfv  = (v === 'ref');
    $('#stageView').hidden = !home;
    $('#toolbar').hidden   = !home;
    $('#gridView').hidden  = !grid;
    var dv = $('#disView'); if (dv) dv.hidden = !dis;
    var rv = $('#rxView');  if (rv) rv.hidden = !rxv;
    var fv = $('#refView'); if (fv) fv.hidden = !rfv;
    /* إخفاء الحاوية الخارجية وحدها يترك بداخلها لوحةً «مرئية منطقياً»
       (#rxPage.hidden=false داخل #rxView مخفيّ). لا أثر بصري، لكنها
       حالة كاذبة تُربك أي فحص وقد تُسرّب لو تغيّر التخطيط. فالشاشة
       الخارجة تُطفئ داخلها، والداخلة يرسمه render*‎ بعد سطرين. */
    if (!dis) hideInner('#dxIndex', '#dxPage');
    if (!rxv) hideInner('#rxIndex', '#rxPage');
    if (!rfv) hideInner('#refIndex', '#refPage');
    if (grid)     renderGrid();
    else if (dis) renderDiseases();
    else if (rxv) renderDrugs();
    else if (rfv) renderRefs();
    markActiveSystem();       /* الشريط يتبع الشاشة: صفحة قسم أو قسم العضو */
    hideTip();
    applyZoom();
    scheduleLabels();
    syncHistory(false);
  }

  /* ============================================================
     موسوعة الأمراض  —  شاشة من مستويين مثل المكتبة
     ------------------------------------------------------------
     المستوى ١: فهرس مجمَّع بالمجموعات + بحث فوري بالاسمين.
     المستوى ٢: بطاقة المرض كاملة + أزرار تفتح أعضاءه في المسرح.
     البيانات من diseases.js وحده. إن غاب الملف (DISEASES غير معرّف)
     اختفى الزرّ الرابع بهدوء وبقي التطبيق كما هو — لا خطأ ولا شاشة بيضاء.
     الحالة في localStorage تحت المفتاح disid (مستقل عن libsec).
     ============================================================ */
  var DIS = (typeof DISEASES !== 'undefined' &&
             Object.prototype.toString.call(DISEASES) === '[object Array]') ? DISEASES : [];
  var DIS_BY_ID = {};
  DIS.forEach(function (d) { if (d && d.id) DIS_BY_ID[d.id] = d; });
  function hasDis() { return DIS.length > 0; }

  /* عناوين الحقول محلية هنا — I18N في data.js لا يُعدَّل */
  var DX_I18N = {
    ar: {
      nav: 'الأمراض', title: 'موسوعة الأمراض', search: 'ابحث عن مرض …',
      back: 'الأمراض', noResults: 'لا توجد نتائج',
      count: function (n) { return n + ' مرض'; },
      short: 'نبذة', symptoms: 'الأعراض', cause: 'السبب',
      diagnosis: 'التشخيص', treatment: 'العلاج', seeDoctor: 'متى تراجع الطبيب',
      inApp: 'في التطبيق', common: 'شائع', rare: 'نادر',
      openDisease: '↗ انقر لفتح بطاقة المرض',
      disclaimer: 'محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج — راجع طبيبك.'
    },
    en: {
      nav: 'Diseases', title: 'Disease encyclopedia', search: 'Search for a condition …',
      back: 'Diseases', noResults: 'No results',
      count: function (n) { return n + ' conditions'; },
      short: 'Overview', symptoms: 'Symptoms', cause: 'Cause',
      diagnosis: 'Diagnosis', treatment: 'Treatment', seeDoctor: 'When to see a doctor',
      inApp: 'In this app', common: 'Common', rare: 'Rare',
      openDisease: '↗ Click to open the condition card',
      disclaimer: 'General educational content — not a diagnosis or a prescription. See your doctor.'
    }
  };
  var DX = function () { return DX_I18N[S.lang] || DX_I18N.ar; };

  /* أسماء المجموعات: من أقسام المكتبة أولاً (نفس المعرّفات)، ثم جدول
     المجموعات الحرّة، وإلا فالمعرّف نفسه — فمجموعة جديدة لا تكسر شيئاً. */
  var DX_GROUPS = {
    heart:     { ar: 'القلب والدورة الدموية', en: 'Heart and circulation' },
    infection: { ar: 'الأمراض المعدية',        en: 'Infectious diseases' },
    autoimmune: { ar: 'المناعة الذاتية والروماتيزم', en: 'Autoimmune and rheumatic diseases' },
    allergy: { ar: 'الحساسية والتأتّب', en: 'Allergy and atopy' },
    cancer:    { ar: 'الأورام',                en: 'Cancers' },
    metabolic: { ar: 'الاستقلاب والغدد',       en: 'Metabolic and endocrine' },
    mental:    { ar: 'الصحّة النفسية والنوم',  en: 'Mental health and sleep' },
    child:     { ar: 'الأطفال',                en: 'Children' },
    emergency: { ar: 'الطوارئ والإصابات',      en: 'Emergencies and injuries' },
    /* أبوابٌ أضافها الدوام ٢٤ سبتمبر ٢٠٢٦ — بلا اسمٍ هنا تظهر بمعرّفها الإنجليزي */
    genetic:   { ar: 'الأمراض الوراثية',       en: 'Genetic disorders' },
    cognitive: { ar: 'الإعاقات الذهنية والنمائية', en: 'Cognitive and developmental disabilities' },
    physical:  { ar: 'الإعاقات الجسدية والحسّية',  en: 'Physical and sensory disabilities' },
    /* أبواب الصحّة العامة — أُضيفت ٢٤ سبتمبر ٢٠٢٦ (نحو النسخة الخيرية) */
    prevention: { ar: 'الوقاية والحياة الصحّية',     en: 'Prevention and healthy living' },
    'first-aid': { ar: 'الإسعافات الأوّلية',          en: 'First aid' },
    maternal:   { ar: 'صحّة الأم والطفل',            en: 'Maternal and child health' },
    general:   { ar: 'عامّ',                   en: 'General' },
    other:     { ar: 'أخرى',                   en: 'Other' }
  };
  function dxGroupName(gid) {
    var map = (typeof LIB_SECTIONS !== 'undefined' &&
               Object.prototype.toString.call(LIB_SECTIONS) === '[object Array]') ? LIB_SECTIONS : [];
    for (var i = 0; i < map.length; i++) {
      if (map[i] && map[i].id === gid && map[i].name) return map[i].name;
    }
    return DX_GROUPS[gid] || { ar: gid, en: gid };
  }

  /* ── نقطة الرجوع بين الموسوعتين ──────────────────────────────
     البطاقة تُفتح من فهرسها أو من بطاقة أخرى (دواء ⇄ مرض). وزرّ
     «رجوع» كان يعرف شاشته وحدها فيرجّع القارئ إلى فهرس لم يأتِ
     منه. فنحفظ من أين جاء، ويرجع إليه، ثم تُنسى النقطة.
     تُمسح عند أي تنقّل صريح من الشريط لئلا تُرجع لمكان قديم. */
  var _retTo = null;   /* { view:'drugs'|'diseases'|'ref', id } */
  function retSet(view, id) { _retTo = (view && id) ? { view: view, id: id } : null; }
  function retClear() { _retTo = null; }

  /* _disId = null ⇒ الفهرس · 'id' ⇒ بطاقة ذلك المرض */
  var _disId = null, _disQ = '';
  (function () {
    try {
      var v = localStorage.getItem(LS + 'disid');
      if (v && DIS_BY_ID[v]) _disId = String(v);
    } catch (e) { /* localStorage محجوب ⇒ نبدأ من الفهرس */ }
  })();
  function disSave() {
    try {
      if (_disId) localStorage.setItem(LS + 'disid', _disId);
      else        localStorage.removeItem(LS + 'disid');
    } catch (e) {}
  }

  /* فهرس الأسماء البديلة: الاسم كما ورد داخل بطاقة العضو ⇒ معرّف المرض */
  var _disAlias = null;
  function disAliasMap() {
    if (_disAlias) return _disAlias;
    _disAlias = {};
    DIS.forEach(function (d) {
      if (!d || !d.id) return;
      var keys = [];
      if (d.name && d.name.ar) keys.push(d.name.ar);
      if (Object.prototype.toString.call(d.aliases) === '[object Array]') keys = keys.concat(d.aliases);
      keys.forEach(function (k) {
        var n = norm(k);
        if (n && !_disAlias[n]) _disAlias[n] = d.id;   /* أول من يحجز الاسم يملكه */
      });
    });
    return _disAlias;
  }
  function disIdForName(arName) {
    if (!hasDis()) return null;
    var n = norm(arName);
    if (!n) return null;
    var id = disAliasMap()[n];
    return (id && DIS_BY_ID[id]) ? id : null;
  }

  /* ── تحميل أجسام الأمراض عند الطلب ──────────────────────────
     الفهرس خفيف ويُحمَّل دائماً؛ أما الحقول الستة الطويلة فتسكن
     dx/dx-<src>.js ولا تُحمَّل إلا عند فتح أول بطاقة من ذلك الملف.
     بلا هذا كانت ٥٠٠ بطاقة تعني ~٢.٧ ميجا نصّ قبل ظهور أول صورة. */
  var _dxLoaded = {};   /* src → 'ok' | 'fail' */
  var _dxLoading = {};  /* src → [callbacks] */

  function dxBodyReady(src, done) {
    if (!src || _dxLoaded[src]) { done(); return; }
    if (_dxLoading[src]) { _dxLoading[src].push(done); return; }
    _dxLoading[src] = [done];
    var sc = document.createElement('script');
    sc.src = 'dx/dx-' + src + '.js';
    sc.async = true;
    var finish = function (state) {
      _dxLoaded[src] = state;
      var q = _dxLoading[src] || []; delete _dxLoading[src];
      q.forEach(function (f) { try { f(); } catch (e) {} });
    };
    sc.onload = function () { finish('ok'); };
    /* ملف ناقص أو معطوب لا يُسقط الشاشة — تُعرض البطاقة بما في الفهرس */
    sc.onerror = function () { finish('fail'); };
    document.head.appendChild(sc);
  }

  /* يدمج جسم المرض في مدخل الفهرس مرّة واحدة */
  function dxMerge(d) {
    if (!d || d._body) return d;
    var b = (typeof DX_BODY !== 'undefined' && DX_BODY) ? DX_BODY[d.id] : null;
    if (b) {
      ['symptoms', 'cause', 'diagnosis', 'treatment', 'seeDoctor', 'updated'].forEach(function (k) {
        if (b[k] && !d[k]) d[k] = b[k];
      });
      d._body = true;
    }
    return d;
  }

  function openDisease(id) {
    var d = DIS_BY_ID[id];
    if (!d) return;
    _disId = id;
    disSave();
    if (d._body || !d.src) { setView('diseases'); return; }
    dxBodyReady(d.src, function () {
      dxMerge(d);
      if (_disId === id) setView('diseases');   /* يرسم الشاشة ويسجّل المسار */
    });
  }
  function disBack() {
    /* جاء من بطاقة مرجعية ⇒ يرجع إليها لا إلى فهرس الأمراض */
    if (_retTo && _retTo.view === 'ref' && typeof REF_BY_ID !== 'undefined' && REF_BY_ID[_retTo.id]) {
      var backRef = _retTo.id;
      retClear();
      _disId = null; disSave();
      openRef(backRef);
      return;
    }
    /* جاء من بطاقة دواء ⇒ يرجع إليها لا إلى فهرس الأمراض */
    if (_retTo && _retTo.view === 'drugs' && RX_BY_ID[_retTo.id]) {
      var back = _retTo.id;
      retClear();
      _disId = null; disSave();
      openDrug(back);
      return;
    }
    retClear();
    _disId = null;
    disSave();
    renderDiseases();
    syncHistory(false);
  }

  function renderDiseases() {
    var wrap = $('#disView');
    if (!wrap) return;
    var idx = $('#dxIndex'), page = $('#dxPage');
    var d = _disId ? DIS_BY_ID[_disId] : null;
    /* مرض محفوظ لم يعد موجوداً ⇒ رجوع هادئ للفهرس */
    if (_disId && !d) { _disId = null; disSave(); syncHistory(true); }

    if (d) {
      idx.hidden = true;
      page.hidden = false;
      /* شبكة أمان تغطّي كل الطرق المؤدّية إلى البطاقة — رابط عميق أو
         استعادة من التخزين أو رجوع المتصفّح، لا فتحاً بضغطة فقط */
      if (!d._body && d.src && _dxLoaded[d.src] !== 'ok') {
        dxBodyReady(d.src, function () {
          if (_disId === d.id) { dxMerge(d); renderDiseasePage(d, page); }
        });
      }
      renderDiseasePage(d, page);
    } else {
      page.hidden = true;
      page.innerHTML = '';
      idx.hidden = false;
      renderDiseaseIndex();
    }
    wrap.scrollTop = 0;
  }

  /* --- المستوى الأول: الفهرس --- */
  function renderDiseaseIndex() {
    var t = DX();
    $('#dxTitle').textContent = t.title;

    var si = $('#dxSearch');
    if (si) {
      si.placeholder = t.search;
      si.setAttribute('aria-label', t.search);
      if (si.value !== _disQ) si.value = _disQ;
    }

    var box = $('#dxGroups');
    box.innerHTML = '';

    var n = norm(_disQ);
    var list = DIS.filter(function (d) {
      if (!d) return false;
      if (!n) return true;
      var a = norm(d.name && d.name.ar), e = norm(d.name && d.name.en);
      return a.indexOf(n) !== -1 || e.indexOf(n) !== -1;
    });

    setCount('#dxCount', list.length, DIS.length, t);

    /* المجموعات بترتيب أول ظهورها في الملف ⇒ ترتيبها بيد كاتب البيانات */
    var order = [], byG = {};
    list.forEach(function (d) {
      var g = d.group || 'other';
      if (!byG[g]) { byG[g] = []; order.push(g); }
      byG[g].push(d);
    });

    var searching = !!n;
    order.forEach(function (g) {
      var G = groupSection('dx', g, dxGroupName(g), byG[g].length, t.count(byG[g].length), searching);
      byG[g].forEach(function (d) { G.grid.appendChild(dxCard(d)); });
      box.appendChild(G.sec);
    });

    $('#dxEmpty').hidden = list.length > 0;
    $('#dxEmpty').textContent = t.noResults;
  }

  /* ============================================================
     مجموعة قابلة للطيّ — تشترك فيها شاشتا الأمراض والأدوية
     ------------------------------------------------------------
     الشاشتان كبرتا (٦٠١ مرضاً في ١٨ مجموعة · ٥٢٩ دواءً في ١٩)
     فصار الفهرس شريطاً لا ينتهي. الرأس صار زرّاً حقيقياً ليعمل
     بلوحة المفاتيح مجاناً، والحالة تُحفظ لكل مجموعة على حدة.
     ⚠️ أثناء البحث تُفتح كلها قسراً ولا تُحفظ تلك الحالة — وإلا
     كتب المستخدم كلمة فلم يرَ نتيجة واحدة لأن مجموعتها مطويّة.
     ============================================================ */
  /* عدّاد الإجمالي أعلى الفهرس.
     بلا بحث: «٥٢٩ دواء». ومع بحث: «٣ / ٥٢٩ دواء» — الإجمالي
     يبقى ظاهراً ليعرف من أين جاءت النتائج. والشرطة بدل كلمة
     «من» عمداً: تقرأ صحيحاً بالعربية والإنجليزية بلا نصّ يُترجم. */
  function setCount(sel, shown, total, t) {
    var e = $(sel);
    if (!e) return;
    e.textContent = (shown === total) ? t.count(total)
                                      : (shown + ' / ' + t.count(total));
  }

  function groupKey(screen, id) { return LS + 'grp.' + screen + '.' + id; }
  function groupOpen(screen, id) {
    try { return localStorage.getItem(groupKey(screen, id)) === '1'; } catch (e) { return false; }
  }
  function groupSave(screen, id, open) {
    try {
      if (open) localStorage.setItem(groupKey(screen, id), '1');
      else       localStorage.removeItem(groupKey(screen, id));
    } catch (e) {}
  }

  function groupSection(screen, id, names, count, countLabel, searching) {
    var sec = el('section', 'dx-group');

    var h = el('button', 'dx-group-head');
    h.type = 'button';
    var tt = el('span', 'dx-group-titles');
    tt.appendChild(el('span', 'dx-group-ar', L(names)));
    tt.appendChild(el('span', 'dx-group-en', S.lang === 'ar' ? (names.en || '') : (names.ar || '')));
    h.appendChild(tt);
    var c = el('span', 'dx-group-count', String(count));
    c.setAttribute('aria-label', countLabel);
    h.appendChild(c);
    h.appendChild(icon('i-chev', 'dx-group-chev'));
    sec.appendChild(h);

    function apply(open) {
      sec.classList.toggle('is-open', open);
      h.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    apply(searching || groupOpen(screen, id));

    h.addEventListener('click', function () {
      var now = !sec.classList.contains('is-open');
      apply(now);
      if (!searching) groupSave(screen, id, now);
    });

    var grid = el('div', 'dx-cards');
    sec.appendChild(grid);
    return { sec: sec, grid: grid };
  }

  function dxCard(d) {
    var b = el('button', 'dxcard');
    b.type = 'button';
    b.setAttribute('data-dis', d.id);

    var top = el('div', 'dxcard-top');
    top.appendChild(icon('i-pulse', 'dxcard-ic'));
    var tx = el('span', 'dxcard-titles');
    tx.appendChild(el('span', 'dxcard-ar', L(d.name)));
    tx.appendChild(el('span', 'dxcard-en', S.lang === 'ar' ? (d.name.en || '') : (d.name.ar || '')));
    top.appendChild(tx);
    if (d.tier === 'rare') top.appendChild(el('span', 'dxcard-tag', DX().rare));
    b.appendChild(top);

    b.appendChild(el('p', 'dxcard-short', L(d.short)));   /* يُقصّ بثلاثة أسطر في CSS */
    b.addEventListener('click', function () { openDisease(d.id); });
    return b;
  }

  /* --- المستوى الثاني: بطاقة المرض --- */
  function renderDiseasePage(d, page) {
    dxMerge(d);
    var t = DX();
    page.innerHTML = '';

    var head = el('header', 'dx-head');
    var bk = el('button', 'lib-back dx-back');
    bk.type = 'button';
    bk.appendChild(icon('i-chev'));
    bk.appendChild(el('span', null, t.back));
    bk.title = NT().back;
    bk.setAttribute('aria-label', NT().back + ' — ' + t.title);
    bk.addEventListener('click', disBack);
    head.appendChild(bk);

    var tt = el('span', 'lib-head-titles');
    tt.appendChild(el('span', 'lib-head-ar', L(d.name)));
    tt.appendChild(el('span', 'lib-head-en', S.lang === 'ar' ? (d.name.en || '') : (d.name.ar || '')));
    head.appendChild(tt);
    head.appendChild(el('span', 'dx-tier', d.tier === 'rare' ? t.rare : t.common));
    page.appendChild(head);

    /* الحقول بالترتيب المتّفق عليه — الحقل الفارغ يُتخطّى بهدوء */
    [['short', t.short], ['symptoms', t.symptoms], ['cause', t.cause],
     ['diagnosis', t.diagnosis], ['treatment', t.treatment]].forEach(function (f) {
      var txt = L(d[f[0]]);
      if (!txt) return;
      var sec = el('section', 'dx-sec');
      sec.appendChild(el('h3', 'p-section-title', f[1]));
      sec.appendChild(el('p', 'p-text', txt));
      page.appendChild(sec);
    });

    /* أهمّ سطر في البطاقة ⇒ إطار تحذيري من رموز التصميم القائمة */
    var sd = L(d.seeDoctor);
    if (sd) {
      var a = el('section', 'dx-alert');
      var ah = el('h3', 'dx-alert-title');
      ah.appendChild(icon('i-alert'));
      ah.appendChild(el('span', null, t.seeDoctor));
      a.appendChild(ah);
      a.appendChild(el('p', 'dx-alert-text', sd));
      page.appendChild(a);
    }

    /* «في التطبيق» — أي معرّف لا وجود له في ITEM_BY_ID يُتجاهَل بصمت */
    var orgs = (Object.prototype.toString.call(d.organs) === '[object Array]' ? d.organs : [])
                 .filter(function (id) { return !!ITEM_BY_ID[id]; });
    if (orgs.length) {
      var s2 = el('section', 'dx-sec');
      s2.appendChild(el('h3', 'p-section-title', t.inApp));
      var row = el('div', 'dx-organs');
      orgs.forEach(function (id) {
        var it = ITEM_BY_ID[id];
        var b = el('button', 'dx-organ');
        b.type = 'button';
        b.setAttribute('data-id', id);
        b.appendChild(el('span', 'dx-organ-name', L(it.name)));
        b.appendChild(icon('i-chev', 'dx-organ-chev'));
        b.addEventListener('click', function () { open(id); setView('home'); });
        row.appendChild(b);
      });
      s2.appendChild(row);
      page.appendChild(s2);
    }

    page.appendChild(el('p', 'disclaimer dx-note', t.disclaimer));
  }

  /* ============================================================
     موسوعة الأدوية  —  شاشة من مستويين، أختٌ لشاشة الأمراض
     ------------------------------------------------------------
     المستوى ١: فهرس مجمَّع بالفصائل + بحث بالاسم والاسم التجاري.
     المستوى ٢: بطاقة الدواء كاملة + أزرار تفتح أمراضه.
     البيانات من drugs.js + rx/. إن غاب الملف اختفى الزرّ بهدوء.
     ⛔ بلا جرعات بقرار مقصود — انظر DRUG-SPEC.md.
     الحالة في localStorage تحت المفتاح rxid (مستقل عن disid).
     ============================================================ */

  var RXL = (typeof DRUGS !== 'undefined' &&
             Object.prototype.toString.call(DRUGS) === '[object Array]') ? DRUGS : [];
  var RX_BY_ID = {};
  RXL.forEach(function (d) { if (d && d.id) RX_BY_ID[d.id] = d; });
  function hasRx() { return RXL.length > 0; }

  var RX_I18N = {
    ar: { nav: 'الأدوية', title: 'موسوعة الأدوية', search: 'ابحث باسم الدواء أو الاسم التجاري …',
          back: 'كل الأدوية', noResults: 'لا يوجد دواء بهذا الاسم',
          what: 'ما هو', why: 'لماذا يُوصف', how: 'كيف يعمل',
          effects: 'آثاره الشائعة', warning: 'متى توقفه وتذهب فوراً',
          interact: 'تعارضاته المهمّة', avoid: 'من لا يأخذه',
          brands: 'أسماء تجارية', inApp: 'يُستعمل في', srcT: 'المصادر',
          otc: 'بلا وصفة', rx: 'بوصفة', alert: 'انتبه',
          count: function (n) { return n + ' دواء'; },
          disclaimer: 'محتوى تثقيفي عام لا يغني عن الطبيب أو الصيدلي. لا جرعات هنا بقرار مقصود — الجرعة تختلف بالوزن والعمر والكلى، ويحدّدها مختصّ.' },
    en: { nav: 'Medicines', title: 'Medicines', search: 'Search by drug or brand name …',
          back: 'All medicines', noResults: 'No medicine by that name',
          what: 'What it is', why: 'What it is prescribed for', how: 'How it works',
          effects: 'Common effects', warning: 'When to stop it and seek help',
          interact: 'Important interactions', avoid: 'Who should not take it',
          brands: 'Brand names', inApp: 'Used in', srcT: 'Sources',
          otc: 'Over the counter', rx: 'Prescription', alert: 'Caution',
          count: function (n) { return n + ' medicines'; },
          disclaimer: 'General educational content, not a substitute for a doctor or pharmacist. No doses here by design — dosing varies with weight, age and kidney function and is set by a professional.' }
  };
  var RXT = function () { return RX_I18N[S.lang] || RX_I18N.ar; };

  function rxClassName(cid) {
    var m = (typeof DRUG_CLASSES !== 'undefined' && DRUG_CLASSES) ? DRUG_CLASSES[cid] : null;
    return m || { ar: cid || 'أخرى', en: cid || 'Other' };
  }
  /* الفصيلة دقيقة ولا تصلح للتجميع (٢٨ دواءً ⇒ ٢٦ فصيلة)، فالفهرس
     يجمّع بالمجموعة العريضة والفصيلة تبقى سطراً تحت اسم الدواء */
  function rxGroupOf(d) {
    var m = (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) ? DRUG_CLASS_GROUP : {};
    return m[d && d.cls] || 'other';
  }
  function rxGroupName(gid) {
    var m = (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) ? DRUG_GROUPS[gid] : null;
    return m || { ar: gid || 'أخرى', en: gid || 'Other' };
  }

  /* _rxId = null ⇒ الفهرس · 'id' ⇒ بطاقة ذلك الدواء */
  var _rxId = null, _rxQ = '';
  (function () {
    try {
      var v = localStorage.getItem(LS + 'rxid');
      if (v && RX_BY_ID[v]) _rxId = String(v);
    } catch (e) {}
  })();
  function rxSave() {
    try {
      if (_rxId) localStorage.setItem(LS + 'rxid', _rxId);
      else       localStorage.removeItem(LS + 'rxid');
    } catch (e) {}
  }

  /* تحميل أجسام الأدوية عند الطلب — نفس منطق dxBodyReady */
  var _rxLoaded = {}, _rxLoading = {};
  function rxBodyReady(src, done) {
    if (!src || _rxLoaded[src]) { done(); return; }
    if (_rxLoading[src]) { _rxLoading[src].push(done); return; }
    _rxLoading[src] = [done];
    var sc = document.createElement('script');
    sc.src = 'rx/rx-' + src + '.js';
    sc.async = true;
    var finish = function (state) {
      _rxLoaded[src] = state;
      var q = _rxLoading[src] || []; delete _rxLoading[src];
      q.forEach(function (f) { try { f(); } catch (e) {} });
    };
    sc.onload  = function () { finish('ok'); };
    sc.onerror = function () { finish('fail'); };   /* ملف ناقص لا يُسقط الشاشة */
    document.head.appendChild(sc);
  }
  function rxMerge(d) {
    if (!d || d._body) return d;
    var b = (typeof RX_BODY !== 'undefined' && RX_BODY) ? RX_BODY[d.id] : null;
    if (b) {
      ['what', 'why', 'how', 'effects', 'warning', 'interact', 'avoid', 'updated']
        .forEach(function (k) { if (b[k] && !d[k]) d[k] = b[k]; });
      /* ⚠️ `src` محجوز في الفهرس لوسم ملف الجسم (drugs.js يَسِمه)،
         و`src` في الجسم روابط المصادر — فيُنقل باسم آخر لئلا يُطمس */
      if (b.src && !d.srcList) d.srcList = b.src;
      d._body = true;
    }
    return d;
  }

  function openDrug(id) {
    var d = RX_BY_ID[id];
    if (!d) return;
    _rxId = id;
    rxSave();
    if (d._body || !d.src) { setView('drugs'); return; }
    rxBodyReady(d.src, function () {
      rxMerge(d);
      if (_rxId === id) setView('drugs');
    });
  }
  function rxBack() {
    if (_retTo && _retTo.view === 'diseases' && DIS_BY_ID[_retTo.id]) {
      var back = _retTo.id;
      retClear();
      _rxId = null; rxSave();
      openDisease(back);
      return;
    }
    retClear();
    _rxId = null;
    rxSave();
    renderDrugs();
    syncHistory(false);
  }

  function renderDrugs() {
    var wrap = $('#rxView');
    if (!wrap) return;
    var idx = $('#rxIndex'), page = $('#rxPage');
    var d = _rxId ? RX_BY_ID[_rxId] : null;
    if (_rxId && !d) { _rxId = null; rxSave(); syncHistory(true); }

    if (d) {
      idx.hidden = true;
      page.hidden = false;
      /* شبكة أمان: رابط عميق أو استعادة من التخزين أو رجوع المتصفّح */
      if (!d._body && d.src && _rxLoaded[d.src] !== 'ok') {
        rxBodyReady(d.src, function () {
          if (_rxId === d.id) { rxMerge(d); renderDrugPage(d, page); }
        });
      }
      renderDrugPage(d, page);
    } else {
      page.hidden = true;
      page.innerHTML = '';
      idx.hidden = false;
      renderDrugIndex();
    }
    wrap.scrollTop = 0;
  }

  /* --- المستوى الأول: الفهرس --- */
  function renderDrugIndex() {
    var t = RXT();
    $('#rxTitle').textContent = t.title;

    var si = $('#rxSearch');
    if (si) {
      si.placeholder = t.search;
      si.setAttribute('aria-label', t.search);
      if (si.value !== _rxQ) si.value = _rxQ;
    }

    var box = $('#rxGroups');
    box.innerHTML = '';

    var n = norm(_rxQ);
    var list = RXL.filter(function (d) {
      if (!d) return false;
      if (!n) return true;
      if (norm(d.name && d.name.ar).indexOf(n) !== -1) return true;
      if (norm(d.name && d.name.en).indexOf(n) !== -1) return true;
      /* الاسم التجاري هو ما يقرأه الناس على العلبة ⇒ يبحث به */
      var br = (Object.prototype.toString.call(d.brands) === '[object Array]') ? d.brands : [];
      for (var i = 0; i < br.length; i++) if (norm(br[i]).indexOf(n) !== -1) return true;
      var kw = d.keywords || {};
      var all = [].concat(kw.ar || [], kw.en || []);
      for (var j = 0; j < all.length; j++) if (norm(all[j]).indexOf(n) !== -1) return true;
      return false;
    });

    setCount('#rxCount', list.length, RXL.length, t);

    var order = [], byC = {};
    list.forEach(function (d) {
      var c = rxGroupOf(d);
      if (!byC[c]) { byC[c] = []; order.push(c); }
      byC[c].push(d);
    });

    /* «أخرى» سلّة ما لم يُصنَّف بعد، فمكانها آخر الفهرس لا وسطه —
       وإلا تصدّرت مجموعةٌ بلا هويّة مجموعاتٍ لها معنى. */
    var _oi = order.indexOf('other');
    if (_oi !== -1) order.push(order.splice(_oi, 1)[0]);

    var searching = !!n;
    order.forEach(function (c) {
      var G = groupSection('rx', c, rxGroupName(c), byC[c].length, t.count(byC[c].length), searching);
      byC[c].forEach(function (d) { G.grid.appendChild(rxCard(d)); });
      box.appendChild(G.sec);
    });

    $('#rxEmpty').hidden = list.length > 0;
    $('#rxEmpty').textContent = t.noResults;
  }

  function rxCard(d) {
    var b = el('button', 'dxcard rxcard');
    b.type = 'button';
    b.setAttribute('data-rx', d.id);

    var top = el('div', 'dxcard-top');
    top.appendChild(icon('i-pulse', 'dxcard-ic'));
    var tx = el('span', 'dxcard-titles');
    tx.appendChild(el('span', 'dxcard-ar', L(d.name)));
    tx.appendChild(el('span', 'dxcard-en', S.lang === 'ar' ? (d.name.en || '') : (d.name.ar || '')));
    top.appendChild(tx);
    if (d.alert) top.appendChild(el('span', 'dxcard-tag rx-alert-tag', RXT().alert));
    b.appendChild(top);

    b.appendChild(el('span', 'rx-cls', L(rxClassName(d.cls))));
    b.appendChild(el('p', 'dxcard-short', L(d.short)));
    var br = (Object.prototype.toString.call(d.brands) === '[object Array]') ? d.brands : [];
    if (br.length) {
      var row = el('div', 'rx-brands');
      br.slice(0, 4).forEach(function (x) { row.appendChild(el('span', 'rx-brand', x)); });
      b.appendChild(row);
    }
    b.addEventListener('click', function () { openDrug(d.id); });
    return b;
  }

  /* --- المستوى الثاني: بطاقة الدواء --- */
  function renderDrugPage(d, page) {
    rxMerge(d);
    var t = RXT();
    page.innerHTML = '';

    var head = el('header', 'dx-head');
    var bk = el('button', 'lib-back dx-back');
    bk.type = 'button';
    bk.appendChild(icon('i-chev'));
    bk.appendChild(el('span', null, t.back));
    bk.title = NT().back;
    bk.setAttribute('aria-label', NT().back + ' — ' + t.title);
    bk.addEventListener('click', rxBack);
    head.appendChild(bk);

    var tt = el('span', 'lib-head-titles');
    tt.appendChild(el('span', 'lib-head-ar', L(d.name)));
    tt.appendChild(el('span', 'lib-head-en', S.lang === 'ar' ? (d.name.en || '') : (d.name.ar || '')));
    head.appendChild(tt);
    head.appendChild(el('span', 'dx-tier', d.otc ? t.otc : t.rx));
    page.appendChild(head);

    var br = (Object.prototype.toString.call(d.brands) === '[object Array]') ? d.brands : [];
    if (br.length) {
      var s0 = el('section', 'dx-sec');
      s0.appendChild(el('h3', 'p-section-title', t.brands));
      var row0 = el('div', 'rx-brands rx-brands-big');
      br.forEach(function (x) { row0.appendChild(el('span', 'rx-brand', x)); });
      s0.appendChild(row0);
      page.appendChild(s0);
    }

    [['short', t.what === 'ما هو' ? 'نبذة' : 'In brief'], ['what', t.what], ['why', t.why],
     ['how', t.how], ['effects', t.effects]].forEach(function (f) {
      var txt = L(d[f[0]]);
      if (!txt) return;
      var sec = el('section', 'dx-sec');
      sec.appendChild(el('h3', 'p-section-title', f[1]));
      sec.appendChild(el('p', 'p-text', txt));
      page.appendChild(sec);
    });

    /* أهمّ حقل في بطاقة الدواء ⇒ نفس الإطار التحذيري في بطاقة المرض */
    var wn = L(d.warning);
    if (wn) {
      var a = el('section', 'dx-alert');
      var ah = el('h3', 'dx-alert-title');
      ah.appendChild(icon('i-alert'));
      ah.appendChild(el('span', null, t.warning));
      a.appendChild(ah);
      a.appendChild(el('p', 'dx-alert-text', wn));
      page.appendChild(a);
    }

    [['interact', t.interact], ['avoid', t.avoid]].forEach(function (f) {
      var txt = L(d[f[0]]);
      if (!txt) return;
      var sec = el('section', 'dx-sec');
      sec.appendChild(el('h3', 'p-section-title', f[1]));
      sec.appendChild(el('p', 'p-text', txt));
      page.appendChild(sec);
    });

    /* «يُستعمل في» — أي معرّف مرض غير موجود يُتجاهَل بصمت */
    var uses = (Object.prototype.toString.call(d.uses) === '[object Array]' ? d.uses : [])
                 .filter(function (id) { return !!DIS_BY_ID[id]; });
    if (uses.length) {
      var s2 = el('section', 'dx-sec');
      s2.appendChild(el('h3', 'p-section-title', t.inApp));
      var row = el('div', 'dx-organs');
      uses.forEach(function (id) {
        var dd = DIS_BY_ID[id];
        var b2 = el('button', 'dx-organ');
        b2.type = 'button';
        b2.setAttribute('data-dis', id);
        b2.appendChild(el('span', 'dx-organ-name', L(dd.name)));
        b2.appendChild(icon('i-chev', 'dx-organ-chev'));
        b2.addEventListener('click', function () { retSet('drugs', d.id); openDisease(id); });
        row.appendChild(b2);
      });
      s2.appendChild(row);
      page.appendChild(s2);
    }

    /* المصادر — البطاقة مسنودة، والقارئ يرى إلى أين */
    var srcs = (Object.prototype.toString.call(d.srcList) === '[object Array]') ? d.srcList : [];
    if (srcs.length) {
      var s3 = el('section', 'dx-sec');
      s3.appendChild(el('h3', 'p-section-title', t.srcT));
      var ul = el('div', 'rx-src');
      srcs.forEach(function (u) {
        var a2 = document.createElement('a');
        a2.className = 'rx-src-link';
        a2.href = u; a2.target = '_blank'; a2.rel = 'noopener noreferrer';
        a2.textContent = String(u).replace(/^https?:\/\//, '').split('/')[0];
        ul.appendChild(a2);
      });
      s3.appendChild(ul);
      page.appendChild(s3);
    }

    page.appendChild(el('p', 'disclaimer dx-note', t.disclaimer));
  }

  /* ============================================================
     البطاقات المرجعية  —  شاشة من مستويين، أختٌ لشاشتي الأمراض والأدوية
     ------------------------------------------------------------
     النوع الثالث من البطاقات. سببه أن ثلاثة أقسام لا ينطبق عليها
     ما قبلها: الفحوصات المخبرية · الجينوم · تحليل DNA والفحوص
     الجينية. فحصٌ مخبري لا «أعراض» له ولا «متى تراجع الطبيب»،
     و«الطفرة» ليست عضواً ولا مرضاً.

     ⚠️ بنيةٌ واحدة للأنواع الثلاثة لا ثلاث بِنًى: الحقول نفسها،
     و`kind` شارةٌ تُعرض وتُصنّف، وما لا ينطبق يُترك فارغاً فلا
     يُرسم قسمه. العقد كاملاً في REF-SPEC.md.

     المستوى ١: فهرس مجمَّع بالمجموعات + بحث فوري.
     المستوى ٢: البطاقة كاملة + أزرار تفتح أعضاءها وأمراضها.
     البيانات من refs.js + ref/. إن غاب الملف اختفى الزرّ بهدوء.
     الحالة في localStorage تحت المفتاح refid (مستقل عن disid/rxid).
     ============================================================ */

  var REFL = (typeof REFS !== 'undefined' &&
              Object.prototype.toString.call(REFS) === '[object Array]') ? REFS : [];
  var REF_BY_ID = {};
  REFL.forEach(function (r) { if (r && r.id) REF_BY_ID[r.id] = r; });
  function hasRef() { return REFL.length > 0; }

  var RF_I18N = {
    ar: { nav: 'المراجع', title: 'البطاقات المرجعية', search: 'ابحث عن فحص أو مفهوم …',
          back: 'كل المراجع', noResults: 'لا توجد بطاقة بهذا الاسم',
          short: 'نبذة', what: 'ما هو', meaning: 'ماذا يقيس', why: 'لماذا يهمّ',
          inBody: 'مكانه من الجسم', prep: 'قبل الفحص', reading: 'كيف يُقرأ',
          up: 'ما يرفعه', down: 'ما يخفضه', pitfalls: 'تنبيهات وسوء فهم شائع',
          inApp: 'في التطبيق', related: 'أمراض ذات صلة', srcT: 'المصادر',
          unit: 'الوحدة',
          count: function (n) { return n + ' بطاقة'; },
          disclaimer: 'محتوى تثقيفي عام يعرّف بالفحص أو المفهوم، ولا يقرأ تحليلك ولا يفسّر نتيجتك — نتيجتك تُقرأ عند طبيبك مع بقيّة صورتك.' },
    en: { nav: 'Reference', title: 'Reference cards', search: 'Search tests and concepts …',
          back: 'All reference cards', noResults: 'No card by that name',
          short: 'Overview', what: 'What it is', meaning: 'What it measures', why: 'Why it matters',
          inBody: 'Where it sits in the body', prep: 'Before the test', reading: 'How it is read',
          up: 'What raises it', down: 'What lowers it', pitfalls: 'Cautions and common misreadings',
          inApp: 'In this app', related: 'Related conditions', srcT: 'Sources',
          unit: 'Unit',
          count: function (n) { return n + ' reference cards'; },
          disclaimer: 'General educational content introducing a test or a concept. It does not read your result or interpret it — your own result belongs with your doctor, alongside the rest of your picture.' }
  };
  var RFT = function () { return RF_I18N[S.lang] || RF_I18N.ar; };

  /* مجموعة أو نوع غير مذكور في refs.js يُعرض بمعرّفه ولا يكسر شيئاً */
  function refGroupName(gid) {
    var m = (typeof REF_GROUPS !== 'undefined' && REF_GROUPS) ? REF_GROUPS[gid] : null;
    return m || { ar: gid || 'أخرى', en: gid || 'Other' };
  }
  function refKindName(k) {
    var m = (typeof REF_KINDS !== 'undefined' && REF_KINDS) ? REF_KINDS[k] : null;
    return m || null;
  }

  /* _refId = null ⇒ الفهرس · 'id' ⇒ بطاقة ذلك المرجع */
  var _refId = null, _refQ = '';
  (function () {
    try {
      var v = localStorage.getItem(LS + 'refid');
      if (v && REF_BY_ID[v]) _refId = String(v);
    } catch (e) {}
  })();
  function refSave() {
    try {
      if (_refId) localStorage.setItem(LS + 'refid', _refId);
      else        localStorage.removeItem(LS + 'refid');
    } catch (e) {}
  }

  /* تحميل الأجسام عند الطلب — نفس منطق dxBodyReady و rxBodyReady.
     الفهرس خفيف ويُحمَّل دائماً؛ أمّا الحقول التسعة الطويلة فتسكن
     ref/ref-<src>.js ولا تُحمَّل إلا عند فتح أول بطاقة من ذلك الملف. */
  var _refLoaded = {}, _refLoading = {};
  function refBodyReady(src, done) {
    if (!src || _refLoaded[src]) { done(); return; }
    if (_refLoading[src]) { _refLoading[src].push(done); return; }
    _refLoading[src] = [done];
    var sc = document.createElement('script');
    sc.src = 'ref/ref-' + src + '.js';
    sc.async = true;
    var finish = function (state) {
      _refLoaded[src] = state;
      var q = _refLoading[src] || []; delete _refLoading[src];
      q.forEach(function (f) { try { f(); } catch (e) {} });
    };
    sc.onload  = function () { finish('ok'); };
    sc.onerror = function () { finish('fail'); };   /* ملف ناقص لا يُسقط الشاشة */
    document.head.appendChild(sc);
  }

  var REF_FIELDS = ['what', 'meaning', 'why', 'inBody', 'prep', 'reading',
                    'up', 'down', 'pitfalls', 'updated'];
  function refMerge(r) {
    if (!r || r._body) return r;
    var b = (typeof REF_BODY !== 'undefined' && REF_BODY) ? REF_BODY[r.id] : null;
    if (b) {
      REF_FIELDS.forEach(function (k) { if (b[k] && !r[k]) r[k] = b[k]; });
      /* ⚠️ `src` محجوز في الفهرس لوسم ملف الجسم (refs.js يَسِمه)،
         فروابط المصادر تُسمّى `sources` في الجسم وتُنقل باسم آخر —
         نفس الفخّ الذي أُصلح في rxMerge، لا يُكرَّر هنا. */
      if (b.sources && !r.srcList) r.srcList = b.sources;
      r._body = true;
    }
    return r;
  }

  function openRef(id) {
    var r = REF_BY_ID[id];
    if (!r) return;
    _refId = id;
    refSave();
    if (r._body || !r.src) { setView('ref'); return; }
    refBodyReady(r.src, function () {
      refMerge(r);
      if (_refId === id) setView('ref');
    });
  }
  function refBack() {
    /* جاء من بطاقة مرض ⇒ يرجع إليها لا إلى فهرس المراجع */
    if (_retTo && _retTo.view === 'diseases' && DIS_BY_ID[_retTo.id]) {
      var back = _retTo.id;
      retClear();
      _refId = null; refSave();
      openDisease(back);
      return;
    }
    retClear();
    _refId = null;
    refSave();
    renderRefs();
    syncHistory(false);
  }

  function renderRefs() {
    var wrap = $('#refView');
    if (!wrap) return;
    var idx = $('#refIndex'), page = $('#refPage');
    var r = _refId ? REF_BY_ID[_refId] : null;
    if (_refId && !r) { _refId = null; refSave(); syncHistory(true); }

    if (r) {
      idx.hidden = true;
      page.hidden = false;
      /* شبكة أمان تغطّي كل الطرق المؤدّية إلى البطاقة — رابط عميق أو
         استعادة من التخزين أو رجوع المتصفّح، لا فتحاً بضغطة فقط */
      if (!r._body && r.src && _refLoaded[r.src] !== 'ok') {
        refBodyReady(r.src, function () {
          if (_refId === r.id) { refMerge(r); renderRefPage(r, page); }
        });
      }
      renderRefPage(r, page);
    } else {
      page.hidden = true;
      page.innerHTML = '';
      idx.hidden = false;
      renderRefIndex();
    }
    wrap.scrollTop = 0;
  }

  /* --- المستوى الأول: الفهرس --- */
  function renderRefIndex() {
    var t = RFT();
    $('#refTitle').textContent = t.title;

    var si = $('#refSearch');
    if (si) {
      si.placeholder = t.search;
      si.setAttribute('aria-label', t.search);
      if (si.value !== _refQ) si.value = _refQ;
    }

    var box = $('#refGroups');
    box.innerHTML = '';

    var n = norm(_refQ);
    var list = REFL.filter(function (r) {
      if (!r) return false;
      if (!n) return true;
      if (norm(r.name && r.name.ar).indexOf(n) !== -1) return true;
      if (norm(r.name && r.name.en).indexOf(n) !== -1) return true;
      var kw = r.keywords || {};
      var all = [].concat(kw.ar || [], kw.en || []);
      for (var i = 0; i < all.length; i++) if (norm(all[i]).indexOf(n) !== -1) return true;
      return false;
    });

    setCount('#refCount', list.length, REFL.length, t);

    var order = [], byG = {};
    list.forEach(function (r) {
      var g = r.group || 'other';
      if (!byG[g]) { byG[g] = []; order.push(g); }
      byG[g].push(r);
    });
    /* «أخرى» سلّة ما لم يُصنَّف ⇒ مكانها آخر الفهرس لا وسطه */
    var _oi = order.indexOf('other');
    if (_oi !== -1) order.push(order.splice(_oi, 1)[0]);

    var searching = !!n;
    order.forEach(function (g) {
      var G = groupSection('ref', g, refGroupName(g), byG[g].length, t.count(byG[g].length), searching);
      byG[g].forEach(function (r) { G.grid.appendChild(refCard(r)); });
      box.appendChild(G.sec);
    });

    $('#refEmpty').hidden = list.length > 0;
    $('#refEmpty').textContent = t.noResults;
  }

  function refCard(r) {
    var b = el('button', 'dxcard refcard');
    b.type = 'button';
    b.setAttribute('data-ref', r.id);

    var top = el('div', 'dxcard-top');
    top.appendChild(icon('i-flask', 'dxcard-ic'));
    var tx = el('span', 'dxcard-titles');
    tx.appendChild(el('span', 'dxcard-ar', L(r.name)));
    tx.appendChild(el('span', 'dxcard-en', S.lang === 'ar' ? (r.name.en || '') : (r.name.ar || '')));
    top.appendChild(tx);
    b.appendChild(top);

    /* 🔴 شارة النوع في صفٍّ مستقلّ لا داخل `dxcard-top`.
       جُرّبت أوّلاً كشقيقة `dxcard-tag` في بطاقة المرض، فانكسرت
       على الجوّال: هناك الشارة نادرة وقصيرة («نادر»)، وهنا دائمة
       وأطول («مفهوم جينومي»)، و`flex:none` عليها يسحق الاسمَ في
       بطاقةٍ عرضها ١٥٠ بكسل فيركب النصّان. الصفّ المستقل يلفّ.
       أُمسك باللقطة لا بالطرفية — الطرفية كانت نظيفة تماماً. */
    var kn = refKindName(r.kind);
    if (kn || r.unit) {
      var meta = el('div', 'ref-meta');
      if (kn) meta.appendChild(el('span', 'dxcard-tag ref-kind', L(kn)));
      /* الوحدة أوّل ما يبحث عنه من يمسك ورقة تحليل */
      if (r.unit) meta.appendChild(el('span', 'ref-unit', r.unit));
      b.appendChild(meta);
    }
    b.appendChild(el('p', 'dxcard-short', L(r.short)));
    b.addEventListener('click', function () { openRef(r.id); });
    return b;
  }

  /* --- المستوى الثاني: البطاقة المرجعية --- */
  function renderRefPage(r, page) {
    refMerge(r);
    var t = RFT();
    page.innerHTML = '';

    var head = el('header', 'dx-head');
    var bk = el('button', 'lib-back dx-back');
    bk.type = 'button';
    bk.appendChild(icon('i-chev'));
    bk.appendChild(el('span', null, t.back));
    bk.title = NT().back;
    bk.setAttribute('aria-label', NT().back + ' — ' + t.title);
    bk.addEventListener('click', refBack);
    head.appendChild(bk);

    var tt = el('span', 'lib-head-titles');
    tt.appendChild(el('span', 'lib-head-ar', L(r.name)));
    tt.appendChild(el('span', 'lib-head-en', S.lang === 'ar' ? (r.name.en || '') : (r.name.ar || '')));
    head.appendChild(tt);
    var kn2 = refKindName(r.kind);
    if (kn2) head.appendChild(el('span', 'dx-tier', L(kn2)));
    page.appendChild(head);

    /* الوحدة شريطٌ ظاهر أعلى البطاقة — فحصٌ بلا وحدة رقمٌ بلا معنى */
    if (r.unit) {
      var su = el('section', 'dx-sec ref-unit-row');
      su.appendChild(el('h3', 'p-section-title', t.unit));
      su.appendChild(el('p', 'p-text ref-unit-big', r.unit));
      page.appendChild(su);
    }

    /* ⚠️ الحقل الفارغ يُتخطّى بهدوء — وهذا ما يجعل البنية الواحدة
       تسع الفحص المخبري والمفهوم الجينومي معاً: المفهوم لا يملك
       «ما يرفعه» ولا «قبل الفحص»، فلا يُرسم قسمهما أصلاً. */
    [['short', t.short], ['what', t.what], ['meaning', t.meaning], ['why', t.why],
     ['inBody', t.inBody], ['prep', t.prep], ['reading', t.reading],
     ['up', t.up], ['down', t.down]].forEach(function (f) {
      var txt = L(r[f[0]]);
      if (!txt) return;
      var sec = el('section', 'dx-sec');
      sec.appendChild(el('h3', 'p-section-title', f[1]));
      sec.appendChild(el('p', 'p-text', txt));
      page.appendChild(sec);
    });

    /* أهمّ حقل في البطاقة المرجعية — نظير seeDoctor في بطاقة المرض:
       هنا لا يُنقذ القارئَ تحذيرٌ من عَرَض، بل تحذيرٌ من قراءة خاطئة. */
    var pf = L(r.pitfalls);
    if (pf) {
      var a = el('section', 'dx-alert');
      var ah = el('h3', 'dx-alert-title');
      ah.appendChild(icon('i-alert'));
      ah.appendChild(el('span', null, t.pitfalls));
      a.appendChild(ah);
      a.appendChild(el('p', 'dx-alert-text', pf));
      page.appendChild(a);
    }

    /* «في التطبيق» — أي معرّف عضو لا وجود له في ITEM_BY_ID يُتجاهَل بصمت */
    var orgs = (Object.prototype.toString.call(r.organs) === '[object Array]' ? r.organs : [])
                 .filter(function (id) { return !!ITEM_BY_ID[id]; });
    if (orgs.length) {
      var s2 = el('section', 'dx-sec');
      s2.appendChild(el('h3', 'p-section-title', t.inApp));
      var row = el('div', 'dx-organs');
      orgs.forEach(function (id) {
        var it = ITEM_BY_ID[id];
        var b = el('button', 'dx-organ');
        b.type = 'button';
        b.setAttribute('data-id', id);
        b.appendChild(el('span', 'dx-organ-name', L(it.name)));
        b.appendChild(icon('i-chev', 'dx-organ-chev'));
        b.addEventListener('click', function () { open(id); setView('home'); });
        row.appendChild(b);
      });
      s2.appendChild(row);
      page.appendChild(s2);
    }

    /* أمراض ذات صلة — تفتح بطاقة المرض وتحفظ نقطة الرجوع إلى هنا */
    var dis = (Object.prototype.toString.call(r.diseases) === '[object Array]' ? r.diseases : [])
                .filter(function (id) { return (typeof DIS_BY_ID !== 'undefined') && !!DIS_BY_ID[id]; });
    if (dis.length) {
      var s3 = el('section', 'dx-sec');
      s3.appendChild(el('h3', 'p-section-title', t.related));
      var row3 = el('div', 'dx-organs');
      dis.forEach(function (id) {
        var dd = DIS_BY_ID[id];
        var b3 = el('button', 'dx-organ');
        b3.type = 'button';
        b3.setAttribute('data-dis', id);
        b3.appendChild(el('span', 'dx-organ-name', L(dd.name)));
        b3.appendChild(icon('i-chev', 'dx-organ-chev'));
        b3.addEventListener('click', function () { retSet('ref', r.id); openDisease(id); });
        row3.appendChild(b3);
      });
      s3.appendChild(row3);
      page.appendChild(s3);
    }

    /* المصادر — البطاقة مسنودة، والقارئ يرى إلى أين */
    var srcs = (Object.prototype.toString.call(r.srcList) === '[object Array]') ? r.srcList : [];
    if (srcs.length) {
      var s4 = el('section', 'dx-sec');
      s4.appendChild(el('h3', 'p-section-title', t.srcT));
      var ul = el('div', 'rx-src');
      srcs.forEach(function (u) {
        var a2 = document.createElement('a');
        a2.className = 'rx-src-link';
        a2.href = u; a2.target = '_blank'; a2.rel = 'noopener noreferrer';
        a2.textContent = String(u).replace(/^https?:\/\//, '').split('/')[0];
        ul.appendChild(a2);
      });
      s4.appendChild(ul);
      page.appendChild(s4);
    }

    page.appendChild(el('p', 'disclaimer dx-note', t.disclaimer));
  }

  /* ============================================================
     البحث
     ============================================================ */
  function norm(s) {
    return (s || '').toString().toLowerCase()
      .replace(/[ً-ْٰ]/g, '')          /* تشكيل */
      .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .replace(/\s+/g, ' ').trim();
  }

  /* ترتيب النتائج: الاسم أولاً ثم الوصف ثم الأجزاء والأمراض */
  function score(it, n) {
    var nameAr = norm(it.name.ar), nameEn = norm(it.name.en), id = norm(it.id);
    if (nameAr === n || nameEn === n || id === n) return 100;
    if (nameAr.indexOf(n) === 0 || nameEn.indexOf(n) === 0 || id.indexOf(n) === 0) return 90;
    /* مطابقة كلمة كاملة داخل الاسم (مثل «كبد» في «الكبد») */
    if ((' ' + nameAr + ' ').indexOf(n) !== -1 || (' ' + nameEn + ' ').indexOf(n) !== -1) return 80;
    if (norm(L(it.short)).indexOf(n) !== -1) return 50;
    var parts = norm(it.parts.map(function (p) { return p.ar + ' ' + p.en; }).join(' '));
    if (parts.indexOf(n) !== -1) return 30;
    var dis = norm(it.diseases.map(function (d) { return d.name.ar + ' ' + d.name.en + ' ' + d.desc.ar + ' ' + d.desc.en; }).join(' '));
    if (dis.indexOf(n) !== -1) return 20;
    if (norm(L(it.desc)).indexOf(n) !== -1) return 10;
    return 0;
  }

  function searchItems(q) {
    var n = norm(q);
    if (!n) return [];
    return ITEMS
      .map(function (it) { return { it: it, s: score(it, n) }; })
      .filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .map(function (r) { return r.it; });
  }

  /* ============================================================
     البحث الموحّد — عضو · مرض · دواء في صندوق واحد
     ------------------------------------------------------------
     الإنسان يفكّر بـ«بنادول» أو «صداع»، لا بـ«في أي شاشة أنا».
     وكان لازم يعرف نوع سؤاله أولاً ليختار الشاشة الصحيحة.

     ⚠️ searchItems تبقى كما هي ولا تُوسَّع: renderGrid يستعملها
     لترشيح المكتبة مسطّحةً وهي تبني بطاقات أعضاء من ITEM_BY_ID،
     فلو أرجعَت أمراضاً وأدويةً لانكسرت المكتبة بصمت.
     ============================================================ */
  var FIND_I18N = {
    ar: { ph: 'ابحث عن عضو أو مرض أو دواء أو فحص …', organ: 'عضو', disease: 'مرض', drug: 'دواء', ref: 'مرجع' },
    en: { ph: 'Search organs, conditions, medicines, tests …', organ: 'Organ', disease: 'Condition', drug: 'Medicine', ref: 'Reference' }
  };
  var FT = function () { return FIND_I18N[S.lang] || FIND_I18N.ar; };

  /* ترجيح مشترك للاسم: مطابق ← بادئة ← كلمة كاملة */
  function nameScore(o, n) {
    var a = norm(o && o.ar), e = norm(o && o.en);
    if (a === n || e === n) return 100;
    if (a.indexOf(n) === 0 || e.indexOf(n) === 0) return 90;
    if ((' ' + a + ' ').indexOf(' ' + n) !== -1 || (' ' + e + ' ').indexOf(' ' + n) !== -1) return 80;
    if (a.indexOf(n) !== -1 || e.indexOf(n) !== -1) return 65;
    return 0;
  }

  function scoreDisease(d, n) {
    var s = nameScore(d.name, n);
    if (!s && norm(d.id).indexOf(n) === 0) s = 88;
    if (!s && norm(L(d.short)).indexOf(n) !== -1) s = 45;
    return s;
  }

  function scoreDrug(d, n) {
    var s = nameScore(d.name, n);
    if (!s && norm(d.id).indexOf(n) === 0) s = 88;
    /* الاسم التجاري هو ما يقرأه الناس على العلبة ⇒ يوازي الاسم العلمي */
    if (!s) {
      var br = (Object.prototype.toString.call(d.brands) === '[object Array]') ? d.brands : [];
      for (var i = 0; i < br.length; i++) {
        var b = norm(br[i]);
        if (b === n) { s = 96; break; }
        if (b.indexOf(n) === 0) { s = 86; break; }
        if (b.indexOf(n) !== -1) { s = 62; break; }
      }
    }
    if (!s) {
      var kw = d.keywords || {};
      var all = [].concat(kw.ar || [], kw.en || []);
      for (var j = 0; j < all.length; j++) if (norm(all[j]).indexOf(n) !== -1) { s = 55; break; }
    }
    if (!s && norm(L(d.short)).indexOf(n) !== -1) s = 42;
    return s;
  }

  /* ترجيح البطاقة المرجعية — الاسم ثم المعرّف ثم الكلمات ثم النبذة.
     والوحدة ليست مفتاح بحث: «ng/mL» تُطابق عشرات الفحوص فتُغرق النتائج. */
  function scoreRef(r, n) {
    var s = nameScore(r.name, n);
    if (!s && norm(r.id).indexOf(n) === 0) s = 88;
    if (!s) {
      var kw = r.keywords || {};
      var all = [].concat(kw.ar || [], kw.en || []);
      for (var i = 0; i < all.length; i++) if (norm(all[i]).indexOf(n) !== -1) { s = 55; break; }
    }
    if (!s && norm(L(r.short)).indexOf(n) !== -1) s = 42;
    return s;
  }

  function searchAll(q) {
    var n = norm(q);
    if (!n) return [];
    var out = [];
    ITEMS.forEach(function (it) {
      var s = score(it, n);
      if (s > 0) out.push({ kind: 'organ', id: it.id, name: it.name, s: s, it: it });
    });
    if (hasDis()) DIS.forEach(function (d) {
      var s = scoreDisease(d, n);
      if (s > 0) out.push({ kind: 'disease', id: d.id, name: d.name, s: s });
    });
    if (hasRx()) RXL.forEach(function (d) {
      var s = scoreDrug(d, n);
      if (s > 0) out.push({ kind: 'drug', id: d.id, name: d.name, s: s });
    });
    if (hasRef()) REFL.forEach(function (r) {
      var s = scoreRef(r, n);
      if (s > 0) out.push({ kind: 'ref', id: r.id, name: r.name, s: s });
    });
    return out.sort(function (a, b) { return b.s - a.s; });
  }

  /* فتح النتيجة حسب نوعها — openDisease/openDrug تبدّلان الشاشة بنفسيهما */
  function openResult(r) {
    if (r.kind === 'organ')        { open(r.id); setView('home'); }
    else if (r.kind === 'disease') { openDisease(r.id); }
    else if (r.kind === 'ref')     { openRef(r.id); }
    else                           { openDrug(r.id); }
  }

  function renderSearch() {
    var q = $('#search').value;
    var box = $('#searchResults');
    if (!norm(q)) { box.hidden = true; box.innerHTML = ''; return; }
    var res = searchAll(q);
    box.innerHTML = '';
    if (!res.length) {
      box.appendChild(el('div', 'search-empty', T().noResults));
      box.hidden = false;
      return;
    }
    var ft = FT();
    res.slice(0, 12).forEach(function (r, i) {
      var b = el('button');
      b.type = 'button';
      if (i === 0) b.className = 'is-cursor';

      var th = el('span', 'sr-thumb');
      if (r.kind === 'organ') b.appendChild(th);
      else {
        var ic = el('span', 'sr-thumb sr-ic');
        ic.appendChild(icon(r.kind === 'disease' ? 'i-pulse'
                          : (r.kind === 'ref' ? 'i-flask' : 'i-pill')));
        b.appendChild(ic);
      }

      var tx = el('span');
      tx.appendChild(el('span', 'sr-ar', L(r.name)));
      tx.appendChild(document.createElement('br'));
      tx.appendChild(el('span', 'sr-en', S.lang === 'ar' ? (r.name.en || '') : (r.name.ar || '')));
      b.appendChild(tx);
      b.appendChild(el('span', 'sr-kind sr-kind-' + r.kind, ft[r.kind]));

      b.addEventListener('click', function () {
        openResult(r);
        $('#search').value = ''; box.hidden = true;
      });
      box.appendChild(b);

      if (r.kind === 'organ') {
        bgImage(th, r.it.thumb);
        probe(r.it.thumb, function (ok) { if (!ok) bgImage(th, r.it.img); });
      }
    });
    box.hidden = false;
  }

  /* ============================================================
     التاريخ والروابط العميقة  —  #/<id>  ·  #/view/library
     ------------------------------------------------------------
     زر «رجوع» في المتصفّح ينقّل داخل التطبيق ولا يغادره إلا بعد
     استنفاد التاريخ. اللغة والمظهر والمفضلة تبقى في localStorage
     لا في التاريخ.
     ============================================================ */
  var _navLock = false;              /* أثناء الرجوع لا ندفع مدخلاً جديداً */
  var _histT = 0, _histReplace = false;

  function routeHash() {
    /* صفحة قسم داخل المكتبة لها عنوانها: #/view/library/<sec> */
    if (S.view === 'library')   return '#/view/library' + (_libSec ? '/' + _libSec : '');
    if (S.view === 'diseases')  return '#/view/diseases' + (_disId ? '/' + _disId : '');
    if (S.view === 'drugs')     return '#/view/drugs'    + (_rxId  ? '/' + _rxId  : '');
    if (S.view === 'ref')       return '#/view/ref'      + (_refId ? '/' + _refId : '');
    if (S.view === 'favorites') return '#/view/favorites';
    return '#/' + S.id;
  }

  function parseHash(h) {
    h = String(h || '').replace(/^#\/?/, '');
    if (!h) return null;
    var p = h.split('/');
    if (p[0] === 'view') {
      var v = p[1];
      if (v === 'library')   return { view: 'library', sec: p[2] || null };
      if (v === 'diseases')  return hasDis() ? { view: 'diseases', dis: p[2] || null } : null;
      /* الأدوية شاشة كاملة مثل الأمراض: بلا هذا السطر كان كل رابط
         `#/view/drugs/<id>` يُقرأ «غير معروف» فيسقط للرئيسية */
      if (v === 'drugs')     return hasRx()  ? { view: 'drugs',    rx:  p[2] || null } : null;
      /* البطاقات المرجعية شاشة كاملة مثلهما — والسطر هنا لا يُنسى:
         غيابه يجعل كل رابط `#/view/ref/<id>` يُقرأ «غير معروف». */
      if (v === 'ref')       return hasRef() ? { view: 'ref',      ref: p[2] || null } : null;
      if (v === 'favorites') return { view: 'favorites' };
      if (v === 'home')      return { view: 'home' };
      return null;
    }
    return ITEM_BY_ID[p[0]] ? { id: p[0], view: 'home' } : null;
  }

  function commitHistory(replace) {
    var url = routeHash();
    var st  = { id: S.id, view: S.view, sec: _libSec, dis: _disId, rx: _rxId, ref: _refId };
    try {
      /* نفس العنوان ⇒ استبدال لا دفع، فلا يتكرّر المدخل */
      if (replace || location.hash === url) history.replaceState(st, '', url);
      else                                  history.pushState(st, '', url);
    } catch (e) { /* file:// أو تقييد ⇒ نتجاهل بهدوء */ }
  }

  /* تُجمَّع نداءات open()+setView() المتتابعة في مدخل واحد */
  function syncHistory(replace) {
    if (_navLock) return;
    if (replace) _histReplace = true;
    if (_histT) return;
    _histT = setTimeout(function () {
      _histT = 0;
      var rep = _histReplace; _histReplace = false;
      commitHistory(rep);
    }, 0);
  }

  function applyRoute(st) {
    if (!st) return;
    _navLock = true;
    try {
      if (st.id && ITEM_BY_ID[st.id] && st.id !== S.id) open(st.id);
      /* هنا كان جذر عطل زرّ رجوع المتصفّح: 'drugs' غير مذكورة في هذي
         القائمة فتسقط إلى 'home' — الحالة المحفوظة سليمة والقارئ يُرمى
         للرئيسية. أي شاشة تُضاف لاحقاً يجب أن تمرّ من هنا. */
      var v = (st.view === 'library' || st.view === 'favorites' ||
               (st.view === 'diseases' && hasDis()) ||
               (st.view === 'drugs'    && hasRx())  ||
               (st.view === 'ref'      && hasRef())) ? st.view : 'home';
      /* الرجوع/التقدّم داخل المكتبة يستعيد القسم المفتوح (أو الفهرس) */
      if (v === 'library')  { _libSec = st.sec || null; libSecSave(); }
      /* وكذلك داخل الأمراض: المرض المفتوح (أو الفهرس) */
      if (v === 'diseases') { _disId = (st.dis && DIS_BY_ID[st.dis]) ? st.dis : null; disSave(); }
      if (v === 'drugs')    { _rxId  = (st.rx  && RX_BY_ID[st.rx])   ? st.rx  : null; rxSave();  }
      if (v === 'ref')      { _refId = (st.ref && REF_BY_ID[st.ref]) ? st.ref : null; refSave(); }
      setView(v);
    } finally { _navLock = false; }
  }

  /* ============================================================
     الأفعال
     ============================================================ */
  function open(id) {
    if (!ITEM_BY_ID[id]) return;
    S.id = id;
    S.back = false;
    S.zoom = 1;
    S.panX = 0; S.panY = 0;
    hideTip();
    save('current', id);
    navToItem(id);          /* الشريط ينتقل لقسم العضو ويُبرز بطاقته */
    renderStage();
    renderPanel();
    syncHistory(false);
  }

  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    /* إعادة تشغيل الانتقال */
    void t.offsetWidth;
    t.classList.add('is-shown');
    clearTimeout(t._tm);
    t._tm = setTimeout(function () {
      t.classList.remove('is-shown');
      setTimeout(function () { t.hidden = true; }, 260);
    }, 2200);
  }

  function toggleFav() {
    var id = item().id;
    var i = S.fav.indexOf(id);
    if (i === -1) { S.fav.push(id); toast(T().favAdded); }
    else          { S.fav.splice(i, 1); toast(T().favRemoved); }
    save('fav', S.fav);
    renderPanel();
    if (S.view === 'favorites') renderGrid();
  }

  function doTool(tool) {
    if (tool === 'rotate') {
      var it = item();
      probe(it.imgBack, function (ok) {
        if (!ok) { toast(T().noBackView); return; }
        S.back = !S.back;
        hideTip();
        renderStage();          /* يعيد بناء الطبقة من طقم المنظر الجديد */
      });
    } else if (tool === 'labels') {
      if (!labelsOf(item())) { toast(T().noLabels); return; }
      S.labels = !S.labels;
      hideTip();
      save('labels', S.labels ? '1' : '0');
      syncLabelTool();
      renderLabels();
    } else if (tool === 'zoomin') {
      hideTip(); S.zoom = Math.min(3, +(S.zoom + 0.2).toFixed(2)); applyZoom();
    } else if (tool === 'zoomout') {
      hideTip(); S.zoom = Math.max(0.4, +(S.zoom - 0.2).toFixed(2)); applyZoom();
    } else if (tool === 'reset') {
      S.zoom = 1; S.panX = 0; S.panY = 0; S.back = false; hideTip(); renderStage();
    } else if (tool === 'fullscreen') {
      setFs(!_fs);
    }
  }

  /* ============================================================
     ملء الشاشة
     ------------------------------------------------------------
     المسرح وحده كان يطلب ملء الشاشة من المتصفّح، فيتمدّد على عرض
     النافذة كاملاً بينما يبقى الشريط الجانبي واللوحة في مكانهما
     فوقه ⇒ الصورة تتمركز على عرض لا تملكه كله ويظهر فراغ ضخم.
     الحل: صنف على الجذر يخفي الشريط واللوحة معاً ويجعل التخطيط
     عموداً واحداً، فتتمركز الصورة في العرض كامل. وطلب ملء شاشة
     المتصفّح يبقى فوقه (يخفي إطار المتصفّح)؛ وإن رُفض بقي الوضع
     شغّالاً بالصنف وحده. الخروج: نفس الزر · Esc · أو خروج المتصفّح.
     ============================================================ */
  var _fs = false;
  function fsActive() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }

  function syncFsTool() {
    var b = $('.tool[data-tool="fullscreen"]');
    if (b) { b.classList.toggle('is-on', _fs); b.setAttribute('aria-pressed', _fs ? 'true' : 'false'); }
  }

  function setFs(on) {
    on = !!on;
    if (on === _fs) return;
    _fs = on;
    document.documentElement.classList.toggle('is-fs', _fs);
    syncFsTool();

    var st = $('#stage');
    if (_fs) {
      if (!fsActive()) {
        var req = st.requestFullscreen || st.webkitRequestFullscreen;
        if (req) { try { var pr = req.call(st); if (pr && pr['catch']) pr['catch'](function () {}); } catch (e) {} }
      }
    } else if (fsActive()) {
      var ex = document.exitFullscreen || document.webkitExitFullscreen;
      if (ex) { try { ex.call(document); } catch (e) {} }
    }

    hideTip();
    applyZoom();
    scheduleLabels();
    if (!_fs) scrollNavActive();
  }

  /* ============================================================
     اللغة والمظهر
     ============================================================ */
  function applyLang() {
    var t = T();
    document.documentElement.lang = t.lang;
    document.documentElement.dir  = t.dir;

    $('#slogan').textContent = t.slogan;
    /* اسم التطبيق وسطره يتبعان اللغة — الكلمة الأولى عادية والباقي بلون التمييز */
    var bt = $('#brandTitle');
    if (bt) {
      var w = String(t.appName).split(' ');
      var first = w.shift(), rest = w.join(' ');
      bt.textContent = first + (rest ? ' ' : '');
      if (rest) { var sp = document.createElement('span'); sp.textContent = rest; bt.appendChild(sp); }
    }
    $('#brandSub').textContent = String(t.tagline).replace(/\s*·\s*/g, ' \u00a0•\u00a0 ');
    /* I18N في data.js لا يُعدَّل ⇒ نصّ البحث الموحّد يُتجاوَز محلياً */
    $('#search').placeholder = FT().ph;
    $('#search').setAttribute('aria-label', FT().ph);
    $('#themeBtn').title = t.theme;
    $('#settingsBtn').title = t.settings;

    $$('.lang-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === S.lang);
    });

    var tabNames = { info: t.tabInfo, 'function': t.tabFunction, diseases: t.tabDiseases };
    $$('.tab').forEach(function (b) { b.textContent = tabNames[b.getAttribute('data-tab')]; });

    var toolNames = { rotate: t.rotate, labels: t.labels, zoomin: t.zoomIn, zoomout: t.zoomOut, reset: t.reset, fullscreen: t.fullscreen };
    $$('.tool').forEach(function (b) {
      b.querySelector('span').textContent = toolNames[b.getAttribute('data-tool')];
    });

    var navNames = { home: t.home, library: t.library, favorites: t.favorites,
                     diseases: DX().nav, drugs: RXT().nav, ref: RFT().nav };
    $$('.nav-btn').forEach(function (b) {
      b.querySelector('span').textContent = navNames[b.getAttribute('data-view')];
    });

    $('#setTitle').textContent = t.settingsTitle;
    $('#setLangLabel').textContent = t.settingLang;
    $('#setThemeLabel').textContent = t.settingTheme;
    $('#setDark').textContent = t.dark;
    $('#setLight').textContent = t.light;
    $('#disclaimer').textContent = t.disclaimer;

    /* نافذة الملاحظات تملك نصوصها ⇒ تمرر لها اللغة كما لواجهة التقارير.
       ⚠️ صراحة لا قراءة من الـDOM: هذي الدالة تنادى قبل تحديث وسم
       `is-active` على ازرار اللغة، فقراءتها من هناك ترجع السابقة. */
    if (window.anatomyFeedback && window.anatomyFeedback.applyLang) {
      window.anatomyFeedback.applyLang(S.lang);
    }

    save('lang', S.lang);
    renderSystems();
    renderStage();
    renderPanel();
    if (S.view === 'library' || S.view === 'favorites') renderGrid();
    /* كل شاشة تُعيد رسم نفسها عند تبديل اللغة — والبطاقة المفتوحة معها.
       كانت الأدوية ساقطة من هنا فتبقى بطاقتها بالعربية بعد التبديل:
       شاشةٌ خامسة أُضيفت إلى قائمةٍ كُتبت لأربع. أيّ شاشة جديدة تمرّ من هنا. */
    else if (S.view === 'diseases') renderDiseases();
    else if (S.view === 'drugs')    renderDrugs();
    else if (S.view === 'ref')      renderRefs();
    renderSearch();
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', S.theme);
    $('#themeIcon').setAttribute('href', S.theme === 'dark' ? '#i-moon' : '#i-sun');
    $$('#setTheme button').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-set-theme') === S.theme);
    });
    $$('#setLang button').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === S.lang);
    });
    save('theme', S.theme);
  }

  /* ============================================================
     الربط
     ============================================================ */
  function wire() {
    $$('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        S.lang = b.getAttribute('data-lang'); applyLang(); applyTheme();
      });
    });
    $$('#setLang button').forEach(function (b) {
      b.addEventListener('click', function () {
        S.lang = b.getAttribute('data-lang'); applyLang(); applyTheme();
      });
    });
    $$('#setTheme button').forEach(function (b) {
      b.addEventListener('click', function () { S.theme = b.getAttribute('data-set-theme'); applyTheme(); });
    });

    $('#themeBtn').addEventListener('click', function () {
      S.theme = (S.theme === 'dark') ? 'light' : 'dark'; applyTheme();
    });
    $('#settingsBtn').addEventListener('click', function () { $('#settingsModal').hidden = false; });
    $('#setClose').addEventListener('click', function () { $('#settingsModal').hidden = true; });
    $('#settingsModal').addEventListener('click', function (e) {
      if (e.target === this) this.hidden = true;
    });

    $$('.tab').forEach(function (b) {
      b.addEventListener('click', function () { S.tab = b.getAttribute('data-tab'); renderPanel(); });
    });
    $$('.tool').forEach(function (b) {
      b.addEventListener('click', function () { doTool(b.getAttribute('data-tool')); });
    });
    $$('.nav-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var v = b.getAttribute('data-view');
        /* زرّ الشريط السفلي يعيد دائماً إلى بداية شاشته لا إلى آخر موضع فيها:
           «المكتبة» ⇒ فهرس الأقسام · «الأمراض» ⇒ فهرس الأمراض.
           (الرجوع لآخر قسم/مرض يبقى بزر رجوع المتصفّح) */
        if (v === 'library') { _libSec = null; try { libSecSave(); } catch (e) {} }
        retClear();
        if (v === 'diseases') { _disId = null; try { disSave(); } catch (e) {} }
        if (v === 'drugs')    { _rxId  = null; try { rxSave();  } catch (e) {} }
        if (v === 'ref')      { _refId = null; try { refSave(); } catch (e) {} }
        setView(v);
      });
    });

    $('#libBack').addEventListener('click', libBack);

    /* بحث الأدوية — بالاسم العلمي والتجاري معاً (الناس تعرف العلبة لا المادة) */
    var rsi = $('#rxSearch');
    if (rsi) {
      rsi.addEventListener('input', function () {
        _rxQ = rsi.value;
        if (S.view === 'drugs' && !_rxId) renderDrugIndex();
      });
      rsi.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { rsi.value = ''; _rxQ = ''; renderDrugIndex(); rsi.blur(); }
      });
    }

    /* بحث الأمراض — ترشيح فوري بالاسم العربي والإنجليزي */
    var dsi = $('#dxSearch');
    if (dsi) {
      dsi.addEventListener('input', function () {
        _disQ = dsi.value;
        if (S.view === 'diseases' && !_disId) renderDiseaseIndex();
      });
      dsi.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { dsi.value = ''; _disQ = ''; renderDiseaseIndex(); dsi.blur(); }
      });
    }

    /* بحث البطاقات المرجعية — بالاسمين وبالكلمات المفتاحية
       (الناس تكتب «مخزون الحديد» لا «الفيريتين») */
    var fsi = $('#refSearch');
    if (fsi) {
      fsi.addEventListener('input', function () {
        _refQ = fsi.value;
        if (S.view === 'ref' && !_refId) renderRefIndex();
      });
      fsi.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { fsi.value = ''; _refQ = ''; renderRefIndex(); fsi.blur(); }
      });
    }

    $('#favBtn').addEventListener('click', toggleFav);

    var si = $('#search');
    si.addEventListener('input', function () {
      renderSearch();
      if (S.view === 'library') renderGrid();   /* المكتبة تُرشَّح مسطّحة أثناء البحث */
    });
    si.addEventListener('focus', renderSearch);
    si.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var res = searchAll(si.value);
        if (res.length) { openResult(res[0]); si.value = ''; $('#searchResults').hidden = true; si.blur(); }
      } else if (e.key === 'Escape') {
        si.value = ''; $('#searchResults').hidden = true; si.blur();
        if (S.view === 'library') renderGrid();  /* رجوع للأقسام عند مسح البحث */
      }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-wrap')) $('#searchResults').hidden = true;
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        hideTip();
        if (!$('#settingsModal').hidden) $('#settingsModal').hidden = true;
        else if (_fs && !(e.target && e.target.tagName === 'INPUT')) setFs(false);
      }
      if (e.target.tagName === 'INPUT') return;
      if (e.key === '+' || e.key === '=') doTool('zoomin');
      if (e.key === '-')                  doTool('zoomout');
      if (e.key === '0')                  doTool('reset');
      if (e.key.toLowerCase && e.key.toLowerCase() === 'r') doTool('rotate');
      if (e.key.toLowerCase && e.key.toLowerCase() === 'l') doTool('labels');
    });

    /* --- السحب: ماوس --- */
    var stEl = $('#stage');
    stEl.addEventListener('pointerdown', function (e) { _ptrType = e.pointerType || 'mouse'; }, true);
    stEl.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      _dragMoved = 0;                            /* كل ضغطة تبدأ من صفر */
      dragStart(e.clientX, e.clientY, e.target);
      if (isDragging()) e.preventDefault();      /* يمنع سحب صورة المتصفّح */
    });
    window.addEventListener('mousemove', function (e) {
      if (!isDragging()) return;
      e.preventDefault();
      dragMove(e.clientX, e.clientY);
    });
    window.addEventListener('mouseup', dragStop);
    window.addEventListener('blur', dragStop);

    /* --- السحب: لمس (إصبع واحد) --- */
    stEl.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { dragStop(); return; }
      _dragMoved = 0;
      dragStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
    }, { passive: true });
    stEl.addEventListener('touchmove', function (e) {
      if (!isDragging() || e.touches.length !== 1) return;
      e.preventDefault();                        /* لا تمرير للصفحة أثناء السحب */
      dragMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    stEl.addEventListener('touchend', dragStop);
    stEl.addEventListener('touchcancel', dragStop);

    /* نقر مزدوج = خطوة تكبير، ومع Shift خطوة تصغير */
    stEl.addEventListener('dblclick', function (e) {
      if (e.target.closest('.toolbar') || S.view !== 'home') return;
      doTool(e.shiftKey ? 'zoomout' : 'zoomin');
    });

    /* --- الرجوع/التقدّم في المتصفّح --- */
    window.addEventListener('popstate', function (e) {
      applyRoute(e.state || parseHash(location.hash) || { id: S.id, view: 'home' });
    });
    /* تعديل يدوي للعنوان (رابط عميق مُلصق) */
    window.addEventListener('hashchange', function () {
      var st = parseHash(location.hash);
      if (!st) { commitHistory(true); return; }      /* هاش غير معروف ⇒ أعِد العنوان الصحيح */
      var v = st.view || 'home';
      if ((st.id || S.id) === S.id && v === S.view &&
          (v !== 'library'  || (st.sec || null) === (_libSec || null)) &&
          (v !== 'diseases' || (st.dis || null) === (_disId || null)) &&
          (v !== 'drugs'    || (st.rx  || null) === (_rxId  || null))) return;
      applyRoute({ id: st.id || S.id, view: v, sec: st.sec || null,
                   dis: st.dis || null, rx: st.rx || null });   /* rx كان ساقطاً هنا */
    });

    /* إغلاق بطاقة النبذة */
    document.addEventListener('click', function () { if (!wasDragged()) hideTip(); });
    window.addEventListener('scroll', hideTip, true);

    /* الطبقة تُقاس من صندوق الصورة المرسوم ⇒ يُعاد بناؤها عند أي تغيّر مقاس */
    $('#stageImg').addEventListener('load', scheduleLabels);
    window.addEventListener('resize', function () { hideTip(); applyZoom(); scheduleLabels(); });
    window.addEventListener('orientationchange', scheduleLabels);
    function onFsChange() {
      if (!fsActive() && _fs) setFs(false);      /* خروج من المتصفّح (Esc/F11) ⇒ نرجّع كل شيء */
      hideTip(); applyZoom(); scheduleLabels();
    }
    document.addEventListener('fullscreenchange', onFsChange);
    document.addEventListener('webkitfullscreenchange', onFsChange);
    if (window.ResizeObserver) {
      try { new ResizeObserver(scheduleLabels).observe($('#stageFigure')); } catch (e) {}
    }

    /* عجلة الفأرة على المسرح = تكبير/تصغير */
    $('#stage').addEventListener('wheel', function (e) {
      if (S.view !== 'home') return;
      if (!e.ctrlKey && Math.abs(e.deltaY) < 4) return;
      e.preventDefault();
      hideTip();
      S.zoom = Math.min(3, Math.max(0.4, +(S.zoom - Math.sign(e.deltaY) * 0.12).toFixed(2)));
      applyZoom();
    }, { passive: false });
  }

  /* ---------------- الإقلاع ---------------- */
  load();
  /* الرابط العميق يسبق آخر حالة محفوظة */
  var _bootDeepId = null;
  (function () {
    var st = parseHash(location.hash);
    if (!st) return;
    if (st.id) { S.id = st.id; save('current', st.id); _bootDeepId = st.id; }
    if (st.view) S.view = st.view;
    if (st.view === 'library')  { _libSec = st.sec || null; libSecSave(); }
    if (st.view === 'diseases') { _disId = (st.dis && DIS_BY_ID[st.dis]) ? st.dis : null; disSave(); }
    if (st.view === 'drugs')    { _rxId  = (st.rx  && RX_BY_ID[st.rx])   ? st.rx  : null; rxSave();  }
    if (st.view === 'ref')      { _refId = (st.ref && REF_BY_ID[st.ref]) ? st.ref : null; refSave(); }
  })();
  /* بلا بيانات مرجعية ⇒ الزرّ السادس يختفي بهدوء */
  if (!hasRef()) {
    var _nf = $('#navRef');   if (_nf && _nf.parentNode) _nf.parentNode.removeChild(_nf);
    var _fv = $('#refView');  if (_fv && _fv.parentNode) _fv.parentNode.removeChild(_fv);
    if (S.view === 'ref') S.view = 'home';
  }
  /* بلا بيانات أدوية ⇒ الزرّ الخامس يختفي بهدوء */
  if (!hasRx()) {
    var _nr = $('#navDrugs'); if (_nr && _nr.parentNode) _nr.parentNode.removeChild(_nr);
    var _rv = $('#rxView');   if (_rv && _rv.parentNode) _rv.parentNode.removeChild(_rv);
    if (S.view === 'drugs') S.view = 'home';
  }
  /* بلا بيانات أمراض ⇒ الزرّ الرابع يختفي بهدوء والشريط يعود ثلاثة */
  if (!hasDis()) {
    var _nd = $('#navDiseases'); if (_nd && _nd.parentNode) _nd.parentNode.removeChild(_nd);
    var _dv = $('#disView');     if (_dv && _dv.parentNode) _dv.parentNode.removeChild(_dv);
    if (S.view === 'diseases') S.view = 'home';
  }

  applyTheme();
  wire();
  applyLang();
  setView(S.view);
  /* رابط عميق ⇒ الشريط يفتح قسم ذلك العضو؛ وإلا يبقى على آخر قسم محفوظ */
  if (_bootDeepId) navToItem(_bootDeepId);
  else { markActiveSystem(); scrollNavActive(); }
  syncHistory(true);          /* الحالة الأولى: استبدال لا دفع */

  /* شعار الترويسة */
  bgImage($('#brandBadge'), 'img/logo.png');
  probe('img/logo.png', function (ok) { if (!ok) bgImage($('#brandBadge'), 'img/thumb-organs.png'); });
})();
