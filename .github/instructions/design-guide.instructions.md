---
description: "Use when styling React components, Tailwind classes, or theme tokens for the Gradient Glass UI. Covers glass panels, dark gradient backdrop, square states, buttons, motion, and focus rings."
applyTo: "src/**/*.{tsx,css}"
---

# Gradient Glass Design Guide

Visual rules for the dark, frosted-glass UI. Keep new UI consistent with them.

## Surfaces and Color
- Use the `accent` and `accent-light` tokens from [src/index.css](src/index.css). Don't add brand colors or hardcoded hex values in components.
- Build panels with the `glass` utility. Don't hand-write the blur, border, and shadow combination.
- Headings use `text-white`. Secondary text uses `text-blue-100/80` to `text-blue-100/85`.
- Primary buttons use `bg-linear-to-r from-accent to-accent-light` with `shadow-lg shadow-blue-600/40`.

## Square States
- Unmarked: `bg-white/10 border-white/15` with hover and active steps.
- Marked: `bg-marked border-marked-border` plus the ✓ icon. Never signal state with color alone.
- Winning: amber tint with a glow, `shadow-[0_0_18px_rgb(251_191_36/0.45)]`.
- Free space: accent gradient, `disabled`.

## Motion and Focus
- Put entrance animations behind `motion-safe:`. The `pop-in` animation is defined in `@theme`.
- Every interactive element needs `focus-visible:outline-2 focus-visible:outline-sky-300`.

## Avoid
- Solid `bg-white` or `bg-gray-*` panels. They break the glass look.
- Light text on light translucent fills without a contrast check.
