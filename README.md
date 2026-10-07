# Las Viejas del Canasto — sitio web

Sitio estático preparado para GitHub Pages, con tienda y canasto de compras.
Los pedidos se envían por WhatsApp; el pago se coordina por transferencia.

## Cómo publicarlo
1. Abre el repositorio `Lasviejasdelcanasto`.
2. Add file → Upload files.
3. Sube `index.html`, `styles.css`, `script.js`, `productos.js`, `tienda.js` y la carpeta `images` (incluye `images/productos`).
4. Commit changes.
5. Settings → Pages: main / (root).
6. Custom domain: `lasviejasdelcanasto.cl`.
7. Cuando el DNS esté validado, activa Enforce HTTPS.

## Cómo editar la tienda
Todo se cambia en `productos.js` (desde GitHub: abre el archivo → ícono del lápiz → Commit changes):
- Precios: número sin puntos ni $ (ej: `precio: 6000`).
- Agregar producto: copia una línea de producto, cambia `id`, nombre, precio e imagen, y sube la foto a `images/productos/`.
- Producto sin stock: agrega `agotado: true` y deja de mostrarse.
- Aviso destacado (ej. Día del Profesor): cambia `aviso`, o déjalo en `aviso: null` para quitarlo.
- Fechas de entrega: lista `entregas`.
- Números de WhatsApp que reciben pedidos: lista `whatsapp`.
