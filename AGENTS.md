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
