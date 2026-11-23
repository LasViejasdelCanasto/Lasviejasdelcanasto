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
  { numero: '56992266719', etiqueta: 'Yoya: +56 9 9226 6719' },
  { numero: '56988688863', etiqueta: 'Vale: +56 9 8868 8863' }
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
    { id: 'cce40020', marca: 'Las Viejas del Canasto', nombre: 'Bandeja rectangular tejida', categoria: 'hogar', variantes: [ { nombre: 'Pequeña (38 × 28 × 6 cm)', precio: 18000 }, { nombre: 'Grande (43 × 33 × 7 cm)', precio: 22000 } ], imagen: 'images/productos/cce40020.jpg', descripcion: 'Bandeja tejida con asas. Precio por unidad.' },
    { id: 'cce40010', marca: 'Las Viejas del Canasto', nombre: 'Organizador cuadrado tejido', categoria: 'hogar', precio: 12000, imagen: 'images/productos/cce40010.jpg', descripcion: 'Organizador tejido con asa y compartimentos. Medidas: 20 × 20 × 12 cm.' },
    { id: 'cce20100', marca: 'Las Viejas del Canasto', nombre: 'Bandeja pequeña tejida', categoria: 'hogar', precio: 12000, imagen: 'images/productos/cce20100.jpg', descripcion: 'Bandeja pequeña cuadrada de fibra tejida.' },
    { id: 'cce20084', marca: 'Las Viejas del Canasto', nombre: 'Bandeja cuadrada tejida', categoria: 'hogar', precio: 15000, imagen: 'images/productos/cce20084.jpg', descripcion: 'Bandeja cuadrada de fibra tejida. Medidas: 28 × 28 × 8 cm.' },
    { id: 'cce20085', marca: 'Las Viejas del Canasto', nombre: 'Canasto rectangular tejido', categoria: 'hogar', precio: 20000, imagen: 'images/productos/cce20085.jpg', descripcion: 'Canasto rectangular tejido con asas. Medidas: 40 × 25 × 18 cm.' },
    { id: 'cce30010', marca: 'Las Viejas del Canasto', nombre: 'Canasto alto gris', categoria: 'hogar', precio: 35000, imagen: 'images/productos/cce30010.jpg', descripcion: 'Canasto alto rectangular gris. Medidas: 45 × 35 × 55 cm.' },
    { id: 'cce30009', marca: 'Las Viejas del Canasto', nombre: 'Canasto alto natural', categoria: 'hogar', precio: 35000, imagen: 'images/productos/cce30009.jpg', descripcion: 'Canasto alto rectangular natural. Medidas: 45 × 35 × 55 cm.' },
    { id: 'cce11210', marca: 'Las Viejas del Canasto', nombre: 'Organizador rectangular tejido', categoria: 'hogar', precio: 14000, imagen: 'images/productos/cce11210.jpg', descripcion: 'Organizador tejido con asa y compartimentos. Medidas: 24 × 17 × 13 cm.' },
    { id: 'cbo73019', marca: 'Las Viejas del Canasto', nombre: 'Bolso tejido negro', categoria: 'hogar', precio: 11000, imagen: 'images/productos/cbo73019.jpg', descripcion: 'Bolso tejido negro con asas negras. Medidas: 41 × 36 cm.' },
    { id: 'cbo73014', marca: 'Las Viejas del Canasto', nombre: 'Bolso tejido rojo', categoria: 'hogar', precio: 18000, imagen: 'images/productos/cbo73014.jpg', descripcion: 'Bolso tejido rojo con asas negras. Medidas: 48 × 35 cm.' },
    { id: 'cbo73016', marca: 'Las Viejas del Canasto', nombre: 'Bolso tejido natural', categoria: 'hogar', precio: 18000, imagen: 'images/productos/cbo73016.jpg', descripcion: 'Bolso tejido color natural con asas negras.' },
    { id: 'cbo73018', marca: 'Las Viejas del Canasto', nombre: 'Bolso tejido beige', categoria: 'hogar', precio: 11000, imagen: 'images/productos/cbo73018.jpg', descripcion: 'Bolso tejido beige. Medidas: 41 × 36 cm.' },
    { id: 'cce20018', marca: 'Las Viejas del Canasto', nombre: 'Cesto cuadrado tejido', categoria: 'hogar', precio: 22000, imagen: 'images/productos/cce20018.jpg', descripcion: 'Cesto cuadrado tejido con asas. Medidas: 30 × 30 × 30 cm.' },
    { id: 'cce11275', marca: 'Las Viejas del Canasto', nombre: 'Cajón tejido rectangular', categoria: 'hogar', precio: 22000, imagen: 'images/productos/cce11275.jpg', descripcion: 'Cajón tejido rectangular con asas. Medidas: 48 × 36 × 26 cm.' },
    { id: 'cba73159', marca: 'Las Viejas del Canasto', nombre: 'Bandeja rectangular tejida', categoria: 'hogar', precio: 10000, imagen: 'images/productos/cba73159.jpg', descripcion: 'Bandeja tejida para servir o decorar. Medidas: 35 × 25 × 8 cm.' },
    { id: 'cce20117', marca: 'Las Viejas del Canasto', nombre: 'Cesta redonda tejida', categoria: 'hogar', variantes: [ { nombre: 'Pequeña (35 × 9 cm)', precio: 12000 }, { nombre: 'Grande (40 × 11 cm)', precio: 15000 } ], imagen: 'images/productos/cce20117.jpg', descripcion: 'Cesta redonda tejida con asas, disponible en dos tamaños. El precio corresponde a una cesta.' },
    { id: 'cce30020', marca: 'Las Viejas del Canasto', nombre: 'Canasto blanco y fibra', categoria: 'hogar', precio: 20000, imagen: 'images/productos/cce30020.jpg', descripcion: 'Canasto blanco y fibra natural. Medidas: 35 × 39 cm.' },
    { id: 'cce40028', marca: 'Las Viejas del Canasto', nombre: 'Canasto de picnic', categoria: 'hogar', precio: 28000, imagen: 'images/productos/cce40028.jpg', descripcion: 'Canasto ovalado tejido con asas. Medidas: 45 × 34 × 21 cm.' },
    { id: 'saleros-mamuschka', marca: 'Las Viejas del Canasto', nombre: 'Set Saleros Mamuschka', categoria: 'hogar', precio: 6000, imagen: 'images/productos/saleros-mamuschka.jpg', descripcion: 'Salero y pimentero de cerámica pintados a mano.' },
    { id: 'mini-caja-gourmet', marca: 'Gourmandier', nombre: 'Mini caja regalo gourmet', categoria: 'despensa', precio: 6000, imagen: 'images/productos/mini-caja-gourmet.jpg', descripcion: 'Tres frascos de 28 ml con sabores surtidos: mermelada, manjar, confitura, pasta de ajo o salsa picante.' },
    { id: 'salsa-merken', marca: 'Gourmandier', nombre: 'Salsa de merkén 260 ml', categoria: 'despensa', precio: 6000, imagen: 'images/productos/salsa-merken.jpg', descripcion: 'Merkén ahumado con ajo chilote. Picor alto, ideal para adobar carnes o untar.' },
    { id: 'sal-oregano', marca: 'Etnia', nombre: 'Sal de Mar con Orégano', categoria: 'despensa', precio: 6000, imagen: 'images/productos/sal-oregano.jpg', descripcion: 'Sal natural del Salar de Atacama con toques de orégano.' },
    { id: 'servilleteros', marca: 'Las Viejas del Canasto', nombre: 'Servilletero', categoria: 'hogar', variantes: [ { nombre: 'Palma', precio: 6000 }, { nombre: 'Paja', precio: 7000 } ], imagen: 'images/productos/servilleteros.jpg', descripcion: 'Servilletero tejido, disponible en palma o paja.' },
    { id: 'saleros-chinos', marca: 'Las Viejas del Canasto', nombre: 'Set Saleros Chinos', categoria: 'hogar', precio: 7000, imagen: 'images/productos/saleros-chinos.jpg', descripcion: 'Par de saleros de cerámica con base, pintados a mano.' },
    { id: 'te-verde-menta-frutilla', marca: 'Blends & Tea', nombre: 'Té verde menta y frutilla 50 g', categoria: 'te-cafe', precio: 7000, imagen: 'images/productos/te-verde-menta-frutilla.jpg', descripcion: 'Té verde con menta, frutilla y manzana. Suave y dulce, para tardes frías.' },
    { id: 'te-blanco-manzana', marca: 'Blends & Tea', nombre: 'Té blanco manzana y frutilla 100 g', categoria: 'te-cafe', precio: 10000, imagen: 'images/productos/te-blanco-manzana.jpg', descripcion: 'Té blanco con frutilla, manzana, arándanos, hibisco y rosas.' },
    { id: 'te-blanco-chai', marca: 'Blends & Tea', nombre: 'Té blanco chai 150 g', categoria: 'te-cafe', precio: 10000, imagen: 'images/productos/te-blanco-chai.jpg', descripcion: 'Té blanco con especias estilo chai, lemongrass, piña y manzana.' },
    { id: 'portacubiertos', marca: 'Las Viejas del Canasto', nombre: 'Portacubiertos', categoria: 'hogar', variantes: [ { nombre: 'Palma', precio: 10000 }, { nombre: 'Paja', precio: 12000 } ], imagen: 'images/productos/portacubiertos.jpg', descripcion: 'Portacubiertos tejido con asa, en palma o paja.' },
    { id: 'bandeja-paja', marca: 'Las Viejas del Canasto', nombre: 'Bandeja de Paja', categoria: 'hogar', variantes: [ { nombre: 'Chica', precio: 12000 }, { nombre: 'Grande', precio: 15000 } ], imagen: 'images/productos/bandeja-paja.jpg', descripcion: 'Bandeja tejida para servir o decorar la mesa.' },
    { id: 'campana', marca: 'Las Viejas del Canasto', nombre: 'Campana', categoria: 'hogar', precio: 14000, imagen: 'images/productos/campana.jpg', descripcion: 'Campana de fierro para la entrada de la casa.' },
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
