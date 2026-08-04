/* ==========================================================================
   ZR1 MOTORS — INVENTORY DATA
   Edit this array to add/remove/update vehicles. No build step required —
   every page (home, estoque, página do veículo) reads from here.
   Replace the placeholder image URLs with real photos hosted in /assets/img.
   ========================================================================== */

const ZR1_INVENTORY = [
  {
    id: "corolla-xei-2022",
    marca: "Toyota", modelo: "Corolla XEi 2.0", ano: 2022, anoModelo: 2023,
    preco: 128900, km: 32500, cambio: "Automático CVT", combustivel: "Flex",
    motor: "2.0 16V", categoria: "Sedan", cor: "Prata Ice", cidade: "Londrina - PR",
    placa: "final 4", portas: 4, novo: false, destaque: true,
    fotos: [
      "https://placehold.co/1200x800/16181c/d9b87c?text=Toyota+Corolla+XEi",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Interior",
      "https://placehold.co/1200x800/16181c/d9b87c?text=Lateral",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Painel"
    ],
    itens: ["Central multimídia com Android Auto/CarPlay","Bancos em couro","Piloto automático adaptativo","Câmera de ré 360°","6 airbags","Sensor de estacionamento","Rodas de liga leve 17\"","Ar-condicionado digital dual zone"],
    historico: "Único dono, revisões em concessionária Toyota, manual e chave reserva.",
    laudo: "Aprovado sem histórico de sinistro, batida ou alagamento.",
    parcelaDe: 2190
  },
  {
    id: "hb20-comfort-2021",
    marca: "Hyundai", modelo: "HB20 Comfort 1.0", ano: 2021, anoModelo: 2021,
    preco: 68900, km: 41200, cambio: "Manual", combustivel: "Flex",
    motor: "1.0 12V", categoria: "Hatch", cor: "Branco Polar", cidade: "Londrina - PR",
    placa: "final 1", portas: 4, novo: false, destaque: true,
    fotos: [
      "https://placehold.co/1200x800/16181c/d9b87c?text=Hyundai+HB20",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Interior",
      "https://placehold.co/1200x800/16181c/d9b87c?text=Traseira"
    ],
    itens: ["Central multimídia 8\"","Vidros elétricos","Travas elétricas","Ar-condicionado","Direção elétrica","Rodas de liga leve"],
    historico: "Segundo dono, uso urbano, IPVA 2026 quitado.",
    laudo: "Aprovado, sem indícios de sinistro.",
    parcelaDe: 1190
  },
  {
    id: "compass-longitude-2020",
    marca: "Jeep", modelo: "Compass Longitude 2.0 Diesel", ano: 2020, anoModelo: 2020,
    preco: 129900, km: 58900, cambio: "Automático 9 marchas", combustivel: "Diesel",
    motor: "2.0 16V Turbo Diesel 4x4", categoria: "SUV", cor: "Cinza Granite", cidade: "Cambé - PR",
    placa: "final 7", portas: 4, novo: false, destaque: true,
    fotos: [
      "https://placehold.co/1200x800/16181c/d9b87c?text=Jeep+Compass",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Interior+Couro",
      "https://placehold.co/1200x800/16181c/d9b87c?text=Off-road"
    ],
    itens: ["Tração 4x4 Active Drive Low","Bancos em couro","Teto solar panorâmico","Central Uconnect 8.4\"","Assistente de permanência em faixa","Sensor de ponto cego"],
    historico: "Frota reduzida, revisões concessionária Jeep, todas as chaves.",
    laudo: "Aprovado, procedência verificada.",
    parcelaDe: 2490
  },
  {
    id: "onix-plus-2023",
    marca: "Chevrolet", modelo: "Onix Plus Premier 1.0 Turbo", ano: 2023, anoModelo: 2023,
    preco: 94900, km: 18400, cambio: "Automático", combustivel: "Flex",
    motor: "1.0 Turbo", categoria: "Sedan", cor: "Preto Ouro Negro", cidade: "Londrina - PR",
    placa: "final 2", portas: 4, novo: false, destaque: true,
    fotos: [
      "https://placehold.co/1200x800/16181c/d9b87c?text=Chevrolet+Onix+Plus",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Interior",
      "https://placehold.co/1200x800/16181c/d9b87c?text=Frente"
    ],
    itens: ["Multimídia MyLink 8\"","Painel digital","Piloto automático","Carregador por indução","Chave presencial","Sensor de chuva"],
    historico: "Único dono, revisado na concessionária, garantia de fábrica remanescente.",
    laudo: "Aprovado, veículo recém-anunciado.",
    parcelaDe: 1690,
    recente: true
  },
  {
    id: "civic-touring-2019",
    marca: "Honda", modelo: "Civic Touring 1.5 Turbo", ano: 2019, anoModelo: 2019,
    preco: 112900, km: 67300, cambio: "Automático CVT", combustivel: "Gasolina",
    motor: "1.5 16V Turbo", categoria: "Sedan", cor: "Vermelho Rallye", cidade: "Ibiporã - PR",
    placa: "final 9", portas: 4, novo: false, destaque: false,
    fotos: [
      "https://placehold.co/1200x800/16181c/d9b87c?text=Honda+Civic+Touring",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Interior+Couro",
      "https://placehold.co/1200x800/16181c/d9b87c?text=Traseira"
    ],
    itens: ["Teto solar","Bancos em couro com ventilação","Honda Sensing (freio autônomo)","Multimídia com navegação","Partida sem chave"],
    historico: "Terceiro dono, todas as revisões em dia, sem sinistro.",
    laudo: "Aprovado.",
    parcelaDe: 2090
  },
  {
    id: "tcross-highline-2022",
    marca: "Volkswagen", modelo: "T-Cross Highline 200 TSI", ano: 2022, anoModelo: 2022,
    preco: 118900, km: 29800, cambio: "Automático 6 marchas", combustivel: "Flex",
    motor: "1.0 200 TSI Turbo", categoria: "SUV", cor: "Branco Cristal", cidade: "Londrina - PR",
    placa: "final 5", portas: 4, novo: false, destaque: false,
    fotos: [
      "https://placehold.co/1200x800/16181c/d9b87c?text=VW+T-Cross",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Interior",
      "https://placehold.co/1200x800/16181c/d9b87c?text=Lateral"
    ],
    itens: ["VW Play com Android Auto/CarPlay","Painel digital Active Info","Controle de estabilidade","Sensor dianteiro e traseiro","Rodas 17\""],
    historico: "Único dono, uso familiar, laudo cautelar disponível.",
    laudo: "Aprovado.",
    parcelaDe: 2050
  },
  {
    id: "renegade-longitude-2021",
    marca: "Jeep", modelo: "Renegade Longitude 1.3 Turbo", ano: 2021, anoModelo: 2022,
    preco: 96900, km: 39500, cambio: "Automático", combustivel: "Flex",
    motor: "1.3 Turbo 270", categoria: "SUV", cor: "Cinza Grafite", cidade: "Rolândia - PR",
    placa: "final 3", portas: 4, novo: false, destaque: false,
    fotos: [
      "https://placehold.co/1200x800/16181c/d9b87c?text=Jeep+Renegade",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Interior",
      "https://placehold.co/1200x800/16181c/d9b87c?text=Frente"
    ],
    itens: ["Central Uconnect","Controle de tração","Sensor de estacionamento","Piloto automático","Rodas de liga leve 18\""],
    historico: "Segundo dono, revisões em dia.",
    laudo: "Aprovado.",
    parcelaDe: 1790
  },
  {
    id: "creta-prestige-2023",
    marca: "Hyundai", modelo: "Creta Prestige 1.0 Turbo", ano: 2023, anoModelo: 2023,
    preco: 134900, km: 12100, cambio: "Automático", combustivel: "Flex",
    motor: "1.0 Turbo GDI", categoria: "SUV", cor: "Azul Marinho", cidade: "Londrina - PR",
    placa: "final 8", portas: 4, novo: false, destaque: false,
    fotos: [
      "https://placehold.co/1200x800/16181c/d9b87c?text=Hyundai+Creta",
      "https://placehold.co/1200x800/1e2126/d9b87c?text=Interior+Couro",
      "https://placehold.co/1200x800/16181c/d9b87c?text=Traseira"
    ],
    itens: ["Teto solar","Bancos em couro","Central 10.25\"","Assistente de permanência em faixa","Carregador por indução"],
    historico: "Único dono, garantia de fábrica vigente, revisado na concessionária.",
    laudo: "Aprovado, veículo recém-anunciado.",
    parcelaDe: 2390,
    recente: true
  }
];

function zr1FormatPrice(v){
  return v.toLocaleString('pt-BR', {style:'currency', currency:'BRL', maximumFractionDigits:0});
}
function zr1FormatKm(v){
  return v.toLocaleString('pt-BR') + ' km';
}

function zr1VehicleCard(v){
  const badge = v.recente
    ? `<span class="vcard-badge new">Recém-anunciado</span>`
    : `<span class="vcard-badge">${v.categoria}</span>`;
  return `
  <article class="vcard reveal">
    <a href="veiculo.html?id=${v.id}" class="vcard-media" aria-label="Ver detalhes de ${v.marca} ${v.modelo}">
      ${badge}
      <button class="vcard-fav" aria-label="Favoritar" onclick="event.preventDefault()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.6-10-9.2C.4 8 2 4.5 5.6 4c2-.3 3.8.6 6.4 3 2.6-2.4 4.4-3.3 6.4-3C22 4.5 23.6 8 22 11.8 19.5 16.4 12 21 12 21Z"/></svg>
      </button>
      <img src="${v.fotos[0]}" alt="${v.marca} ${v.modelo} ${v.ano}" loading="lazy">
    </a>
    <div class="vcard-body">
      <div>
        <h3 class="vcard-title">${v.marca} ${v.modelo}</h3>
        <div class="vcard-loc">${v.cidade}</div>
      </div>
      <div class="vcard-specs">
        <span>${v.ano}/${v.anoModelo}</span>
        <span>${zr1FormatKm(v.km)}</span>
        <span>${v.cambio.split(' ')[0]}</span>
        <span>${v.combustivel}</span>
      </div>
      <div class="vcard-price-row">
        <div class="vcard-price">${zr1FormatPrice(v.preco)}<span>ou a partir de ${zr1FormatPrice(v.parcelaDe)}/mês</span></div>
        <span class="vcard-cta">Ver</span>
      </div>
    </div>
  </article>`;
}

function zr1RenderGrid(el, list){
  if(!el) return;
  if(list.length === 0){
    el.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--steel);">
      <p style="margin-bottom:16px;">Nenhum veículo encontrado com esses filtros.</p>
      <a href="estoque.html" class="btn btn-outline-dark btn-sm">Limpar filtros</a>
    </div>`;
    return;
  }
  el.innerHTML = list.map(zr1VehicleCard).join('');
  if(window.zr1InitReveal) window.zr1InitReveal();
}
