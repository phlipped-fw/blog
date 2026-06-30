import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://n0t.space',
  base: '/blog',
  output: 'static',
  trailingSlash: 'always',
});
