# blog.n0t.space

Astro blog served at `blog.n0t.space`. Separate repo from the main site so post cadence doesn't pollute the site repo's git history.

## Develop

```bash
npm install
npm run dev   # http://localhost:4323/
```

## Deploy

Cloudflare Pages, custom domain `blog.n0t.space`. Build command `npm run build`, output `dist`.

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
