(function () {
  var S = window.SITE;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var get = function (path) { return path.split('.').reduce(function (o, k) { return o && o[k]; }, S); };
  var esc = function (t) { var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; };

  // Imagem com espaço reservado elegante caso o arquivo ainda não exista
  function photo(src, label) {
    return '<div class="ph" data-label="' + esc(label || '') + '">' +
      (src ? '<img src="' + esc(src) + '" alt="' + esc(label || '') + '" loading="lazy" onerror="this.remove()">' : '') +
      '</div>';
  }

  // Textos simples
  document.querySelectorAll('[data-bind]').forEach(function (el) { el.textContent = get(el.dataset.bind) || ''; });

  var im = S.imovel, co = S.condominio;

  // Hero
  $('#heroMedia').innerHTML = photo(im.capa, '');
  $('#priceLabel').innerHTML = im.mostrarValor
    ? '<strong>' + esc(im.valor) + '</strong> · ' + esc(im.condicoes)
    : '<strong>Valor sob consulta</strong> · ' + esc(im.condicoes);
  $('#heroStats').innerHTML = im.numeros.map(function (n) {
    return '<div><b>' + esc(n.valor) + (n.unidade ? '<small>' + esc(n.unidade) + '</small>' : '') + '</b><span>' + esc(n.rotulo) + '</span></div>';
  }).join('');

  // Diferenciais
  $('#diffs').innerHTML = im.diferenciais.map(function (d, i) {
    return '<li><span class="num">0' + (i + 1) + '</span><h3>' + esc(d.titulo) + '</h3><p>' + esc(d.texto) + '</p></li>';
  }).join('');

  // Galeria
  $('#gallery').innerHTML = im.fotos.map(function (f, i) {
    return '<button class="g-item g' + (i % 6) + '" data-i="' + i + '" aria-label="Ampliar ' + esc(f.legenda) + '">' + photo(f.src, f.legenda) + '<span class="cap">' + esc(f.legenda) + '</span></button>';
  }).join('');

  if (im.video) {
    var v = im.video.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/').replace('vimeo.com/', 'player.vimeo.com/video/');
    var vw = $('#videoWrap'); vw.hidden = false;
    vw.innerHTML = '<div class="ratio"><iframe src="' + esc(v) + '" title="Tour do imóvel" allowfullscreen loading="lazy"></iframe></div>';
  }

  // Ficha e lazer
  $('#spec').innerHTML = im.ficha.map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('');
  $('#lazer').innerHTML = im.lazer.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('');

  // Condomínio
  $('#dist').innerHTML = co.distancias.map(function (d) { return '<div><b>' + esc(d.tempo) + '</b><span>' + esc(d.destino) + '</span></div>'; }).join('');
  $('#seg').innerHTML = co.seguranca.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('');
  $('#infra').innerHTML = co.infraestrutura.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('');
  $('#map').src = co.mapa;

  // Corretores
  $('#agents').innerHTML = S.corretores.map(function (c) {
    var ini = c.nome.split(' ').map(function (p) { return p[0]; }).slice(0, 2).join('');
    var wa = 'https://wa.me/' + c.whatsapp + '?text=' + encodeURIComponent('Olá, ' + c.nome.split(' ')[0] + '! Tenho interesse na ' + im.titulo + '.');
    return '<article class="agent">' +
      '<div class="agent-photo" data-ini="' + esc(ini) + '">' + (c.foto ? '<img src="' + esc(c.foto) + '" alt="' + esc(c.nome) + '" onerror="this.remove()">' : '') + '</div>' +
      '<div><h3>' + esc(c.nome) + '</h3><p class="creci">' + esc(c.creci) + '</p><p>' + esc(c.bio) + '</p>' +
      '<p class="hours">' + esc(S.horario) + '</p>' +
      '<div class="agent-cta"><a class="btn btn-dark sm" target="_blank" rel="noopener" href="' + wa + '">WhatsApp</a>' +
      '<a class="link" href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a></div></div></article>';
  }).join('');
  $('#footCreci').textContent = S.corretores.map(function (c) { return c.nome + ' · ' + c.creci; }).join('   |   ');

  // FAQ
  $('#faqList').innerHTML = S.faq.map(function (f) {
    return '<details><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>';
  }).join('');

  // Links de WhatsApp
  function waLink(msg) { return 'https://wa.me/' + S.whatsappPrincipal + '?text=' + encodeURIComponent(msg); }
  document.querySelectorAll('.js-wa').forEach(function (a) {
    a.href = waLink(a.dataset.msg); a.target = '_blank'; a.rel = 'noopener';
    a.addEventListener('click', function () { track('Contact'); });
  });

  function track(ev) {
    try { if (window.fbq) fbq('track', ev); } catch (e) {}
    try { if (window.gtag) gtag('event', ev === 'Lead' ? 'generate_lead' : 'contact'); } catch (e) {}
  }

  // Máscara de telefone
  var tel = $('[name=telefone]');
  tel.addEventListener('input', function () {
    var d = tel.value.replace(/\D/g, '').slice(0, 11), o = d;
    if (d.length > 2) o = '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length > 7) o = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
    tel.value = o;
  });

  // Formulário → abre WhatsApp com a mensagem pronta
  $('#leadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, msg = $('#formMsg');
    if (!f.nome.value.trim() || f.telefone.value.replace(/\D/g, '').length < 10) { msg.textContent = 'Preencha nome e WhatsApp com DDD.'; return; }
    if (!f.lgpd.checked) { msg.textContent = 'Marque a autorização de contato para continuar.'; return; }
    track('Lead');
    var texto = 'Olá! Quero agendar uma visita à ' + im.titulo + ' (' + im.codigo + ').\n' +
      'Nome: ' + f.nome.value.trim() + '\nWhatsApp: ' + f.telefone.value +
      (f.email.value ? '\nE-mail: ' + f.email.value : '') +
      '\nPeríodo: ' + f.periodo.value + '\nPagamento: ' + f.pagamento.value;
    msg.textContent = 'Perfeito! Abrindo o WhatsApp para confirmar sua visita…';
    window.open(waLink(texto), '_blank');
  });

  // Lightbox
  var lb = $('#lightbox'), cur = 0;
  function show(i) {
    cur = (i + im.fotos.length) % im.fotos.length;
    $('#lbImg').innerHTML = photo(im.fotos[cur].src, im.fotos[cur].legenda);
    $('#lbCap').textContent = im.fotos[cur].legenda + '  ·  ' + (cur + 1) + '/' + im.fotos.length;
  }
  $('#gallery').addEventListener('click', function (e) {
    var b = e.target.closest('.g-item'); if (!b) return;
    show(+b.dataset.i); lb.hidden = false; document.body.style.overflow = 'hidden';
  });
  function close() { lb.hidden = true; document.body.style.overflow = ''; }
  $('.lb-close', lb).onclick = close;
  $('.prev', lb).onclick = function () { show(cur - 1); };
  $('.next', lb).onclick = function () { show(cur + 1); };
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });

  // Cabeçalho sólido ao rolar + revelação suave
  var top = $('#topbar');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section h2, .diffs li, .g-item, .agent, .spec > div').forEach(function (el) { el.classList.add('rv'); io.observe(el); });
  }
})();
