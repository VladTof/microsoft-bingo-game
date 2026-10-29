---
description: Conventions for TypeScript and React source in src/ (game logic, hooks, components, tests).
applyTo: "src/**/*.{ts,tsx}"
---

# Source Conventions

## Logic and State
- Keep `src/utils/` free of React and browser APIs (no `window`, `localStorage`, or `document`).
- When the persisted shape in `useBingoGame.ts` changes, bump `STORAGE_VERSION` and update `validateStoredData` in the same change.

## React Hooks
- Guard `window` and `localStorage` access with a `typeof window === 'undefined'` check, as `loadGameState` and `saveGameState` do.
- Avoid synchronous `setState` in effects. Schedule updates with `queueMicrotask`, as the bingo check in `useBingoGame.ts` does.

## TypeScript
- Do not use `any`. Type unknown input as `unknown` and narrow it, as `validateStoredData` does.
- Import types with `import type`.

## Tests
- Colocate tests next to the source file as `*.test.ts` or `*.test.tsx`, for example `src/utils/bingoLogic.test.ts`.
- Run `npm test`. Globals and jest-dom matchers are set up in `src/test/setup.ts`.
