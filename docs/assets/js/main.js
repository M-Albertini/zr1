/* ==========================================================================
   ZR1 MOTORS — CORE SITE BEHAVIOR
   ========================================================================== */

// --- Header/footer markup is inlined directly in every page (no fetch involved), ---
// --- so it renders instantly and works even opening the .html file directly.     ---
function zr1LoadPartials(){
  zr1InitNav();
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
  return Promise.resolve();
}

function zr1InitNav(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  const iconOpen = document.getElementById('navIconOpen');
  const iconClose = document.getElementById('navIconClose');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      iconOpen.style.display = open ? 'none' : 'block';
      iconClose.style.display = open ? 'block' : 'none';
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      iconOpen.style.display = 'block';
      iconClose.style.display = 'none';
      document.body.style.overflow = '';
    }));
  }
  window.addEventListener('resize', () => {
    if(window.innerWidth > 1180 && nav && nav.classList.contains('open')){
      nav.classList.remove('open');
      document.body.style.overflow = '';
      if(toggle) toggle.setAttribute('aria-expanded', false);
      if(iconOpen) iconOpen.style.display = 'block';
      if(iconClose) iconClose.style.display = 'none';
    }
  });

  // Active link highlighting
  const current = document.body.getAttribute('data-page');
  if(current){
    const link = nav ? nav.querySelector(`[data-nav="${current}"]`) : null;
    if(link) link.classList.add('active');
  }
}

// --- Scroll reveal (IntersectionObserver) ---
window.zr1InitReveal = function(){
  const items = document.querySelectorAll('.reveal:not(.in)');
  if(!('IntersectionObserver' in window)){
    items.forEach(i => i.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  items.forEach(i => io.observe(i));
};

// --- Odometer-style counters (trust stats) ---
function zr1InitCounters(){
  const counters = document.querySelectorAll('[data-count]');
  if(!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      io.unobserve(entry.target);
      const el = entry.target;
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
      const duration = 1400;
      const start = performance.now();
      function tick(now){
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals).replace('.', ',') + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, {threshold:0.4});
  counters.forEach(c => io.observe(c));
}

// --- FAQ accordion ---
function zr1InitAccordion(){
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item.open').forEach(other => {
        if(other !== item){
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if(isOpen){
        item.classList.remove('open');
        a.style.maxHeight = null;
      }else{
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
}

// --- Simple multi-step form progress + WhatsApp handoff ---
function zr1InitLeadForm(formId, opts){
  const form = document.getElementById(formId);
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const lines = [];
    opts.fields.forEach(f => {
      const v = data.get(f.name);
      if(v) lines.push(`${f.label}: ${v}`);
    });
    const msg = encodeURIComponent(`${opts.title}\n\n` + lines.join('\n'));
    const success = form.parentElement.querySelector('.form-success');
    form.style.display = 'none';
    if(success) success.classList.add('show');
    const waLink = document.getElementById(formId + 'WaLink');
    if(waLink) waLink.href = `https://wa.me/5543996065534?text=${msg}`;
  });
}

// --- Gallery thumbnail swap (vehicle detail) ---
function zr1InitGallery(){
  const main = document.getElementById('galleryMain');
  const thumbs = document.querySelectorAll('.gallery-thumbs img');
  if(!main || !thumbs.length) return;
  thumbs.forEach(t => t.addEventListener('click', () => {
    main.src = t.src;
    thumbs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  }));
}

// --- Init on load ---
document.addEventListener('DOMContentLoaded', () => {
  zr1LoadPartials().then(() => {
    if(window.zr1AfterPartials) window.zr1AfterPartials();
  });
  zr1InitReveal();
  zr1InitCounters();
  zr1InitAccordion();
  zr1InitGallery();
});
