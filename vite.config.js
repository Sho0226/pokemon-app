import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/pokemon-app/",
  resolve: {
    extensions: [".js", ".jsx"],
  },
});
