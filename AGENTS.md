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

- Mantén la sección separada del Portal del Cliente.
- Flujo aprobado: **GISBA detecta → agencia/automatización comunica → cliente responde → GISBA registra → equipo continúa**.
- No uses WhatsApp como inbox principal del Portal ni dupliques allí una conversación completa. El Portal muestra el resultado organizado; WhatsApp explica cómo ocurre la coordinación.

### Protección contra versiones antiguas

- No recuperes assets, copy ni composiciones anteriores sólo porque existan en `dist/assets/` o en Git.
- Si hay varias versiones, identifica la aprobada, usa únicamente esa y no cambies a otra sin autorización.

### Protocolo previo a cualquier reemplazo

- Antes de cambiar un visual aprobado, detente e informa: **Sección**, **Asset actual**, **Asset propuesto**, **Motivo del cambio**, **Qué mejoraría** y **Qué se perdería**.
- Espera la aprobación explícita del usuario antes de realizar el reemplazo.
