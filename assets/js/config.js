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
    chamada: "5.000 m² de terreno, 5 suítes e lazer de clube privativo no Condomínio Estância das Amendoeiras.",
    valor: "R$ 9.500.000",                         // CONFIRMAR — valor de venda de vocês
    mostrarValor: false,                           // false = "Valor sob consulta" (gera mais contato)
    condicoes: "Visitas privativas sob agendamento",

    // Números em destaque
    numeros: [
      { valor: "5.000", unidade: "m²", rotulo: "de terreno" },
      { valor: "5",     unidade: "",   rotulo: "suítes" },
      { valor: "5",     unidade: "",   rotulo: "banheiros" },
      { valor: "8",     unidade: "",   rotulo: "vagas" }
    ],

    // Texto de apresentação (cada item vira um parágrafo)
    apresentacao: [
      "No térreo, uma sala ampla para três ambientes, cozinha com porta de madeira que integra ou separa os espaços, lavabo e um ateliê que funciona como escritório.",
      "No andar superior, três suítes com armários, sendo a principal com closet e varanda de vista privilegiada, além de rouparia no corredor.",
      "Do lado de fora, um chalé independente com duas suítes climatizadas, ideal para hóspedes, e uma área de lazer completa em meio ao paisagismo."
    ],

    // 3 a 5 maiores diferenciais
    diferenciais: [
      { titulo: "5.000 m² de terreno", texto: "Espaço, privacidade e natureza raros mesmo entre os imóveis de alto padrão da região." },
      { titulo: "Chalé com 2 suítes", texto: "Casa de hóspedes independente, com ar-condicionado, para receber família e amigos com conforto." },
      { titulo: "Lazer de clube", texto: "Piscina, sauna, quadra de tênis e casa de boneca, cercados por um paisagismo exuberante." },
      { titulo: "Cozinha externa", texto: "Fogão a lenha generoso, churrasqueira e armários, com persianas que filtram o sol e deixam o ar circular." },
      { titulo: "Suíte master", texto: "Closet e varanda com vista privilegiada, no andar íntimo com rouparia." }
    ],

    // Ficha técnica (aparece em tabela)
    ficha: [
      ["Área do terreno", "5.000 m²"],
      ["Área construída", "—"],                    // CONFIRMAR
      ["Suítes", "5 (3 na casa + 2 no chalé)"],
      ["Banheiros", "5"],
      ["Lavabo", "Sim"],
      ["Vagas", "8"],
      ["Ateliê / escritório", "Sim"],
      ["Closet", "Suíte master"],
      ["Varanda", "Suíte master"],
      ["Aquecimento", "Solar"],
      ["Armários", "Cozinha, quartos, banheiros e serviço"],
      ["Dependência", "Quarto e banheiro de serviço"],
      ["Mobiliário", "—"],                         // CONFIRMAR
      ["Documentação", "—"]                        // CONFIRMAR
    ],

    // Lazer privativo
    lazer: ["Piscina", "Sauna", "Quadra de tênis", "Casa de boneca", "Cozinha externa", "Fogão a lenha", "Churrasqueira", "Chalé de hóspedes", "Paisagismo"],

    // Fotos: coloque os arquivos em assets/fotos/ com estes nomes.
    // Enquanto não existirem, a página mostra um espaço elegante no lugar.
    capa: "assets/fotos/capa.jpg",
    fotos: [
      { src: "assets/fotos/01.jpg", legenda: "Fachada" },
      { src: "assets/fotos/02.jpg", legenda: "Sala para três ambientes" },
      { src: "assets/fotos/03.jpg", legenda: "Cozinha externa" },
      { src: "assets/fotos/04.jpg", legenda: "Piscina" },
      { src: "assets/fotos/05.jpg", legenda: "Suíte master" },
      { src: "assets/fotos/06.jpg", legenda: "Quadra de tênis" }
    ],
    video: ""   // link do YouTube/Vimeo do tour, se houver
  },

  /* ---------- Condomínio ---------- */
  condominio: {
    nome: "Condomínio Estância das Amendoeiras",
    endereco: "R. das Amendoeiras, 35 — Lagoa Santa, MG",
    textoIntro: "Um dos endereços mais exclusivos do Vetor Norte, cercado de verde e a poucos minutos do Aeroporto de Confins.",
    seguranca: ["Portaria 24h", "Monitoramento", "Ronda"],                          // CONFIRMAR
    infraestrutura: ["Áreas verdes", "Ruas arborizadas", "Espaço para caminhadas"],  // CONFIRMAR
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
      bio: "Especialista em imóveis de alto padrão em Lagoa Santa e Vetor Norte.", whatsapp: "", email: "contato@exemplo.com" },
    { nome: "Nome do Corretor 2", creci: "CRECI-MG 00000", foto: "assets/fotos/corretor-2.jpg",
      bio: "Atendimento consultivo e discreto para compradores exigentes.", whatsapp: "", email: "contato@exemplo.com" }
  ],
  horario: "Seg a sáb, 8h às 20h",                                                  // CONFIRMAR

  /* ---------- Para onde vão os leads ----------
     "principal"   → todo lead vai para o WhatsApp abaixo
     "revezamento" → leads divididos entre os corretores (o mesmo visitante sempre cai no mesmo corretor)
     Se o visitante clicar em "Falar com [corretor]", o lead vai direto para aquele corretor. */
  distribuicao: "principal",                                                        // CONFIRMAR
  whatsappPrincipal: "5531996399205",

  // Opcional: URL de um Google Apps Script para salvar cada lead numa planilha
  // (garante o registro mesmo que a pessoa não envie a mensagem no WhatsApp).
  planilhaWebhook: "",

  /* ---------- Perguntas frequentes ---------- */
  faq: [                                                                             // CONFIRMAR respostas
    ["Como funciona a visita?", "As visitas são privativas e agendadas com antecedência, com acompanhamento de um corretor. Basta solicitar pelo formulário."],
    ["Aceita permuta ou financiamento?", "Avaliamos propostas com permuta e financiamento. Informe no formulário e o corretor analisa o seu caso."],
    ["A documentação está regularizada?", "Escritura e matrícula ficam disponíveis para análise do comprador e do seu advogado."],
    ["O chalé tem entrada independente?", "O chalé fica na área externa da casa, com duas suítes e ar-condicionado. Conheça os detalhes na visita."]
  ]
};
