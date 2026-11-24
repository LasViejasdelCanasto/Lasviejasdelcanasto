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

  // Agrupamos por sección y por tipo; cada grupo conserva precios ascendentes.
  const secciones = [
    { id: 'hogar', nombre: 'Hogar y mesa' },
    { id: 'regalos', nombre: 'Regalos' },
    { id: 'parrilla', nombre: 'Parrilla' },
    { id: 'gourmet', nombre: 'Gourmet' },
    { id: 'juguetes', nombre: 'Juguetes' }
  ];
  function seccionDe(p) {
    if (p.categoria === 'navidad') return 'hogar';
    if (p.categoria === 'juguetes') return 'juguetes';
    if (p.categoria === 'parrilla') return 'parrilla';
    if (p.id.startsWith('cbo') || p.id.startsWith('caja-')) return 'regalos';
    return p.categoria === 'hogar' ? 'hogar' : 'gourmet';
  }
  function tipoDe(p) {
    if (p.categoria === 'hogar' && /servilletero/i.test(p.nombre)) return 'Servilleteros';
    if (p.categoria === 'navidad') return 'Navidad';
    if (p.categoria === 'juguetes') return 'Juguetes';
    if (p.id === 'cce20117') return 'Bandejas';
    if (p.id.startsWith('trad-')) return 'Decoración';
    if (p.categoria === 'parrilla') return 'Accesorios de parrilla';
    if (p.id.startsWith('cbo')) return 'Bolsos tejidos';
    if (p.id.startsWith('caja-')) return 'Cajas de regalo';
    if (p.id.startsWith('tabla-charcutera')) return 'Tablas charcuteras';
    if (p.id.startsWith('snack-charqui')) return 'Snacks';
    if (p.categoria === 'te-cafe') return 'Té y café';
    if (p.categoria === 'despensa') return 'Despensa';
    if (p.id.startsWith('set-')) return 'Sets de mesa';
    if (p.nombre.toLowerCase().includes('bandeja')) return 'Bandejas';
    if (/canasto|cesto|cajón|cesta/i.test(p.nombre)) return 'Canastos y cestas';
    if (/organizador|portacubiertos|servilletero/i.test(p.nombre)) return 'Organizadores';
    if (/salero/i.test(p.nombre)) return 'Saleros';
    return 'Decoración';
  }
  const precioInicial = p => p.variantes ? Math.min(...p.variantes.map(v => v.precio)) : p.precio;
  function tarjeta(p) {
    return `
      <article class="product" data-id="${esc(p.id)}">
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
      </article>`;
  }
  function pintarCatalogo(cat) {
    const disponibles = TIENDA.productos.filter(p => !p.agotado);
    grid.innerHTML = secciones.filter(s => cat === 'todo' || cat === s.id).map(seccion => {
      const productos = disponibles.filter(p => seccionDe(p) === seccion.id);
      if (!productos.length) return '';
      const tipos = [...new Set(productos.map(tipoDe))].sort((a,b) => a === 'Navidad' ? -1 : b === 'Navidad' ? 1 : a.localeCompare(b, 'es'));
      return `<h3 class="shop-section-title">${esc(seccion.nombre)}</h3>` +
        tipos.map(tipo => {
          const grupo = productos.filter(p => tipoDe(p) === tipo)
            .sort((a,b) => precioInicial(a) - precioInicial(b) || a.nombre.localeCompare(b.nombre, 'es'));
          return `<h4 class="shop-type-title">${esc(tipo)}</h4>` + grupo.map(tarjeta).join('');
        }).join('');
    }).join('');
  }

  if (filtros) {
    const cats = [{ id: 'todo', nombre: 'Todo' }, ...secciones];
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
  if (botonesEnvio) botonesEnvio.innerHTML = '<button type="button" class="send-button">Enviar pedido</button>';

  function agregar(id, variante) {
    const confirmacion = document.getElementById('order-success');
    if (confirmacion) confirmacion.hidden = true;
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

  // ---------- Enviar pedido desde la tienda ----------
  let pendingOrder = null;
  botonesEnvio?.addEventListener('click', async e => {
    const b = e.target.closest('.send-button'); if (!b || b.disabled) return;
    const nombre = document.getElementById('order-name').value.trim();
    const telefono = document.getElementById('order-phone').value.trim();
    const direccion = document.getElementById('order-address').value.trim();
    const notas = document.getElementById('order-notes').value.trim();
    const faltan = [];
    if (!nombre || nombre.length > 100) faltan.push('un nombre válido');
    if (!/^[+0-9 ()-]{8,25}$/.test(telefono) || telefono.replace(/\D/g, '').length < 8) faltan.push('un teléfono válido');
    if (!direccion || direccion.length > 250) faltan.push('una dirección válida');
    if (notas.length > 500) faltan.push('un comentario de hasta 500 caracteres');
    if (!canasto.length) faltan.push('productos en el canasto');
    if (faltan.length) {
      errorEl.textContent = 'Falta completar ' + faltan.join(', ').replace(/, ([^,]*)$/, ' y $1') + '.';
      errorEl.hidden = false; return;
    }
    const items = canasto.map(l => ({id:l.id, name:porId[l.id].nombre, variant:l.variante || null, quantity:l.cant, unitPrice:precioDe(porId[l.id], l.variante)}));
    const input = {name:nombre, phone:telefono, address:direccion, notes:notas, seller:'yoya', items};
    const signature = JSON.stringify(input);
    if (!pendingOrder || pendingOrder.signature !== signature) pendingOrder = {signature, id:crypto.randomUUID()};
    const total = totalPesos();
    b.disabled = true; b.textContent = 'Enviando pedido…'; errorEl.hidden = true;
    const controles = panel.querySelectorAll('.qty button, .line-remove, .order-fields input, .order-fields textarea');
    controles.forEach(control => { control.disabled = true; });
    try {
      const res = await fetch('https://lvc-esparragos.yoyatim.chatgpt.site/api/shop-orders', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({id:pendingOrder.id, ...input})
      });
      if (!res.ok) throw new Error('No se pudo registrar el pedido.');
      const result = await res.json();
      if (result.id !== pendingOrder.id || result.total !== total) throw new Error('No se pudo confirmar el pedido.');
      canasto = [];
      guardar();
      pendingOrder = null;
      pintarCanasto();
      document.getElementById('order-success').hidden = false;
      ['order-name','order-phone','order-address','order-notes'].forEach(id => { document.getElementById(id).value = ''; });
    } catch {
      errorEl.textContent = 'No pudimos registrar tu pedido. Revisa tu conexión e intenta nuevamente.';
      errorEl.hidden = false;
    } finally {
      controles.forEach(control => { control.disabled = false; });
      b.disabled = false; b.textContent = 'Enviar pedido';
    }
  });

  pintarCanasto();
})();
