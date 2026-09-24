# Reglas del proyecto GISBA OS

## Alcance

- Trabaja únicamente sobre GISBA OS dentro de este repositorio. No mezcles archivos, estilos ni decisiones de otros proyectos.
- Conserva la orientación B2B y de conversión definida para GISBA y CampaignOS.

## Tipografía oficial

- Usa **Manrope + Inter** en todas las páginas públicas de GISBA OS y CampaignOS.
- Usa **Manrope 500–600** en títulos y encabezados de marketing (`h1`–`h6`).
- Usa **Inter 400–600** en cuerpo, navegación, botones, formularios, tarjetas e interfaces de producto o dashboards.
- Ambas fuentes deben cargarse desde `dist/assets/fonts/`; no dependas de que estén instaladas en el computador ni de servicios externos.
- `"Segoe UI", Arial, sans-serif` se permite únicamente como respaldo técnico.
- No reemplaces ni mezcles otras familias sin una instrucción explícita del usuario.
- Cuando cambie el CSS global, actualiza la versión de `styles.css` en todas las páginas HTML para evitar estilos antiguos almacenados en caché.

## Layout y assets

- Conserva el layout aprobado y modifica sólo el elemento solicitado.
- Usa un ancho máximo global de **1340 px** para el contenido en escritorio. En una pantalla de 1440 px deben quedar aproximadamente 50 px de aire a cada lado; en 1920 px conserva el contenido al mismo tamaño y aumenta únicamente los márgenes laterales. No crees anchos máximos distintos por página.
- Usa las imágenes exactas entregadas por el usuario cuando hayan sido aprobadas. No recrees texto, logos ni elementos internos sobre una imagen que ya los contiene.
- No amplíes imágenes raster por encima del tamaño que permita su resolución original. Mantén `width` y `height` reales en el HTML, `height: auto`, `image-rendering: auto` y usa el asset de mayor resolución aprobado cuando exista. Los dashboards construidos con HTML/CSS deben conservar texto y líneas vectoriales nítidas.
- Los dashboards de las secciones **Experiencia del cliente** y **Operación real** son excepciones al marco con escalón: deben conservar un contenedor rectangular completo con esquinas redondeadas, sin recorte inferior derecho.
- Todas las fotografías e imágenes editoriales nuevas deben usar el marco visual oficial de GISBA: esquinas exteriores redondeadas y escalón inferior derecho con transición interior curva, igual al patrón aprobado en la sección «Las personas detrás de GISBA». Reutiliza la misma silueta en todas las páginas; no vuelvas al corte diagonal. Conserva el punto focal con `object-fit` y `object-position`. No recortes ni deformes logos, iconos o capturas de interfaz que deban mostrarse completas.
- Todos los recuadros principales, tarjetas de servicios, paneles y contenedores de dashboards deben usar la misma silueta oficial de las fotografías: esquinas exteriores redondeadas y escalón inferior derecho con transición interior curva. El escalón debe ser un recorte transparente real mediante la máscara compartida; nunca lo simules superponiendo un bloque del color del fondo. Conserva además el fondo claro, borde fino lavanda, sombra suave y resplandor violeta sutil cuando corresponda. Mantén padding generoso y reserva espacio para que el recorte no tape contenido. No vuelvas a usar rectángulos redondeados convencionales en estos componentes.
- Verifica visualmente el resultado en escritorio y móvil antes de dar el cambio por terminado.

## Registro permanente de visuales aprobados

### Protección general

- Antes de modificar, eliminar, ocultar, recortar, sustituir o reconstruir un visual aprobado, solicita aprobación explícita del usuario.
- También se considera sustitución: cambiar un `<img>` aprobado por una recreación HTML/CSS; usar `display:none`, `visibility:hidden` u otro método para dejar de mostrarlo; volver a una versión anterior; cambiar significativamente su composición; sustituirlo por otro mockup sin avisar; o retirarlo de la landing aunque su archivo permanezca en `dist/assets/`.
- Mantener el archivo en el repositorio no significa conservar el visual. Si deja de mostrarse donde fue aprobado, es una modificación que requiere autorización.
- Los cambios de contenido deben conservar los assets y la composición visual existentes.

### Hero

- Asset aprobado actual: `dist/assets/gisba-hero-motion.jpg`.
- Conserva el dashboard y la composición general del Hero.
- El motion debe añadirse alrededor o dentro del componente existente, sin reemplazar el visual aprobado.

### Dashboards aprobados

- E-commerce: `dist/assets/gisba-client-dashboard-urban-store.webp`.
- Lead Generation: `dist/assets/gisba-client-dashboard-lead-generation.webp`.
- Conserva en ambos la imagen original, proporciones, nitidez y composición. Se permiten hotspots, tabs y microinteracciones externas que no modifiquen ni reconstruyan el asset.
- No recuperes versiones antiguas de estos dashboards.

### Portal del Cliente

- Asset aprobado actual: `dist/assets/gisba-portal-cliente-v3.png`.
- Representa el portal que ve el cliente de la agencia, no el comprador, lead o consumidor final de ese cliente.
- Navegación aprobada: `Resumen · Campañas · Aprobaciones · Mensajes · Reportes`.
- En la landing muestra `Resumen` seleccionado, conserva `Mensajes` en la navegación y prioriza resultados, aprobación pendiente y coordinación reciente.
- No lo sustituyas por versiones anteriores de «Experiencia del cliente», «Entender / Actuar / Demostrar», dashboards con oportunidades, cotizaciones o seguimiento comercial, inbox CRM ni conversaciones de compradores finales.
- No uses copy como «Equipo GISBA», «Ejecutivo GISBA», «oportunidades comerciales», «cotizaciones» o «pipeline de ventas».
- La relación correcta es: **Agencia ↔ GISBA ↔ Cliente de la agencia**.

### WhatsApp

- Visual aprobado: `dist/assets/gisba-coordinacion-whatsapp-v2.png`.
- Conserva el teléfono, la conversación Agencia ↔ Cliente y la interfaz GISBA con aprobación registrada, tarea creada y pendiente de ejecución.
- No lo sustituyas por cuatro cards, diagramas abstractos ni un nuevo mockup sin autorización.
- El copy puede mantenerse como HTML fuera del asset.
- Se puede añadir motion posteriormente sin reemplazar la composición visual.
- Cualquier cambio, ocultamiento o sustitución requiere aprobación explícita.
- Mantén la sección separada del Portal del Cliente.
- Flujo aprobado: **GISBA detecta → agencia/automatización comunica → cliente responde → GISBA registra → equipo continúa**.
- No uses WhatsApp como inbox principal del Portal ni dupliques allí una conversación completa. El Portal muestra el resultado organizado; WhatsApp explica cómo ocurre la coordinación.

### Protección contra versiones antiguas

- No recuperes assets, copy ni composiciones anteriores sólo porque existan en `dist/assets/` o en Git.
- Si hay varias versiones, identifica la aprobada, usa únicamente esa y no cambies a otra sin autorización.

### Protocolo previo a cualquier reemplazo

- Antes de cambiar un visual aprobado, detente e informa: **Sección**, **Asset actual**, **Asset propuesto**, **Motivo del cambio**, **Qué mejoraría** y **Qué se perdería**.
- Espera la aprobación explícita del usuario antes de realizar el reemplazo.

## Publicación y baseline

- GitHub y Sites son publicaciones independientes. Un `git push` no actualiza automáticamente la web pública.
- Cuando el usuario solicite publicar, empaqueta y despliega en Sites el `dist/` correspondiente al commit aprobado; excluye archivos locales no relacionados.
- No declares Git local, GitHub y Sites sincronizados hasta verificar el SHA local/remoto, la versión desplegada y el DOM real de la URL pública.
- Después del despliegue, comprueba por red los assets y versiones CSS esperados, ausencia de contenido obsoleto, consola limpia, cero overflow y capturas públicas en los viewports pedidos.
- El baseline pre-motion debe quedar publicado y verificado antes de comenzar cualquier motion. No implementes motion sin una instrucción explícita posterior.

## FINAL WEB FREEZE V1 (website comercial GISBA OS)

### Alcance permanente

- Este repositorio es el WEBSITE / LANDING comercial de GISBA OS. No es el software GISBA OS: no se diseña backend, base de datos, autenticación, APIs ni booking aquí.
- "Iniciar sesión" es un enlace (`<a class="nav-login" data-cta="login">`) que solo redirige a otra web/app; su destino final se define en `script.js` (`LOGIN_URL`).
- "Agenda una demo" no instala Calendly/Cal.com ni backend propio; por ahora todos los CTA apuntan a `#contacto` (formulario en la misma página).

### ICP

- Comprador y usuario principal: agencias de marketing digital en Chile (Founder/CEO, Director de Marketing, Director de Performance, Head of Growth, COO). El cliente de la agencia NO es el buyer.
- La home mantiene lenguaje premium/internacional (escalable a LatAm); no repetir "Chile" artificialmente fuera de metadata/SEO/contacto.

### GISBA Core (tesis a proteger)

- GISBA OS conecta, por cada cuenta: performance + señales + decisiones + coordinación + trazabilidad. El valor es conectar información fragmentada, no acumular funcionalidades.
- Flujo GISBA Pulse: DETECTA → EXPLICA → RECOMIENDA → DECIDE (humano) → REGISTRA. Nunca comunicar "recomienda → ejecuta automáticamente".
- GISBA no debe leerse como ERP, CRM, task manager genérico, inbox omnicanal ni "solución 360". WhatsApp es coordinación Agencia ↔ GISBA ↔ Cliente de la agencia, no atención al comprador final.

### Los tres directorios de evaluación

Toda decisión relevante del website se evalúa con: (A) GISBA Web & Conversion Board — claridad, UX, conversión; (B) GISBA Search & Acquisition Board — SEO técnico, paid search readiness, sin convertir la home en catálogo de keywords; (C) GISBA Product Engineering & Revenue Board — implementación, performance, recorrido comercial. Ninguno diseña backend. Método completo (integrantes, contraste obligatorio, reglas anti-conformidad, anti-overdesign y freeze): `docs/gisba-3-board-review.md`; léelo solo cuando haya una decisión relevante.

### Breakpoints y jerarquía

- Baseline visual: 1440px. En 1920px no se escala el contenido, solo se agrega aire lateral (`--container: min(1340px, calc(100% - 48px))`).
- Responsive a validar siempre: 1920 / 1440 / 1024 / 768 / 390.
- Mobile se rediseña por jerarquía (mensaje → beneficio → producto/visual), nunca es un desktop reducido a escala.

### CTA "Agenda una demo": distribución final

Distribución aprobada (único lugar donde debe existir un botón grande "Agenda una demo"): **Navbar → Hero → CTA final** (formulario de `#contacto`). No repetir un CTA grande en GISBA Pulse, Portal del Cliente, WhatsApp, Testimonios, "La forma de GISBA" ni otros módulos intermedios. El footer puede tener enlaces de navegación normales (texto), no un botón duplicado.

Todos los CTA de este tipo llevan `data-cta="demo"`; "Iniciar sesión" lleva `data-cta="login"`. El destino centralizado se controla en `dist/script.js` con las constantes `DEMO_BOOKING_URL` y `LOGIN_URL` (al inicio del archivo): mientras sean `null`, se conserva el `href` actual de cada enlace; para redirigir todos los CTA a la vez (por ejemplo a un proveedor de booking o a la URL real de login), basta con asignarles un string ahí — no hay que tocar el HTML de cada página.

Atributos de tracking ya preparados (sin enviar eventos a ningún proveedor todavía): `data-event="demo_cta_click"` + `data-location="navbar|hero|final"` en cada CTA de demo; `data-event="login_click"` en "Iniciar sesión"; `data-event="how_it_works_click"` en "Ver cómo funciona"; en el formulario de contacto, `data-form-event="demo_form_submit"`, `data-form-start-event="demo_form_start"` y `data-form-success-event="demo_success"`.

### Testimonios (Objetivo 2, FINAL WEB FREEZE V1)

- La sección `#testimonios` de `dist/index.html` está **desactivada (comentada, fuera del DOM público)**: sus tres testimonios (NEXA Digital, Bruma Creative Studio, ALTA Agencia Digital) son simulaciones. El componente sigue disponible (`.landing-testimonials`/`.testimonial-*` en `styles.css`) para reactivarlo.
- Nunca publicar nombres, logos o citas ficticias como prueba social real.
- Antes de publicar como prueba social real: reemplazar los tres testimonios por datos reales (nombre, cargo, agencia, cita verificados) y quitar el aviso ilustrativo, o volver a ocultar la sección envolviéndola en un comentario HTML. No hace falta rediseñar: el componente usa las clases `.landing-testimonials`/`.testimonial-*` de `styles.css`.

### SEO técnico

- `dist/robots.txt` y `dist/sitemap.xml` existen y apuntan al dominio público actual (`gisba-marketing-chile.sebastianbarreragiuf.chatgpt.site`). `propuesta-2.html` queda excluido del sitemap (no es parte de la navegación pública) y bloqueado en robots.txt.
- No se agregó `<link rel="canonical">`: el dominio `.chatgpt.site` es de Sites/staging, no está confirmado como dominio final. Cuando se confirme el dominio de producción, agregar canonical absoluto en las 6 páginas y actualizar las URLs de `sitemap.xml`/`robots.txt` y los `og:image`/`twitter:image` de `index.html`.
- Fuentes servidas en TTF (no WOFF2); se agregó `<link rel="preload">` para Manrope e Inter regular en `index.html`. Convertir a WOFF2 queda como mejora futura de performance (no se hizo en este freeze para no arriesgar el diseño con herramientas de conversión no verificadas).

### Proceso de release (permanente)

`git diff` → revisar archivos → commit pequeño y descriptivo → `push` → **Deploy Sites** (paso manual, independiente del push, vía Codex/ChatGPT — ver sección "Publicación y baseline" arriba) → QA sobre la URL pública. Nunca declarar Git local, GitHub y Sites sincronizados sin verificar SHA local = origin/main = versión desplegada.

### Motion

Motion System V1 es una fase separada, posterior a este freeze. No tiene autorización para modificar copy, layout, arquitectura, positioning, CTA ni responsive — trabaja sobre la estructura ya congelada.

## Trabajo en paralelo (reglas permanentes para Claude y Codex)

- `main` (carpeta principal `C:\Users\SEBAS\Desktop\gisbaos`) NO se edita durante el desarrollo: solo integración, QA final, push y deploy. Si detectas que estás en `main`, detente antes de editar y usa tu propia rama/worktree.
- Una tarea = una rama/worktree; nunca dos agentes en la misma carpeta. Tarea terminada = QA + commit + working tree limpio + reportar SHA y detenerse; la integra un solo integrador, que también decide el número final de `styles.css?v=XX`.
- Cambios desconocidos: no borrar, integrar ni resetear; identificar y, si hace falta, conservar en `wip/<nombre>`. Nunca desplegar desde un working tree sucio: solo desde `main` limpio o una extracción exacta del commit aprobado.
- Reglas completas: `docs/gisba-parallel-work-rules.md`.
