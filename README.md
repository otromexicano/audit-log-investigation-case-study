# Audit Log Investigation

This repository contains the product-design documentation and a functional Phase 11B browser prototype for the approved Audit Log Investigation experience.

## Functional prototype

The implementation in `prototype/` uses React, TypeScript, Vite, semantic CSS custom properties, deterministic mock investigation data, and Vitest. It demonstrates the case-centered critical flow from Overview through filtering, event selection, reconstruction, evidence preservation, package readiness, and simulated export.

```text
cd prototype
npm install
npm run dev
```

Quality commands:

```text
npm run typecheck
npm run build
npm test
npm run lint
```

See `docs/FUNCTIONAL_PROTOTYPE.md` for architecture, Figma relationship, responsive and accessibility behavior, tests, intentional limitations, and deferred usability validation.
