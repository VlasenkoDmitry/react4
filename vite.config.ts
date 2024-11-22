import path from "path";


import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
          alias: {
          "@": path.resolve(__dirname, "./src"),
          "@ui-kit":path.resolve(__dirname, "./src/ui-kit"),
          "@components":path.resolve(__dirname, "./src/components"),
          "@pages":path.resolve(__dirname, "./src/pages"),
          "@public":path.resolve(__dirname, "./public")
        },
      },

});

