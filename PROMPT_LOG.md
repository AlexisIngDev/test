# Prompt Log

Condensed record of prompts used to build this project.  
Intentionally short format: goal, prompt, and implementation decision.

## Session 1 - Assignment framing

`Goal`  
Convert the challenge statement into an implementation plan with realistic scope (4-6 hours).

`Prompt`  
`Translate the assignment and break it into a practical execution plan for a senior implementation in Next.js App Router.`

`Applied`  
- Scope fixed to 3 section types (`hero`, `feature-grid`, `pricing`)
- Explicit unknown type scenario (`slider`) reserved for tests

## Session 2 - App Router architecture

`Skill Used`  
`nextjs-app-router-patterns` (`.agents/skills/nextjs-app-router-patterns/SKILL.md`)

`Prompt`  
`Design a clean App Router structure for a CMS-driven page builder using Server Components by default.`

`Applied`  
- `src/app/layout.tsx` + `src/app/page.tsx` kept minimal
- Dynamic rendering delegated to `src/components/PageBuilder.tsx`

## Session 3 - CMS contract and typing

`Prompt`  
`Propose a TypeScript model for block-based CMS data with per-section props and safe fallback support.`

`Applied`  
- `src/types/page-builder.ts` with `BaseBlock<TType, TProps>`
- Union types for known blocks + permissive unknown block
- `src/data/page-data.json` aligned to typed shape

## Session 4 - Unknown component handling

`Skill Used`  
`next-best-practices` (`rsc-boundaries.md`, defensive rendering patterns)

`Prompt`  
`Implement a registry-based PageBuilder that never crashes on unsupported block types.`

`Applied`  
- Registry pattern (`hero`, `feature-grid`, `pricing`)
- Explicit fallback UI: `Unsupported component type: {block.type}`
- Render flow continues after unknown blocks

## Session 5 - UI pass with Tailwind

`Skill Used`  
`ui-ux-pro-max` (visual hierarchy, spacing, responsive behavior)

`Prompt`  
`Refactor legacy global section styles into Tailwind utility classes while preserving readability and CTA clarity.`

`Applied`  
- Section-level utilities in `Hero`, `FeatureGrid`, `Pricing`
- `globals.css` reduced to Tailwind import
- Consistent spacing/contrast for desktop + mobile

## Session 6 - Test strategy

`Prompt`  
`Generate a focused test suite for known components, unknown type fallback, rendering continuity, and empty state.`

`Applied`  
- `src/tests/PageBuilder.test.tsx` covers:
  - supported block rendering
  - unknown block fallback
  - continuation after invalid block
  - empty blocks behavior

## Session 7 - Dockerization

`Skill Used`  
`next-best-practices` (`self-hosting.md`)

`Prompt`  
`Create a production Docker setup for Next.js standalone output with compose support.`

`Applied`  
- Multi-stage Dockerfile
- `.next/standalone` + `.next/static` runtime copy
- `docker-compose.yml` with port `3000`

## Validation Notes

- Build and tests validated during implementation cycle.
- Final output was manually adjusted to match project constraints and avoid overengineering.
