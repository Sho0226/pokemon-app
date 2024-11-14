import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  build: {
    // TypeScriptのエラーを無視してビルドを続行
    typescript: {
      noEmit: true,
      ignoreBuildErrors: true,
    },
  },
});
