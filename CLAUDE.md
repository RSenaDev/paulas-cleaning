# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite, hot reload)
npm run build     # production build to dist/
npm run preview   # preview production build locally
```

No linting or test scripts are configured. Playwright is installed as a dev dependency but no test files exist yet.

## Architecture

This is a React 18 + Vite single-page app for a cleaning business. Routing is handled by React Router v6 with two pages: `/` (Home) and `/portfolio`.

**Layout shell** — `App.jsx` renders `<Navbar>` and `<Footer>` around all routes, so those components appear on every page.

**Home page** (`src/pages/Home.jsx`) composes five section components in order: `Hero → Services → WhyUs → PortfolioPreview → Contact`.

**Portfolio page** (`src/pages/Portfolio.jsx`) renders a filterable grid. The filter categories are hardcoded in the page file. It reads from `src/data/portfolio.js` and renders `PortfolioCard` components.

**Portfolio data** — `src/data/portfolio.js` exports a `portfolioItems` array. Each item is either a before/after pair (`beforeImage` + `afterImage`) or a single result photo (`image`). `PortfolioCard` handles both cases — if `beforeImage` and `afterImage` are both present, it renders toggle buttons; otherwise it shows the single `image`.

**`PortfolioPreview`** (used on Home) shows the first 3 items from `portfolioItems` via `.slice(0, 3)` and links to the full portfolio page.

**Styling** — all styles live in `src/index.css` (a single global stylesheet). Font Awesome icons and Google Fonts (Poppins) are loaded via CDN in `index.html`. There is no CSS framework or module system.

**Static assets** — photos are served from `public/photos/` and referenced by path strings in `src/data/portfolio.js`. New portfolio photos should be placed there.
