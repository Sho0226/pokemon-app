import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({ jsxRuntime: "automatic" })],
  base: "/pokemon-app/",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
});
