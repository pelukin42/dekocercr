/* ==========================================================================
   DEKOCER — Núcleo compartido (FUENTE ÚNICA)
   - Configuración única del negocio: todo dato real vive aquí
   - WhatsApp con mensaje contextual, idioma, horario, registro de solicitudes
   - Placeholders de fotografía, header, menú móvil y animaciones
   Copiar a pro/js/core.js después de editar.
   La fuente de cada dato está en README.md y PENDIENTES-CLIENTE.md.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1) CONFIGURACIÓN DEL NEGOCIO
   Campo vacío = ese elemento o sección NO se dibuja. Nunca se rellena.
   -------------------------------------------------------------------------- */
const NEGOCIO = {
  nombre: 'DEKOCER',
  nombreCompleto: 'DEKOCER · Pisos y Azulejos',
  // La ficha de Google con su mismo teléfono se llama "Distribuidora MALU GM" y sus
  // publicaciones de 2021 a 2024 salían como Distribuidora MALU (ver PENDIENTES-CLIENTE.md).
  nombresAlternos: ['Dekocer', 'Distribuidora MALU', 'Distribuidora MALU GM'],
  nombreAnterior: 'Distribuidora MALU',   // 🔶 se muestra con nota en modo demo
  ciudad: 'Heredia',
  eslogan: 'Pisos y azulejos',            // bajada del logo
  esloganEn: 'Floor & wall tiles',
  schemaTipo: ['Store', 'HomeAndConstructionBusiness'],
  clubNombre: 'DEKOCER Profesional',
  // Vocabulario del rubro que usan los mensajes y contadores del sitio
  vocab: { uno: 'producto', varios: 'productos', unoEn: 'product', variosEn: 'products',
           cliente: 'cliente', clienteEn: 'customer',
           area: 'línea', areas: 'líneas', areaEn: 'line', areasEn: 'lines',
           regalo: '', regaloEn: '' },

  // CONFIRMADO — bio y publicaciones de Instagram (@dekocercr), setiembre 2026
  telefono: '+506 2237-7807',              // bio de Instagram
  telefonoHref: '+50622377807',
  whatsapp: '50689811504',                 // 8981-1504, en los artes de sus publicaciones
  whatsappMostrar: '8981-1504',
  // 🔶 Señas: directorio Nexdu ("de la Iglesia de Los Ángeles 150 m sur") + pin de la ficha
  // de Google con el mismo teléfono. Confirmar en la reunión.
  direccion: 'Calle 6, Heredia centro · 150 m sur de la Iglesia de Los Ángeles',
  direccionEn: 'Calle 6, downtown Heredia · 150 m south of Los Ángeles church',
  canton: 'Heredia',
  provincia: 'Heredia',
  codigoPostal: '40101',
  lat: 9.9943152,
  lng: -84.1193385,
  instagram: 'https://www.instagram.com/dekocercr/',
  instagramUsuario: '@dekocercr',
  facebook: '',                            // ⬜ los artes dicen "Dekocer"; falta el enlace exacto
  googleMaps: 'https://www.google.com/maps/search/?api=1&query=9.9943152,-84.1193385',
  googlePlaceId: 'ChIJezeB29z6oI8R73sJfrJJLSc',   // 🔶 ficha "Distribuidora MALU GM"
  google: { rating: 4.2, total: 0, revisado: '19-sep-2026' },   // total: Google no lo muestra sin sesión
  pagos: [], pagosEn: [],                  // ⬜ ¿SINPE, tarjeta, transferencia?
  accesible: false,
  director: '',

  // dia: 0 = domingo … 6 = sábado. ⬜ Solo se conoce el sábado (8 a. m.–12 m. d.) y que
  // el lunes abre a las 8:30 a. m. Sin el horario completo no se dibuja nada.
  horario: [],

  email: 'ventas@dekocercr.com',           // bio de Instagram; el dominio tiene correo activo
  emailAnterior: 'ventas@distmalu.com',    // aparece en sus artes hasta 2024 y en el rótulo
  tiktok: '',
  sinpe: '',
  dominio: '',                             // dekocercr.com es de ellos: hoy muestra "Coming Soon"

  // Promoción del mes: una sola línea. activa:false = no se muestra.
  promo: { activa: true,
    texto: 'Oferta de setiembre: pisos Montana HD y Carvalho HD 31×59 a ₡5.450 (antes ₡6.990).',
    textoEn: 'September offer: Montana HD and Carvalho HD 31×59 floors at ₡5,450 (was ₡6,990).',
    wa: 'Hola DEKOCER, vi la oferta de Montana HD y Carvalho HD 31×59 a ₡5.450. ¿Sigue disponible?' },

  // Registro de solicitudes (Formspree, Supabase REST o Apps Script). Vacío = solo WhatsApp.
  endpoint: '',
  headers: {},

  // Productos destacados en la portada (los de la oferta vigente)
  destacados: ['montana-hd', 'carvalho-hd', 'neptune-stone', 'valencia'],

  /* ---------- Catálogo: líneas de producto ---------- */
  categorias: [
    { id: 'porcelanato', icono: 'i-marmol',
      nombre: 'Porcelanatos', nombreEn: 'Porcelain tile',
      desc: 'Efecto mármol y piedra, rectificados, en 60×60 y gran formato de 60×120.',
      descEn: 'Marble and stone looks, rectified, in 60×60 and large 60×120 format.' },
    { id: 'ceramica', icono: 'i-piso',
      nombre: 'Pisos cerámicos', nombreEn: 'Ceramic floors',
      desc: 'Formatos 59×59, 53×53 y 46×46 para sala, comedor, cocina y escaleras.',
      descEn: 'Sizes 59×59, 53×53 and 46×46 for living rooms, kitchens and stairs.' },
    { id: 'madera', icono: 'i-madera',
      nombre: 'Efecto madera', nombreEn: 'Wood look',
      desc: 'Tablones cerámicos que se ven como madera y se limpian como cerámica.',
      descEn: 'Ceramic planks that look like wood and clean like tile.' },
    { id: 'exterior', icono: 'i-sol',
      nombre: 'Exteriores y antideslizantes', nombreEn: 'Outdoor & anti-slip',
      desc: 'Terrazas, patios y jardines: acabados antideslizantes y de piedra natural.',
      descEn: 'Terraces, patios and gardens: anti-slip and natural-stone finishes.' },
    { id: 'azulejo', icono: 'i-azulejo',
      nombre: 'Azulejos de pared', nombreEn: 'Wall tile',
      desc: 'Para baños y cocinas: 31×60, 33×55 y el clásico subway de 10×20.',
      descEn: 'For bathrooms and kitchens: 31×60, 33×55 and the classic 10×20 subway.' },
    { id: 'fachaleta', icono: 'i-fachaleta',
      nombre: 'Fachaletas y piedra', nombreEn: 'Wall cladding & stone',
      desc: 'Paredes de acento, fachadas y jardines con textura de piedra o ladrillo.',
      descEn: 'Feature walls, façades and gardens with stone or brick texture.' }
  ],

  /* ---------- Zonas: dónde va el material ---------- */
  zonas: {
    'sala': ['Sala y comedor', 'Living & dining room'],
    'cocina': ['Cocina', 'Kitchen'],
    'bano': ['Baño', 'Bathroom'],
    'dormitorio': ['Dormitorio', 'Bedroom'],
    'escalera': ['Escaleras', 'Stairs'],
    'pasillo': ['Pasillos', 'Hallways'],
    'terraza': ['Terraza o patio', 'Terrace or patio'],
    'jardin': ['Jardín', 'Garden'],
    'cochera': ['Cochera', 'Driveway'],
    'pared': ['Pared decorativa', 'Feature wall'],
    'fachada': ['Fachada', 'Façade'],
    'local': ['Local u oficina', 'Shop or office']
  },

  /* ---------- Catálogo ----------
     precio / precioAntes: solo los que DEKOCER publicó, con fecha en precioFuente.
     atributos: lo que dice el arte de la publicación (origen, acabado, calidad).
     flag: 'anteriores' = publicado en 2025, sin confirmar existencia (construido y apagado).  */
  servicios: [
    /* ----- Publicados en 2026 ----- */
    { id: 'montana-hd', cats: ['madera'], formato: '31×59', zonas: ['terraza', 'sala'],
      precio: 5450, precioAntes: 6990, precioFuente: 'Instagram, 17-set-2026 («Antes ₡6.990 · Ahora ₡5.450»)',
      foto: 'img/productos/montana-hd.jpg',
      atributos: ['Hecho en Brasil', 'Acabado satinado', 'Primera calidad'],
      atributosEn: ['Made in Brazil', 'Satin finish', 'First quality'],
      nombre: 'Montana HD', nombreEn: 'Montana HD',
      desc: 'Piso efecto madera con acabado satinado: calidez de la madera para una terraza o una sala.',
      descEn: 'Wood-look floor with a satin finish: the warmth of wood for a terrace or living room.',
      fuente: 'Instagram, 17-set-2026' },

    { id: 'carvalho-hd', cats: ['madera'], formato: '31×59', zonas: ['sala', 'dormitorio'],
      precio: 5450, precioAntes: 6990, precioFuente: 'Instagram, 17-set-2026 («Antes ₡6.990 · Ahora ₡5.450»)',
      foto: 'img/productos/carvalho-hd.jpg',
      atributos: ['Hecho en Brasil', 'Acabado satinado'],
      atributosEn: ['Made in Brazil', 'Satin finish'],
      nombre: 'Carvalho HD', nombreEn: 'Carvalho HD',
      desc: 'Madera en tono gris claro, de acabado satinado, para ambientes modernos.',
      descEn: 'Light-grey wood look with a satin finish, for modern rooms.',
      fuente: 'Instagram, 17-set-2026' },

    { id: 'neptune-stone', cats: ['exterior'], formato: '60×60', zonas: ['terraza', 'jardin', 'cochera'],
      precio: 4995, precioAntes: 6995, precioFuente: 'Instagram, 06-set-2026 («Antes ₡6.995 · Ahora ₡4.995»)',
      foto: 'img/productos/neptune-stone.jpg',
      atributos: ['Hecho en Brasil', 'Antideslizante', 'Primera calidad'],
      atributosEn: ['Made in Brazil', 'Anti-slip', 'First quality'],
      nombre: 'Neptune Stone', nombreEn: 'Neptune Stone',
      desc: 'Piso de exterior con estética de piedra y acabado antideslizante, para terrazas, patios y áreas exteriores.',
      descEn: 'Outdoor floor with a natural-stone look and anti-slip finish, for terraces, patios and outdoor areas.',
      fuente: 'Instagram, 06-set-2026' },

    { id: 'neptune-dusk', cats: ['exterior'], formato: '60×60', zonas: ['jardin', 'terraza'],
      precio: 4995, precioFuente: 'Instagram, 05-set-2026 (₡4.995)',
      foto: 'img/productos/neptune-dusk.jpg',
      atributos: ['Hecho en Brasil', 'Inspirado en piedra natural'],
      atributosEn: ['Made in Brazil', 'Natural-stone inspired'],
      nombre: 'Neptune Dusk', nombreEn: 'Neptune Dusk',
      desc: 'Diseño inspirado en la piedra natural, en tono oscuro, para jardines, terrazas y patios.',
      descEn: 'Natural-stone design in a darker tone, for gardens, terraces and patios.',
      fuente: 'Instagram, 05-set-2026' },

    { id: 'pompeia-gray', cats: ['exterior'], formato: '44×44', zonas: ['terraza', 'cochera'],
      precio: 5200, precioFuente: 'Instagram, 05-set-2026 (₡5.200)',
      foto: 'img/productos/pompeia-gray.jpg',
      atributos: ['Hecho en Brasil', 'Aspecto granito'],
      atributosEn: ['Made in Brazil', 'Granite look'],
      nombre: 'Pompeia Gray', nombreEn: 'Pompeia Gray',
      desc: 'Piso de exterior tipo granito lavado, en gris, para terrazas y patios.',
      descEn: 'Washed-granite look outdoor floor in grey, for terraces and patios.',
      fuente: 'Instagram, 05-set-2026' },

    { id: 'pompeia-beige', cats: ['exterior'], formato: '44×44', zonas: ['terraza', 'jardin', 'cochera'],
      precio: 5200, precioFuente: 'Instagram, 05-set-2026 (₡5.200)',
      foto: 'img/productos/pompeia-beige.jpg',
      atributos: ['Hecho en Brasil', 'Antideslizante', 'Separación 4 mm', 'Primera calidad'],
      atributosEn: ['Made in Brazil', 'Anti-slip', '4 mm spacing', 'First quality'],
      nombre: 'Pompeia Beige', nombreEn: 'Pompeia Beige',
      desc: 'La versión beige del Pompeia: antideslizante y resistente, pensada para exteriores.',
      descEn: 'The beige Pompeia: anti-slip and hard-wearing, made for outdoor areas.',
      fuente: 'Instagram, 05-set-2026' },

    { id: 'valencia', cats: ['porcelanato'], formato: '60×60', zonas: ['sala', 'local'],
      precio: 4900, precioAntes: 6500, precioFuente: 'Instagram, 02-set-2026 («Antes ₡6.500 · Ahora ₡4.900»)',
      foto: 'img/productos/valencia.jpg',
      atributos: ['Hecho en Brasil', 'Acabado brillante', 'Alta resistencia', 'Fácil limpieza'],
      atributosEn: ['Made in Brazil', 'Gloss finish', 'High resistance', 'Easy to clean'],
      nombre: 'Valencia', nombreEn: 'Valencia',
      desc: 'Porcelanato con diseño inspirado en el mármol y acabado brillante: amplía y ilumina el ambiente.',
      descEn: 'Marble-inspired porcelain with a gloss finish: it opens up and brightens the room.',
      fuente: 'Instagram, 02-set-2026' },

    { id: 'selva-gris', cats: ['madera'], formato: '19×57', zonas: ['cocina', 'sala'],
      precio: 6900, precioAntes: 8990, precioFuente: 'Instagram, 16-ago-2026 («Antes ₡8.990 · Ahora ₡6.900»)',
      foto: 'img/productos/selva-gris.jpg',
      atributos: ['Hecho en España', 'Acabado mate', 'Primera calidad'],
      atributosEn: ['Made in Spain', 'Matte finish', 'First quality'],
      nombre: 'Selva Gris', nombreEn: 'Selva Gris',
      desc: 'Tablón efecto madera en gris, acabado mate, fabricado en España.',
      descEn: 'Grey wood-look plank with a matte finish, made in Spain.',
      fuente: 'Instagram, 16-ago-2026' },

    { id: 'selva-teka', cats: ['madera'], formato: '19×57', zonas: ['sala', 'dormitorio'],
      precioFuente: '', foto: 'img/productos/selva-teka.jpg',
      atributos: ['Hecho en España', 'Acabado mate', 'Primera calidad'],
      atributosEn: ['Made in Spain', 'Matte finish', 'First quality'],
      nombre: 'Selva Teka', nombreEn: 'Selva Teka',
      desc: 'El mismo tablón de la línea Selva, en tono teca. Consultá el precio y la existencia.',
      descEn: 'The same Selva plank in a teak tone. Ask about price and availability.',
      fuente: 'Instagram, 16-ago-2026 (mismo anuncio que Selva Gris; su precio no se publicó)' },

    { id: 'quarzite-brick-white', cats: ['fachaleta'], formato: '33×55', zonas: ['pared', 'fachada', 'sala'],
      precio: 7900, precioAntes: 10900, precioFuente: 'Instagram, 31-jul-2026 («Antes ₡10.900 · Ahora ₡7.900»)',
      foto: 'img/productos/quarzite-brick-white.jpg',
      atributos: ['Hecha en España', 'Acabado mate natural'],
      atributosEn: ['Made in Spain', 'Natural matte finish'],
      nombre: 'Fachaleta Quarzite Brick White', nombreEn: 'Quarzite Brick White cladding',
      desc: 'Textura de ladrillo blanco para salas, fachadas y paredes de acento.',
      descEn: 'White brick texture for living rooms, façades and feature walls.',
      fuente: 'Instagram, 31-jul-2026' },

    { id: 'samoa-muro-white', cats: ['fachaleta'], formato: '33×55', zonas: ['pared', 'fachada', 'jardin'],
      precio: 7900, precioAntes: 10900, precioFuente: 'Instagram, 30-jul-2026 («Antes ₡10.900 · Ahora ₡7.900»)',
      foto: 'img/productos/samoa-muro-white.jpg',
      atributos: ['Hecha en España', 'Acabado mate natural', 'Interior y exterior'],
      atributosEn: ['Made in Spain', 'Natural matte finish', 'Indoor & outdoor'],
      nombre: 'Fachaleta Samoa Muro White', nombreEn: 'Samoa Muro White cladding',
      desc: 'Piedra blanca de relieve suave para interiores y exteriores.',
      descEn: 'White stone with a soft relief, for indoor and outdoor walls.',
      fuente: 'Instagram, 30-jul-2026' },

    { id: 'albury-silver', cats: ['porcelanato'], formato: '60×60', zonas: ['sala', 'local'],
      precio: 5990, precioAntes: 7990, precioFuente: 'Instagram, 26-jul-2026 («Antes ₡7.990 · Ahora ₡5.990»)',
      foto: 'img/productos/albury-silver.jpg',
      atributos: ['Acabado brillante', 'Rectificado', 'Alta resistencia', 'Fácil limpieza'],
      atributosEn: ['Gloss finish', 'Rectified', 'High resistance', 'Easy to clean'],
      nombre: 'Porcelanato Albury Silver', nombreEn: 'Albury Silver porcelain',
      desc: 'Diseño inspirado en piedra natural con acabado brillante: aporta amplitud y luminosidad.',
      descEn: 'Natural-stone design with a gloss finish: adds space and light.',
      fuente: 'Instagram, 26-jul-2026' },

    { id: 'azulejo-biselado-negro', cats: ['azulejo'], formato: '10×20', zonas: ['bano', 'cocina', 'pared'],
      foto: 'img/productos/azulejo-biselado-negro.jpg',
      atributos: ['Acabado brillante', 'Resistente a la humedad', 'Fácil de limpiar'],
      atributosEn: ['Gloss finish', 'Moisture resistant', 'Easy to clean'],
      nombre: 'Azulejo biselado Subway negro', nombreEn: 'Black bevelled subway tile',
      desc: 'El clásico subway en negro brillante, ideal para baños, cocinas y paredes decorativas.',
      descEn: 'The classic subway tile in gloss black, ideal for bathrooms, kitchens and feature walls.',
      fuente: 'Instagram, 09-jul-2026' },

    { id: 'madison-grey', cats: ['porcelanato'], formato: '60×60', zonas: ['sala', 'local'],
      precio: 5990, precioAntes: 7990, precioFuente: 'Instagram, 19-jun-2026 («Antes ₡7.990 · Ahora ₡5.990»)',
      foto: 'img/productos/madison-grey.jpg',
      atributos: ['Alta durabilidad'],
      atributosEn: ['High durability'],
      nombre: 'Porcelanato Madison Grey', nombreEn: 'Madison Grey porcelain',
      desc: 'Gris moderno de acabado sofisticado, para la casa o un proyecto comercial.',
      descEn: 'Modern grey with a refined finish, for a home or a commercial project.',
      fuente: 'Instagram, 19-jun-2026' },

    { id: 'atelier-beige', cats: ['madera'], formato: '23,3×120', zonas: ['sala', 'dormitorio'],
      precio: 8990, precioAntes: 10990, precioFuente: 'Instagram, 24-may-2026 («Antes ₡10.990 · Ahora ₡8.990»)',
      foto: 'img/productos/atelier-beige.jpg',
      atributos: ['Hecho en España', 'Monocalibre', 'Tablón largo'],
      atributosEn: ['Made in Spain', 'Single caliber', 'Long plank'],
      nombre: 'Atelier Beige', nombreEn: 'Atelier Beige',
      desc: 'Tablón largo de porcelánica con acabado cálido, para ambientes acogedores.',
      descEn: 'Long porcelain plank with a warm finish, for cosy rooms.',
      fuente: 'Instagram, 24-may-2026' },

    { id: 'atelier-gris', cats: ['madera'], formato: '23,3×120', zonas: ['sala', 'cocina'],
      precio: 8990, precioAntes: 10990, precioFuente: 'Instagram, 24-may-2026 («Antes ₡10.990 · Ahora ₡8.990»)',
      foto: 'img/productos/atelier-gris.jpg',
      atributos: ['Hecho en España', 'Monocalibre', 'Tablón largo'],
      atributosEn: ['Made in Spain', 'Single caliber', 'Long plank'],
      nombre: 'Atelier Gris', nombreEn: 'Atelier Gris',
      desc: 'El mismo tablón Atelier en gris: madera moderna con calidad española.',
      descEn: 'The same Atelier plank in grey: modern wood look, Spanish quality.',
      fuente: 'Instagram, 24-may-2026' },

    { id: 'pompeia-chiaro', cats: ['ceramica'], formato: '59×59', zonas: ['sala', 'cocina', 'escalera'],
      precio: 5200, precioAntes: 6990, precioFuente: 'Instagram, 05-feb-2026 («Antes ₡6.990 · Ahora ₡5.200»)',
      foto: 'img/productos/pompeia-chiaro.jpg',
      atributos: ['Hecho en Brasil', 'Rectificado'],
      atributosEn: ['Made in Brazil', 'Rectified'],
      nombre: 'Pompeia Chiaro', nombreEn: 'Pompeia Chiaro',
      desc: 'Piso claro rectificado para salas, cocinas y escaleras. Combina con el Pompeia de exteriores.',
      descEn: 'Light rectified floor for living rooms, kitchens and stairs. Matches the outdoor Pompeia.',
      fuente: 'Instagram, 05-feb-2026 (colección hecha en Brasil)' },

    { id: 'venezia-crema', cats: ['ceramica'], formato: '59×59', zonas: ['sala', 'cocina', 'escalera'],
      precio: 5200, precioAntes: 6990, precioFuente: 'Instagram, 05-feb-2026 («Antes ₡6.990 · Ahora ₡5.200»)',
      foto: 'img/productos/venezia-crema.jpg',
      atributos: ['Hecho en Brasil', 'Rectificado'],
      atributosEn: ['Made in Brazil', 'Rectified'],
      nombre: 'Venezia Crema', nombreEn: 'Venezia Crema',
      desc: 'Tono crema uniforme, rectificado, que agranda visualmente los espacios.',
      descEn: 'Even cream tone, rectified, that makes rooms look larger.',
      fuente: 'Instagram, 05-feb-2026 (colección hecha en Brasil)' },

    { id: 'concrete-gray', cats: ['ceramica'], formato: '59×59', zonas: ['sala', 'cocina', 'escalera'],
      precio: 5200, precioAntes: 6990, precioFuente: 'Instagram, 05-feb-2026 («Antes ₡6.990 · Ahora ₡5.200»)',
      foto: 'img/productos/concrete-gray.jpg',
      atributos: ['Hecho en Brasil', 'Rectificado'],
      atributosEn: ['Made in Brazil', 'Rectified'],
      nombre: 'Concrete Gray', nombreEn: 'Concrete Gray',
      desc: 'Efecto cemento en gris claro: el acabado más usado en casas contemporáneas.',
      descEn: 'Light-grey concrete effect: the most-used finish in contemporary homes.',
      fuente: 'Instagram, 05-feb-2026 (colección hecha en Brasil)' },

    { id: 'pantheon-lux', cats: ['ceramica'], formato: '53×53', zonas: ['sala', 'dormitorio', 'escalera'],
      precio: 4500, precioAntes: 5990, precioFuente: 'Instagram, 05-feb-2026 («Antes ₡5.990 · Ahora ₡4.500»)',
      foto: 'img/productos/pantheon-lux.jpg',
      atributos: ['Hecho en Brasil'],
      atributosEn: ['Made in Brazil'],
      nombre: 'Pantheon Lux', nombreEn: 'Pantheon Lux',
      desc: 'El más accesible de la colección brasileña, en formato 53×53.',
      descEn: 'The most affordable of the Brazilian collection, in 53×53 format.',
      fuente: 'Instagram, 05-feb-2026 (colección hecha en Brasil)' },

    { id: 'quina-beige', cats: ['azulejo'], formato: '33×55', zonas: ['bano', 'cocina'],
      foto: 'img/productos/quina-beige.jpg',
      atributos: ['Hecho en España', 'Primera calidad', 'Acabado brillante'],
      atributosEn: ['Made in Spain', 'First quality', 'Gloss finish'],
      nombre: 'Azulejo Quina Beige', nombreEn: 'Quina Beige wall tile',
      desc: 'Azulejo de pared en beige con veta suave, acabado brillante.',
      descEn: 'Beige wall tile with a soft vein and gloss finish.',
      fuente: 'Instagram, 06-ene-2026' },

    /* ----- Publicados en 2025: existencia por confirmar (FLAGS.anteriores) ----- */
    { id: 'concept-bianco', cats: ['porcelanato'], formato: '60×120', flag: 'anteriores', zonas: ['sala', 'local'],
      foto: 'img/productos/concept-bianco.jpg',
      atributos: ['Hecho en India', 'Gran formato'],
      atributosEn: ['Made in India', 'Large format'],
      nombre: 'Porcelanato Concept Bianco', nombreEn: 'Concept Bianco porcelain',
      desc: 'Gran formato de 60×120 en gris claro: menos juntas y más amplitud.',
      descEn: 'Large 60×120 format in light grey: fewer joints, more space.',
      fuente: 'Instagram, 26-jul-2025 (₡7.290) y DEKO BLACK de noviembre 2025 (₡5.990)' },

    { id: 'statuario-regalia', cats: ['porcelanato'], formato: '60×120', flag: 'anteriores', zonas: ['sala', 'local'],
      foto: 'img/productos/statuario-regalia.jpg',
      atributos: ['Hecho en India', 'Gran formato', 'Efecto mármol'],
      atributosEn: ['Made in India', 'Large format', 'Marble look'],
      nombre: 'Porcelanato Statuario Regalía', nombreEn: 'Statuario Regalía porcelain',
      desc: 'Mármol blanco con vetas grises en gran formato.',
      descEn: 'White marble with grey veining in a large format.',
      fuente: 'Instagram, 26-jul-2025 (₡6.500), 08-set-2025 (₡6.250) y DEKO BLACK 2025 (₡5.990)' },

    { id: 'seul-gris', cats: ['porcelanato'], formato: '60×120', flag: 'anteriores', zonas: ['sala', 'local'],
      foto: 'img/productos/seul-gris.jpg',
      atributos: ['Gran formato'],
      atributosEn: ['Large format'],
      nombre: 'Porcelanato Seúl Gris', nombreEn: 'Seúl Gris porcelain',
      desc: 'Gran formato gris con veta suave, para ambientes amplios.',
      descEn: 'Large grey format with soft veining, for open spaces.',
      fuente: 'Instagram, 08-set-2025 (ofertas de setiembre, ₡6.400)' },

    { id: 'ivory', cats: ['porcelanato'], formato: '60×60', flag: 'anteriores', zonas: ['sala'],
      foto: 'img/productos/ivory.jpg',
      atributos: ['Acabado brillante'],
      atributosEn: ['Gloss finish'],
      nombre: 'Porcelanato Ivory', nombreEn: 'Ivory porcelain',
      desc: 'Marfil brillante, un clásico para sala y comedor.',
      descEn: 'Gloss ivory, a classic for living and dining rooms.',
      fuente: 'Instagram, 08-set-2025 (ofertas de setiembre, ₡4.650)' },

    { id: 'santander', cats: ['porcelanato'], formato: '60×60', flag: 'anteriores', zonas: ['sala'],
      foto: 'img/productos/santander.jpg',
      atributos: ['Efecto mármol'],
      atributosEn: ['Marble look'],
      nombre: 'Porcelanato Santander', nombreEn: 'Santander porcelain',
      desc: 'Mármol blanco de veta fina en formato 60×60.',
      descEn: 'White marble with fine veining in 60×60.',
      fuente: 'Instagram, DEKO BLACK de noviembre 2025 (₡5.850)' },

    { id: 'lpy66034', cats: ['porcelanato'], formato: '60×60', flag: 'anteriores', zonas: ['sala'],
      foto: 'img/productos/lpy66034.jpg',
      atributos: ['Efecto piedra'],
      atributosEn: ['Stone look'],
      nombre: 'Porcelanato LPY66034', nombreEn: 'LPY66034 porcelain',
      desc: 'Gris perla con vetas, en 60×60.',
      descEn: 'Pearl grey with veining, in 60×60.',
      fuente: 'Instagram, DEKO BLACK de noviembre 2025 (₡5.850)' },

    { id: 'pietra-di-savoia', cats: ['porcelanato'], formato: '58×120', flag: 'anteriores', zonas: ['cocina', 'sala'],
      foto: 'img/productos/pietra-di-savoia.jpg',
      atributos: ['Rectificado', 'Gran formato'],
      atributosEn: ['Rectified', 'Large format'],
      nombre: 'Pietra di Savoia', nombreEn: 'Pietra di Savoia',
      desc: 'Gran formato con textura de piedra, muy usado en cocinas abiertas.',
      descEn: 'Large format with stone texture, popular in open kitchens.',
      fuente: 'Instagram, 24-oct-2025 (ofertas de gran formato, ₡5.990)' },

    { id: 'riete-beige', cats: ['madera'], formato: '19×120', flag: 'anteriores', zonas: ['sala', 'dormitorio'],
      foto: 'img/productos/riete-beige.jpg',
      atributos: ['Rectificado', 'Tablón largo'],
      atributosEn: ['Rectified', 'Long plank'],
      nombre: 'Riete Beige', nombreEn: 'Riete Beige',
      desc: 'Tablón largo color miel claro, rectificado.',
      descEn: 'Long plank in light honey tone, rectified.',
      fuente: 'Instagram, 24-oct-2025 (₡6.990)' },

    { id: 'tennessee-amber', cats: ['madera'], formato: '15,4×60', flag: 'anteriores', zonas: ['dormitorio', 'sala'],
      foto: 'img/productos/tennessee-amber.jpg',
      atributos: ['Tablón angosto'],
      atributosEn: ['Narrow plank'],
      nombre: 'Tennessee Amber', nombreEn: 'Tennessee Amber',
      desc: 'Madera cálida en tablón angosto, ideal para dormitorios.',
      descEn: 'Warm wood look in a narrow plank, ideal for bedrooms.',
      fuente: 'Instagram, DEKO BLACK de noviembre 2025 (₡4.500)' },

    { id: 'at-wood-taupe', cats: ['madera'], formato: '15,4×60', flag: 'anteriores', zonas: ['sala', 'dormitorio'],
      foto: 'img/productos/at-wood-taupe.jpg',
      atributos: ['Tablón angosto'],
      atributosEn: ['Narrow plank'],
      nombre: 'At Wood Taupe', nombreEn: 'At Wood Taupe',
      desc: 'Madera gris topo, para ambientes sobrios.',
      descEn: 'Taupe-grey wood look, for understated rooms.',
      fuente: 'Instagram, DEKO BLACK de noviembre 2025 (₡4.500)' },

    { id: 'lsj66003', cats: ['ceramica'], formato: '60×60', flag: 'anteriores', zonas: ['sala'],
      foto: 'img/productos/lsj66003.jpg',
      atributos: ['Rectificado'],
      atributosEn: ['Rectified'],
      nombre: 'Piso LSJ66003', nombreEn: 'LSJ66003 floor',
      desc: 'Blanco con veta muy suave, rectificado.',
      descEn: 'White with very soft veining, rectified.',
      fuente: 'Instagram, 21-may-2025 (₡5.350)' },

    { id: 'dlsj46039', cats: ['madera'], formato: '46×46', flag: 'anteriores', zonas: ['sala', 'dormitorio'],
      foto: 'img/productos/dlsj46039.jpg',
      atributos: ['Hecho en Perú', 'Rectificado'],
      atributosEn: ['Made in Peru', 'Rectified'],
      nombre: 'Piso DLSJ46039', nombreEn: 'DLSJ46039 floor',
      desc: 'Efecto madera en formato cuadrado de 46×46.',
      descEn: 'Wood look in a square 46×46 format.',
      fuente: 'Instagram, 16-jun-2025 (₡4.500 impuesto incluido)' },

    { id: 'new-pacific-white', cats: ['azulejo'], formato: '31×60', flag: 'anteriores', zonas: ['bano', 'cocina'],
      foto: 'img/productos/new-pacific-white.jpg',
      atributos: ['Primera calidad', 'Relieve de onda'],
      atributosEn: ['First quality', 'Wave relief'],
      nombre: 'Azulejo New Pacific White', nombreEn: 'New Pacific White wall tile',
      desc: 'Azulejo blanco con relieve de onda, para baños y cocinas.',
      descEn: 'White wall tile with a wave relief, for bathrooms and kitchens.',
      fuente: 'Instagram, 22-ago-2025 (₡4.995) y DEKO BLACK 2025 (₡4.300)' },

    { id: 'santorini-beige', cats: ['azulejo'], formato: '31×60', flag: 'anteriores', zonas: ['bano', 'cocina'],
      foto: 'img/productos/santorini-beige.jpg',
      atributos: ['Primera calidad'],
      atributosEn: ['First quality'],
      nombre: 'Azulejo Santorini Beige', nombreEn: 'Santorini Beige wall tile',
      desc: 'Beige liso para baños y cocinas, con formato rectangular.',
      descEn: 'Plain beige for bathrooms and kitchens, in a rectangular format.',
      fuente: 'Instagram, 22-ago-2025 y 08-set-2025 (₡4.600)' },

    { id: 'oasis-granada', cats: ['fachaleta'], formato: '31×54', flag: 'anteriores', zonas: ['pared', 'fachada'],
      foto: 'img/productos/oasis-granada.jpg',
      atributos: ['Primera calidad'],
      atributosEn: ['First quality'],
      nombre: 'Fachaleta Oasis Granada', nombreEn: 'Oasis Granada cladding',
      desc: 'Piedra blanca con relieve marcado para paredes de acento.',
      descEn: 'White stone with a pronounced relief for feature walls.',
      fuente: 'Instagram, 24-oct-2025 (₡5.500)' },

    { id: 'oasis-troia', cats: ['fachaleta'], formato: '31×54', flag: 'anteriores', zonas: ['pared', 'fachada'],
      foto: 'img/productos/oasis-troia.jpg',
      atributos: ['Primera calidad'],
      atributosEn: ['First quality'],
      nombre: 'Fachaleta Oasis Troia', nombreEn: 'Oasis Troia cladding',
      desc: 'Listones de piedra en tonos grises y beige, tipo muro rústico.',
      descEn: 'Stone strips in grey and beige tones, rustic-wall style.',
      fuente: 'Instagram, 24-oct-2025 (₡5.500)' },

    { id: 'silicato', cats: ['fachaleta'], formato: '31×60', flag: 'anteriores', zonas: ['pared', 'fachada'],
      foto: 'img/productos/silicato.jpg',
      atributos: ['Aspecto ladrillo'],
      atributosEn: ['Brick look'],
      nombre: 'Fachaleta Silicato', nombreEn: 'Silicato cladding',
      desc: 'Ladrillo en tonos tierra para paredes con carácter.',
      descEn: 'Earth-toned brick for walls with character.',
      fuente: 'Instagram, DEKO BLACK de noviembre 2025 (₡4.200)' },

    { id: 'colorado-grey', cats: ['fachaleta'], formato: '30×60', flag: 'anteriores', zonas: ['pared', 'fachada'],
      foto: 'img/productos/colorado-grey.jpg',
      atributos: ['Alto relieve'],
      atributosEn: ['High relief'],
      nombre: 'Fachaleta Colorado Grey', nombreEn: 'Colorado Grey cladding',
      desc: 'Listones grises de alto relieve, con mucha sombra y textura.',
      descEn: 'Grey strips with high relief, rich in shadow and texture.',
      fuente: 'Instagram, 21-may-2025 (₡6.990)' },

    { id: 'malaga-crema', cats: ['fachaleta'], formato: '28×53,4', flag: 'anteriores', zonas: ['pared', 'fachada'],
      foto: 'img/productos/malaga-crema.jpg',
      atributos: ['Piedra irregular'],
      atributosEn: ['Irregular stone'],
      nombre: 'Fachaleta Málaga Crema', nombreEn: 'Málaga Crema cladding',
      desc: 'Piedra irregular en tonos tierra, para fachadas y jardines.',
      descEn: 'Irregular stone in earth tones, for façades and gardens.',
      fuente: 'Instagram, 21-may-2025 (₡6.990)' }
  ],

  /* ---------- Procedencia (se dibuja como "las marcas detrás") ---------- */
  tecnologias: [
    { id: 'brasil', nombre: 'Brasil', origen: 'Hecho en', enlace: 'servicios.html#exterior',
      uso: 'Neptune, Pompeia, Valencia, Venezia, Concrete Gray, Pantheon, Montana HD y Carvalho HD.',
      usoEn: 'Neptune, Pompeia, Valencia, Venezia, Concrete Gray, Pantheon, Montana HD and Carvalho HD.',
      fuente: 'Artes de Instagram con la bandera «Hecho en Brasil» (2026)' },
    { id: 'espana', nombre: 'España', origen: 'Hecho en', enlace: 'servicios.html#madera',
      uso: 'Atelier, Selva, Quina y las fachaletas Samoa y Quarzite Brick.',
      usoEn: 'Atelier, Selva, Quina and the Samoa and Quarzite Brick cladding.',
      fuente: 'Artes de Instagram con la bandera «Hecho en España» (2026)' },
    { id: 'india', nombre: 'India', origen: 'Hecho en', flag: 'anteriores', enlace: 'servicios.html#porcelanato',
      uso: 'Gran formato 60×120: Concept Bianco y Statuario Regalía.',
      usoEn: 'Large 60×120 format: Concept Bianco and Statuario Regalía.',
      fuente: 'Instagram, 26-jul-2025' },
    { id: 'peru', nombre: 'Perú', origen: 'Hecho en', flag: 'anteriores', enlace: 'servicios.html#madera',
      uso: 'Piso DLSJ46039 46×46 efecto madera.',
      usoEn: 'DLSJ46039 46×46 wood-look floor.',
      fuente: 'Instagram, 16-jun-2025' }
  ],

  /* ---------- Campañas publicadas y combinaciones propuestas ---------- */
  paquetes: [
    { id: 'coleccion-brasil', tipo: 'publicado', fuente: 'Instagram, 05-feb-2026',
      nombre: 'Colección Brasil', nombreEn: 'Brazil collection',
      para: 'Pisos rectificados hechos en Brasil, en formatos modernos.',
      paraEn: 'Rectified floors made in Brazil, in modern formats.',
      incluye: ['pompeia-chiaro', 'venezia-crema', 'concrete-gray', 'pantheon-lux'] },
    { id: 'deko-black', tipo: 'publicado', fuente: 'Instagram, 09 y 24-nov-2025',
      nombre: 'DEKO BLACK (noviembre)', nombreEn: 'DEKO BLACK (November)',
      para: 'Su campaña de noviembre, con precios especiales durante todo el mes.',
      paraEn: 'Their November campaign, with special prices all month long.',
      incluye: ['concept-bianco', 'statuario-regalia', 'valencia', 'new-pacific-white', 'silicato',
                'tennessee-amber', 'at-wood-taupe', 'santander', 'lpy66034'] },
    { id: 'independencia', tipo: 'publicado', fuente: 'Instagram, 08-set-2025',
      nombre: 'Ofertas del mes de la independencia', nombreEn: 'Independence month offers',
      para: 'Campaña de setiembre de 2025.',
      paraEn: 'September 2025 campaign.',
      incluye: ['statuario-regalia', 'seul-gris', 'ivory', 'santorini-beige'] },
    { id: 'gran-formato', tipo: 'publicado', fuente: 'Instagram, 24-oct-2025',
      nombre: 'Gran formato y fachaleta', nombreEn: 'Large format & cladding',
      para: 'Campaña de octubre de 2025.',
      paraEn: 'October 2025 campaign.',
      incluye: ['pietra-di-savoia', 'riete-beige', 'oasis-granada', 'oasis-troia'] },

    { id: 'bano-completo', tipo: 'propuesto',
      nombre: 'Baño completo', nombreEn: 'Complete bathroom',
      para: 'Pared y piso del baño resueltos en una sola visita.',
      paraEn: 'Bathroom wall and floor sorted in a single visit.',
      incluye: ['quina-beige', 'pompeia-beige'] },
    { id: 'adentro-afuera', tipo: 'propuesto',
      nombre: 'Adentro y afuera', nombreEn: 'Indoors and out',
      para: 'El mismo tono en la sala y en la terraza, con el acabado que corresponde a cada uno.',
      paraEn: 'The same tone indoors and on the terrace, each with the right finish.',
      incluye: ['pompeia-chiaro', 'pompeia-beige'] },
    { id: 'pared-protagonista', tipo: 'propuesto',
      nombre: 'Pared protagonista', nombreEn: 'Statement wall',
      para: 'Una pared con textura y un piso que la acompañe sin competir.',
      paraEn: 'A textured wall and a floor that complements it.',
      incluye: ['quarzite-brick-white', 'albury-silver'] },
    { id: 'casa-madera', tipo: 'propuesto',
      nombre: 'Casa con madera', nombreEn: 'Wood-look home',
      para: 'Madera adentro y en la terraza, sin el mantenimiento de la madera real.',
      paraEn: 'Wood look indoors and outdoors, without real-wood maintenance.',
      incluye: ['atelier-beige', 'montana-hd'] }
  ],

  /* ---------- DEKOCER Profesional (PROPUESTA: condiciones y precios los define DEKOCER) ---------- */
  membresias: [
    { id: 'hogar', precio: '', nota: 'Sin cuota: se activa por WhatsApp', notaEn: 'No fee: activated on WhatsApp',
      nombre: 'Hogar', nombreEn: 'Home',
      lema: 'Para quien está remodelando o construyendo su casa.', lemaEn: 'For anyone remodeling or building their home.',
      incluye: ['Cálculo del material a partir de tus medidas, por WhatsApp',
                'Aviso cuando llegue la oferta del mes (como el DEKO BLACK)'],
      incluyeEn: ['Material calculation from your measurements, on WhatsApp',
                  'A heads-up when the monthly offer lands (like DEKO BLACK)'],
      beneficios: ['Recordatorio para completar material del mismo lote',
                   'Sugerencias de combinaciones piso + pared'],
      beneficiosEn: ['A reminder to top up material from the same batch',
                     'Floor + wall combination suggestions'] },
    { id: 'maestro', precio: '', destacado: true, cinta: 'La más pedida', cintaEn: 'Most requested',
      nota: 'Condiciones y precios los define DEKOCER', notaEn: 'Terms and pricing set by DEKOCER',
      nombre: 'Maestro de obra', nombreEn: 'Contractor',
      lema: 'Para quien compra material para varios clientes al año.', lemaEn: 'For anyone buying material for several clients a year.',
      incluye: ['Lista de precios al día por WhatsApp',
                'Precio preferencial por volumen (lo define DEKOCER)'],
      incluyeEn: ['Up-to-date price list on WhatsApp',
                  'Volume pricing (set by DEKOCER)'],
      beneficios: ['Atención prioritaria cuando llegás con un cliente',
                   'Aviso anticipado de nuevos ingresos',
                   'Apartado del material mientras el cliente decide'],
      beneficiosEn: ['Priority attention when you come in with a client',
                     'Early notice of new arrivals',
                     'Material held while your client decides'] },
    { id: 'proyectos', precio: '', nota: 'Condiciones por definir con DEKOCER', notaEn: 'Terms to be defined with DEKOCER',
      nombre: 'Arquitectura y proyectos', nombreEn: 'Architecture & projects',
      lema: 'Para arquitectos, diseñadores y constructoras.', lemaEn: 'For architects, designers and builders.',
      incluye: ['Cotización formal por proyecto, con cantidades y formatos',
                'Muestras para presentarle el acabado al cliente'],
      incluyeEn: ['Formal per-project quote, with quantities and formats',
                  'Samples to present the finish to your client'],
      beneficios: ['Reserva del lote para entregas por etapas',
                   'Aviso si un modelo se está agotando',
                   'Una persona de contacto para todo el proyecto'],
      beneficiosEn: ['Batch reserved for phased deliveries',
                     'A heads-up when a model is running low',
                     'One contact person for the whole project'] }
  ],

  regalo: { opciones: [] },

  /* ---------- Galería de ambientes (artes publicados por DEKOCER) ---------- */
  galeriaGrupos: { tienda: ['La tienda', 'The store'] },
  galeria: [
    { src: 'img/ambientes/valencia.jpg', cat: 'porcelanato', titulo: 'Valencia en sala y comedor', tituloEn: 'Valencia in a living & dining room' },
    { src: 'img/ambientes/albury-silver.jpg', cat: 'porcelanato', titulo: 'Albury Silver, acabado brillante', tituloEn: 'Albury Silver, gloss finish' },
    { src: 'img/ambientes/madison-grey.jpg', cat: 'porcelanato', titulo: 'Madison Grey en un ambiente moderno', tituloEn: 'Madison Grey in a modern room' },
    { src: 'img/ambientes/atelier-beige.jpg', cat: 'madera', titulo: 'Atelier Beige, tablón largo', tituloEn: 'Atelier Beige, long plank' },
    { src: 'img/ambientes/atelier-gris.jpg', cat: 'madera', titulo: 'Atelier Gris en cocina y sala', tituloEn: 'Atelier Gris in kitchen and living room' },
    { src: 'img/ambientes/selva-gris.jpg', cat: 'madera', titulo: 'Selva Gris en una cocina', tituloEn: 'Selva Gris in a kitchen' },
    { src: 'img/ambientes/montana-hd.jpg', cat: 'madera', titulo: 'Montana HD en una terraza', tituloEn: 'Montana HD on a terrace' },
    { src: 'img/ambientes/neptune-stone.jpg', cat: 'exterior', titulo: 'Neptune Stone en patio', tituloEn: 'Neptune Stone on a patio' },
    { src: 'img/ambientes/neptune-dusk.jpg', cat: 'exterior', titulo: 'Neptune Dusk en un jardín', tituloEn: 'Neptune Dusk in a garden' },
    { src: 'img/ambientes/pompeia-beige.jpg', cat: 'exterior', titulo: 'Pompeia Beige en balcón', tituloEn: 'Pompeia Beige on a balcony' },
    { src: 'img/ambientes/azulejo-biselado-negro.jpg', cat: 'azulejo', titulo: 'Subway negro en un baño', tituloEn: 'Black subway tile in a bathroom' },
    { src: 'img/ambientes/quina-beige.jpg', cat: 'azulejo', titulo: 'Quina Beige en un baño', tituloEn: 'Quina Beige in a bathroom' },
    { src: 'img/ambientes/quarzite-brick-white.jpg', cat: 'fachaleta', titulo: 'Quarzite Brick White en una sala', tituloEn: 'Quarzite Brick White in a living room' },
    { src: 'img/ambientes/samoa-muro-white.jpg', cat: 'fachaleta', titulo: 'Samoa Muro White en un jardín', tituloEn: 'Samoa Muro White in a garden' }
  ],

  /* ---------- Cotizador: espacio -> qué querés -> productos ---------- */
  cotizador: {
    metros: true,                 // pide los m² y calcula el 10 % extra para cortes
    ubicaciones: ['Heredia', 'San José', 'Alajuela', 'Cartago', 'Guanacaste', 'Puntarenas', 'Limón'],
    areas: [
      { id: 'interior', icono: 'i-piso', nombre: 'Piso de interior', nombreEn: 'Indoor flooring',
        zonas: ['sala', 'cocina', 'dormitorio', 'pasillo', 'escalera', 'local'],
        objetivos: [
          { id: 'marmol', claves: 'marmol blanco brillante elegante luminoso claro', nombre: 'Que se vea como mármol', nombreEn: 'A marble look',
            servicios: ['valencia', 'albury-silver', 'statuario-regalia', 'santander', 'ivory', 'lsj66003'] },
          { id: 'madera', claves: 'madera tablon calido laminado parquet', nombre: 'Que se vea como madera', nombreEn: 'A wood look',
            servicios: ['montana-hd', 'carvalho-hd', 'atelier-beige', 'atelier-gris', 'selva-gris', 'selva-teka', 'riete-beige', 'tennessee-amber', 'at-wood-taupe', 'dlsj46039'] },
          { id: 'cemento', claves: 'gris cemento concreto industrial moderno minimalista', nombre: 'Gris moderno o efecto cemento', nombreEn: 'Modern grey or concrete effect',
            servicios: ['madison-grey', 'concrete-gray', 'seul-gris', 'pietra-di-savoia', 'lpy66034', 'concept-bianco'] },
          { id: 'calido', claves: 'beige crema calido claro arena', nombre: 'Tonos claros y cálidos', nombreEn: 'Light, warm tones',
            servicios: ['venezia-crema', 'pompeia-chiaro', 'pantheon-lux', 'ivory'] },
          { id: 'granformato', claves: 'grande gran formato pocas juntas rectificado 120', nombre: 'Gran formato, con pocas juntas', nombreEn: 'Large format, fewer joints',
            servicios: ['concept-bianco', 'statuario-regalia', 'seul-gris', 'pietra-di-savoia', 'atelier-beige', 'atelier-gris'] }
        ] },
      { id: 'exterior', icono: 'i-sol', nombre: 'Terraza, patio o cochera', nombreEn: 'Terrace, patio or driveway',
        zonas: ['terraza', 'jardin', 'cochera', 'escalera'],
        objetivos: [
          { id: 'antideslizante', claves: 'antideslizante resbala resbaloso mojado lluvia seguro piscina', nombre: 'Que no resbale con el agua', nombreEn: 'Non-slip when wet',
            servicios: ['neptune-stone', 'pompeia-beige'] },
          { id: 'piedra', claves: 'piedra natural rustico laja', nombre: 'Aspecto de piedra natural', nombreEn: 'Natural-stone look',
            servicios: ['neptune-stone', 'neptune-dusk'] },
          { id: 'granito', claves: 'granito terrazo chispas', nombre: 'Aspecto de granito o terrazo', nombreEn: 'Granite or terrazzo look',
            servicios: ['pompeia-gray', 'pompeia-beige'] },
          { id: 'maderaexterior', claves: 'madera terraza deck', nombre: 'Terraza con look de madera', nombreEn: 'Wood-look terrace',
            servicios: ['montana-hd'] }
        ] },
      { id: 'banos', icono: 'i-azulejo', nombre: 'Baño o cocina', nombreEn: 'Bathroom or kitchen',
        zonas: ['bano', 'cocina'],
        objetivos: [
          { id: 'paredbano', claves: 'azulejo enchape pared ducha salpicadero backsplash', nombre: 'Enchapar las paredes', nombreEn: 'Tile the walls',
            servicios: ['quina-beige', 'azulejo-biselado-negro', 'new-pacific-white', 'santorini-beige'] },
          { id: 'pisobano', claves: 'piso bano cocina humedo', nombre: 'Piso de baño o cocina', nombreEn: 'Bathroom or kitchen floor',
            servicios: ['pompeia-beige', 'pompeia-chiaro', 'selva-gris', 'atelier-gris', 'pietra-di-savoia'] },
          { id: 'subway', claves: 'subway biselado ladrillo bar cafeteria', nombre: 'Estilo subway o bar', nombreEn: 'Subway or bar style',
            servicios: ['azulejo-biselado-negro'] }
        ] },
      { id: 'paredes', icono: 'i-fachaleta', nombre: 'Paredes y fachadas', nombreEn: 'Walls & façades',
        zonas: ['pared', 'fachada', 'sala', 'jardin', 'local'],
        objetivos: [
          { id: 'acento', claves: 'pared de acento tv sala textura fachaleta piedra decorativa', nombre: 'Pared de acento (sala, TV, jardín)', nombreEn: 'Feature wall (living room, TV, garden)',
            servicios: ['quarzite-brick-white', 'samoa-muro-white', 'oasis-granada', 'oasis-troia', 'colorado-grey', 'malaga-crema', 'silicato'] },
          { id: 'fachada', claves: 'fachada afuera frente casa exterior', nombre: 'Fachada de la casa o del local', nombreEn: 'House or shop façade',
            servicios: ['samoa-muro-white', 'quarzite-brick-white', 'malaga-crema', 'colorado-grey'] },
          { id: 'ladrillo', claves: 'ladrillo brick rustico', nombre: 'Aspecto de ladrillo', nombreEn: 'Brick look',
            servicios: ['quarzite-brick-white', 'silicato'] }
        ] }
    ],
    presupuestos: [
      { id: 'p1', nombre: 'Hasta ₡150.000', nombreEn: 'Up to ₡150,000' },
      { id: 'p2', nombre: '₡150.000 a ₡400.000', nombreEn: '₡150,000 to ₡400,000' },
      { id: 'p3', nombre: '₡400.000 a ₡1.000.000', nombreEn: '₡400,000 to ₡1,000,000' },
      { id: 'p4', nombre: 'Más de ₡1.000.000', nombreEn: 'Over ₡1,000,000' },
      { id: 'p0', nombre: 'Prefiero que me asesoren', nombreEn: 'I’d like advice' }
    ],
    cuando: [
      ['Esta semana', 'This week'], ['Este mes', 'This month'],
      ['En los próximos meses', 'In the coming months'], ['Solo estoy cotizando', 'Just comparing prices']
    ]
  },

  /* ---------- Textos propios del rubro (el motor usa estos si existen) ---------- */
  textos: {
    cita: { intro: 'quiero coordinar una visita a la tienda.', introEn: 'I would like to arrange a visit to the store.',
            que: 'Quiero ver', queEn: 'I want to see' },
    seguimiento: {
      confirmar: 'y quiero consultar el estado de mi pedido o apartado',
      confirmarEn: 'and I would like to check on my order or hold',
      reprogramar: 'y quiero coordinar el retiro de mi material',
      reprogramarEn: 'and I would like to arrange pickup of my material',
      consulta: 'y me faltó material: necesito más del mismo lote o tono',
      consultaEn: 'and I ran short of material: I need more from the same batch or shade'
    }
  }
};

/* --------------------------------------------------------------------------
   2) IDIOMA — el HTML viene en español; i18n.js cambia a inglés
   -------------------------------------------------------------------------- */
function esEN(){ return document.documentElement.lang === 'en'; }
/* Devuelve el texto en el idioma activo: L('Hola', 'Hi') o L(obj, 'nombre') */
function L(a, b){
  if (a && typeof a === 'object'){ return (esEN() && a[b + 'En']) ? a[b + 'En'] : a[b]; }
  return esEN() && b ? b : a;
}

/* --------------------------------------------------------------------------
   3) UTILIDADES
   -------------------------------------------------------------------------- */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){
    return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
  });
}
function colones(n){
  const sep = esEN() ? ',' : '.';
  return '₡' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}
function icono(id, clase){
  return '<svg' + (clase ? ' class="' + clase + '"' : '') + ' aria-hidden="true"><use href="#' + id + '"/></svg>';
}
function servicioPorId(id){
  return NEGOCIO.servicios.filter(function(s){ return s.id === id; })[0] || null;
}
function zonaNombre(id){
  const z = NEGOCIO.zonas[id];
  return z ? (esEN() ? z[1] : z[0]) : id;
}

const MESES = {
  es: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','setiembre','octubre','noviembre','diciembre'],
  en: ['January','February','March','April','May','June','July','August','September','October','November','December']
};
const DIAS = {
  es: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
  en: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
};
function fechaLarga(d){
  const k = esEN() ? 'en' : 'es';
  return esEN()
    ? DIAS.en[d.getDay()] + ', ' + MESES.en[d.getMonth()] + ' ' + d.getDate()
    : DIAS.es[d.getDay()] + ' ' + d.getDate() + ' de ' + MESES[k][d.getMonth()];
}
/* "19:00" -> "7 p. m." / "7 p.m." */
function hora12(hhmm){
  const p = hhmm.split(':'), h = parseInt(p[0], 10), m = p[1];
  const h12 = ((h + 11) % 12) + 1;
  const suf = h < 12 ? (esEN() ? 'a.m.' : 'a. m.') : (esEN() ? 'p.m.' : 'p. m.');
  return h12 + (m !== '00' ? ':' + m : '') + ' ' + suf;
}

/* --------------------------------------------------------------------------
   4) HORARIO — hora de Costa Rica (UTC-6, sin horario de verano)
   -------------------------------------------------------------------------- */
function ahoraCR(){
  const d = new Date();
  return new Date(d.getTime() + d.getTimezoneOffset() * 60000 - 6 * 3600000);
}
function estadoHorario(){
  const h = NEGOCIO.horario;
  if (!h || !h.length) return null;
  const now = ahoraCR();
  const min = now.getHours() * 60 + now.getMinutes();
  const aMin = function(s){ const p = s.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
  const hoy = h.filter(function(x){ return x.dia === now.getDay(); })[0];
  if (hoy && min >= aMin(hoy.abre) && min < aMin(hoy.cierra)){
    return { abierto: true, texto: L('Abierto ahora · cierra a las ', 'Open now · closes at ') + hora12(hoy.cierra) };
  }
  if (hoy && min < aMin(hoy.abre)){
    return { abierto: false, texto: L('Cerrado · abre hoy a las ', 'Closed · opens today at ') + hora12(hoy.abre) };
  }
  for (let i = 1; i <= 7; i++){
    const dia = (now.getDay() + i) % 7;
    const sig = h.filter(function(x){ return x.dia === dia; })[0];
    if (sig){
      const cuando = i === 1 ? L('mañana', 'tomorrow') : (esEN() ? 'on ' + DIAS.en[dia] : 'el ' + DIAS.es[dia]);
      return { abierto: false, texto: L('Cerrado · abre ', 'Closed · opens ') + cuando + L(' a las ', ' at ') + hora12(sig.abre) };
    }
  }
  return null;
}

/* --------------------------------------------------------------------------
   5) WHATSAPP — mensajes contextuales, nunca "Hola, quiero información"
   data-wa="mensaje en español"  data-wa-en="message in English"
   -------------------------------------------------------------------------- */
function waLink(mensaje){
  return 'https://wa.me/' + NEGOCIO.whatsapp + '?text=' + encodeURIComponent(mensaje);
}
function initWhatsApp(root){
  (root || document).querySelectorAll('[data-wa]').forEach(function(el){
    const msg = (esEN() && el.dataset.waEn) ? el.dataset.waEn : el.dataset.wa;
    el.setAttribute('href', waLink(msg));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
}

/* --------------------------------------------------------------------------
   6) REGISTRO DE SOLICITUDES — con origen (UTM, gclid, referente)
   Si NEGOCIO.endpoint está vacío devuelve null: nunca finge que se guardó.
   -------------------------------------------------------------------------- */
function origenVisita(){
  const q = new URLSearchParams(location.search);
  const o = { pagina: location.pathname, referente: document.referrer || '' };
  ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'].forEach(function(k){
    if (q.get(k)) o[k] = q.get(k);
  });
  try {
    const guardado = JSON.parse(sessionStorage.getItem('sitio_origen') || 'null');
    if (guardado && !o.utm_source) Object.keys(guardado).forEach(function(k){ if (!o[k]) o[k] = guardado[k]; });
    if (o.utm_source || o.gclid || o.fbclid) sessionStorage.setItem('sitio_origen', JSON.stringify(o));
  } catch (e) { /* almacenamiento bloqueado: se usa solo lo de esta visita */ }
  return o;
}
function registrarSolicitud(tipo, datos){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'solicitud_' + tipo, servicio: datos.servicio || '' });
  if (!NEGOCIO.endpoint) return Promise.resolve(null);
  const cuerpo = Object.assign({ tipo: tipo, fecha: new Date().toISOString(), idioma: document.documentElement.lang, origen: origenVisita() }, datos);
  return fetch(NEGOCIO.endpoint, {
    method: 'POST',
    headers: Object.assign({ 'Content-Type': 'application/json' }, NEGOCIO.headers || {}),
    body: JSON.stringify(cuerpo)
  }).then(function(r){ return r.ok; }).catch(function(){ return false; });
}

/* --------------------------------------------------------------------------
   7) PLACEHOLDERS DE FOTOGRAFÍA
   <img data-ph="La tienda" src="img/tienda.jpg">
   El marcador se dibuja primero y se retira en cuanto la foto carga bien.
   -------------------------------------------------------------------------- */
const PH_ICON = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 16l-5.5-5.5L7 19"/></svg>';

function initPlaceholders(root){
  (root || document).querySelectorAll('img[data-ph]').forEach(function(img){
    if (img.dataset.phInit) return;
    img.dataset.phInit = '1';
    if (!img.parentNode) return;
    const box = document.createElement('div');
    box.className = 'ph';
    box.innerHTML = PH_ICON + '<b>' + L('Fotografía pendiente', 'Photo pending') + '</b><span>' + esc(img.dataset.ph || '') + '</span>';
    img.parentNode.insertBefore(box, img);
    const cargo = function(){ if (img.naturalWidth > 0){ box.remove(); img.style.display = ''; } };
    if (img.complete) cargo();
    img.addEventListener('load', cargo);
    img.addEventListener('error', function(){ img.style.display = 'none'; });
  });
}

/* --------------------------------------------------------------------------
   8) HEADER / MENÚ / ANIMACIONES
   -------------------------------------------------------------------------- */
function initHeader(){
  const hdr = document.querySelector('.hdr');
  if (hdr){
    const onScroll = function(){ hdr.classList.toggle('is-stuck', window.scrollY > 12); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  if (!burger || !nav) return;
  const cerrar = function(){
    nav.classList.remove('is-open'); burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', L('Abrir menú', 'Open menu'));
    document.body.style.overflow = '';
  };
  burger.addEventListener('click', function(){
    const open = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? L('Cerrar menú', 'Close menu') : L('Abrir menú', 'Open menu'));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open){ const first = nav.querySelector('a'); if (first) first.focus(); }
  });
  nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', cerrar); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && nav.classList.contains('is-open')){ cerrar(); burger.focus(); }
  });
  window.addEventListener('resize', function(){ if (window.innerWidth > 980 && nav.classList.contains('is-open')) cerrar(); });
}

function initReveal(){
  const items = document.querySelectorAll('.rv:not(.in)');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)){ items.forEach(function(el){ el.classList.add('in'); }); return; }
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (!e.isIntersecting) return;
      const d = e.target.dataset.delay || 0;
      setTimeout(function(){ e.target.classList.add('in'); }, d);
      io.unobserve(e.target);
    });
  }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function(el){ io.observe(el); });
}

/* --------------------------------------------------------------------------
   9) DATOS Y ENLACES DESDE NEGOCIO
   data-neg="telefono"     -> escribe el texto (usa campoEn en inglés si existe)
   data-href="instagram"   -> tel:, mailto:, o URL; dato vacío = se oculta
   data-requiere="email"   -> oculta el bloque completo si el dato está vacío
   -------------------------------------------------------------------------- */
function initDatos(){
  document.querySelectorAll('[data-neg]').forEach(function(el){
    const v = L(NEGOCIO, el.dataset.neg);
    if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-requiere]').forEach(function(el){
    if (!NEGOCIO[el.dataset.requiere]) el.hidden = true;
  });
  document.querySelectorAll('[data-href]').forEach(function(el){
    const k = el.dataset.href;
    let v = NEGOCIO[k];
    if (k === 'tel') v = NEGOCIO.telefonoHref ? 'tel:' + NEGOCIO.telefonoHref : '';
    else if (k === 'email') v = NEGOCIO.email ? 'mailto:' + NEGOCIO.email : '';
    else if (k === 'resenas') v = NEGOCIO.googlePlaceId ? 'https://search.google.com/local/reviews?placeid=' + NEGOCIO.googlePlaceId : '';
    else if (k === 'escribir-resena') v = NEGOCIO.googlePlaceId ? 'https://search.google.com/local/writereview?placeid=' + NEGOCIO.googlePlaceId : '';
    else if (k === 'waze') v = NEGOCIO.lat ? 'https://waze.com/ul?ll=' + NEGOCIO.lat + ',' + NEGOCIO.lng + '&navigate=yes' : '';
    if (!v){ el.hidden = true; return; }
    el.setAttribute('href', v);
    if (/^https?:/.test(v)){ el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener'); }
  });
  document.querySelectorAll('[data-year]').forEach(function(y){ y.textContent = new Date().getFullYear(); });
}

document.addEventListener('DOMContentLoaded', function(){
  origenVisita();
  initDatos();
  initWhatsApp();
  initPlaceholders();
  initHeader();
  initReveal();
});
