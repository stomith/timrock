# TimRock Automotive — Prototype Site

Single-page marketing site for TimRock Automotive (Concord, CA). Currently a static prototype served directly from `index.html`.

## Stack

- Static HTML + CSS in `index.html` (all styles inline in a `<style>` block).
- React 18 via UMD `<script>` tags from unpkg.
- JSX compiled in the browser by `@babel/standalone` (no build step).
- No package.json, no bundler, no tests.

## File layout

- `index.html` — document shell, all CSS, React/Babel script tags, theme defaults.
- `app.jsx` — `App`, `Nav`, `MobileMenu`, `CallBar`, theme application, mounts to `#root`.
- `sections.jsx` — page sections (`Hero`, `TrustStrip`, `Services`, `About`, `Reviews`, `Booking`, `Location`, `Footer`).
- `components.jsx` — shared bits (icons, shop phone constants, small primitives).
- `tweaks-panel.jsx` — live theme/density/accent tweaks panel and `useTweaks` hook.
- `assets/` — logo and other static images.
- `uploads/` — user-supplied images.

JSX files are loaded as `<script type="text/babel" src="...">` from `index.html`. They share a single global scope — `useState`/`useEffect` and helpers like `SHOP_PHONE_TEL` are referenced without imports.

## Running locally

Serve the directory with any static server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` via `file://` will fail because the JSX files are loaded as separate scripts.

## Conventions

- All CSS lives in the `<style>` block in `index.html`. Use the existing CSS custom properties (`--ink`, `--bg`, `--accent`, `--hair`, `--font-display`, etc.) rather than hard-coded colors or fonts.
- Theme is driven by `data-theme` and `data-density` attributes on `<html>`, set by `applyTheme` in `app.jsx`.
- The Tweaks panel persists user changes to `window.__TWEAKS_DEFAULTS` in `index.html` between the `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/` markers — leave those markers intact.
- Prototype banner sits above the sticky nav (`.proto-banner` in `index.html`).
