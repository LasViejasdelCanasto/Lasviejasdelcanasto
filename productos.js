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
    { id: 'hogar', nombre: 'Hogar y mesa' },
    { id: 'parrilla', nombre: 'Parrilla' },
    { id: 'juguetes', nombre: 'Juguetes' },
    { id: 'navidad', nombre: 'Navidad' }
  ],

  productos: [
    { id: 'navidad-pesebre', marca: 'Las Viejas del Canasto', nombre: 'Pesebre', categoria: 'navidad', precio: 25000, imagen: 'images/productos/navidad-pesebre.jpg', descripcion: 'Pesebre decorativo. Medidas: 34 × 45 × 20 cm.' },
    { id: 'navidad-pino', marca: 'Las Viejas del Canasto', nombre: 'Pino de mimbre', categoria: 'navidad', variantes: [ { nombre: '50 cm', precio: 25000 }, { nombre: '1,40 m', precio: 45000 }, { nombre: '1,90 m', precio: 65000 }, { nombre: '2,20 m con estrella', precio: 75000 } ], imagen: 'images/productos/navidad-pino.jpg', descripcion: 'Pino de mimbre disponible en cuatro medidas. Imagen referencial.' },
    { id: "juguete-baby-morocha", marca: "Baby Alive", nombre: "Baby Alive morocha", categoria: 'juguetes', precio: 19000, imagen: "images/productos/juguete-baby-morocha.jpg", descripcion: "Muñeca Baby Alive con accesorios." },
    { id: "juguete-baby-rubia", marca: "Baby Alive", nombre: "Baby Alive rubia", categoria: 'juguetes', precio: 19000, imagen: "images/productos/juguete-baby-rubia.jpg", descripcion: "Muñeca Baby Alive con accesorios." },
    { id: "juguete-baby-comida", marca: "Baby Alive", nombre: "Baby Alive comida", categoria: 'juguetes', precio: 6000, imagen: "images/productos/juguete-baby-comida.jpg", descripcion: "Comida para muñeca Baby Alive." },
    { id: "juguete-princesa", marca: "Hasbro", nombre: "Pretty Princesa joyas", categoria: 'juguetes', precio: 20000, imagen: "images/productos/juguete-princesa.jpg", descripcion: "Juego de mesa de princesas con joyas." },
    { id: "juguete-monopoly", marca: "Hasbro", nombre: "Monopoly Junior Peppa Pig", categoria: 'juguetes', precio: 22000, imagen: "images/productos/juguete-monopoly.jpg", descripcion: "Juego de mesa Monopoly Junior con temática Peppa Pig." },
    { id: "juguete-izzy", marca: "My Little Pony", nombre: "My Little Pony Izzy", categoria: 'juguetes', precio: 18000, imagen: "images/productos/juguete-izzy.jpg", descripcion: "Set Izzy Moonbow con accesorios." },
    { id: "juguete-sunny", marca: "My Little Pony", nombre: "My Little Pony Sunny", categoria: 'juguetes', precio: 18000, imagen: "images/productos/juguete-sunny.jpg", descripcion: "Set Sunny Starscout con accesorios para crear batidos." },
    { id: "juguete-granja", marca: "Peppa Pig", nombre: "Peppa Pig La Granja", categoria: 'juguetes', precio: 35000, imagen: "images/productos/juguete-granja.jpg", descripcion: "Set de juego con figuras y accesorios de la granja." },
    { id: "juguete-dino", marca: "Play-Doh", nombre: "Play-Doh Dino", categoria: 'juguetes', precio: 15000, imagen: "images/productos/juguete-dino.jpg", descripcion: "Set Dino Crew con masa Play-Doh y dinosaurio." },
    { id: "juguete-peluqueria", marca: "Play-Doh", nombre: "Play-Doh peluquería", categoria: 'juguetes', precio: 25000, imagen: "images/productos/juguete-peluqueria.jpg", descripcion: "Set de peluquería con masas y accesorios." },
    { id: "juguete-sand", marca: "Play-Doh", nombre: "Play-Doh Sand", categoria: 'juguetes', precio: 21000, imagen: "images/productos/juguete-sand.jpg", descripcion: "Balde de arena moldeable con accesorios." },
    { id: "juguete-wheels", marca: "Play-Doh", nombre: "Play-Doh Wheels", categoria: 'juguetes', precio: 16000, imagen: "images/productos/juguete-wheels.jpg", descripcion: "Camión de bomberos Play-Doh Wheels con masa y accesorios." },
    { id: "juguete-patito", marca: "Playskool", nombre: "Playskool Patito", categoria: 'juguetes', precio: 11000, imagen: "images/productos/juguete-patito.jpg", descripcion: "Juguete de patitos para gatear, desde 6 meses." },
    { id: "juguete-crunch-rosa", marca: "Play-Doh", nombre: "Play-Doh Crystal Crunch Gemas Brillantes rosa y amarillo", categoria: 'juguetes', precio: 11000, imagen: "images/productos/juguete-crunch-rosa.jpg", descripcion: "Dos recipientes con masa Crystal Crunch, rosa y amarillo." },
    { id: "juguete-crunch-azul", marca: "Play-Doh", nombre: "Play-Doh Crystal Crunch Gemas Brillantes azul y blanco", categoria: 'juguetes', precio: 11000, imagen: "images/productos/juguete-crunch-azul.jpg", descripcion: "Dos recipientes con masa Crystal Crunch, azul y blanco." },
    { id: "juguete-cocomelon", marca: "Cocomelon", nombre: "Cocomelon Family Car", categoria: 'juguetes', precio: 15000, imagen: "images/productos/juguete-cocomelon.jpg", descripcion: "Auto familiar de juguete con figura Cocomelon." },
    { id: 'parrilla-cepillo-recargable', marca: 'Las Viejas del Canasto', nombre: 'Cepillo Limpiador Recargable', categoria: 'parrilla', precio: 18000, imagen: 'images/productos/cepillo-limpiador-recargable-v2.jpg', descripcion: 'Cepillo eléctrico recargable para limpiar la parrilla. Incluye cabezal de cerdas duras, cabezal de pulido y cable USB-C.' },
    { id: 'trad-pincel', marca: 'Trad', nombre: 'Pincel chino y/o Borla decorativa + soporte', categoria: 'hogar', variantes: [ { nombre: '40 cm', precio: 45000 }, { nombre: '50 cm', precio: 53000 } ], imagen: 'images/productos/trad-pincel.jpg', descripcion: 'Pincel chino y/o borla decorativa con soporte, disponible en dos medidas.' },
    { id: 'trad-servilleteros-yute', marca: 'Trad', nombre: 'Servilleteros de Yute', categoria: 'hogar', precio: 24000, imagen: 'images/productos/trad-servilleteros-yute.jpg', descripcion: 'Servilleteros de yute de la marca Trad.' },
    { id: 'trad-servilleteros-redondos', marca: 'Trad', nombre: 'Servilleteros Redondos', categoria: 'hogar', precio: 22000, imagen: 'images/productos/trad-servilleteros-redondos.jpg', descripcion: 'Servilleteros redondos de la marca Trad.' },
    { id: 'parrilla-fuelle', marca: 'Pladot', nombre: 'Fuelle Soplador', categoria: 'parrilla', precio: 27000, imagen: 'images/productos/parrilla-fuelle.jpg', descripcion: 'Fuelle soplador para avivar el fuego de la parrilla.' },
    { id: 'parrilla-pala-atizador', marca: 'Pladot', nombre: 'Kit pala y atizador', categoria: 'parrilla', precio: 32000, imagen: 'images/productos/parrilla-pala-atizador.jpg', descripcion: 'Kit para parrilla que incluye una pala y un atizador.' },
    { id: 'parrilla-kit', marca: 'Pladot', nombre: 'Kit Parrillero', categoria: 'parrilla', precio: 33000, imagen: 'images/productos/parrilla-kit.jpg', descripcion: 'Kit de utensilios para parrilla presentado en estuche.' },
    { id: 'parrilla-guantes', marca: 'Pladot', nombre: 'Guantes Parrilleros', categoria: 'parrilla', precio: 36000, imagen: 'images/productos/parrilla-guantes.jpg', descripcion: 'Par de guantes parrilleros.' },
    { id: 'wenuy-trio-mermeladas', marca: 'Wenüy', nombre: 'Trío de mermeladas gourmet', categoria: 'despensa', precio: 17000, imagen: 'images/productos/wenuy-mermeladas.jpg', descripcion: 'Incluye mermelada de pimentón, mermelada de ají verde y mermelada de cebolla al vino tinto. Tres frascos de 160 g cada uno.' },
    { id: 'wenuy-trio-salsas', marca: 'Wenüy', nombre: 'Trío de salsas gourmet', categoria: 'despensa', precio: 17000, imagen: 'images/productos/wenuy-salsas.jpg', descripcion: 'Incluye conserva de tomates secos, salsa de ají verde y salsa de merkén. Tres frascos de 130 g cada uno.' },
    { id: 'saborista-aji-verde', marca: 'El Saborista', nombre: 'Confitura de ají verde', categoria: 'despensa', precio: 5000, imagen: 'images/productos/el-saborista.jpg', descripcion: 'Confitura de ají verde, frasco de 160 g.' },
    { id: 'saborista-pimenton', marca: 'El Saborista', nombre: 'Confitura de pimentón', categoria: 'despensa', precio: 5000, imagen: 'images/productos/el-saborista.jpg', descripcion: 'Confitura de pimentón, frasco de 160 g.' },
    { id: 'saborista-salsa-aji', marca: 'El Saborista', nombre: 'Salsa de ají verde', categoria: 'despensa', precio: 5000, imagen: 'images/productos/el-saborista.jpg', descripcion: 'Salsa de ají verde, frasco de 130 g.' },
    { id: 'saborista-cebolla', marca: 'El Saborista', nombre: 'Confitura de cebolla al vino tinto', categoria: 'despensa', precio: 5000, imagen: 'images/productos/el-saborista.jpg', descripcion: 'Confitura de cebolla al vino tinto, frasco de 160 g.' },
    { id: 'snack-charqui-30g', marca: 'La Charcutería Artesanal', nombre: 'Snack de charqui 30 g', categoria: 'despensa', precio: 3500, imagen: 'images/productos/charcuteria.jpg', descripcion: 'Snack de charqui vacuno de 30 g. La gráfica del producto indica 22 g de proteína.' },
    { id: 'tabla-charcutera-150g', marca: 'La Charcutería Artesanal', nombre: 'Tabla charcutera de 3 cortes 150 g', categoria: 'despensa', precio: 5500, imagen: 'images/productos/charcuteria.jpg', descripcion: 'Incluye 50 g de coppa, 50 g de salame italiano y 50 g de chorizo español. Imagen referencial.' },
    { id: 'tabla-charcutera-200g', marca: 'La Charcutería Artesanal', nombre: 'Tabla charcutera de 4 cortes 200 g', categoria: 'despensa', precio: 6900, imagen: 'images/productos/charcuteria.jpg', descripcion: 'Incluye 50 g de coppa, 50 g de salame italiano, 50 g de chorizo español y 50 g de queso gouda ahumado. Imagen referencial.' },
    { id: 'caja-esencial', marca: 'La Charcutería Artesanal', nombre: 'Caja Esencial', categoria: 'despensa', precio: 14300, imagen: 'images/productos/caja-esencial.jpg', descripcion: 'Incluye chorizo español 200 g, salame italiano 200 g, 5 cabanossi y queso de cabra ahumado aprox. 200 g. Precio referencial sujeto a confirmación de presentación y despacho. Imagen referencial.' },
    { id: 'caja-seleccion', marca: 'La Charcutería Artesanal', nombre: 'Caja Selección', categoria: 'despensa', precio: 26500, imagen: 'images/productos/caja-seleccion.jpg', descripcion: 'Incluye tabla charcutera 150 g, lomo embuchado 100 g, chorizo español 100 g, salame italiano 100 g, queso de cabra 200 g, charqui 30 g y fuet tradicional. Precio referencial sujeto a confirmación de presentación y despacho. Imagen referencial.' },
    { id: 'caja-premium', marca: 'La Charcutería Artesanal', nombre: 'Caja Premium', categoria: 'despensa', precio: 32500, imagen: 'images/productos/caja-premium.jpg', descripcion: 'Incluye tabla charcutera 150 g, lomo embuchado 100 g, chorizo español 100 g, salame italiano 100 g, queso de cabra 200 g, charqui 30 g, 2 fuet tradicionales y 5 cabanossi. Precio referencial sujeto a confirmación de presentación y despacho. Imagen referencial.' },
    { id: 'cce20065', marca: 'Las Viejas del Canasto', nombre: 'Canasto redondo con asas negras', categoria: 'hogar', variantes: [ { nombre: 'Pequeño (30 × 27 cm)', precio: 20000 }, { nombre: 'Mediano (35 × 29 cm)', precio: 25000 }, { nombre: 'Grande (38 × 33 cm)', precio: 30000 } ], imagen: 'images/productos/cce20065.jpg', descripcion: 'Canasto tejido con borde y asas negras. Precio por unidad.' },
    { id: 'cce11067', marca: 'Las Viejas del Canasto', nombre: 'Canasto rectangular tejido con asas', categoria: 'hogar', variantes: [ { nombre: 'Pequeño (34 × 26 × 18 cm)', precio: 15000 }, { nombre: 'Mediano (38 × 29 × 19 cm)', precio: 20000 }, { nombre: 'Grande (42 × 34 × 20 cm)', precio: 25000 } ], imagen: 'images/productos/cce11067.jpg', descripcion: 'Canasto rectangular tejido con asas. Precio por unidad.' },
    { id: 'cce20013', marca: 'Las Viejas del Canasto', nombre: 'Canasto ovalado tejido', categoria: 'hogar', variantes: [ { nombre: 'Pequeño (35 × 29 × 22 cm)', precio: 25000 }, { nombre: 'Mediano (40 × 33 × 24 cm)', precio: 30000 }, { nombre: 'Grande (46 × 36 × 25 cm)', precio: 45000 } ], imagen: 'images/productos/cce20013.jpg', descripcion: 'Canasto ovalado tejido con asas. Precio por unidad.' },
    { id: 'cce40020', marca: 'Las Viejas del Canasto', nombre: 'Bandeja rectangular tejida', categoria: 'hogar', variantes: [ { nombre: 'Pequeña (38 × 28 × 6 cm)', precio: 18000 }, { nombre: 'Grande (43 × 33 × 7 cm)', precio: 22000 } ], imagen: 'images/productos/cce40020.jpg', descripcion: 'Bandeja tejida con asas. Precio por unidad.' },
    { id: 'cce40010', marca: 'Las Viejas del Canasto', nombre: 'Organizador cuadrado tejido', categoria: 'hogar', precio: 12000, imagen: 'images/productos/cce40010.jpg', descripcion: 'Organizador tejido con asa y compartimentos. Medidas: 20 × 20 × 12 cm.' },
    { id: 'cce20100', marca: 'Las Viejas del Canasto', nombre: 'Servilletero de Palma', categoria: 'hogar', precio: 12000, imagen: 'images/productos/cce20100.jpg', descripcion: 'Servilletero de palma tejido.' },
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
