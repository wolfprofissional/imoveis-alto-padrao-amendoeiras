# imoveis-alto-padrao-amendoeiras

Landing page de alto padrão para o Imóvel 01 do Condomínio Estância das Amendoeiras (Lagoa Santa, MG).

## Como editar
Todo o conteúdo fica em **`assets/js/config.js`**: valor, números, diferenciais, ficha técnica, lazer, condomínio, corretores, WhatsApp e FAQ.
Os itens marcados com `// CONFIRMAR` precisam ser revisados antes de publicar.

- `mostrarValor: false` exibe "Valor sob consulta", o que tende a gerar mais contatos. Use `true` para mostrar o preço.
- Fotos: salve em `assets/fotos/` com os nomes `capa.jpg`, `01.jpg` a `06.jpg`, `corretor-1.jpg` e `corretor-2.jpg`. Enquanto faltarem, a página mostra um espaço reservado.
- Rastreamento: cole o Meta Pixel e o GA4 no `<head>` do `index.html`. O formulário já dispara `Lead` e `generate_lead`.

## Como funciona o lead
Todos os botões da página levam ao formulário de qualificação: nome, WhatsApp, objetivo, prazo de compra, forma de pagamento e investimento previsto.
Ao enviar, o WhatsApp do corretor abre com tudo preenchido, mais a classificação do lead (🔥 quente, 🟡 morno ou 🔵 frio) e a origem do anúncio (UTMs).

- `distribuicao: "principal"` envia tudo para `whatsappPrincipal`. Com `"revezamento"`, os leads são divididos entre os corretores.
- O botão "Falar com [corretor]" envia o lead direto para aquele corretor.
- `planilhaWebhook` (opcional): salva cada lead numa planilha Google, mesmo que a pessoa não envie a mensagem.
- Use UTMs nos anúncios, por exemplo `?utm_source=meta&utm_campaign=amendoeiras01`.

## Publicar
Site estático: GitHub Pages (Settings → Pages → branch `main`), Netlify ou Vercel.

## Identidade visual
Provisória até existir o logo: verde-noite `#0f1412`, marfim `#f6f2ea`, bronze `#b48f5a`. Tipografia Cormorant Garamond (títulos) e Manrope (textos).
