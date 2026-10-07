(() => {
  if (typeof TIENDA === 'undefined') return;

  const CLAVE = 'lvc-canasto';
  const clp = n => '$' + Math.round(n).toLocaleString('es-CL');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const porId = Object.fromEntries(TIENDA.productos.map(p => [p.id, p]));

  // ---------- Estado del canasto ----------
  let canasto = [];
  try { canasto = JSON.parse(localStorage.getItem(CLAVE)) || []; } catch (e) { canasto = []; }
  canasto = canasto.filter(l => porId[l.id] && l.cant > 0);
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(canasto)); } catch (e) {} };

  const precioDe = (p, variante) => {
    if (p.variantes) { const v = p.variantes.find(v => v.nombre === variante) || p.variantes[0]; return v.precio; }
    return p.precio;
  };
  const totalUnidades = () => canasto.reduce((s, l) => s + l.cant, 0);
  const totalPesos = () => canasto.reduce((s, l) => s + precioDe(porId[l.id], l.variante) * l.cant, 0);

  // ---------- Catálogo ----------
  const grid = document.getElementById('product-grid');
  const filtros = document.getElementById('shop-filters');
  const aviso = document.getElementById('shop-notice');

  if (aviso && TIENDA.aviso) {
    aviso.innerHTML = `<strong>${esc(TIENDA.aviso.titulo)}</strong><span>${esc(TIENDA.aviso.texto)}</span>`;
    aviso.hidden = false;
  }

  const precioTexto = p => p.variantes
    ? 'Desde ' + clp(Math.min(...p.variantes.map(v => v.precio)))
    : clp(p.precio);

  function pintarCatalogo(cat) {
    const lista = TIENDA.productos.filter(p => !p.agotado && (cat === 'todo' || p.categoria === cat));
    grid.innerHTML = lista.map(p => `
      <article class="product" data-id="${p.id}">
        <div class="product-photo"><img src="${esc(p.imagen)}" alt="${esc(p.nombre)}" loading="lazy" width="400" height="500"></div>
        <div class="product-body">
          <p class="product-brand">${esc(p.marca)}</p>
          <h3 class="product-name">${esc(p.nombre)}</h3>
          <p class="product-desc">${esc(p.descripcion)}</p>
          <div class="product-buy">
            ${p.variantes ? `<label class="product-variant"><span class="sr-only">Opción</span><select>${p.variantes.map(v => `<option value="${esc(v.nombre)}">${esc(v.nombre)} · ${clp(v.precio)}</option>`).join('')}</select></label>` : `<p class="product-price">${precioTexto(p)}</p>`}
            <button class="add-button" type="button">Agregar</button>
          </div>
        </div>
      </article>`).join('');
  }

  if (filtros) {
    const cats = [{ id: 'todo', nombre: 'Todo' }, ...TIENDA.categorias];
    filtros.innerHTML = cats.map((c, i) => `<button type="button" class="filter${i === 0 ? ' is-active' : ''}" data-cat="${c.id}" aria-pressed="${i === 0}">${esc(c.nombre)}</button>`).join('');
    filtros.addEventListener('click', e => {
      const b = e.target.closest('.filter'); if (!b) return;
      filtros.querySelectorAll('.filter').forEach(f => { f.classList.toggle('is-active', f === b); f.setAttribute('aria-pressed', f === b); });
      pintarCatalogo(b.dataset.cat);
    });
  }
  if (grid) {
    pintarCatalogo('todo');
    grid.addEventListener('click', e => {
      const b = e.target.closest('.add-button'); if (!b) return;
      const card = b.closest('.product');
      const p = porId[card.dataset.id];
      const variante = p.variantes ? card.querySelector('select').value : null;
      agregar(p.id, variante);
      b.textContent = 'Agregado';
      b.classList.add('is-done');
      setTimeout(() => { b.textContent = 'Agregar'; b.classList.remove('is-done'); }, 1400);
    });
  }

  // ---------- Canasto (panel) ----------
  const panel = document.getElementById('cart');
  const lineas = document.getElementById('cart-lines');
  const totalEl = document.getElementById('cart-total');
  const vacio = document.getElementById('cart-empty');
  const pie = document.getElementById('cart-checkout');
  const contadores = document.querySelectorAll('[data-cart-count]');
  const botonesEnvio = document.getElementById('send-buttons');
  const errorEl = document.getElementById('order-error');
  if (botonesEnvio) botonesEnvio.innerHTML = TIENDA.whatsapp.map(w => `<button type="button" class="send-button" data-numero="${w.numero}">Enviar pedido a ${esc(w.etiqueta)}</button>`).join('');

  function agregar(id, variante) {
    const l = canasto.find(l => l.id === id && l.variante === variante);
    if (l) l.cant++; else canasto.push({ id, variante, cant: 1 });
    guardar(); pintarCanasto();
    contadores.forEach(c => { c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump'); });
  }

  function pintarCanasto() {
    const n = totalUnidades();
    contadores.forEach(c => { c.textContent = n; c.hidden = n === 0; });
    if (!lineas) return;
    vacio.hidden = n > 0;
    pie.hidden = n === 0;
    lineas.innerHTML = canasto.map((l, i) => {
      const p = porId[l.id];
      const precio = precioDe(p, l.variante);
      return `<li class="line">
        <img src="${esc(p.imagen)}" alt="" width="64" height="64">
        <div class="line-info">
          <p class="line-name">${esc(p.nombre)}${l.variante ? ` <span>(${esc(l.variante)})</span>` : ''}</p>
          <p class="line-price">${clp(precio * l.cant)}</p>
          <div class="qty" data-i="${i}">
            <button type="button" data-d="-1" aria-label="Quitar uno">−</button>
            <span aria-live="polite">${l.cant}</span>
            <button type="button" data-d="1" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <button type="button" class="line-remove" data-i="${i}" aria-label="Eliminar ${esc(p.nombre)}">Eliminar</button>
      </li>`;
    }).join('');
    totalEl.textContent = clp(totalPesos());
  }

  lineas?.addEventListener('click', e => {
    const q = e.target.closest('.qty button');
    const r = e.target.closest('.line-remove');
    if (q) {
      const i = +q.parentElement.dataset.i;
      canasto[i].cant += +q.dataset.d;
      if (canasto[i].cant <= 0) canasto.splice(i, 1);
    } else if (r) {
      canasto.splice(+r.dataset.i, 1);
    } else return;
    guardar(); pintarCanasto();
  });

  document.querySelectorAll('[data-open-cart]').forEach(b => b.addEventListener('click', () => { pintarCanasto(); panel.showModal(); }));
  document.querySelectorAll('[data-close-cart]').forEach(b => b.addEventListener('click', () => panel.close()));
  panel?.addEventListener('click', e => { if (e.target === panel) panel.close(); });

  // ---------- Enviar por WhatsApp ----------
  botonesEnvio?.addEventListener('click', e => {
    const b = e.target.closest('.send-button'); if (!b) return;
    const nombre = document.getElementById('order-name').value.trim();
    const direccion = document.getElementById('order-address').value.trim();
    const notas = document.getElementById('order-notes').value.trim();

    const faltan = [];
    if (!nombre) faltan.push('tu nombre');
    if (!direccion) faltan.push('la dirección de entrega');
    if (faltan.length) {
      errorEl.textContent = 'Falta completar ' + faltan.join(', ').replace(/, ([^,]*)$/, ' y $1') + '.';
      errorEl.hidden = false;
      return;
    }
    errorEl.hidden = true;

    const detalle = canasto.map(l => {
      const p = porId[l.id];
      return `• ${l.cant} x ${p.nombre}${l.variante ? ' (' + l.variante + ')' : ''}: ${clp(precioDe(p, l.variante) * l.cant)}`;
    }).join('\n');
    const msg = `Hola Las Viejas del Canasto, quiero hacer este pedido:\n\n${detalle}\n\nTotal: ${clp(totalPesos())}\n\nNombre: ${nombre}\nDirección: ${direccion}` + (notas ? `\nComentarios: ${notas}` : '');
    window.open(`https://wa.me/${b.dataset.numero}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  pintarCanasto();
})();
