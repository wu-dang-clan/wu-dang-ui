import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

export default defineConfig({
  plugins: [react(), url(), svgr()],
});
