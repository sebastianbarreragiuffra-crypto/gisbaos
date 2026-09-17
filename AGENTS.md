# Reglas del proyecto GISBA OS

## Alcance

- Trabaja únicamente sobre GISBA OS dentro de este repositorio. No mezcles archivos, estilos ni decisiones de otros proyectos.
- Conserva la orientación B2B y de conversión definida para GISBA y CampaignOS.

## Tipografía oficial

- Usa **Inter** como única familia tipográfica principal en todas las páginas públicas de GISBA OS y CampaignOS.
- La fuente debe cargarse desde `dist/assets/fonts/`; no dependas de que esté instalada en el computador ni de servicios externos.
- Conserva los pesos 400, 500, 600, 700 y 800. `"Segoe UI", Arial, sans-serif` se permite únicamente como respaldo técnico.
- No reemplaces Inter ni mezcles otra familia en títulos, navegación, botones o cuerpo sin una instrucción explícita del usuario.
- Cuando cambie el CSS global, actualiza la versión de `styles.css` en todas las páginas HTML para evitar estilos antiguos almacenados en caché.

## Layout y assets

- Conserva el layout aprobado y modifica sólo el elemento solicitado.
- Usa las imágenes exactas entregadas por el usuario cuando hayan sido aprobadas. No recrees texto, logos ni elementos internos sobre una imagen que ya los contiene.
- Verifica visualmente el resultado en escritorio y móvil antes de dar el cambio por terminado.
