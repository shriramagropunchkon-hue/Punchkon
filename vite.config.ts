import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/punchkon.github.io/",
  plugins: [react()],
});
