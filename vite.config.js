import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/free-project-api-dashboard/",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@lucide": path.resolve(import.meta.dirname, "./node_modules/lucide"),
    },
  },
});
