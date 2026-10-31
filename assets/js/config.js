/* =====================================================================
   CONFIGURAÇÃO DA PÁGINA — edite apenas este arquivo
   Tudo marcado com  // CONFIRMAR  precisa ser revisado antes de publicar.
   ===================================================================== */

window.SITE = {
  /* ---------- Marca provisória (até existir o logo) ---------- */
  marca: {
    nome: "Exclusividades",          // CONFIRMAR — nome da parceria
    sufixo: "Amendoeiras",
    monograma: "EA"
  },

  /* ---------- Imóvel ---------- */
  imovel: {
    codigo: "AM-01",
    titulo: "Residência das Amendoeiras",          // CONFIRMAR — nome comercial
    chamada: "Arquitetura contemporânea, natureza e privacidade absoluta em Lagoa Santa.",
    valor: "R$ 9.500.000",                         // CONFIRMAR — 9M ou 9,5M?
    mostrarValor: false,                           // false = "Valor sob consulta" (gera mais contato)
    condicoes: "Aceita proposta com permuta",      // CONFIRMAR — permuta / financiamento

    // Números em destaque (use "—" enquanto não tiver o dado)
    numeros: [
      { valor: "—", unidade: "m²", rotulo: "área construída" },   // CONFIRMAR
      { valor: "—", unidade: "m²", rotulo: "terreno" },           // CONFIRMAR
      { valor: "5", unidade: "",   rotulo: "suítes" },            // CONFIRMAR
      { valor: "—", unidade: "",   rotulo: "vagas" }              // CONFIRMAR
    ],

    // 3 a 5 maiores diferenciais
    diferenciais: [                                                // CONFIRMAR todos
      { titulo: "Projeto autoral", texto: "Arquitetura contemporânea assinada, com grandes vãos, pé-direito generoso e luz natural em todos os ambientes." },
      { titulo: "Integração total", texto: "Salas, gourmet e área externa se abrem em um único plano para receber com conforto." },
      { titulo: "Lazer de resort", texto: "Piscina, espaço gourmet e jardim paisagístico pensados para a vida ao ar livre." },
      { titulo: "Privacidade", texto: "Implantação que preserva a intimidade da família dentro de um dos condomínios mais desejados da região." },
      { titulo: "Pronta para morar", texto: "Acabamentos de alto padrão e infraestrutura completa — é só mudar." }
    ],

    // Ficha técnica (aparece em tabela)
    ficha: [                                                       // CONFIRMAR todos
      ["Suítes", "5"],
      ["Quartos", "5"],
      ["Banheiros", "—"],
      ["Lavabos", "—"],
      ["Vagas", "—"],
      ["Área construída", "— m²"],
      ["Área do terreno", "— m²"],
      ["Arquitetura", "—"],
      ["Paisagismo", "—"],
      ["Pisos", "—"],
      ["Esquadrias", "—"],
      ["Automação", "—"],
      ["Energia solar", "—"],
      ["Aquecimento", "—"],
      ["Mobiliário", "—"],
      ["Documentação", "—"]
    ],

    // Lazer privativo (marque só o que existe)
    lazer: ["Piscina", "Espaço gourmet", "Jardim paisagístico", "Sauna", "Adega", "Home theater"],   // CONFIRMAR

    // Fotos: coloque os arquivos em assets/fotos/ com estes nomes.
    // Enquanto não existirem, a página mostra um espaço elegante no lugar.
    capa: "assets/fotos/capa.jpg",
    fotos: [
      { src: "assets/fotos/01.jpg", legenda: "Fachada" },
      { src: "assets/fotos/02.jpg", legenda: "Living integrado" },
      { src: "assets/fotos/03.jpg", legenda: "Área gourmet" },
      { src: "assets/fotos/04.jpg", legenda: "Piscina" },
      { src: "assets/fotos/05.jpg", legenda: "Suíte master" },
      { src: "assets/fotos/06.jpg", legenda: "Jardim" }
    ],
    video: ""   // link do YouTube/Vimeo do tour, se houver
  },

  /* ---------- Condomínio ---------- */
  condominio: {
    nome: "Condomínio Estância das Amendoeiras",
    endereco: "R. das Amendoeiras, 35 — Lagoa Santa, MG",
    textoIntro: "Um dos endereços mais exclusivos do Vetor Norte, cercado de verde e a poucos minutos do Aeroporto de Confins.",
    seguranca: ["Portaria 24h", "Monitoramento", "Ronda"],                          // CONFIRMAR
    infraestrutura: ["Áreas verdes", "Quadras", "Espaço para caminhadas"],           // CONFIRMAR
    distancias: [                                                                    // CONFIRMAR
      { tempo: "± 15 min", destino: "Aeroporto de Confins" },
      { tempo: "± 30 min", destino: "Pampulha" },
      { tempo: "± 50 min", destino: "Centro de BH" }
    ],
    mapa: "https://www.google.com/maps?q=Condom%C3%ADnio+Est%C3%A2ncia+das+Amendoeiras,+Lagoa+Santa+MG&output=embed"
  },

  /* ---------- Corretores ---------- */
  corretores: [                                                                      // CONFIRMAR todos
    { nome: "Nome do Corretor 1", creci: "CRECI-MG 00000", foto: "assets/fotos/corretor-1.jpg",
      bio: "Especialista em imóveis de alto padrão em Lagoa Santa e Vetor Norte.", whatsapp: "5531900000000", email: "contato@exemplo.com" },
    { nome: "Nome do Corretor 2", creci: "CRECI-MG 00000", foto: "assets/fotos/corretor-2.jpg",
      bio: "Atendimento consultivo e discreto para compradores exigentes.", whatsapp: "5531900000000", email: "contato@exemplo.com" }
  ],
  horario: "Seg a sáb, 8h às 20h",                                                  // CONFIRMAR

  // WhatsApp que recebe os leads do formulário e do botão flutuante
  whatsappPrincipal: "5531900000000",                                               // CONFIRMAR

  /* ---------- Perguntas frequentes ---------- */
  faq: [                                                                             // CONFIRMAR respostas
    ["Como funciona a visita?", "As visitas são privativas e agendadas com antecedência, com acompanhamento de um corretor. Basta solicitar pelo formulário ou WhatsApp."],
    ["Aceita permuta ou financiamento?", "Avaliamos propostas com permuta e financiamento. Fale com o corretor para analisar o seu caso."],
    ["A documentação está regularizada?", "Sim. Escritura e matrícula estão disponíveis para análise do comprador e do seu advogado."],
    ["O mobiliário fica no imóvel?", "Consulte o corretor sobre os itens que permanecem na venda."]
  ]
};
