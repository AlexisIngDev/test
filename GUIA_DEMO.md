# Guia Demo

Guion corto para grabar el video de entrega (3-5 minutos).

## 1. Abrir el proyecto

Mostrar rapidamente:
- `src/data/page-data.json`
- `src/components/PageBuilder.tsx`
- `src/tests/PageBuilder.test.tsx`
- `PROMPT_LOG.md`

Mensaje sugerido:
`This project renders CMS-style blocks dynamically and handles unsupported blocks without crashing.`

## 2. Ejecutar la app

```bash
npm run dev
```

Abrir `http://localhost:3000` y mostrar:
- Hero
- Feature grid
- Pricing

## 3. Mostrar logica dinamica

Explicar en `PageBuilder`:
- registro de componentes
- fallback para tipos no soportados

Opcional rapido:
- cambiar temporalmente un bloque a `type: "slider"` en JSON
- recargar y mostrar fallback visible

## 4. Ejecutar pruebas

```bash
npm run test
```

Mencionar que se cubre:
- render normal
- unknown component type
- continuidad despues de bloque invalido

## 5. Ejecutar Docker

```bash
docker compose up --build
```

Abrir nuevamente `http://localhost:3000` para confirmar runtime en contenedor.

## 6. Cerrar con evidencia de proceso

Mostrar brevemente:
- `PROMPT_LOG.md`
- `BITACORA_TECNICA.md`

Mensaje sugerido:
`AI was used to accelerate planning and scaffolding, then all outputs were adapted and validated manually.`
