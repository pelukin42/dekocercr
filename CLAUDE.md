# DEKOCER: convenciones del proyecto

Propuesta de sitio **Plan Pro** (Axel Sites) para **DEKOCER · Pisos y Azulejos**, en Heredia centro.
Sitio multipágina en `pro/`; el `index.html` de la raíz solo redirige.

Para rehacer o extender este tipo de sitio, usar el skill **`/premium`**.

## Reglas duras

**No inventar ningún dato del negocio.** Ni precios, existencias, garantías, plazos, horarios, entregas ni
formas de pago. Campo sin confirmar = vacío en `NEGOCIO` = el elemento no se dibuja. Todo lo pendiente está en
`PENDIENTES-CLIENTE.md` y la fuente de cada dato publicado, en `README.md`.

**Precios con fecha.** Cada precio del catálogo viene de una publicación de Instagram y lleva su fecha en
`precioFuente`. En modo demo la fecha se ve en la tarjeta. Nunca se muestra un precio sin fuente.
**Falta confirmar la unidad** (¿por m²?) y si incluye IVA: de ahí la bandera `PRECIO_POR_M2`.

**Dos nombres, un negocio.** La cuenta de Instagram y el rótulo vienen de «Distribuidora MALU». El sitio lo
dice de frente (`NEGOCIO.nombreAnterior`) y los datos estructurados llevan los dos nombres en `alternateName`.
No borrar esa referencia sin confirmarlo con DEKOCER.

**Propuestas marcadas.** DEKOCER Profesional, las combinaciones nuevas y el canal «Ya compré» son ideas de
Axel Sites: en modo demo llevan nota y en producción solo se encienden si DEKOCER las aprueba.

**Opiniones.** Solo la cifra pública de Google (4,2), con enlace a la ficha y la nota de que esa ficha todavía
se llama «Distribuidora MALU GM». Sin `aggregateRating` propio y sin copiar reseñas.

**Fotos.** Solo recortes de los artes que DEKOCER publica y, cuando lleguen, fotos propias de la tienda. Nunca
bancos de imágenes. Las obras de clientes, solo con autorización escrita.

**Tono.** Voseo costarricense, como publican ellos («Renová», «Calculá», «Aprovechá»). Lenguaje de obra, no de
catálogo de lujo: metros, cortes, lote, antideslizante.

## Fuente única

- `assets/core.css` y `assets/core.js` son la fuente. Después de editarlos, re-copiar:

  ```bash
  cp assets/core.css pro/css/styles.css && cp assets/core.js pro/js/core.js
  ```

- Todos los datos viven en `NEGOCIO` (`assets/core.js`). El JSON-LD se genera solo desde ahí (`jsonLD()` en `main.js`).
- **Bloques compartidos** (íconos, encabezado y pie) se editan solo en `pro/index.html`, entre los comentarios
  `@sprite`, `@header` y `@footer`, y se copian a las demás páginas con:

  ```bash
  python herramientas/sync_parciales.py
  ```

## Banderas (inicio de `pro/js/main.js`)

`MODO_DEMO`, `MOSTRAR_PRECIOS`, `PRECIO_POR_M2`, `MOSTRAR_HORARIO`, `MOSTRAR_DIRECTOR`, `CLUB`,
`TARJETA_REGALO`, `GALERIA` y `FLAGS.anteriores`. `BILINGUE` está en `pro/js/i18n.js`. Estado y fuente de cada
una en `PENDIENTES-CLIENTE.md`.

`main.js` es el motor genérico del skill: no lleva nombres del negocio. Lo propio de una tienda de acabados
vive en `NEGOCIO`:

- `cotizador.metros = true` y `cotizador.ubicaciones` → bloque de metros cuadrados, 10 % de cortes y provincia.
- `servicios[].formato`, `.atributos`, `.precioAntes` → ficha de producto con formato, chips y precio tachado.
- `destacados` → las ofertas de la portada.
- `textos.cita` y `textos.seguimiento` → mensajes de WhatsApp propios del rubro (visita a la tienda, retiro,
  completar lote).
- `membresias[].nota` → niveles sin cuota mensual.

## Bilingüe

El HTML está en español. Cada texto traducible lleva `data-i18n="clave"` o `data-i18n-attr="atributo:clave"`,
con su traducción en `pro/js/en.js`; el motor está en `pro/js/i18n.js`. Lo que se dibuja desde `NEGOCIO` usa
`L(obj, 'campo')`, que toma `campoEn`. Las notas de la propuesta (`demo.*`) quedan en español a propósito.

## Sistema visual

Identidad tomada de sus propios artes: taupe `#7C6C5D` (bloque del logo), mocha `#5E4B3B` (cintas de precio,
texto y botones), crema `#FAF8F5`, oscuro `#2B231E`. Tipografías: Jost (títulos y logotipo) y Mulish (texto).
El logotipo se recrea con tipografía y la **Ǝ volteada** (`.wordmark i`): reemplazar cuando llegue el original.
Los íconos del sprite son de cerámica (`i-piso`, `i-madera`, `i-marmol`, `i-azulejo`, `i-fachaleta`, `i-sol`,
`i-regla`, `i-lote`, `i-tienda`) y la marca es un mosaico de 2×2 (`i-marca`).

## Verificar

Servidor local: `.claude/launch.json` (puerto 5531), abrir `http://localhost:5531/pro/`.
Prueba funcional: `scripts/probar_sitio.js` del skill en `javascript_tool` (sin errores, sin desborde a 390 px,
cotizador con metros, visita, «Ya compré», inglés y galería). Capturas con `scripts/captura.py`.
Traducciones: `python "C:\Users\JMMendez\.claude\skills\premium\scripts\claves_i18n.py" pro`.
