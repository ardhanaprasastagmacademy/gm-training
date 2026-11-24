import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://maganginformatika.web.id",
  trailingSlash: "always",
  redirects: {
    "/program/pariwisata/": "/program/",
    "/blog/logbook-pkl/": "/blog/contoh-jurnal-harian-pkl-smk/",
    "/sitemap-index.xml": "/sitemap.xml",
    "/sitemap_index.xml": "/sitemap.xml",
    "/sitemap-0.xml": "/sitemap.xml",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
