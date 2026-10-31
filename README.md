# Frontend Component Library

[![CI](https://github.com/agustiininicabral/frontend-component-library/actions/workflows/ci.yml/badge.svg)](https://github.com/agustiininicabral/frontend-component-library/actions/workflows/ci.yml)
[![CodeQL](https://github.com/agustiininicabral/frontend-component-library/actions/workflows/codeql.yml/badge.svg)](https://github.com/agustiininicabral/frontend-component-library/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A focused React component library demonstrating component API design, accessibility fundamentals, automated testing, documentation and CI quality gates.

## Components

| Component | Purpose | Features |
| --- | --- | --- |
| Button | Actions | Variants, native attributes, disabled and loading states |
| TextField | Forms | Labels, hints, validation errors and accessible descriptions |
| Card | Layout | Semantic section, optional heading and description |
| Badge | Feedback | Neutral, success, warning, danger and info tones |

Public components and types are exported from `src/index.ts`.

## Stack

React 19 · TypeScript strict · Vite · Vitest · Testing Library · Playwright · ESLint · GitHub Actions · CodeQL · Dependabot.

## Requirements and setup

Node.js 22+ and npm 10+.

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run test
npm run test:coverage
npm run build
npm run test:e2e
```

## Accessibility

Components provide associated labels, programmatic validation descriptions, semantic regions, keyboard-visible focus, disabled semantics and reduced-motion support. This is not a blanket WCAG conformance claim: consuming applications must still be tested with keyboard navigation and assistive technologies.

## Design decisions

- Keep the initial component set intentionally small and reusable.
- Preserve native HTML attributes and browser behavior.
- Keep React and React DOM as peer dependencies.
- Separate the showcase entry point from the library entry point.
- Enforce coverage thresholds and run browser smoke checks in CI.

## Versioning and license

Initial version: `1.0.0`. Follow semantic versioning for future public API changes. MIT © 2026 Agustín Cabral.
