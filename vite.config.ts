import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui-kit":path.resolve(__dirname, "./src/ui-kit"),
      "@components":path.resolve(__dirname, "./src/components"),
      "@pages":path.resolve(__dirname, "./src/pages")
    },
  },
});