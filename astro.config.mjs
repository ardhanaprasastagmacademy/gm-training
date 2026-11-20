import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://maganginformatika.web.id",
  trailingSlash: "always",
  integrations: [
    sitemap(),
    {
      name: "copy-sitemap",
      hooks: {
        "astro:build:done": async ({ dir, logger }) => {
          const destDir = fileURLToPath(dir);
          const indexFile = path.join(destDir, "sitemap-index.xml");
          const sitemapFile = path.join(destDir, "sitemap.xml");
          const sitemapIndexUnderscore = path.join(destDir, "sitemap_index.xml");
          try {
            await fs.copyFile(indexFile, sitemapFile);
            await fs.copyFile(indexFile, sitemapIndexUnderscore);
            logger.info("`sitemap.xml` and `sitemap_index.xml` created successfully from `sitemap-index.xml`.");
          } catch (err) {
            logger.error(`Failed to copy sitemap: ${err.message}`);
          }
        },
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

