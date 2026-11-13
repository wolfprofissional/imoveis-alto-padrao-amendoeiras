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
Segue o **Manual de identidade visual Exclusividades Amendoeiras v1 (nov/2026)**.

- **Marca:** arquivos SVG oficiais em `assets/marca/` (logo positivo e negativo cobre, símbolo, selo e padrões de folhas). Não redesenhe nem troque as cores.
- **Cores:** verde amendoeira `#1F3A2E`, cobre `#A65A32` (texto pequeno `#8A4524`), areia `#F4EEE4`, linho `#E9DFD0`, tinta `#1A1D1B`. Proporção 60% areia/linho, 30% verde, 10% cobre.
- **Tipografia:** Lora (títulos, números, citações em itálico) e Inter (textos, botões, sobretítulos em caixa alta espaçada).
- **Grafismos:** sobretítulo, fio cobre de 1px e título; cantos retos; padrão de folhas sempre tom sobre tom e nunca atrás de texto pequeno.
- **Botões:** principal verde, secundário em contorno, cobre para a ação sobre fundo verde e no WhatsApp, botão flutuante redondo.
- **Voz:** anfitrião discreto, com frases curtas e informação concreta, sem superlativos nem urgência.
