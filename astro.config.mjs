import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";


export default defineConfig({
  site: "https://mysite.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],

  image: {
    domains: ["images.microcms-assets.io"],
  },
  
  prefetch: true,
  vite: {
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});
