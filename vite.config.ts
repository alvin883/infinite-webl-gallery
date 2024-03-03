import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3199,
  },
  preview: {
    port: 3199,
  },
  plugins: [glsl()],
});
