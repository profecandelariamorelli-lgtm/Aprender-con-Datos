# Aprender con Datos — Edición 2026.4

Teórico digital interactivo de Estadística para explorar datos, analizarlos con herramientas estadísticas e interpretar los resultados con sentido crítico.

Esta edición desarrolla las Unidades 1 a 5 y está preparada para funcionar como sitio estático en GitHub Pages.

## Organización del contenido

- **Módulo 1 — Datos:** Unidades 1 y 2.
- **Módulo 2 — Probabilidad:** Unidad 3.
- **Módulo 3 — Distribuciones de probabilidad:** Unidad 4.
- **Módulo 4 — Inferencia estadística:** Unidad 5.
- **Glosario:** conceptos correspondientes a todos los módulos.

## Estructura

- `index.html`: contenido completo y navegación.
- `styles.css` y `css/estilos.css`: identidad visual, diseño responsive e impresión.
- `js/app.js`: actividades, simulaciones, gráficos, navegación y guardado local del progreso.
- `assets/img/`: imágenes institucionales y de la SRT.
- `assets/documentos/`: informes de la SRT utilizados como fuentes.
- `assets/`: recursos interactivos complementarios.

## Abrir localmente

1. Descomprimir completamente el archivo ZIP.
2. Abrir `index.html` con Chrome, Edge o Firefox.
3. No abrir `index.html` directamente desde el interior del ZIP.
4. Algunas herramientas externas insertadas requieren conexión a internet.

## Publicar en GitHub Pages

1. Subir el contenido interno de la carpeta al repositorio, de modo que `index.html` quede en la raíz.
2. Ir a `Settings > Pages`.
3. En **Source**, elegir `Deploy from a branch`.
4. Seleccionar la rama `main` y la carpeta `/ (root)`.
5. Guardar y esperar a que GitHub actualice la dirección del sitio.

## Personalización

- El enlace al aula PEDCO se edita en `index.html`, buscando `id="enlace-pedco"`.
- Los colores principales se encuentran en las hojas de estilo.
- Los ejemplos interactivos, simulaciones y respuestas están en `js/app.js`.
- Los textos teóricos están en `index.html`.
- Las claves de acceso a los módulos se encuentran al comienzo de `js/app.js`.

## Principios didácticos

- La explicación construye el concepto y la interacción lo potencia.
- El desarrollo conceptual general es independiente del TP vigente.
- PEDCO concentra los materiales oficiales, las actividades acreditables y las entregas.
- Cada módulo recupera conocimientos anteriores y los vincula con situaciones aplicadas.
- Las herramientas digitales apoyan los cálculos, pero la elección del procedimiento y la interpretación forman parte del análisis.
