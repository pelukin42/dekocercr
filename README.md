# DEKOCER: propuesta de sitio web (Plan Pro)

Sitio multipágina para **DEKOCER · Pisos y Azulejos** (Heredia centro, Costa Rica).
HTML, CSS y JS planos: sin dependencias ni compilación. Se sube por FTP o arrastrando la carpeta.

> **Estado: demostración.** Tiene cinta amarilla, `noindex` y notas de propuesta. No publicar hasta revisar
> `PENDIENTES-CLIENTE.md` con DEKOCER.

## Cómo verlo

- Rápido: abrir `pro/index.html` con doble clic.
- Con servidor local, desde esta carpeta:

  ```bash
  python -m http.server 5531
  ```

  y abrir http://localhost:5531/pro/

## Qué incluye (Plan Pro → dónde está)

| Promesa del Plan Pro | Dónde está |
|---|---|
| Productos con foto y descripción | `servicios.html`: 40 productos en 6 líneas, cada uno con formato, origen, precio publicado y su fuente |
| Portafolio tipo catálogo, por tipo | Filtros por línea, **búsqueda por problema** («antideslizante», «madera», «baño», «mármol») y enlace directo a cada ficha (`#svc-id`) |
| Cotización detallada (proyecto, zona, presupuesto) | `agendar.html#cotizar`: 4 pasos (qué necesito → dónde va y cuántos m² → productos → presupuesto) con resumen en vivo y cálculo del 10 % de cortes |
| Solicitud de citas | `agendar.html#agendar`: visita a la tienda con producto, día y franja horaria |
| Enlace directo a reseñas de Google | Tarjeta de opiniones en la portada, pie de página, página de enlaces y QR del kit de mostrador |
| SEO local | Títulos por página, dirección con señas, mapa, Waze y JSON-LD `Store` + `HomeAndConstructionBusiness` generado desde `NEGOCIO`, con los dos nombres de la marca |
| Versión bilingüe | Botón ES/EN en todas las páginas (`js/en.js`, 227 textos traducidos) |
| WhatsApp y redes | Cada botón con su propio mensaje; WhatsApp flotante y barra de acciones en celular |
| Marcas | «De dónde viene cada piso»: Brasil, España, India y Perú, con los productos de cada origen |
| Fidelización | `membresias.html`: DEKOCER Profesional (3 niveles), campañas publicadas y combinaciones propuestas |
| Correo profesional y dominio | Ya tienen `dekocercr.com` y Google Workspace: ver `PENDIENTES-CLIENTE.md` |
| 3 rondas de ajustes | `AJUSTES.md` |

**Extras incluidos:** kit de mostrador en PDF (`Kit de mostrador - DEKOCER.pdf`), página de enlaces para la bio de
Instagram (`pro/links.html`), imagen para compartir en WhatsApp (`og.jpg`), ícono de la marca, canal «Ya compré»
para completar material del mismo lote, calculadora de metros cuadrados e investigación de mercado
(`INVESTIGACION-MERCADO.md`).

## Estructura

```
index.html                  Redirige a pro/
README.md                   Este archivo
PENDIENTES-CLIENTE.md       Agenda de la reunión
INVESTIGACION-MERCADO.md    Mercado meta y decisiones
AJUSTES.md                  Rondas de ajustes del Plan Pro
CLAUDE.md                   Convenciones para futuras sesiones
Kit de mostrador - DEKOCER.pdf
assets/
  core.css                  Sistema visual. FUENTE ÚNICA
  core.js                   Datos del negocio (NEGOCIO) y utilidades. FUENTE ÚNICA
herramientas/
  sync_parciales.py         Copia íconos, encabezado y pie de index.html al resto de páginas
  og.html · icono.html      Plantillas de la imagen para compartir y del ícono
pro/
  index.html                Inicio
  servicios.html            Catálogo y galería de ambientes
  membresias.html           DEKOCER Profesional, campañas y combinaciones
  agendar.html              Cotizar m² · Visitar la tienda · Ya compré
  links.html                Enlaces para la bio de Instagram (noindex)
  kit-mostrador.html        Tarjetas con QR para imprimir (noindex)
  css/styles.css            Copia de assets/core.css
  css/site.css              Componentes del sitio
  js/core.js                Copia de assets/core.js
  js/en.js                  Textos en inglés
  js/i18n.js                Motor bilingüe
  js/main.js                Motor del sitio: catálogo, cotizador, visitas, programa, galería, banderas
  img/                      productos/ · ambientes/ · tienda/ (pendiente) · QR · og.jpg · LEEME.txt
```

## Cómo se edita

**Datos del negocio:** todo vive en `NEGOCIO` (`assets/core.js`): contacto, horario, productos, zonas,
procedencias, campañas, niveles del programa, galería y el mapa del cotizador. Un campo vacío oculta su
elemento. Después de editar:

```bash
cp assets/core.js pro/js/core.js && cp assets/core.css pro/css/styles.css
```

**Banderas** (inicio de `pro/js/main.js`):

| Bandera | Valor | Qué hace |
|---|---|---|
| `MODO_DEMO` | `true` | Cinta, notas de propuesta y fuentes visibles. `false` al publicar. |
| `MOSTRAR_PRECIOS` | `true` | Precios publicados en Instagram, con su fecha. Confirmar vigencia. |
| `PRECIO_POR_M2` | `true` | El cotizador multiplica por metros. **Confirmar que el precio publicado sea por m².** |
| `MOSTRAR_HORARIO` | `false` | Se enciende cuando DEKOCER pase el horario completo. |
| `CLUB` | `true` | DEKOCER Profesional (propuesta). |
| `GALERIA` | `true` | Galería de ambientes. |
| `TARJETA_REGALO` | `false` | No aplica en este rubro. |
| `FLAGS.anteriores` | `true` | Productos de 2025 con existencia por confirmar. Apagar si ya no están. |
| `BILINGUE` (`js/i18n.js`) | `true` | Selector ES/EN. |

**Promoción del mes:** `NEGOCIO.promo = { activa: true, texto: '…', textoEn: '…', wa: 'mensaje' }`. Aparece como
franja debajo del menú. Es el cambio típico del mantenimiento mensual.

**Productos:** cada uno en `NEGOCIO.servicios` con `formato`, `atributos`, `precio`, `precioAntes`,
`precioFuente`, `zonas` («Ideal para») y `foto`. Las fotos van en `pro/img/productos/<id>.jpg` (16:10).

**Ofertas de la portada:** `NEGOCIO.destacados = ['id', 'id', …]`.

**Textos en inglés:** `pro/js/en.js`. Para revisar que no falte ninguno:

```bash
python "C:\Users\JMMendez\.claude\skills\premium\scripts\claves_i18n.py" pro
```

**Encabezado, pie e íconos:** se editan solo en `pro/index.html` (entre `@sprite`, `@header` y `@footer`) y se copian con:

```bash
python herramientas/sync_parciales.py
```

## Qué se confirmó y de dónde

No se inventó ningún dato. Lo que no tiene fuente quedó fuera o detrás de una bandera y está en `PENDIENTES-CLIENTE.md`.

| Dato en el sitio | Fuente |
|---|---|
| Nombre, lema «Pisos y azulejos», logotipo | Artes de Instagram de 2025 y 2026 |
| Teléfono 2237-7807, correo `ventas@dekocercr.com`, «Heredia, CR» | Bio de Instagram (setiembre 2026) |
| WhatsApp 8981-1504 | Pie de sus artes (2021 a 2026) y rótulo de la tienda |
| 40 productos con formato, origen, acabado y precio | Publicaciones de Instagram de 2025 y 2026, con la fecha en cada tarjeta |
| «Antideslizante», «primera calidad», «rectificado», «hecho en Brasil/España/India/Perú» | Texto e íconos de los mismos artes |
| Campañas DEKO BLACK, independencia, gran formato y colección Brasil | Instagram: 09 y 24-nov-2025, 08-set-2025, 24-oct-2025, 05-feb-2026 |
| Dirección, coordenadas y calificación 4,2 | Ficha de Google con el teléfono 2237-7807 (revisada el 19-set-2026) |
| Señas «150 m sur de la Iglesia de Los Ángeles» | Directorio Nexdu (por confirmar) |
| Nombre anterior «Distribuidora MALU» | Publicaciones de 2021 a 2024 de la misma cuenta y rótulo en la vista de calle (jun-2024) |
| Fotos de producto y de ambientes | Recortes de los artes publicados por DEKOCER, sin el texto encima |
| Dominios y correo | Consulta DNS y RDAP de `dekocercr.com` y `distmalu.com` |

## Decisiones de diseño

- **Identidad de su propia marca:** taupe del bloque de su logo (`#7C6C5D`), mocha de las cintas de precio
  (`#5E4B3B` para texto y botones, contraste AA 8,2:1) y crema de fondo. Tipografía geométrica (Jost) para
  títulos y el logotipo, con la **Ǝ volteada** como en sus artes; Mulish para el texto.
- **El precio al frente:** es lo que los diferencia. Cada tarjeta muestra el precio publicado, el precio
  anterior tachado y la fecha de la publicación.
- **Todo termina en WhatsApp con contexto:** en Costa Rica el 96 % lo usa. Los formularios arman el mensaje
  completo; con `endpoint` vacío nunca fingen haber guardado nada.
- **Consejos de oficio, no relleno:** el 10 % de cortes, el número de lote y el acabado antideslizante en
  exteriores son las tres cosas que más problemas evitan en una compra de piso.
- **Accesibilidad:** navegación por teclado, foco visible, `aria-label` en controles, pestañas y visor
  accesibles, `prefers-reduced-motion` y modo oscuro por preferencia del sistema.
- **SEO local:** metadatos por página, Open Graph, JSON-LD con `geo`, `hasMap`, catálogo y **los dos nombres**
  de la marca (`alternateName`), sin calificaciones propias.

## Antes de publicar

1. Reunión con `PENDIENTES-CLIENTE.md` y actualizar `NEGOCIO`.
2. Banderas: `MODO_DEMO = false` y el resto según lo confirmado (sobre todo `PRECIO_POR_M2` y `FLAGS.anteriores`).
3. `robots`: `noindex,nofollow` → `index,follow` en inicio, catálogo, profesionales y agendar.
4. Dominio: publicar en `dekocercr.com`, poner `NEGOCIO.dominio`, `og:image` absoluta, `sitemap.xml` y `robots.txt`.
5. Correo profesional: confirmar SPF, DKIM y DMARC en Google Workspace; redirigir `distmalu.com`.
6. Registro de solicitudes (`NEGOCIO.endpoint`) y aviso de privacidad (Ley 8968).
7. Fotos de la tienda y logo original (`pro/img/LEEME.txt`).
8. Reclamar y renombrar la ficha de Google (lista completa en `PENDIENTES-CLIENTE.md`).
9. Revisar de nuevo en 390 px y 1280 px, en español e inglés.
10. Imprimir el kit de mostrador y poner `links.html` en la bio de Instagram.
