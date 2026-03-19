# Engineering Notes

## Context

This project is built for a technical assignment: a dynamic page renderer powered by a Headless CMS-style JSON payload, implemented with App Router, resilience tests, and Docker packaging.

## Engineering Decisions

### 1. Data contract first

Before UI work, the block contract was defined with:
- `id`
- `type`
- `props`

This keeps content and rendering concerns decoupled.

Base file: `src/data/page-data.json`.

### 2. Component registry instead of a large `switch`

`PageBuilder` uses a registry map from `type -> Component`.

Benefits:
- easy to extend
- less branching complexity
- easier to test

Base file: `src/components/PageBuilder.tsx`.

### 3. Explicit fallback for unknown block types

A silent `return null` was intentionally avoided.  
Unknown block types render a visible fallback message:

`Unsupported component type: {block.type}`

This prevents page crashes and gives immediate feedback to content teams.

### 4. Strong typing without blocking evolution

Known blocks (`hero`, `feature-grid`, `pricing`) are strongly typed, while unknown block types remain supported for forward compatibility.

Base file: `src/types/page-builder.ts`.

### 5. Behavior-focused testing

The suite validates four critical paths:
- valid component rendering
- visible fallback for invalid type
- rendering continuity after invalid block
- empty array handling

Base file: `src/tests/PageBuilder.test.tsx`.

### 6. Docker setup ready for review

A multi-stage build with `standalone` runtime output was used to reduce runtime footprint for local production review.

Files:
- `Dockerfile`
- `docker-compose.yml`

## Skills Applied (.agents)

### `nextjs-app-router-patterns`

Primary usage:
- App Router conventions (`layout.tsx`, `page.tsx`)
- clean separation between route assembly and domain components

Direct impact:
- `src/app` structure
- server-first composition with low complexity

### `next-best-practices`

Primary usage:
- file conventions for predictable project topology
- self-hosting guidance for `standalone` Docker output
- server/client boundary guidance to avoid unnecessary coupling

Direct impact:
- build and runtime flow
- composition and serialization boundaries

### `ui-ux-pro-max`

Primary usage:
- visual hierarchy
- consistent spacing rhythm
- CTA readability and contrast

Direct impact:
- Tailwind utility refactor across sections
- stronger cross-breakpoint visual consistency

## Delivery Criteria

Priorities:
- architecture clarity
- invalid-data resilience
- test verifiability
- reproducible local runtime through Docker

Scope was intentionally constrained to avoid overengineering beyond assignment requirements.
