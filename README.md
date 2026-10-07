# Raj Nishad — Portfolio

Personal site built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Edit content

All text lives in [`src/content/profile.ts`](src/content/profile.ts): experience, projects, skills, links and figures. The components in `src/components/` only handle layout.

The résumé buttons link to a Google Drive file, set by `resume` in `profile.ts`. To update the résumé, replace the file in Drive (Manage versions → Upload new version) so the link stays the same.

## Theme

Colors are CSS variables at the top of [`src/app/globals.css`](src/app/globals.css), with a dark variant that follows the visitor's system setting. Fonts are Instrument Serif (headings), Geist (body) and Geist Mono (labels), loaded through `next/font` in `src/app/layout.tsx`.

## Deploy

```bash
npm run build
npx vercel --prod
```
