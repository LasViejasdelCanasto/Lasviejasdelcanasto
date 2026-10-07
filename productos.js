/*
  ===========================================================
  PRODUCTOS DE LA TIENDA — edita este archivo para cambiar
  precios, agregar o quitar productos.
  -----------------------------------------------------------
  - precio: número sin puntos ni signo $ (ej: 6000)
  - Si un producto tiene opciones (tamaño, material), usa
    "variantes" en vez de "precio".
  - imagen: ruta a la foto dentro de la carpeta images/
  - Para ocultar un producto sin borrarlo: agotado: true
  ===========================================================
*/
const TIENDA = {
  // Números que reciben los pedidos (formato 569XXXXXXXX)
  whatsapp: [
    { numero: '56992266719', etiqueta: '+56 9 9226 6719' },
  ],

  // Aviso destacado sobre la tienda. Para quitarlo: aviso: null
  aviso: {
    titulo: 'Día del Profesor',
    texto: 'Pedidos hasta el viernes 9 de octubre. Entregas sin costo en Chicureo el martes 13 y miércoles 14 de octubre, ya envueltos para regalo.'
  },

  // Opciones de entrega que el cliente elige al enviar el pedido
  entregas: [
    'Martes 13 de octubre, Chicureo (sin costo)',
    'Miércoles 14 de octubre, Chicureo (sin costo)',
    'Otro sector o fecha (con recargo, a convenir)'
  ],

  categorias: [
    { id: 'despensa', nombre: 'Despensa gourmet' },
    { id: 'te-cafe', nombre: 'Té y café' },
    { id: 'hogar', nombre: 'Hogar y mesa' }
  ],

  productos: [
    { id: 'dip-pimenton', marca: 'Gourmandier', nombre: 'Dip de Pimentón 156 ml', categoria: 'despensa', precio: 4000, imagen: 'images/productos/dip-pimenton.jpg', descripcion: 'Untable de zapallo italiano, pimentón rojo y aceitunas negras. 100% vegano y sin sellos.' },
    { id: 'sal-de-mar', marca: 'Etnia', nombre: 'Sal de Mar 60 gr', categoria: 'despensa', precio: 4000, imagen: 'images/productos/sal-de-mar.jpg', descripcion: 'Sal 100% natural y sin preservantes, de las salinas de Cáhuil.' },
    { id: 'saleros-mamuschka', marca: 'Las Viejas del Canasto', nombre: 'Set Saleros Mamuschka', categoria: 'hogar', precio: 6000, imagen: 'images/productos/saleros-mamuschka.jpg', descripcion: 'Salero y pimentero de cerámica pintados a mano.' },
    { id: 'mini-caja-gourmet', marca: 'Gourmandier', nombre: 'Mini caja regalo gourmet', categoria: 'despensa', precio: 6000, imagen: 'images/productos/mini-caja-gourmet.jpg', descripcion: 'Tres frascos de 28 ml con sabores surtidos: mermelada, manjar, confitura, pasta de ajo o salsa picante.' },
    { id: 'salsa-merken', marca: 'Gourmandier', nombre: 'Salsa de merkén 260 ml', categoria: 'despensa', precio: 6000, imagen: 'images/productos/salsa-merken.jpg', descripcion: 'Merkén ahumado con ajo chilote. Picor alto, ideal para adobar carnes o untar.' },
    { id: 'sal-oregano', marca: 'Etnia', nombre: 'Sal de Mar con Orégano', categoria: 'despensa', precio: 6000, imagen: 'images/productos/sal-oregano.jpg', descripcion: 'Sal natural del Salar de Atacama con toques de orégano.' },
    { id: 'servilleteros', marca: 'Las Viejas del Canasto', nombre: 'Servilletero', categoria: 'hogar', variantes: [ { nombre: 'Palma', precio: 6000 }, { nombre: 'Paja', precio: 7000 } ], imagen: 'images/productos/servilleteros.jpg', descripcion: 'Servilletero tejido, disponible en palma o paja.' },
    { id: 'mermelada-frambuesa', marca: 'Gourmandier', nombre: 'Mermelada de Frambuesa sin azúcar añadida 260 ml', categoria: 'despensa', precio: 6500, imagen: 'images/productos/mermelada-frambuesa.jpg', descripcion: 'Frambuesas del sur endulzadas con alulosa, con trozos de fruta.' },
    { id: 'merquen', marca: 'Etnia', nombre: 'Merquén 75 gr', categoria: 'despensa', precio: 6500, imagen: 'images/productos/merquen.jpg', descripcion: 'Ají cacho de cabra, cilantro, comino y sal, de tradición mapuche.' },
    { id: 'saleros-chinos', marca: 'Las Viejas del Canasto', nombre: 'Set Saleros Chinos', categoria: 'hogar', precio: 7000, imagen: 'images/productos/saleros-chinos.jpg', descripcion: 'Par de saleros de cerámica con base, pintados a mano.' },
    { id: 'te-verde-menta-frutilla', marca: 'Blends & Tea', nombre: 'Té verde menta y frutilla 50 g', categoria: 'te-cafe', precio: 7000, imagen: 'images/productos/te-verde-menta-frutilla.jpg', descripcion: 'Té verde con menta, frutilla y manzana. Suave y dulce, para tardes frías.' },
    { id: 'cafe-peru', marca: 'Café Señor K', nombre: 'Café de Perú La Chacra D’Dago 100 gr', categoria: 'te-cafe', precio: 8000, imagen: 'images/productos/cafe-peru.jpg', descripcion: 'Café de especialidad de Villa Rica, biodinámico y orgánico.' },
    { id: 'infusion-jamaica', marca: 'Enfusión Té Bienestar', nombre: 'Infusión Flor de Jamaica 65 g', categoria: 'te-cafe', precio: 9000, imagen: 'images/productos/infusion-jamaica.jpg', descripcion: 'Flor de Jamaica, rooibos, rosa mosqueta, caléndula, manzana y lavanda. En frío o caliente.' },
    { id: 'te-armoniza', marca: 'Enfusión Té Bienestar', nombre: 'Té Armoniza 80 g', categoria: 'te-cafe', precio: 9000, imagen: 'images/productos/te-armoniza.jpg', descripcion: 'Té verde, lemongrass, menta y jengibre.' },
    { id: 'te-blanco-manzana', marca: 'Blends & Tea', nombre: 'Té blanco manzana y frutilla 100 g', categoria: 'te-cafe', precio: 10000, imagen: 'images/productos/te-blanco-manzana.jpg', descripcion: 'Té blanco con frutilla, manzana, arándanos, hibisco y rosas.' },
    { id: 'te-blanco-chai', marca: 'Blends & Tea', nombre: 'Té blanco chai 150 g', categoria: 'te-cafe', precio: 10000, imagen: 'images/productos/te-blanco-chai.jpg', descripcion: 'Té blanco con especias estilo chai, lemongrass, piña y manzana.' },
    { id: 'portacubiertos', marca: 'Las Viejas del Canasto', nombre: 'Portacubiertos', categoria: 'hogar', variantes: [ { nombre: 'Palma', precio: 10000 }, { nombre: 'Paja', precio: 12000 } ], imagen: 'images/productos/portacubiertos.jpg', descripcion: 'Portacubiertos tejido con asa, en palma o paja.' },
    { id: 'bandeja-paja', marca: 'Las Viejas del Canasto', nombre: 'Bandeja de Paja', categoria: 'hogar', variantes: [ { nombre: 'Chica', precio: 12000 }, { nombre: 'Grande', precio: 15000 } ], imagen: 'images/productos/bandeja-paja.jpg', descripcion: 'Bandeja tejida para servir o decorar la mesa.' },
    { id: 'cafe-brasil', marca: 'Café Señor K', nombre: 'Café de Brasil Carmo de Minas 250 gr', categoria: 'te-cafe', precio: 13000, imagen: 'images/productos/cafe-brasil.jpg', descripcion: 'Bourbon amarillo de tueste medio, con notas a chocolate y castañas de cajú.' },
    { id: 'campana', marca: 'Las Viejas del Canasto', nombre: 'Campana', categoria: 'hogar', precio: 14000, imagen: 'images/productos/campana.jpg', descripcion: 'Campana de fierro para la entrada de la casa.' },
    { id: 'pasta-ajo-chilote', marca: 'Gourmandier', nombre: 'Pack pasta de ajo chilote 156 ml', categoria: 'despensa', precio: 16000, imagen: 'images/productos/pasta-ajo-chilote.jpg', descripcion: 'Pastas de ajo chilote con albahaca, ciboulette y orégano, para salsas, sopas y adobos.' },
    { id: 'set-cosmos', marca: 'Las Viejas del Canasto', nombre: 'Set Cosmos', categoria: 'hogar', precio: 18000, imagen: 'images/productos/set-cosmos.jpg', descripcion: 'Bowl para salsas, ensaladera y plato XL. ' },
    { id: 'set-bruma', marca: 'Las Viejas del Canasto', nombre: 'Set Bruma', categoria: 'hogar', precio: 18000, imagen: 'images/productos/set-bruma.jpg', descripcion: 'Bowl para salsas, ensaladera y plato XL. ' },
    { id: 'set-origen', marca: 'Las Viejas del Canasto', nombre: 'Set Origen', categoria: 'hogar', precio: 18000, imagen: 'images/productos/set-origen.jpg', descripcion: 'Bowl para salsas y ensaladera XL. ' },
 { id: 'set-piedra', marca: 'Las Viejas del Canasto', nombre: 'Set Piedra', categoria: 'hogar', precio: 18000, imagen: 'images/productos/set-piedra.jpg', descripcion: 'Bowl para salsas, ensaladera y plato. ' },
{ id: 'set-oliva', marca: 'Las Viejas del Canasto', nombre: 'Set Oliva', categoria: 'hogar', precio: 18000, imagen: 'images/productos/set-oliva.jpg', descripcion: 'Bowl para salsas, ensaladera y plato. ' },
{ id: 'set-provenza', marca: 'Las Viejas del Canasto', nombre: 'Set Provenza', categoria: 'hogar', precio: 18000, imagen: 'images/productos/set-provenza.jpg', descripcion: 'Bowl para salsas, ensaladera y plato. ' },
{ id: 'set-toscana', marca: 'Las Viejas del Canasto', nombre: 'Set Toscana', categoria: 'hogar', precio: 18000, imagen: 'images/productos/set-toscana.jpg', descripcion: 'Bowl para salsas, ensaladera y plato. ' },
{ id: 'set-lino', marca: 'Las Viejas del Canasto', nombre: 'Set Lino', categoria: 'hogar', precio: 20000, imagen: 'images/productos/set-lino.jpg', descripcion: 'Bowl para salsas, bowl pequeño, ensaladera y plato. ' },
{ id: 'set-salvia', marca: 'Las Viejas del Canasto', nombre: 'Set Salvia', categoria: 'hogar', precio: 20000, imagen: 'images/productos/set-salvia.jpg', descripcion: 'Bowl para salsas, plato y ensaladera XL. ' },
{ id: 'set-mediterraneo', marca: 'Las Viejas del Canasto', nombre: 'Set Mediterráneo', categoria: 'hogar', precio: 18000, imagen: 'images/productos/set-mediterraneo.jpg', descripcion: 'Bowl para salsas, ensaladera y plato. ' }
]
};
