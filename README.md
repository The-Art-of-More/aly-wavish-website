# Aly Wavish — Flagship Site

Next.js rebuild of the Aly Wavish site (resilience coaching, speaking, and the re-solve Method), ported from the approved static mockup.

## Stack

- Next.js 15 App Router, TypeScript strict
- Plain CSS (`app/globals.css`) ported 1:1 from the approved mockup — no utility framework
- Fonts: Playfair Display + Inter via `next/font/google`

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Static export (`output: "export"`) — no server, no API routes. Builds
to `out/`.

## Deploy

Cloudflare Pages, connected directly to this repo — no CLI, no secrets.
See [`DEPLOY.md`](DEPLOY.md).
