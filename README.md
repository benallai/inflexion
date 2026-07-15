# Inflexion (React SPA)

Bilingual (EN/FR) change management learning and consulting platform. Vite + React 19 + TypeScript + React Router.

## Commands
- `npm install` then `npm run dev` for local development
- `npm run build` builds the OWNER edition (includes Ask + Playbook) into `dist/`
- `npm run build:public` builds the PUBLIC edition: Ask and Playbook pages are physically excluded from the bundle and the output is scanned for leaks

## Cloudflare Pages
Build command: `npm run build:public` (public site) or `npm run build` (owner build, protect it with Cloudflare Access).
Output directory: `dist`. The `public/_redirects` file (`/* /index.html 200`) makes deep links like `/frameworks/kotter` resolve in an SPA.

## Content
All platform content lives in `src/lib/content/` as data modules, extracted verbatim from the reference vanilla build. Edit content there; components render it.
