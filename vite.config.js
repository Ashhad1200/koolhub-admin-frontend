import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      routes: "/src/routes",
      util: "/src/util",
      "@mb": "/src/@mb",
      appServices: "/src/appServices",
    },
  },
});
