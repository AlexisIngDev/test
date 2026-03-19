# Demo Guide

Short script for recording the final submission video (3-5 minutes).

## 1. Open the project

Quickly show:
- `src/data/page-data.json`
- `src/components/PageBuilder.tsx`
- `src/tests/PageBuilder.test.tsx`
- `PROMPT_LOG.md`

Suggested line:
`This project renders CMS-style blocks dynamically and handles unsupported block types without crashing.`

## 2. Run the app

```bash
npm run dev
```

Open `http://localhost:3000` and show:
- Hero section
- Feature grid
- Pricing section

## 3. Show dynamic rendering logic

In `PageBuilder`, explain:
- component registry
- fallback for unsupported types

Optional quick proof:
- temporarily change one block to `type: "slider"` in JSON
- reload and show fallback rendering

## 4. Run tests

```bash
npm run test
```

Mention coverage includes:
- standard rendering
- unknown component type
- continuity after invalid block

## 5. Run Docker

```bash
docker compose up --build
```

Open `http://localhost:3000` again to confirm container runtime.

## 6. Close with process evidence

Briefly show:
- `PROMPT_LOG.md`
- `ENGINEERING_NOTES.md`

Suggested line:
`AI was used to accelerate planning and scaffolding, then outputs were manually adapted and validated.`
