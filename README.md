# Ecommerce Angular — Inkafarma

Proyecto frontend Angular construido como solución para el challenge técnico de ecommerce farmacéutico.

## Descripción del proyecto

Esta aplicación implementa un flujo mínimo de ecommerce con:
- listado de productos
- navegación a la ficha de producto (PDP)
- PDP con galería, variantes, descripción, acordeón y productos relacionados
- carrito local persistente en `localStorage`
- favoritos
- SSR/hidratación
- componentes reutilizables y `standalone components`

## Cómo ejecutar

### Requisitos
- Tener instalado Angular 21
- Node 18+ recomendado
- npm

### Instalación

```bash
npm install
```

### Ejecución del proyecto

```bash
ng serve
```

Abrir `http://localhost:4200/` en el navegador.

### Storybook

Esta solución incluye un entorno de componentes interactivo con Storybook.

```bash
npm run storybook
```

### Build producción

```bash
npm run build
```

### Tests

```bash
npm test
```

## Estructura principal

- `src/app/app.ts` — root component con `RouterOutlet`, header, footer y drawer de carrito.
- `src/app/app.routes.ts` — rutas de aplicación.
- `src/app/app.config.ts` — configuración de Angular con `provideRouter` y `provideClientHydration(withEventReplay())`.
- `src/app/services/cart.service.ts` — estado del carrito y favoritos con `signals`.
- `src/app/services/product.service.ts` — lógica de productos, búsquedas, filtros y métricas locales.
- `src/app/services/analytics.service.ts` — capa de tracking y eventos de ecommerce.
- `src/app/data/products-data.ts` — mock de productos usado por la app.

## Componentes clave

- `HeaderComponent` — buscador, navegación de categorías, carrito y favoritos.
- `CatalogComponent` — listado de productos, filtros, orden y productos destacados.
- `ProductCardComponent` — tarjeta del producto con precio, descuento y botón de agregar al carrito.
- `ProductDetailComponent` — PDP con galería, detalles del producto y recomendaciones.
- `ProductInfoComponent` — información de producto y selección de variante.
- `CartDrawerComponent` — panel de carrito local con cantidad, subtotal y checkout simulado.
- `FavoritesComponent` — vista de favoritos y adición rápida al carrito.

## Cómo está hecho

- Angular 21 con componentes standalone.
- SSR con `@angular/ssr` y `provideClientHydration()` para mejorar render inicial y SEO.
- Estado interno con `signals`, `computed` y `effect`.
- Persistencia de carrito/favoritos en `localStorage`.
- Mock data en JSON/TypeScript: no hay backend real.
- Navegación SPA con rutas semánticas: `/categoria/todos`, `/producto/:id`, `/carrito`, `/favoritos`.
- Analytics desacoplado en `AnalyticsService`.

## Optimizaciones implementadas

- SSR/Hidratación: la app está preparada para renderizar en servidor y luego hidratar en cliente.
- Arquitectura basada en componentes reutilizables y responsables de una sola tarea.
- Uso de `signals` para minimizar recalculos innecesarios y mejorar performance reactiva.
- Búsqueda y filtros ligeros en memoria sobre datos mock.
- Persistencia local para evitar recarga de estado en cada visita.
- Uso de HTML semántico y componentes aislados para mejorar accesibilidad y estructura.

## Notas técnicas importantes

- `documentation.json` existe como dato adicional, pero la app utiliza `src/app/data/products-data.ts`.
- Los eventos de analytics se disparan desde `AnalyticsService`, no desde la UI directamente.
- El carrito funciona completamente en cliente y no necesita backend.

## Respuestas al challenge técnico

### 1. ¿Qué decisiones tomaste para mejorar la performance en esta página?

- Elegí Angular 21 con `standalone components` para reducir la complejidad de módulos y mejorar tiempos de carga.
- Implementé SSR con `provideClientHydration(withEventReplay())` para que el primer render sea rápido y SEO-friendly.
- Usé `signals`, `computed` y `effect` para un re-render mínimo y una gestión de estado más eficiente.
- Mantengo el catálogo en memoria con datos mock y evito lógica pesada en el render.
- Separé lógica de negocio en servicios (`ProductService`, `CartService`, `AnalyticsService`) para evitar que los componentes hagan demasiado trabajo.

### 2. ¿Cómo estructurarías esta solución para soportar múltiples marcas con diferentes estilos?

- Extraería un sistema de tokens de diseño: colores, tipografías, espaciados y branding.
- Usaría CSS variables o un tema global que se pueda cambiar dinámicamente según la marca.
- Crearía una capa de diseño (`ThemeService`) que exponga variables de marca y estilos compartidos.
- Cada componente recibiría variables de estilo a través de clases/props y usaría utilidades en vez de valores hardcodeados.
- Para branding multi-marca, mantendría componentes reutilizables y aplicaría solo estilos de tema/plantilla según la marca activa.

### 3. Si esta página presenta problemas de LCP en producción, ¿cómo lo abordarías?

- Mediría primero con Web Vitals y herramientas como Lighthouse.
- Optimizaría imágenes críticas: añadir `loading="lazy"` a las imágenes secundarias, definir `width`/`height`, usar formatos modernos, y servirlas desde CDN.
- Aprovecharía SSR para mostrar HTML inicial rápido y evitar render bloqueante de JS pesado.
- Revisaría el bundle y eliminaría dependencias innecesarias.
- Aseguraría que las imágenes de hero y PDP se carguen lo antes posible y que el layout tenga tamaños de imagen definidos para evitar cambios de diseño.

### 4. ¿Cómo evitarías que eventos de Analytics se disparen múltiples veces en una SPA?

- Centralicé el tracking en `AnalyticsService` y solo inyecto el script una vez.
- Verifico `window.gtag` antes de crear el script y antes de enviar eventos.
- En el root `App`, uso `Router.events.pipe(filter(event => event instanceof NavigationEnd))` para disparar `page_view` solo en eventos de navegación definitivos.
- En la PDP, disparo `view_item` solo cuando el producto se carga exitosamente, no en cada render.
- Mantener un guard de eventos y deduplicar con identificadores de ruta o producto ayuda a evitar repeticiones.

### 5. ¿Qué consideraciones SEO tendrías en cuenta para esta página en un entorno real?

- Usar SSR y renderizar HTML completo en servidor para bots y crawlers.
- Mantener encabezados semánticos correctos (`<h1>`, `<h2>`, etc.) y buen orden de contenido.
- Agregar metadata dinámica: `title`, `description`, `og:title`, `og:description`, `canonical`.
- Incluir `alt` en todas las imágenes y evitar contenido generado únicamente por JS.
- Asegurar rutas limpias y semánticas.
- Considerar `sitemap.xml` y `robots.txt` para un despliegue real.

## Bonus: tracking básico implementado

- `view_item` cuando se visualiza una PDP.
- `add_to_cart` cuando se agrega un producto al carrito.
- La lógica está desacoplada en `AnalyticsService`.
- Este enfoque facilita cambios futuros sin duplicar tracking en los componentes.

## Comandos útiles

- `npm install`
- `npm start`
- `ng serve`
- `npm run build`
- `npm run storybook`
- `npm test`

---

Este README ahora describe la solución construida, cómo ejecutarla, su arquitectura y responde las preguntas del challenge técnico.
