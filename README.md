# imoveis-alto-padrao-amendoeiras

Landing page de alto padrão para o Imóvel 01 do Condomínio Estância das Amendoeiras (Lagoa Santa, MG).

## Como editar
Todo o conteúdo fica em **`assets/js/config.js`**: valor, números, diferenciais, ficha técnica, lazer, condomínio, corretores, WhatsApp e FAQ.
Os itens marcados com `// CONFIRMAR` precisam ser revisados antes de publicar.

- `mostrarValor: false` exibe "Valor sob consulta", o que tende a gerar mais contatos. Use `true` para mostrar o preço.
- Fotos: salve em `assets/fotos/` com os nomes `capa.jpg`, `01.jpg` a `06.jpg`, `corretor-1.jpg` e `corretor-2.jpg`. Enquanto faltarem, a página mostra um espaço reservado.
- Rastreamento: cole o Meta Pixel e o GA4 no `<head>` do `index.html`. O formulário já dispara `Lead` e `generate_lead`.

## Como funciona o lead
O formulário abre o WhatsApp de `whatsappPrincipal` com nome, telefone, período e forma de pagamento já preenchidos. Não precisa de servidor.

## Publicar
Site estático: GitHub Pages (Settings → Pages → branch `main`), Netlify ou Vercel.

## Identidade visual
Provisória até existir o logo: verde-noite `#0f1412`, marfim `#f6f2ea`, bronze `#b48f5a`. Tipografia Cormorant Garamond (títulos) e Manrope (textos).
