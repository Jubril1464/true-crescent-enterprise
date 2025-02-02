import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@provider": path.resolve(__dirname, "./src/provider"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@model": path.resolve(__dirname, "./src/model"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
