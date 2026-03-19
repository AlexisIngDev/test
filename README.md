# Dynamic Page Renderer

A CMS-driven page renderer built with Next.js App Router and TypeScript.

## Overview

This project simulates a headless CMS response with a local JSON file.  
`PageBuilder` reads block arrays and renders each section dynamically by `type`.

The implementation includes:
- fallback for unknown component types (no hard crash)
- unit tests focused on resilience
- Docker runtime for local review
- implementation notes and prompt log

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vitest
- React Testing Library
- Docker

## Project Structure

```text
src/app
src/components
src/data
src/tests
src/types
Dockerfile
docker-compose.yml
```

## Development

```bash
npm run dev
```

## Tests

```bash
npm run test
```

## Docker

```bash
docker compose up --build
```

## Project Notes

- [PROMPT_LOG.md](./PROMPT_LOG.md)
- [BITACORA_TECNICA.md](./BITACORA_TECNICA.md)
- [GUIA_DEMO.md](./GUIA_DEMO.md)
