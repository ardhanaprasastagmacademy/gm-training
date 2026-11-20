import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://maganginformatika.web.id",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
