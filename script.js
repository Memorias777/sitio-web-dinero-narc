const ITEMS = [
  {id:'p1',name:'Mansión colonial en Zacatecas',cat:'property',price:3500000,thumb:'🏰',desc:'Casa grande con jardines y vistas.'},
  {id:'p2',name:'Rancho privado y museo',cat:'property',price:4200000,thumb:'🏡',desc:'Terreno enorme con construcciones y pista.'},
  {id:'p3',name:'Hotel boutique 5 estrellas',cat:'property',price:7500000,thumb:'🏨',desc:'Para hospedar a invitados VIP.'},
  {id:'p4',name:'Villa en la playa',cat:'property',price:5800000,thumb:'🏝️',desc:'Casa frente al mar.'},

  {id:'v1',name:'Camioneta blindada',cat:'vehicles',price:120000,thumb:'🚙',desc:'Blindaje completo y accesorios.'},
  {id:'v2',name:'Helicóptero privado',cat:'vehicles',price:2500000,thumb:'🚁',desc:'Helipuerto incluido.'},
  {id:'v3',name:'Chevrolet Camaro SS',cat:'vehicles',price:62000,thumb:'🚗',desc:'Muscle car clásico.'},
  {id:'v4',name:'Jeep Rubicon 4x4',cat:'vehicles',price:55000,thumb:'🚙',desc:'Para todo terreno.'},
  {id:'v5',name:'Dodge Durango',cat:'vehicles',price:48000,thumb:'🚙',desc:'SUV espaciosa y poderosa.'},
  {id:'v6',name:'Chevrolet Silverado',cat:'vehicles',price:52000,thumb:'🚚',desc:'Camioneta pickup.'},
  {id:'v7',name:'Chevrolet Cheyenne',cat:'vehicles',price:57000,thumb:'🚚',desc:'Versión lujosa de pickup.'},
  {id:'v8',name:'Yate de lujo 40m',cat:'luxury',price:3600000,thumb:'🛥️',desc:'Tripulación y mantenimiento separado.'},
  {id:'v9',name:'Avión privado Gulfstream',cat:'vehicles',price:45000000,thumb:'✈️',desc:'Lo máximo en viajes privados.'},

  {id:'l1',name:'Colección de relojes (30 unidades)',cat:'luxury',price:1500000,thumb:'⌚',desc:'Marcas de lujo, algunas únicas.'},
  {id:'l2',name:'Colección de arte contemporáneo',cat:'luxury',price:2100000,thumb:'🖼️',desc:'Piezas con valor cultural.'},
  {id:'l3',name:'Joyas exclusivas',cat:'luxury',price:950000,thumb:'💎',desc:'Collares y anillos con diamantes.'},

  {id:'f1',name:'Festival privado con artistas',cat:'party',price:800000,thumb:'🎤',desc:'Invita a artistas nacionales.'},
  {id:'f2',name:'Fiesta VIP en club exclusivo',cat:'party',price:120000,thumb:'🎉',desc:'Open bar y seguridad.'},
  {id:'f3',name:'Cena para 100 personas',cat:'party',price:60000,thumb:'🍽️',desc:'Banquete de lujo.'},
  {id:'f4',name:'Fuegos artificiales para evento',cat:'party',price:150000,thumb:'🎆',desc:'Show espectacular.'},

  {id:'m1',name:'Fábrica de empaques',cat:'misc',price:950000,thumb:'🏭',desc:'Negocio con empleados.'},
  {id:'m2',name:'Compra de votos (satírico)',cat:'misc',price:500000,thumb:'🗳️',desc:'Solo para la broma.'},
  {id:'m3',name:'Policía privado contratado',cat:'misc',price:200000,thumb:'👮',desc:'Protección extra.'},
  {id:'m4',name:'Contratar 100 empleados',cat:'misc',price:3000000,thumb:'👥',desc:'Equipo para negocios.'},
  {id:'m5',name:'Ayudar a pueblo pobre',cat:'misc',price:700000,thumb:'🏘️',desc:'Mejora infraestructura y bienestar.'},
  {id:'m6',name:'Invertir en startup tech',cat:'misc',price:1000000,thumb:'💻',desc:'Posible alto retorno.'},

  {id:'s1',name:'Chicle de menta',cat:'misc',price:5,thumb:'🧋',desc:'Un detalle barato para empezar.'},
  {id:'s2',name:'Cigarros premium',cat:'misc',price:50,thumb:'🚬',desc:'Para fumadores selectos.'},
  {id:'s3',name:'Café orgánico exclusivo',cat:'misc',price:20,thumb:'☕',desc:'Para tus invitados VIP.'},

  {id:'pib1',name:'Comprar PIB de un país pequeño',cat:'misc',price:1000000000,thumb:'🌍',desc:'Control económico total.'},
  {id:'pib2',name:'Comprar PIB de un país mediano',cat:'misc',price:10000000000,thumb:'🌎',desc:'Eres un gigante.'},

  // Extras variados
  {id:'e1',name:'Mansión en Hollywood',cat:'property',price:10000000,thumb:'🏰',desc:'Lujo y glamour.'},
  {id:'e2',name:'Jet privado Bombardier',cat:'vehicles',price:35000000,thumb:'✈️',desc:'Viaja a donde quieras.'},
  {id:'e3',name:'Isla privada',cat:'property',price:25000000,thumb:'🏝️',desc:'Tu paraíso personal.'},
  {id:'e4',name:'Bar privado con bartender',cat:'party',price:90000,thumb:'🍸',desc:'Fiestas exclusivas.'},
  {id:'e5',name:'Ferrari F8 Tributo',cat:'vehicles',price:280000,thumb:'🏎️',desc:'Superdeportivo italiano.'},
  {id:'e6',name:'Contratar guardaespaldas',cat:'misc',price:150000,thumb:'🕶️',desc:'Seguridad personal.'},
  {id:'e7',name:'Organizar torneo de golf',cat:'party',price:180000,thumb:'⛳',desc:'Evento de lujo.'},
  {id:'e8',name:'Obra de caridad gigante',cat:'misc',price:5000000,thumb:'❤️',desc:'Mejora miles de vidas.'},
  {id:'e9',name:'Construir club nocturno',cat:'party',price:1200000,thumb:'🏢',desc:'Lugar exclusivo para fiestas.'},
  {id:'e10',name:'Superyate 80m',cat:'luxury',price:9000000,thumb:'🛥️',desc:'El máximo lujo en el mar.'},
  {id:'e11',name:'Reloj Rolex edición limitada',cat:'luxury',price:300000,thumb:'⌚',desc:'Pieza única para coleccionistas.'},

  // Algunos extras más baratos para balancear
  {id:'b1',name:'Chicle sabor frutas',cat:'misc',price:3,thumb:'🍬',desc:'Dulce barato para el bolsillo.'},
  {id:'b2',name:'Lata de bebida energética',cat:'misc',price:10,thumb:'🥤',desc:'Para mantenerte activo.'},
  {id:'b3',name:'Entradas para concierto',cat:'party',price:150,thumb:'🎟️',desc:'Música y diversión.'},

  {id:'b4',name:'SUV Mercedes-Benz G-Class',cat:'vehicles',price:140000,thumb:'🚙',desc:'Lujo y potencia.'},
  {id:'b5',name:'Comprar equipo NFL',cat:'misc',price:5000000,thumb:'🏈',desc:'Controla un equipo profesional.'},
  {id:'b6',name:'Construir estadio de fútbol',cat:'property',price:20000000,thumb:'🏟️',desc:'Lugar para miles de fans.'},

  {id:'b7',name:'Contratar banda musical',cat:'party',price:120000,thumb:'🎸',desc:'Fiesta con música en vivo.'},
  {id:'b8',name:'Vehículo deportivo Lamborghini',cat:'vehicles',price:300000,thumb:'🚗',desc:'Auto de lujo italiano.'},
  {id:'b9',name:'Camiseta firmada por jugador famoso',cat:'luxury',price:5000,thumb:'👕',desc:'Objeto de colección.'},
  {id:'b10',name:'Contratar chef privado',cat:'misc',price:90000,thumb:'👨‍🍳',desc:'Comidas exclusivas.'},
  {id:'b11',name:'Fiesta temática Hollywood',cat:'party',price:180000,thumb:'🎬',desc:'Diversión al estilo cine.'},
  {id:'b12',name:'Colección de autos clásicos',cat:'luxury',price:2200000,thumb:'🚘',desc:'Autos vintage únicos.'},
];

// Estado fijo, sin cambiar presupuesto
let state = {
  budget: 50000000,
  remaining: 50000000,
  spent: 0,
  history: []
}

// DOM refs
const itemsGrid = document.getElementById('itemsGrid');
const budgetDisplay = document.getElementById('budgetDisplay');
const remainingDisplay = document.getElementById('remainingDisplay');
const spentDisplay = document.getElementById('spentDisplay');
const progressBar = document.getElementById('progressBar');
const outcome = document.getElementById('outcome');

function formatMoney(n){
  return '$' + n.toLocaleString('en-US');
}

function renderItems(search=''){
  itemsGrid.innerHTML = '';
  const list = ITEMS.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
  list.forEach(it => {
    const el = document.createElement('div');
    el.className = 'item';
    el.innerHTML = `
      <div class="thumb">${it.thumb}</div>
      <div class="meta">
        <div class="name">${it.name}</div>
        <div style="font-size:13px;color:var(--muted)">${it.desc}</div>
        <div style="margin-top:8px;display:flex;justify-content:space-between;align-items:center">
          <div class="price">${formatMoney(it.price)}</div>
          <button class="buy" data-id="${it.id}">Comprar</button>
        </div>
      </div>
    `;
    itemsGrid.appendChild(el);
  });

  // attach buy handlers
  document.querySelectorAll('.buy').forEach(b => b.addEventListener('click', () => buyItem(b.dataset.id)));
}

function updateDisplays(){
  remainingDisplay.textContent = formatMoney(Math.max(0, state.remaining));
  spentDisplay.textContent = formatMoney(state.spent);
  const pct = Math.min(100, Math.round(((state.budget - state.remaining) / state.budget) * 100));
  progressBar.style.width = pct + '%';

  if(state.remaining <= 0){
    outcome.textContent = 'Te quedaste sin dinero. Juego terminado. 😅';
  } else if(state.remaining < state.budget * 0.1){
    outcome.textContent = 'Cuidado: estás por quedarte sin dinero.';
  } else {
    outcome.textContent = 'Aún tienes para comprar más.';
  }
}

function buyItem(id){
  const item = ITEMS.find(x => x.id === id);
  if(!item) return;
  if(item.price > state.remaining){
    alert('No tienes suficiente dinero para comprar esto.');
    return;
  }
  state.remaining -= item.price;
  state.spent += item.price;
  state.history.push(item.id);
  updateDisplays();
  renderToast(`Compraste: ${item.name} por ${formatMoney(item.price)}`);
  // Mensaje extra para compras grandes
  if(item.price > 10000000){
    renderToast('¡Qué compra tan grande! ¿De verdad tienes tanto dinero? 😎');
  }
}

function undo(){
  const last = state.history.pop();
  if(!last) return renderToast('No hay compras para deshacer.');
  const item = ITEMS.find(x => x.id === last);
  state.spent -= item.price;
  state.remaining += item.price;
  updateDisplays();
  renderToast('Compra deshecha: ' + item.name);
}

function reset(){
  state.spent = 0; state.history = []; state.remaining = state.budget;
  updateDisplays();
  renderToast('Juego reiniciado.');
}

function renderToast(msg){
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position = 'fixed';
  t.style.right = '18px';
  t.style.bottom = '18px';
  t.style.background = 'rgba(0,0,0,0.6)';
  t.style.color = 'white';
  t.style.padding = '10px 14px';
  t.style.borderRadius = '10px';
  t.style.zIndex = 9999;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.transition = 'opacity 0.4s';
    t.style.opacity = 0;
    setTimeout(() => t.remove(), 400);
  }, 2200);
}

function shareResult(){
  const msg = `Gaste ${formatMoney(state.spent)} y me quedan ${formatMoney(state.remaining)}. ¿Puedes gastar más?`;
  if(navigator.share){
    navigator.share({title:'Gasta como un Narco', text: msg, url: location.href}).catch(() => {});
  } else {
    prompt('Copia y comparte este resultado:', msg + ' — ' + location.href);
  }
}

// Eventos
document.getElementById('resetBtn').addEventListener('click', () => { reset(); });
document.getElementById('undoBtn').addEventListener('click', () => { undo(); });
document.getElementById('shareBtn').addEventListener('click', () => { shareResult(); });
document.getElementById('challengeBtn').addEventListener('click', () => { shareResult(); });

document.getElementById('search').addEventListener('input', (e) => renderItems(e.target.value));
