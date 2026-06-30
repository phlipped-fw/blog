# n0t.space blog

Astro blog mounted at `n0t.space/blog/`. Separate repo from the main site so post cadence doesn't pollute the site repo's git history.

## Develop

```bash
npm install
npm run dev   # http://localhost:4323/blog/
```

## Deploy

Builds with `base: '/blog'`, so the `dist/` output is mounted at `n0t.space/blog/` via reverse proxy / rewrite at the edge (Cloudflare Pages, Vercel, Netlify).

## Authoring

Posts live in `src/content/posts/`. Frontmatter:

```yaml
title: "..."
description: "..."
pubDate: 2026-07-01
series: flipper-diaries   # or attack-defense, misc
tags: [flipper, sub-ghz]
draft: false
```
