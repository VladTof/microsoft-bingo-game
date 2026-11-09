# Bingo Mixer — Agent Guide

React 19 + Vite 8 + TypeScript + Tailwind CSS 4 SPA. Overview: [README.md](README.md). Lab guide: [workshop/GUIDE.md](workshop/GUIDE.md).

## Mandatory Checklist

Before reporting any change as done, confirm each passes:

- [ ] Lint: `npm run lint`
- [ ] Build: `npm run build`
- [ ] Test: `npm test`

Setup: `npm install`. Dev server: `npm run dev`. Tests use Vitest with jsdom and globals; setup is in [src/test/setup.ts](src/test/setup.ts).

## Architecture

- Pure game logic: [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts). Keep it free of React and browser APIs.
- State and persistence: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts), saved to `localStorage` under `bingo-game-state`.
- Types: [src/types/index.ts](src/types/index.ts). Questions: [src/data/questions.ts](src/data/questions.ts). Components: [src/components/](src/components/).

## Gotchas

- Persisted-shape change: bump `STORAGE_VERSION` and update `validateStoredData` in [useBingoGame.ts](src/hooks/useBingoGame.ts), or old saves are discarded.
- `'corners'` is in `BingoLine.type` but never produced and rejected by the validator. Update both if you add corner wins.
- `VITE_REPO_NAME` sets the Vite `base` to `/<repo>/game/` in CI. Don't hardcode absolute asset paths.
- [docs/](docs/) is the GitHub Pages landing site. Edit it only for landing-page tasks.
- The TDD stop hook runs `npm test`. Keep the suite green.

## Conventions

- Tailwind: [.github/instructions/tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md)
- Gradient Glass design: [.github/instructions/design-guide.instructions.md](.github/instructions/design-guide.instructions.md)
- `src/` TypeScript and React: [.github/instructions/typescript-src.instructions.md](.github/instructions/typescript-src.instructions.md)
- Workshop docs: [.github/instructions/workshop-docs.instructions.md](.github/instructions/workshop-docs.instructions.md)
- Agents, prompts, and skills live under `.github/` (see [.github/agents/](.github/agents/)). Add new ones there.
