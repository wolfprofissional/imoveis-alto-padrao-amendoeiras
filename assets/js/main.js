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

  $('#apresentacao').innerHTML = (im.apresentacao || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');

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
  $('#agents').innerHTML = S.corretores.map(function (c, idx) {
    var ini = c.nome.split(' ').map(function (p) { return p[0]; }).slice(0, 2).join('');
    return '<article class="agent">' +
      '<div class="agent-photo" data-ini="' + esc(ini) + '">' + (c.foto ? '<img src="' + esc(c.foto) + '" alt="' + esc(c.nome) + '" onerror="this.remove()">' : '') + '</div>' +
      '<div><h3>' + esc(c.nome) + '</h3><p class="creci">' + esc(c.creci) + '</p><p>' + esc(c.bio) + '</p>' +
      '<p class="hours">' + esc(S.horario) + '</p>' +
      '<div class="agent-cta"><a class="btn btn-dark sm js-cta" href="#contato" data-corretor="' + idx + '">Falar com ' + esc(c.nome.split(' ')[0]) + '</a></div></div></article>';
  }).join('');
  $('#footCreci').textContent = S.corretores.map(function (c) { return c.nome + ' · ' + c.creci; }).join('   |   ');

  // FAQ
  $('#faqList').innerHTML = S.faq.map(function (f) {
    return '<details><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>';
  }).join('');

  // Todos os botões abrem o formulário em popup
  var form = $('#leadForm'), modal = $('#leadModal'), lastFocus = null;
  function abrirModal(corretor) {
    form.corretor.value = corretor != null ? corretor : '';
    lastFocus = document.activeElement;
    modal.hidden = false; document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () { modal.classList.add('open'); });
    setTimeout(function () { try { form.nome.focus(); } catch (x) {} }, 250);
    track('ViewContent');
  }
  function fecharModal() {
    modal.classList.remove('open'); document.body.style.overflow = '';
    setTimeout(function () { modal.hidden = true; }, 250);
    if (lastFocus) try { lastFocus.focus(); } catch (x) {}
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.js-cta'); if (!a) return;
    e.preventDefault(); abrirModal(a.dataset.corretor);
  });
  $('.modal-close', modal).onclick = fecharModal;
  modal.addEventListener('click', function (e) { if (e.target === modal) fecharModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) fecharModal(); });

  function track(ev) {
    try { if (window.fbq) fbq('track', ev); } catch (e) {}
    try { if (window.gtag && ev === 'Lead') gtag('event', 'generate_lead'); } catch (e) {}
  }

  // Máscara de telefone
  var tel = $('[name=telefone]');
  tel.addEventListener('input', function () {
    var d = tel.value.replace(/\D/g, '').slice(0, 11), o = d;
    if (d.length > 2) o = '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length > 7) o = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
    tel.value = o;
  });

  // Origem do anúncio (UTMs), guardada para o lead
  var qs = new URLSearchParams(location.search), origem = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach(function (k) { if (qs.get(k)) origem[k] = qs.get(k); });
  try {
    if (Object.keys(origem).length) localStorage.setItem('ea_origem', JSON.stringify(origem));
    else origem = JSON.parse(localStorage.getItem('ea_origem') || '{}');
  } catch (x) {}

  // Escolhe o corretor que recebe o lead
  function escolherCorretor() {
    if (form.corretor.value !== '') return S.corretores[+form.corretor.value];
    if (S.distribuicao === 'revezamento' && S.corretores.length) {
      var i;
      try { i = localStorage.getItem('ea_corretor'); } catch (x) {}
      if (i == null || !S.corretores[i]) {
        i = Math.floor(Math.random() * S.corretores.length);
        try { localStorage.setItem('ea_corretor', i); } catch (x) {}
      }
      return S.corretores[i];
    }
    return null;
  }

  // Classificação do lead para o corretor priorizar
  function temperatura(f) {
    var p = 0;
    if (/3 meses/.test(f.prazo.value) && !/6/.test(f.prazo.value)) p += 2; else if (/3 e 6/.test(f.prazo.value)) p += 1;
    if (/À vista/.test(f.pagamento.value)) p += 2; else if (/financiamento/.test(f.pagamento.value)) p += 1;
    if (/8 a 11|Acima/.test(f.faixa.value)) p += 2; else if (/5 a 8/.test(f.faixa.value)) p += 1;
    if (/corretor/.test(f.objetivo.value)) p += 1;
    return p >= 5 ? '🔥 QUENTE' : p >= 3 ? '🟡 MORNO' : '🔵 FRIO';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form, msg = $('#formMsg');
    if (!f.nome.value.trim() || f.telefone.value.replace(/\D/g, '').length < 10) { msg.textContent = 'Preencha nome e WhatsApp com DDD.'; return; }
    if (!f.objetivo.value || !f.prazo.value || !f.pagamento.value || !f.faixa.value) { msg.textContent = 'Responda as perguntas para o corretor preparar seu atendimento.'; return; }
    if (!f.lgpd.checked) { msg.textContent = 'Marque a autorização de contato para continuar.'; return; }

    var c = escolherCorretor();
    if (c && !c.whatsapp) c = null;   // corretor sem WhatsApp próprio → número principal
    var numero = (c && c.whatsapp) || S.whatsappPrincipal;
    var temp = temperatura(f);
    var origemTxt = [origem.utm_source, origem.utm_campaign, origem.utm_content].filter(Boolean).join(' / ') || 'Direto / orgânico';

    var texto = 'Olá' + (c ? ', ' + c.nome.split(' ')[0] : '') + '! Quero agendar uma visita à ' + im.titulo + ' (' + im.codigo + ').\n\n' +
      '*Nome:* ' + f.nome.value.trim() + '\n' +
      '*WhatsApp:* ' + f.telefone.value + '\n' +
      '*Objetivo:* ' + f.objetivo.value + '\n' +
      '*Prazo de compra:* ' + f.prazo.value + '\n' +
      '*Pagamento:* ' + f.pagamento.value + '\n' +
      '*Investimento previsto:* ' + f.faixa.value + '\n\n' +
      '_Lead ' + temp + ' · Origem: ' + origemTxt + '_';

    if (S.planilhaWebhook) {
      var dados = JSON.stringify({
        imovel: im.codigo, nome: f.nome.value.trim(), telefone: f.telefone.value,
        objetivo: f.objetivo.value, prazo: f.prazo.value, pagamento: f.pagamento.value, faixa: f.faixa.value,
        temperatura: temp, corretor: c ? c.nome : 'Principal', origem: origemTxt
      });
      // sendBeacon garante o envio mesmo com a troca de página logo em seguida
      var enviado = false;
      try { enviado = navigator.sendBeacon(S.planilhaWebhook, new Blob([dados], { type: 'text/plain' })); } catch (x) {}
      if (!enviado) {
        try { fetch(S.planilhaWebhook, { method: 'POST', mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain' }, body: dados }); } catch (x) {}
      }
    }

    // Os dados vão para a página de obrigado pelo navegador (nunca pela URL)
    try {
      sessionStorage.setItem('ea_lead', JSON.stringify({
        numero: numero, texto: texto, nome: f.nome.value.trim().split(' ')[0],
        corretor: c ? c.nome : '', imovel: im.titulo
      }));
      sessionStorage.removeItem('ea_lead_contado');
    } catch (x) {}
    msg.textContent = 'Enviando…';
    setTimeout(function () { location.href = 'obrigado.html'; }, 400);
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
