# Bitacora Tecnica

## Contexto

Proyecto orientado a una prueba tecnica: renderizado dinamico de pagina desde un JSON tipo Headless CMS, con App Router, pruebas de resiliencia y empaquetado en Docker.

## Decisiones de Ingenieria

### 1. Contrato de datos primero

Antes de UI, se fijo el contrato de bloques:
- `id`
- `type`
- `props`

Esto permitio desacoplar contenido y render.

Archivo base: `src/data/page-data.json`.

### 2. Registro de componentes en lugar de `switch` largo

`PageBuilder` usa un registry para mapear `type -> Component`.

Ventajas:
- extension simple
- menos ramificacion de codigo
- testing mas directo

Archivo base: `src/components/PageBuilder.tsx`.

### 3. Fallback explicito para tipos desconocidos

Se descarto `return null` silencioso para tipos no soportados.  
Se renderiza un bloque visible con mensaje de error de contenido:

`Unsupported component type: {block.type}`

Con esto no se rompe la pagina y el equipo de contenido detecta el problema.

### 4. Tipado fuerte sin bloquear evolucion

Se modelaron bloques conocidos (`hero`, `feature-grid`, `pricing`) y se dejo espacio para bloques nuevos via tipo desconocido.

Archivo base: `src/types/page-builder.ts`.

### 5. Testing centrado en comportamiento

La suite valida cuatro rutas criticas:
- render de componentes validos
- fallback visible para tipo invalido
- continuidad de render despues de bloque invalido
- arreglo vacio

Archivo base: `src/tests/PageBuilder.test.tsx`.

### 6. Docker listo para revision

Se mantuvo build multi-stage y runtime con `standalone` para reducir superficie en produccion local.

Archivos:
- `Dockerfile`
- `docker-compose.yml`

## Skills Aplicadas (.agents)

### `nextjs-app-router-patterns`

Uso principal:
- convenciones App Router (`layout.tsx`, `page.tsx`)
- separacion limpia entre ensamblaje de ruta y componentes de dominio

Impacto directo:
- estructura de `src/app`
- composicion server-first sin complejidad extra

### `next-best-practices`

Uso principal:
- file conventions para mantener topologia consistente
- self-hosting para salida `standalone` en Docker
- criterio de limites server/client para evitar acoplamientos innecesarios

Impacto directo:
- flujo de build y runtime
- reglas de composicion y serializacion

### `ui-ux-pro-max`

Uso principal:
- jerarquia visual
- espaciado consistente
- legibilidad y contraste en CTAs

Impacto directo:
- refactor a utilidades Tailwind en secciones
- consistencia de layout entre desktop y mobile

## Criterio de Entrega

Se priorizo:
- claridad de arquitectura
- resiliencia ante datos invalidos
- verificabilidad con tests
- ejecucion local reproducible con Docker

Se evito inflar el alcance con funcionalidades fuera de consigna.
