# imoveis-alto-padrao-amendoeiras

Landing page de alto padrão para o Imóvel 01 do Condomínio Estância das Amendoeiras (Lagoa Santa, MG).

## Como editar
Todo o conteúdo fica em **`assets/js/config.js`**: valor, números, diferenciais, ficha técnica, lazer, condomínio, corretores, WhatsApp e FAQ.
Os itens marcados com `// CONFIRMAR` precisam ser revisados antes de publicar.

- `mostrarValor: false` exibe "Valor sob consulta", o que tende a gerar mais contatos. Use `true` para mostrar o preço.
- Fotos: salve em `assets/fotos/` com os nomes `capa.jpg`, `01.jpg` a `06.jpg`, `corretor-1.jpg` e `corretor-2.jpg`. Enquanto faltarem, a página mostra um espaço reservado.
- Rastreamento: cole o Meta Pixel e o GA4 no `<head>` do `index.html` e do `obrigado.html`.

## Como funciona o lead
1. Todos os botões abrem um **popup** com o formulário de qualificação: nome, WhatsApp, objetivo, prazo de compra, forma de pagamento e investimento previsto.
2. Ao enviar, o visitante vai para **`obrigado.html`**.
3. Na página de obrigado, o botão de WhatsApp abre a conversa com o corretor com todas as respostas preenchidas, mais a classificação do lead (🔥 quente, 🟡 morno ou 🔵 frio) e a origem do anúncio (UTMs).

- WhatsApp de atendimento: `whatsappPrincipal` no `config.js`.
- Se um corretor tiver `whatsapp` preenchido, o botão "Falar com [corretor]" envia o lead para ele. Com `distribuicao: "revezamento"`, os leads são divididos entre os corretores.
- Os dados passam para a página de obrigado pelo navegador (sessionStorage), nunca pela URL.
- `planilhaWebhook` (opcional): salva cada lead numa planilha Google, mesmo que a pessoa não clique no WhatsApp.
- **Conversão nos anúncios:** cole o Pixel/GA4 também no `obrigado.html`. Ele dispara `Lead` uma única vez por envio.
- Use UTMs nos anúncios, por exemplo `?utm_source=meta&utm_campaign=amendoeiras01`.

## Publicar
Site estático: GitHub Pages (Settings → Pages → branch `main`), Netlify ou Vercel.

## Identidade visual
Provisória até existir o logo: verde-noite `#0f1412`, marfim `#f6f2ea`, bronze `#b48f5a`. Tipografia Cormorant Garamond (títulos) e Manrope (textos).
